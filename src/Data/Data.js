// import React from "react";
// import {
//     UilEstate,
//     UilClipboardAlt,
//     UilUsersAlt,
//     UilPackage,UilMoneyWithdrawal,UilUsdSquare


//   } from "@iconscout/react-unicons";

export const cardsData = [
    {
      title: "Blood Requests",
      color: {
        backGround: "linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)",
        boxShadow: "0px 10px 20px 0px #E0C6F5",
      },
      barValue: 54.3,
      value: "A+",
     
      series: [
        {
          name: "request",
          data: [2,1],
        },
      ],
    },
    {
      title: "Blood donors",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 73,
      value: "A-",
      
      series: [
        {
          name: "Donors",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
  ];




































// import { IndividualData } from "./IndividualData";

// import {
//   UilEstate,
//   UilClipboardAlt,
//   UilUsersAlt,
//   UilPackage,
  
// } from "@iconscout/react-unicons";

// import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";


// export const SidebarData = [
//   {
//     icon: UilEstate,
//     heading: "Dashboard", 
//     path:"/"
//   },

  
//   {
//     icon: UilClipboardAlt,
//     heading: "Donors",
//     path:"/donors"
//   },
//   {
//     icon: UilUsersAlt,
//     heading: "Blood requests",
//     path:"/request"
//   },
  
// ];

// export const cardsData = [
//   {
//     title: "Blood Requests",
//     color: {
//       backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//       boxShadow: "0px 10px 20px 0px #e0c6f5",
//     },
//     barValue: 54.3,
//     value: "A+",
//     png: UilUsdSquare,
//     series: [
//       {
//         name: "request",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//   },
//   {
//     title: "Blood donors",
//     color: {
//       backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//       boxShadow: "0px 10px 20px 0px #FDC0C7",
//     },
//     barValue: 73,
//     value: "A-",
//     png: UilMoneyWithdrawal,
//     series: [
//       {
//         name: "Donors",
//         data: [10, 100, 50, 70, 80, 30, 40],
//       },
//     ],
//   },

// ];


// export const Data = ({excelData}) => {
//   return excelData.map((individualExcelData)=>(
//       <tr key={individualExcelData.Id}>
//           <IndividualData individualExcelData={individualExcelData}/>
//       </tr>
//   ))
// }



