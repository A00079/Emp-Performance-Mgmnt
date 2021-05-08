import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const SmsForm = () => {
    return (
        <React.Fragment>
            <div className='msg-main-container flex flex-col w-full py-2 px-4 space-y-2'>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <TextField
                            className='w-full'
                            id="outlined-textarea"
                            label="Mobile Number"
                            placeholder="Mobile Number"
                            multiline
                            margin='dense'
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <Button variant="contained" color="primary">
                            <AddCircleIcon />
                        </Button>
                    </div>
                </div>
                <div className='mobile-no-container'>
                    <div className='bg-gray-200 w-full h-28 rounded-md'>
                        <p className='text-xs text-gray-400 font-medium p-2'>Added Mobile Numbers Will Appear Here.</p>
                    </div>
                </div>
                <div className='mobile-msg-container py-2 space-y-2'>
                    <p className='text-xs text-gray-600 font-medium'>Message</p>
                    {/* <div className='bg-white w-full h-40 border border-gray-200 rounded-md'>
                        <div className='w-full border-b border-gray-200'>
                            <p className='text-xs text-gray-500 font-medium p-2'>
                                SMS:
                            </p>
                        </div>
                    </div> */}
                    <TextField
                        className='w-full'
                        id="outlined-multiline-static"
                        label="SMS"
                        multiline
                        rows={5}
                        defaultValue=""
                        variant="outlined"
                    />
                    <Button variant="contained" color="primary">
                        <p className='text-xs'>Send</p>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SmsForm;