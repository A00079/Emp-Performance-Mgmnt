import React, { useState } from 'react';
import List from "@material-ui/core/List";
import { DynamicListSms, SmsForm } from './components';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ComposeSms = () => {
    const [listData, setListData] = React.useState([
        {
            id: "sendsms",
            itemname: "Send Sms",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>'
        },
        {
            id: "viewdetails",
            itemname: "View Details",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: false,
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>'
        }
    ]);

    const [ActiveWindow, setActiveWindow] = useState('sendsms');

    const handleListItemClick = (data) => {
        console.log('Call Received...', data);
        setActiveWindow(data);
    }

    return (
        <React.Fragment>
            <section className='grid grid-cols-12 gap-0 bg-white h-screen'>
                <div className="col-span-2 w-full">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='flex flex-col w-full'>
                            <div className='mx-2 screen-title flex flex-row items-center justify-start'>
                                <img alt="team" class="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2" src="./img/gmail.svg" />
                                <p className='text-sm font-bold text-gray-500'>
                                    Message
                                </p>
                            </div>
                            <div className='w-full'>
                                <button className='flex flex-row items-center justify-center bg-red-400 w-40 mx-auto rounded-md text-xs text-white p-1'>
                                    <p className='font-bold'>Compose Message</p>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className='list-container py-2'>
                                <div className='border-t border-gray-200 border-b border-gray-200'>
                                    <ListItem button>
                                        <ListItemText>
                                            <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-500 capitalize'>Bulk Messages</p>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <List id="drawer-item-container-sms">
                                    <DynamicListSms funcProvider={handleListItemClick} itemsData={listData} open={true} />
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='w-full border-b border-gray-200'>
                            <div className='flex flex-col w-full mx-4 py-2'>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Send messages in bulk globally to anyone</p>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Below are the action to send bulk messages to peoples</p>
                            </div>
                        </div>
                        <div className='w-full border-b border-gray-200 px-2'>
                            <div className='flex flex-row mx-0 py-2 items-center space-x-1 border-b border-gray-600 w-24'>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-600 font-bold'>Primary </p>
                            </div>
                        </div>
                        <div className='inbox-msg-container flex flex-col'>
                            <div class="w-full border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                                <div className='flex flex-row justify-between mx-2 items-center py-1'>
                                    <p className='text-gray-600 text-sm font-semibold'>New Message</p>
                                    <p className='text-sm text-indigo-600 font-bold'>Balance: Rs 54.80</p>
                                </div>
                            </div>
                            <div className='parent-main-form-container w-full'>
                                <SmsForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='w-full border-b border-gray-200'>
                            <div className='flex flex-col w-full mx-4 py-2'>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>View the updated inbox data</p>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Below are the inbox data and are live updated</p>
                            </div>
                        </div>
                        body
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ComposeSms;