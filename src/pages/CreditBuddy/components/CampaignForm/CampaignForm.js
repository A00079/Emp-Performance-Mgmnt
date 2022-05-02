import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import firebase from '../../../../utils/firebase';


function CampaignForm() {

    const [creditCardFields, setCreditCardField] = useState([
        {
            id: 'campaignname',
            name: 'campaignname',
            type: 'text',
            label: 'Campaign Name',
        },
        {
            id: 'cardtype',
            name: 'cardtype',
            type: 'text',
            label: 'Card Type',
        },
        {
            id: 'joiningfee',
            name: 'joiningfee',
            type: 'number',
            label: 'Joining Fee',
        },
        {
            id: 'renevalfee',
            name: 'renevalfee',
            type: 'number',
            label: 'Reneval Fee',
        },
    ]);
    const [personalLoanFields, setPersonalLoanField] = useState([
        {
            id: 'campaignname',
            name: 'campaignname',
            type: 'text',
            label: 'Campaign Name',
        },
        {
            id: 'tenure',
            name: 'tenure',
            type: 'number',
            label: 'Tenure',
        },
        {
            id: 'interestrate',
            name: 'interestrate',
            type: 'number',
            label: 'Interest Rate',
        },
        {
            id: 'processingfee',
            name: 'processingfee',
            type: 'number',
            label: 'Processing Fee',
        }
    ]);
    const [savingAccountFields, setSavingAccountField] = useState([
        {
            id: 'campaignname',
            name: 'campaignname',
            type: 'text',
            label: 'Campaign Name',
        },
        {
            id: 'minimumbalance',
            name: 'minimumbalance',
            type: 'number',
            label: 'Minimum Balance',
        },
        {
            id: 'interestrate',
            name: 'interestrate',
            type: 'number',
            label: 'Interest Rate',
        },
        {
            id: 'aoc',
            name: 'aoc',
            type: 'number',
            label: 'AOC',
        }
    ]);
    const [demateAccountFields, setDemateAccountField] = useState([
        {
            id: 'campaignname',
            name: 'campaignname',
            type: 'text',
            label: 'Campaign Name',
        },
        {
            id: 'exchange',
            name: 'exchange',
            type: 'number',
            label: 'Exchange',
        },
        {
            id: 'tradingaof',
            name: 'tradingaof',
            type: 'number',
            label: 'Trading AOF',
        },
        {
            id: 'demateaof',
            name: 'demateaof',
            type: 'number',
            label: 'Demate AOF',
        }
    ]);
    const [homeLoanFields, setHomeLoanField] = useState([]);

    const [visibleCampaignFields, setVisibleCampaignFields] = useState([]);

    const [campaigninputs, setCampaignInputs] = React.useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [campaignImg, setCampaignImg] = useState('');
    const [campaignType, setCampaignType] = useState('');

    const resetFormLinks = () => {
        document.getElementById('actionlink').value = '';
        document.getElementById('formlink').value = '';
    }
    const handleInputChange = (event) => {
        setCampaignInputs({
            ...campaigninputs,
            [event.target.name]: event.target.value
        });
        if (event.target.name == 'campaigntype') {
            setCampaignType(event.target.value);
            if (event.target.value == 'creditcard') {
                resetFormLinks();
                setCampaignInputs({});
                setVisibleCampaignFields(creditCardFields);
            } else if (event.target.value == 'personalloan') {
                resetFormLinks();
                setCampaignInputs({});
                setVisibleCampaignFields(personalLoanFields);
            } else if (event.target.value == 'savingaccount') {
                resetFormLinks();
                setCampaignInputs({});
                setVisibleCampaignFields(savingAccountFields);
            } else if (event.target.value == 'demataccount') {
                resetFormLinks();
                setCampaignInputs({});
                setVisibleCampaignFields(demateAccountFields);
            } else if (event.target.value == 'homeloan') {
                resetFormLinks();
                setCampaignInputs({});
                setVisibleCampaignFields(homeLoanFields);
            }
        }
    };

    const handleImageChange = (event) => {
        let base64String = "";
        var file = event.target.files[0];

        var reader = new FileReader();
        console.log("next");

        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            setCampaignImg('data:image/png;base64,' + base64String)
        }
        reader.readAsDataURL(file);
    }

    const handleSave = () => {
        if (Object.keys(campaigninputs).length == 0) {
            alert('All fields are mandatory.');
        } else {
            setIsLoading(true);
            campaigninputs['campaignimg'] = campaignImg;
            campaigninputs['campaigntype'] = campaignType;
            !!campaigninputs['actionlink'] ? campaigninputs['actionlink'] = campaigninputs['actionlink'] : campaigninputs['actionlink'] = "";
            !!campaigninputs['formlink'] ? campaigninputs['formlink'] = campaigninputs['formlink'] : campaigninputs['formlink'] = "";
            console.log('Data Save --->', campaigninputs);
            firebase.firestore().collection(campaigninputs.campaigntype)
                .add(campaigninputs)
                .then(function (docRef) {
                    // console.log("Tutorial created with ID: ", docRef.id);
                    resetFormLinks();
                    setCampaignInputs({});
                    setIsLoading(false);
                    alert('Campaign added successfully');
                })
                .catch(function (error) {
                    setIsLoading(false);
                    alert('Something Went Wrong...');
                    console.error("Error adding Tutorial: ", error);
                });;
        }
    };

    return (
        <React.Fragment>
            <div className='text-gray-500 px-2 font-medium text-xl'>
                Add Campaign
            </div>
            <div className='pt-10 w-1/2 px-2'>
                <div className="bg-gray-50 border border-gray-200 px-2 py-4 rounded-lg overflow-hidden mb-5">
                    {
                        !!campaignImg ?
                            <img alt="content" id='campaignimg' className="object-cover object-center mx-auto w-60" src={campaignImg} />
                            : <p className='text-xs font-medium text-gray-400'>Uplaod image for preview.</p>
                    }
                </div>
            </div>
            <div className="w-1/2 px-2 pb-6">
                <div className="overflow-hidden relative">
                    <button className="bg-blue-500 hover:bg-blue-light shadow-xl rounded-md text-white font-bold py-2 px-4 w-full inline-flex items-center">
                        <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
                        </svg>
                        <span className="ml-2 text-xs font-bold">Upload Image</span>
                    </button>
                    <input
                        className="cursor-pointer bottom-0 absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
                        type="file"
                        name="documents[]"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-2 bg-white px-2 space-y-1  place-items-end">
                <div className="col-span-6 w-full place-items-end">
                    <FormControl size='small' variant="outlined" className='w-full'>
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
                            <MenuItem value={'creditcard'}>Credit Card</MenuItem>
                            <MenuItem value={'homeloan'}>Home Loan</MenuItem>
                            <MenuItem value={'personalloan'}>Personal Loan</MenuItem>
                            <MenuItem value={'demataccount'}>Demat Account</MenuItem>
                            <MenuItem value={'savingaccount'}>Saving Account</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {
                    visibleCampaignFields.length !== 0 && visibleCampaignFields.map((el, index) => {
                        return (
                            <div key={index} className="col-span-6 w-full place-items-end">
                                <TextField key={el.id} size='small' type={el.type} onChange={(e) => handleInputChange(e)} name={el.name} className="w-full" id={el.id} label={el.label} variant="outlined" />
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col items-center space-y-4 px-2 mt-4'>
                <TextField size='small' disabled={!!campaigninputs.formlink ? true : false} onChange={(e) => handleInputChange(e)} value={campaigninputs.actionlink} name='actionlink' className={`w-full ${!!campaigninputs.formlink ? 'bg-gray-100' : ''}`} id="actionlink" label="Action Link" variant="outlined" />
                <TextField size='small' disabled={!!campaigninputs.actionlink ? true : false} onChange={(e) => handleInputChange(e)} value={campaigninputs.formlink} name='formlink' className={`w-full ${!!campaigninputs.actionlink ? 'bg-gray-100' : ''}`} id="formlink" label="Form Link" variant="outlined" />
            </div>
            <div className="w-full flex flex-row justify-end items-end px-2 py-4 space-x-2">
                <button onClick={() => handleSave()} className='shadow-xl px-5 py-2 text-white bg-indigo-600 rounded-md text-sm font-bold'>
                    {
                        isLoading ?
                            <svg className="w-5 h-5 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                            :
                            <div>Save</div>
                    }
                </button>
            </div>
        </React.Fragment>
    )
}

export default CampaignForm;