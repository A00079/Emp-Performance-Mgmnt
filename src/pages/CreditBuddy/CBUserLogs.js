import React, { useEffect, useState } from 'react'
import axios from 'axios';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import firebase from '../../utils/firebase.js';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function CBUserLogs() {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const [campaignsData, setCampaignData] = useState([]);
    const [selectedCampaign, setSelectedCampaign] = useState('user_form_credit_card');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (campaign) => {
        firebase.child(campaign ? campaign : selectedCampaign).on('value', snapshot => {
            if (snapshot.val() != null) {
                let fetchedData = [];
                Object.keys(snapshot.val()).map((el, index) => {
                    fetchedData.push(snapshot.val()[el]);
                });
                setCampaignData(fetchedData);
            } else {
                setCampaignData([]);
            }
        });
    }

    const handleCampaignInput = (e) => {
        setSelectedCampaign(e.target.value);
        fetchData(e.target.value);
    }

    const downloadFile = () => {
        const ws = XLSX.utils.json_to_sheet(campaignsData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, 'User Details' + fileExtension);
    }
    return (
        <div className='p-5'>
            <div className='flex flex-row justify-end space-x-5 items-end'>
                <div className='space-x-5'>
                    <button onClick={() => downloadFile()} className='rounded-md mb-3 px-2 py-2 bg-indigo-600 text-white text-sm font-bold'>Download File</button>
                    <FormControl variant="outlined" className='w-64 text-xs h-5' size="small">
                        <InputLabel id="demo-simple-select-outlined-label">Campaign Type</InputLabel>
                        <Select
                            name='campaigntype'
                            className='w-full text-xs'
                            labelId="campaigntype"
                            id="campaigntype"
                            value={selectedCampaign}
                            onChange={(e) => handleCampaignInput(e)}
                            label="Campaign Type"
                        >
                            <MenuItem value={'user_form_credit_card'}>Credit Card</MenuItem>
                            <MenuItem value={'user_form_home_loan'}>Home Loan</MenuItem>
                            <MenuItem value={'user_form_personal_loan'}>Personal Loan</MenuItem>
                            <MenuItem value={'user_form_demat_account'}>Demat Account</MenuItem>
                            <MenuItem value={'user_form_saving_account'}>Saving Account</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            NAME
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            GENDER
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            CONTACT
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            BIRTHDATE
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            AVERAGE ANNUAL INCOME
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {
                                        campaignsData.length !== 0 && campaignsData.map((el, index) => {
                                            return (
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <div className='flex flex-col justify-start items-start'>
                                                            <div>{!!el.firstName ? el.firstName : "N/A " + el.lastName}</div>
                                                            <div className='text-blue-600 font-bold'>{el.email}</div>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{!!el.gender ? el.gender : "N/A"}</td>
                                                    <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{!!el.contact ? el.contact : "N/A"}</td>
                                                    <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{new Date(el.birthDate ? el.birthDate : "N/A").toLocaleDateString()}</td>
                                                    <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.averageAnnualIncome ? el.averageAnnualIncome : "N/A"}</td>
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