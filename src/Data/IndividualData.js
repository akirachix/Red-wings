import React from 'react'
export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Name}</th>
            <th>{individualExcelData.Gender}</th>
            <th>{individualExcelData.Location}</th>
            <th>{individualExcelData.Blood_group}</th>
            <th>{individualExcelData.Age}</th>
            <th>{individualExcelData.last_time_donated}</th>
            <th>{individualExcelData.Contact}</th>
        </>
    )
}