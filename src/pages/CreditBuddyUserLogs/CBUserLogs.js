import React, { useEffect, useState } from 'react'
import axios from 'axios';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

function CBUserLogs() {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const [dataCBData, setDataCBData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://credit.candidleads.com/api/v1/details/getDetails')
            .then((res) => {
                setDataCBData(res.data.result);
            })
            .catch((err) => {
                console.log('Err', err);
            });
    }

    const downloadFile = () => {
        const ws = XLSX.utils.json_to_sheet(dataCBData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, 'User Details' + fileExtension);
    }
    return (
        <div className='p-5'>
            <div className='flex flex-row justify-end items-end'>
                <button onClick={() => downloadFile()} className='rounded-md mb-3 px-2 py-2 bg-indigo-600 text-white text-sm font-bold'>Download File</button>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden ">
                            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead class="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            NAME
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            GENDER
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            CONTACT
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            BIRTHDATE
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            AVERAGE ANNUAL INCOME
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            DETAIL TYPE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {
                                        dataCBData.map((el, index) => {
                                            return (
                                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className='flex flex-col justify-start items-start'>
                                                            <div>{!!el.firstName ? el.firstName : "N/A " + el.lastName}</div>
                                                            <div className='text-blue-600 font-bold'>{el.email}</div>
                                                        </div>
                                                    </td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{!!el.gender ? el.gender : "N/A"}</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{!!el.contact ? el.contact : "N/A"}</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{new Date(el.birthDate ? el.birthDate : "N/A").toLocaleDateString()}</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.averageAnnualIncome ? el.averageAnnualIncome : "N/A"}</td>
                                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.detailType ? el.detailType : "N/A"}</td>
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

export default CBUserLogs