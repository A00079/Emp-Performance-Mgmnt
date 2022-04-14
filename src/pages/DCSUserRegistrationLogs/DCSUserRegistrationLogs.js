import React, { useEffect, useState } from 'react'
import axios from 'axios';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

function DCSUserRegistrationLogs() {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const [dataDCSData, setDataDCSData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://www.dcsinstitute.in/api/v1/details/getRegistrations')
            .then((res) => {
                setDataDCSData(res.data.result);
            })
            .catch((err) => {
                console.log('Err', err);
            });
    }

    const downloadFile = () => {
        const ws = XLSX.utils.json_to_sheet(dataDCSData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, 'User Registration Details' + fileExtension);
    }
    
    return (
        <div className='p-5'>
            <div className='flex flex-row justify-end items-end'>
                <button onClick={() => downloadFile()} className='rounded-md mb-3 px-2 py-2 bg-indigo-600 text-white text-sm font-bold'>Download File</button>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            NAME OF STUDENT
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            MOBILE NO
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            ADDRESS
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            DATE OF BIRTH
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            QUALIFICATION
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            ADDITIONAL QUALIFICATION
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            REFRENCE
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            ZIPCODE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {
                                        dataDCSData.map((el, index) => {
                                            return (
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className="flex flex-col items-start">
                                                            <div>{el.name_of_student}</div>
                                                            <div>{el.email}</div>
                                                            <div>Age :{el.age}</div>
                                                            <div>City:{el.city}</div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{el.mobile_no}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{el.address}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{new Date(el.dob ? el.dob : "N/A").toLocaleDateString()}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{el.qualification}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{el.additional_qualification}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{el.refrence}</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{el.zipcode}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DCSUserRegistrationLogs