import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
// import { isEmpty } from "lodash";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
// import { CSVLink } from "react-csv";
import './Donors.css'
const DataTable = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editRowKey, setEditRowKey] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});
  const [form] = Form.useForm();
  const [searchText, setSearchText] = useState("");
  const [searchColText, setSearchColText] = useState("");
  const [searchedCol, setSearchedCol] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [showFilter, setShowFilter] = useState(true);
  let [filteredData] = useState();
  const type = "DraggableBodyRow";
  const tableRef = useRef();
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    setLoading(true);
    const response = await axios.get("https://serene-journey-13143.herokuapp.com/apis/Donor/");
    setGridData(response.data);
    setLoading(false);
  };
  const DraggableBodyRow = ({
    index,
    moveRow,
    className,
    style,
    ...restProps
  }) => {
    const ref = useRef();
    const [{ isOver, dropClassName }, drop] = useDrop({
      accept: type,
      collect: (monitor) => {
        const { index: dragIndex } = monitor.getItem() || {};
        if (dragIndex === index) {
          return {};
        }
        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < index ? "drop-down-downward" : "drop-over-upward",
        };
      },
      drop: (item) => {
        moveRow(item.index, index);
      },
    });
    const [, drag] = useDrag({
      type,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    drop(drag(ref));
    return (
      <tr
        ref={ref}
        className={`${className}${isOver ? dropClassName : ""}`}
        style={{ cursor: "pointer", ...style }}
        {...restProps}
      />
    );
  };
  const dataWithAge = gridData.map((item) => ({
    ...item,
    // age: Math.floor(Math.random() * 6) + 20,
  }));
  const modifiedData = dataWithAge.map(({ body, ...item }) => ({
    ...item,
    key: item.id,
    // info: `My name is ${item.email.split("@")[0]} and i am ${
    //   item.age
    // } year old`,
    // message: isEmpty(body) ? item.message : body,
  }));
  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = modifiedData[dragIndex];
      setGridData(
        update(modifiedData, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        })
      );
    },
    [modifiedData]
  );
  console.log("modifiedData", modifiedData);
  const handleDelete = (value) => {
    const dataSource = [...modifiedData];
    const filteredData = dataSource.filter((item) => item.id !== value.id);
    setGridData(filteredData);
  };
  const isEditing = (record) => {
    return record.key === editRowKey;
  };
  const cancel = () => {
    setEditRowKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...modifiedData];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setGridData(newData);
        setEditRowKey("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const edit = (record) => {
    form.setFieldsValue({
      address: "",
      phone_number: "",
      ...record,
    });
    setEditRowKey(record.key);
  };
  const handleChange = () => {
    // const { order, field } = sorter;
    // setFilteredInfo(filters);
    // setSortedInfo({ columnKey: field, order });
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Filter ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
          style={{ width: 168, marginBottom: 10, display: "flex" , marginLeft:270}}
        />
        <Space style={{ marginTop: 14 }}>
          <Button
            type="primary"
            onClick={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 80 }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890FF" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: (text) =>
      searchedCol === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#FFC069", padding: 0 }}
          searchWords={[searchColText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const handleSearchCol = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setShowFilter(false);
    setSearchColText(selectedKeys[0]);
    setSearchedCol(dataIndex);
  };
  // const handleResetCol = (clearFilters) => {
  //   clearFilters();
  //   setSearchColText("");
  //   setShowFilter(true);
  // };
  const filterObj = {
    // filters: [
    //   { text: "20", value: "20" },
    //   { text: "21", value: "21" },
    //   { text: "22", value: "22" },
    //   { text: "23", value: "23" },
    //   { text: "24", value: "24" },
    //   { text: "25", value: "25" },
    // ],
    filteredValue: filteredInfo.age || null,
  };
  const showFilterAge = showFilter ? filterObj : null;
  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      align: "left",
      editable: false,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      align: "left",
      editable: false,
    },
    {
      title: "Location",
      dataIndex: "address",
      align: "left",
      editable: true,
      ...getColumnSearchProps("location"),
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "left",
      editable: false,
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      align: "left",
      editable: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      align: "center",
      editable: false,
      ...showFilterAge,
    },
    {
      title: "Blood Type",
      dataIndex: "blood_type",
      align: "center",
      editable: false,
      ...getColumnSearchProps("blood_type"),
    },
    {
      title: "Last Time Donated",
      dataIndex: "last_time_donated",
      align: "left",
      editable: false,
      ...getColumnSearchProps("last_time_donated"),
    },
    {
      title: "Action",
      dataIndex:"action",
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return modifiedData.length >= 1 ? (
          <Space>

            {editable ? (
              <span>
                <div className="savecancelbuton">
                <Space size="middle">
                  <Button
                    onClick={() => save(record.key)}
                    type="primary"
                    style={{ marginRight: 0 }}
                  >
                    Save
                  </Button>
                  <Popconfirm title="Are sure to cancel ?" onConfirm={cancel}>
                    <Button>Cancel</Button>
                  </Popconfirm>
                </Space>
                </div>
              </span>
            ) : (
              <div className="editbuton">
              <Button onClick={() => edit(record)} type="primary">
                Edit
              </Button>
              </div>
            )}
          </Space>
        ) : null;
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    record,
    children,
    ...restProps
  }) => {
    const input = <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please input some value in ${title} field`,
              },
            ]}
          >
            {input}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      loadData();
    }
  };
  const globalSearch = () => {
    filteredData = modifiedData.filter((value) => {
      return (
        value.address.toLowerCase().includes(searchText.toLowerCase()) ||
        value.blood_type.toLowerCase().includes(searchText.toLowerCase()) ||
        value.last_time_donated.toLowerCase().includes(searchText.toLowerCase())
      )
    });
    setGridData(filteredData);
  };
  return (
    <div>
      <Space style={{ marginTop: 50, width:20, height:40 }}>
        <Input
          placeholder="Filter donors..."
          onChange={handleInputChange}
          type="text"
          // allowClear
          value={searchText}
        />
        <div className="globalsearchbutton">
        <Button onClick={globalSearch} type="primary">
          Search
        </Button>
        </div>
      </Space>
      <div className="page">
      <Form form={form} component={false}>
        <DndProvider backend={HTML5Backend}>
          <Table
            ref={tableRef}
            columns={mergedColumns}
            components={{
              body: {
                cell: EditableCell,
                row: DraggableBodyRow,
              },
            }}
            onRow={(record, index) => ({
              index,
              moveRow,
            })}
            dataSource={
              filteredData && filteredData.length ? filteredData : modifiedData
            }
          
            bordered
            loading={loading}
            onChange={handleChange}
            pagination={{ position: ["bottomCenter"] }}
          />
        </DndProvider>
      </Form>
      </div>
    </div>
  );
};
export default DataTable;





// import React, { useState, useEffect, useRef, useCallback } from "react";
// import axios from "axios";
// import { Table, Popconfirm, Button, Space, Form, Input } from "antd";
// // import { isEmpty } from "lodash";
// import { SearchOutlined } from "@ant-design/icons";
// import Highlighter from "react-highlight-words";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import update from "immutability-helper";
// import './Donors.css'

// const DataTable = () => {
//   const [gridData, setGridData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [editRowKey, setEditRowKey] = useState("");
//   const [sortedInfo] = useState({});
//   const [form] = Form.useForm();
//   const [searchText, setSearchText] = useState("");
//   const [searchColText, setSearchColText] = useState("");
//   const [searchedCol, setSearchedCol] = useState("");
//   const [filteredInfo] = useState({});
//   const [showFilter, setShowFilter] = useState(true);
//   let [filteredData] = useState();
//   const type = "DraggableBodyRow";
//   const tableRef = useRef();
//   useEffect(() => {
//     loadData();
//   }, []);
//   const loadData = async () => {
//     setLoading(true);
//     const response = await axios.get("https://serene-journey-13143.herokuapp.com/apis/Donor/");
//     setGridData(response.data);
//     setLoading(false);
//   };
//   const dataWithAge = gridData.map((item) => ({
//     ...item,
//   }));
//   const modifiedData = dataWithAge.map(({ body, ...item }) => ({
//     ...item,
//     key: item.id,
//   }));
//   console.log("modifiedData", modifiedData);
//   const handleDelete = (value) => {
//     const dataSource = [...modifiedData];
//     const filteredData = dataSource.filter((item) => item.id !== value.id);
//     setGridData(filteredData);
//   };
//   const isEditing = (record) => {
//     return record.key === editRowKey;
//   };
//   const cancel = () => {
//     setEditRowKey("");
//   };
//   const save = async (key) => {
//     try {
//       const row = await form.validateFields();
//       const newData = [...modifiedData];
//       const index = newData.findIndex((item) => key === item.key);
//       if (index > 1) {
//         const item = newData[index];
//         newData.splice(index, 1, { ...item, ...row });
//         setGridData(newData);
//         setEditRowKey("newData");
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
//   const edit = (record) => {
//     form.setFieldsValue({
//       first_name: "",
//       address: "",
//       phone_number: "",
//       ...record,
//     });
//     setEditRowKey(record.key);
//   };
//   const handleChange = () => {
//     // const { order, field } = sorter;
//     // setFilteredInfo(filters);
//     // setSortedInfo({ columnKey: field, order });
//   };
//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({
//       setSelectedKeys,
//       selectedKeys,
//       confirm,
//     }) => (
//       <div style={{ padding: 0 }}>
//         <Input
//           placeholder={`Filter ${dataIndex}`}
//           value={selectedKeys[1]}
//           onChange={(e) =>
//             setSelectedKeys(e.target.value ? [e.target.value] : [])
//           }
//           onPressEnter={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
//           // style={{ width: 220, marginLeft: 300,marginBottom: 2}}
//         />
//         <Space >
//           <Button
//             type="primary"
//             onClick={() => handleSearchCol(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{ width: 40, backgroundColor: '#1890FF', marginBottom: 1800, marginLeft: 400 }}
//             >
//             Search
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered) => (
//       <SearchOutlined style={{ color: filtered ? "#1890FF" : undefined }} />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex]
//         ? record[dataIndex]
//             .toString()
//             .toLowerCase()
//             .includes(value.toLowerCase())
//         : "",
//     render: (text) =>
//       searchedCol === dataIndex ? (
//         <Highlighter
//           highlightStyle={{ backgroundColor: "#D4838D", padding: 4 }}
//           searchWords={[searchColText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ""}
//         />
//       ) : (
//         text
//       ),
//   });
//   const handleSearchCol = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setShowFilter(false);
//     setSearchColText(selectedKeys[0]);
//     setSearchedCol(dataIndex);
//   };
//   const filterObj = {
//     filters: [
//       { text: "20", value: "20" },
//       { text: "21", value: "21" },
//       { text: "22", value: "22" },
//       { text: "23", value: "23" },
//       { text: "24", value: "24" },
//       { text: "25", value: "25" },
//     ],
//     filteredValue: filteredInfo.age || null,
//     onFilter: (value, record) => String(record.age).includes(value),
//   };
//   const showFilterAge = showFilter ? filterObj : null;
//   const columns = [
//     {
//       title: "First Name",
//       dataIndex: "first_name",
//       align: "left",
//       editable: false,
//       // sortOrder: sortedInfo.columnKey === "first_name" ,
//     },
//     {
//       title: "Last Name",
//       dataIndex: "last_name",
//       align: "left",
//       editable: true,
//       sortOrder: sortedInfo.columnKey === "last_name",
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//       align: "left",
//       editable: false,
//       ...getColumnSearchProps("address"),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       align: "left",
//       editable: true,
//     },
//     {
//       title: "Phone Number",
//       dataIndex: "phone_number",
//       align: "left",
//       editable: true,
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       align: "left",
//       editable: false,
//       ...showFilterAge,
//     },
//     {
//       title: "Blood Type",
//       dataIndex: "blood_type",
//       align: "center",
//       editable: true,
//       ...getColumnSearchProps("blood_type"),
//     },
//     {
//       title: "Last Time Donated",
//       dataIndex: "last_time_donated",
//       align: "left",
//       editable: true,
//       ...getColumnSearchProps("last_time_donated"),
//     },
//     {
//       title: "Action",
//       dataIndex:"action",
//       align: "center",
//       render: (_, record) => {
//         const editable = isEditing(record);
//         return modifiedData.length >= 0 ? (
//     //  powerfull
//     <div class="editall">
//           <Space >
//             <Popconfirm
//               title="Are you sure want to delete this donor?"
//               onConfirm={() => handleDelete(record)}
//             >
//               {/* <Button style={{ backgroundColor:"rgba(240, 182, 182, 0.64)", display: "flex", marginLeft:2}} disabled={editable}>
//                 Delete
//               </Button> */}
//             </Popconfirm>
//             {editable ? (
//               <span>
//                 <div className="editbuton">
//                 <Space >
                  
//                   <Button
//                     onClick={() => save(record.key)}
//                     type="primary"
//                     style={{ marginRight: 6 }}
//                   >
//                     Save
//                   </Button>
//                   <Popconfirm  title="Are sure to cancel ?" onConfirm={cancel}>
//                     <Button>Cancel</Button>
//                   </Popconfirm>
//                 </Space>
//                 </div>
//               </span>
              
//             ): (
//             <div className="editbuton">
//               <Button onClick={() => edit(record)} type="primary">
//                 edt
//               </Button>
//             </div>
//             )}
//           </Space>
//           </div>
//         ) : null;
//       },
//     },
//   ];
//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });
  


//   const handleInputChange = (e) => {
//     setSearchText(e.target.value);
//     if (e.target.value === "") {
//       loadData();
//     }
//   };
//   const globalSearch = () => {
//     filteredData = modifiedData.filter((value) => {
//       return (
//         value.address.toLowerCase().includes(searchText.toLowerCase()) ||
//         value.blood_type.toLowerCase().includes(searchText.toLowerCase()) ||
//         value.last_time_donated.toLowerCase().includes(searchText.toLowerCase())
//       )
//     });
//     setGridData(filteredData);
//   };
//   return (
//     <div>
//       <Space className="name">
//         <Input
//           placeholder="Filter donors..."
//           onChange={handleInputChange}
//           allowClear
//           type="text"
//           value={searchText}
//         />
//          <Button onClick={globalSearch} type="primary">
//           Search
//         </Button> 
//       </Space>
//       <div className=" page">
//       <Form form={form} component={false}>
//         <DndProvider backend={HTML5Backend}>
//           <Table
//             ref={tableRef}
//             columns={mergedColumns}
//             dataSource={
//               filteredData && filteredData.length ? filteredData : modifiedData
//             }
//             bordered
//             loading={loading}
//             onChange={handleChange}
//             pagination={{ position: ["bottomCenter"] }}
//           />
//         </DndProvider>
//       </Form>
//       </div>
//     </div>
//   );
// };
// export default DataTable;