import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({
    noBorder: {
        border: "none",
    },
}));

const ComposeForm = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <p className='text-gray-500 text-sm mx-10'>New Message</p>
            <section className='w-full flex flex-col space-y-2'>
                <div className='mx-10'>
                    <TextField
                        className='w-full'
                        id="outlined-textarea"
                        label="To"
                        placeholder="To"
                        multiline
                        margin="dense"
                        variant="outlined"
                    />
                </div>
                <div className='mx-10 flex flex-row space-x-2'>
                    <TextField
                        className='w-full'
                        id="outlined-textarea"
                        label="CC"
                        placeholder="CC"
                        multiline
                        variant="outlined"
                        margin="dense"
                    />
                    <TextField
                        className='w-full'
                        id="outlined-textarea"
                        label="BCC"
                        placeholder="BCC"
                        multiline
                        variant="outlined"
                        margin="dense"
                    />
                </div>
                <div className='mx-10'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Body"
                        multiline
                        rows={10}
                        placeholder="Body"
                        className='w-full'
                        variant="outlined"
                    />
                </div>
                <div className='mx-10'>
                    <Button variant="contained" color="primary">
                        Send &nbsp;<SendIcon />
                    </Button>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ComposeForm;