import React, { useEffect, useState } from 'react';
import firebase from '../../../../utils/firebase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function CampaignTable() {
    const [campaignsData, setCampaignData] = useState([]);
    const [selectedCampaign, setSelectedCampaign] = useState('Credit Card');

    useEffect(() => {
        fetchCampaings();
    }, []);

    const fetchCampaings = (campaign) => {
        firebase.child(campaign ? campaign : selectedCampaign).on('value', snapshot => {
            if (snapshot.val() != null) {
                let fetchedData = [];
                Object.keys(snapshot.val()).map((el, index) => {
                    let obj = {};
                    obj = snapshot.val()[el];
                    obj['id'] = el
                    fetchedData.push(obj);
                });
                setCampaignData(fetchedData);
            } else {
                setCampaignData([]);
            }
        });
    }

    const handleCampaignInput = (e) => {
        setSelectedCampaign(e.target.value);
        fetchCampaings(e.target.value);
    }

    const handleRecordDelete = (recID) => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebase.child(`${selectedCampaign}/${recID}`).remove(
                err => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        fetchCampaings();
                        alert('Record deleted successfully.');
                    }
                })
        }
    }
    return (
        <div>
            <div className="text-gray-900 px-4">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-gray-500 font-medium text-xl w-full">
                        Manage Campaign
                    </h1>
                    <FormControl variant="outlined" className='w-full text-xs h-5' size="small">
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
                            <MenuItem value={'Credit Card'}>Credit Card</MenuItem>
                            <MenuItem value={'Home Loan'}>Home Loan</MenuItem>
                            <MenuItem value={'Personal Loan'}>Personal Loan</MenuItem>
                            <MenuItem value={'Demat Account'}>Demat Account</MenuItem>
                            <MenuItem value={'Saving Account'}>Saving Account</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="flex justify-center space-y-5 py-14">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <tbody>
                            <tr className="border-b bg-gray-100">
                                <th className="text-left p-3 font-medium text-xs">Campaign Image</th>
                                <th className="text-left p-3 font-medium text-xs">Campaign Type</th>
                                <th className="text-left p-3 font-medium text-xs">Campaign Name</th>
                                <th className="text-left p-3 font-medium text-xs">Exchange</th>
                                <th className="text-left p-3 font-medium text-xs">Trading AOF</th>
                                <th className="text-left p-3 font-medium text-xs">Demat AOF</th>
                                <th className="text-left p-3 font-medium text-xs">Action Link</th>
                                <th className="text-left p-3 font-medium text-xs">Form Link</th>
                                <th></th>
                            </tr>
                            {
                                campaignsData.map((el, index) => {
                                    return (
                                        <tr key={index} className="border-b hover:bg-orange-100 bg-gray-50 text-xs">
                                            <td className="p-3">
                                                <p>
                                                    <img src={`./img/CampaingImages/${el.campaignimages}`} className='object-contain object-center w-10 bg-indigo-100 rounded-sm'></img>
                                                </p>
                                            </td>
                                            <td className="p-3">
                                                <p className='text-yellow-600 font-bold'>{el.campaigntype}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{el.campaignname}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{el.exchange}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{el.tradingaof}</p>
                                            </td>
                                            <td className="p-3">
                                                <p>{el.demataof}</p>
                                            </td>
                                            <td className="p-3">
                                                <p className={`${!!el.actionlink ? 'w-28' : ''} break-all text-blue-600 truncate `}>
                                                    <a href={el.actionlink} target="_blank" >{el.actionlink}</a>
                                                </p>
                                            </td>
                                            <td className="p-3">
                                                <p className={`${!!el.formlink ? 'w-28' : ''} break-all text-blue-600 truncate `}>
                                                    <a href={el.formlink} target="_blank" >{el.formlink}</a>
                                                </p>
                                            </td>
                                            <td className="p-3 flex justify-center items-center">
                                                <button onClick={() => handleRecordDelete(el.id)} type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CampaignTable;