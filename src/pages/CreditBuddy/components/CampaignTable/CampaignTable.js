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
            <div className="text-gray-900 px-2">
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
                            value={campaignsData.length !== 0 ? campaignsData[0].campaigntype : selectedCampaign}
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
                                {
                                    campaignsData.length !== 0 && Object.keys(campaignsData[0]).map((el, index) => {
                                        return (
                                            el.toLocaleLowerCase() == 'id' || el.toLocaleLowerCase() == 'campaigntype' ? "" :
                                                <th key={index} className="text-left p-3 font-medium text-xs uppercase">{el}</th>
                                        )
                                    })
                                }
                                <th></th>
                            </tr>
                            {
                                campaignsData.length !== 0 && campaignsData.map((el, index) => {
                                    return (
                                        <tr key={index} className="border-b hover:bg-orange-100 bg-gray-50 text-xs">
                                            {
                                                Object.keys(el).map((itemVal, itemindex) => {
                                                    return (
                                                        itemVal.toLocaleLowerCase().includes('img') ?
                                                            <td key={itemindex} className="p-2">
                                                                <p>
                                                                    <img src={el[itemVal]} className='object-contain object-center w-14 rounded-sm'></img>
                                                                </p>
                                                            </td>
                                                            :
                                                            itemVal.toLocaleLowerCase() == 'id' || itemVal.toLocaleLowerCase() == 'campaigntype' ? "" :
                                                                < td key={itemindex} className="p-2" >
                                                                    <p className='w-20 truncate'>{
                                                                        !!el[itemVal] ? el[itemVal] : "N/A"
                                                                    }</p>
                                                                </td>
                                                    )
                                                })
                                            }
                                            <td className="p-3 flex justify-center py-6 items-center">
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
        </div >
    )
}

export default CampaignTable;