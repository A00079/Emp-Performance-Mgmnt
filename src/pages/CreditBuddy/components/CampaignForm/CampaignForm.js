import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import firebase from '../../../../utils/firebase';

function CampaignForm() {

    const [campaignimagesdata, setCampaignImagesData] = React.useState([
        {
            img: 'icicidirect.jpg',
            code: 'Credit Card',
            descr: 'ICICI Bank',
            value: 'icicidirect.jpg'
        },
        {
            img: 'sbi.png',
            code: 'Credit Card',
            descr: 'SBI Bank',
            value: 'sbi.png'
        },
        {
            img: 'indusInd.png',
            code: 'Credit Card',
            descr: 'IndusInd Bank',
            value: 'indusInd.png'
        },
        {
            img: 'equitas.jpg',
            code: 'Saving Account',
            descr: 'Equitas',
            value: 'equitas.jpg'
        },
        {
            img: 'kotak.png',
            code: 'Saving Account',
            descr: 'Kotak 811',
            value: 'kotak.png'
        },
        {
            img: 'axis.png',
            code: 'Saving Account',
            descr: 'Axis Bank',
            value: 'axis.png'
        },
        {
            img: 'aubank.jpg',
            code: 'Saving Account',
            descr: 'AU 0101',
            value: 'aubank.jpg'
        },
        {
            img: 'hdfc.jpg',
            code: 'Saving Account',
            descr: 'HDFC Bank',
            value: 'hdfc.jpg'
        },
        {
            img: 'indusInd.png',
            code: 'Saving Account',
            descr: 'IndusInd Bank',
            value: 'indusInd.png'
        },
        {
            img: 'icicidirect.jpg',
            code: 'Demat Account',
            descr: 'ICICI Bank',
            value: 'icicidirect.jpg'
        },
        {
            img: 'axis.png',
            code: 'Demat Account',
            descr: 'Axis Bank',
            value: 'axis.png'
        },
    ]);
    const [copy_og_campaignimagesdata, setOGCampaignImagesData] = React.useState(campaignimagesdata);
    const [campaigninputs, setCampaignInputs] = React.useState({
        campaignname: '',
        campaigntype: '',
        exchange: '',
        tradingaof: '',
        demataof: '',
        campaignimages: '',
        actionlink: '',
        formlink: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setCampaignInputs({
            ...campaigninputs,
            [event.target.name]: event.target.value
        });
        if (event.target.name == 'campaigntype') {
            filterCampaignImages(event.target.value);
        }
    };

    const filterCampaignImages = (campaignType) => {
        if (!!campaignType) {
            setCampaignImagesData(copy_og_campaignimagesdata);
            let filteredCampainges = [];
            filteredCampainges = copy_og_campaignimagesdata.filter((el, index) => {
                return el.code.toLocaleLowerCase() == campaignType.toLocaleLowerCase();
            });
            setCampaignImagesData(filteredCampainges);
        } else {
            setCampaignImagesData(copy_og_campaignimagesdata);
        }
    }

    const handleSave = () => {
        setIsLoading(true);
        firebase.child(campaigninputs.campaigntype).push(
            campaigninputs,
            err => {
                if (err) {
                    setIsLoading(false);
                    alert('Something Went Wrong...');
                } else {
                    alert('Campaign added successfully');
                    setIsLoading(false);
                }
            })
    };

    return (
        <React.Fragment>
            <div className='text-gray-500 px-5 font-medium text-xl'>
                Add Campaign
            </div>
            <div className=" flex flex-col items-center px-5 space-y-5 py-14">
                <div className="w-full flex flex-row justify-center items-center space-x-5">
                    <TextField onChange={(e) => handleInputChange(e)} value={campaigninputs.campaignname} name='campaignname' className="w-full" id="campaignname" label="Campaign Name" variant="outlined" />
                    <FormControl variant="outlined" className='w-full'>
                        <InputLabel id="demo-simple-select-outlined-label">Campaign Type</InputLabel>
                        <Select
                            name='campaigntype'
                            className='w-full'
                            labelId="campaigntype"
                            id="campaigntype"
                            value={campaigninputs.campaigntype}
                            onChange={(e) => handleInputChange(e)}
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
                <div className="w-full flex flex-row justify-center items-center space-x-5">
                    <TextField onChange={(e) => handleInputChange(e)} value={campaigninputs.exchange} name='exchange' className="w-full" id="exchange" label="Exchange" variant="outlined" />
                    <TextField onChange={(e) => handleInputChange(e)} value={campaigninputs.tradingaof} name='tradingaof' className="w-full" id="Tradingaof" label="Trading AOF" variant="outlined" />
                    <TextField onChange={(e) => handleInputChange(e)} value={campaigninputs.demataof} name='demataof' className="w-full" id="demataof" label="Demat AOF" variant="outlined" />
                </div>
                <div className="w-full flex flex-row justify-center items-center space-x-5">
                    <FormControl variant="outlined" className='w-full'>
                        <InputLabel id="demo-simple-select-outlined-label">Campaign Images</InputLabel>
                        <Select
                            name='campaignimages'
                            className='w-full'
                            labelId="campaignimages"
                            id="campaignimages"
                            value={campaigninputs.campaignimages}
                            onChange={(e) => handleInputChange(e)}
                            label="Campaign Images"
                        >
                            {
                                campaignimagesdata.map((el, index) => {
                                    return (
                                        <MenuItem key={index} value={el.value}>
                                            <div className='flex flex-row justify-start items-center w-full space-x-5'>
                                                <div className='bg-indigo-100 rounded-md'>
                                                    <img src={`./img/CampaingImages/${el.img}`} className='object-contain object-center w-10 bg-indigo-100 rounded-md'></img>
                                                </div>
                                                <div className='text-sm font-bold'>{el.descr}</div>
                                            </div>
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <TextField onChange={(e) => handleInputChange(e)} value={campaigninputs.actionlink} name='actionlink' className="w-full" id="actionlink" label="Action Link" variant="outlined" />
                </div>
                <div className="w-full flex flex-row justify-center items-center space-x-5">
                    <TextField onChange={(e) => handleInputChange(e)} value={campaigninputs.formlink} name='formlink' className="w-full" id="formlink" label="Form Link" variant="outlined" />
                </div>
                <div className="w-full flex flex-row justify-end items-end space-x-5">
                    <button onClick={() => handleSave()} className='shadow-xl px-5 py-2 text-white bg-indigo-600 rounded-md text-sm font-bold'>
                        {
                            isLoading ?
                                <svg className="w-5 h-5 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                :
                                <div>Save</div>
                        }
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CampaignForm;