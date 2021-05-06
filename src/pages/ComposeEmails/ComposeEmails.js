import React, { useState } from 'react';
import List from "@material-ui/core/List";
import { DynamicListEmail } from './components';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ComposeEmails = () => {
    const [listData, setListData] = React.useState([
        {
            id: "sent",
            itemname: "sent",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: '/',
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>'
        },
        {
            id: "quick mail",
            itemname: "quick mail",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: '/manage-affiliate',
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>'
        },
        {
            id: "bulkmail",
            itemname: "bulk mail",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: '/offers',
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>'
        },
        {
            id: "importfile",
            itemname: "import file",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: '/manage-sms',
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>'
        }
    ]);
    const [templatelistData, setTemplateListData] = React.useState([
        {
            id: "quick mail",
            itemname: "quick mail",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: '/manage-affiliate',
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>'
        },
        {
            id: "bulkmail",
            itemname: "bulk mail",
            hasdropdown: false,
            isexpanded: false,
            subitemlist: [],
            route: '/offers',
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>'
        },
        {
            id: "viewalltemplates",
            itemname: "view templates",
            hasdropdown: true,
            isexpanded: false,
            subitemlist: [],
            route: '/manage-sms',
            itemicon: '<svg class="w-4 h-4 text-purple-800 text-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>'
        }
    ]);
    return (
        <React.Fragment>
            <section className='grid grid-cols-12 gap-0 bg-white h-screen'>
                <div className="col-span-2 w-full">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='flex flex-col w-full'>
                            <div className='mx-2 screen-title flex flex-row items-center justify-start'>
                                <img alt="team" class="w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2" src="./img/gmail.svg" />
                                <p className='text-sm font-bold text-gray-500'>
                                    Email
                                </p>
                            </div>
                            <div className='w-full'>
                                <button className='flex flex-row items-center justify-center bg-red-400 w-40 mx-auto rounded-md text-xs text-white p-1'>
                                    <p className='font-bold'>Compose Email</p>
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className='list-container py-2'>
                                <div className='border-t border-gray-200 border-b border-gray-200'>
                                    <ListItem button>
                                        <ListItemText>
                                            <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-500 capitalize'>Normal Email</p>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <List id="drawer-item-container">
                                    <DynamicListEmail itemsData={listData} open={true} />
                                </List>
                                <div className='border-t border-gray-200 border-b border-gray-200'>
                                    <ListItem button>
                                        <ListItemText>
                                            <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-500 capitalize'>Templated Email</p>
                                        </ListItemText>
                                    </ListItem>
                                </div>
                                <List id="template-item-container">
                                    <DynamicListEmail itemsData={templatelistData} open={true} />
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className='bg-white border-r border-gray-200 w-full mx-auto py-2 h-screen'>
                        <div className='w-full border-b border-gray-200'>
                            <div className='flex flex-col w-full mx-4 py-2'>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>View the updated inbox data</p>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-500 font-bold'>Below are the inbox data and are live updated</p>
                            </div>
                        </div>
                        <div className='w-full border-b border-gray-200 px-2'>
                            <div className='flex flex-row mx-0 py-2 items-center space-x-1 border-b border-gray-600 w-24'>
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                                <p style={{ fontFamily: 'Nunito' }} className='text-xs text-gray-600 font-bold'>Primary</p>
                            </div>
                        </div>
                        <div className='inbox-msg-container flex flex-col'>
                            <div class="w-full border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                                <div class="flex py-3 px-2 sm:flex-row flex-col">
                                    <div class="w-10 h-10 sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 flex-shrink-0">
                                    </div>
                                    <div class="flex-grow">
                                        <div className='flex flex-row justify-between items-center'>
                                            <h2 style={{ fontFamily: 'Nunito' }} class="text-gray-700 text-sm title-font font-bold mb-1">Shooting Stars</h2>
                                            <small style={{ fontFamily: 'Nunito' }} class="text-gray-500 font-bold">4:12 PM</small>
                                        </div>
                                        <p style={{ fontFamily: 'Nunito' }} class="text-gray-500 text-xs font-bold">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full border-b border-gray-200 cursor-pointer hover:bg-gray-50">
                                <div class="flex py-3 px-2 sm:flex-row flex-col">
                                    <div class="w-10 h-10 sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 flex-shrink-0">
                                    </div>
                                    <div class="flex-grow">
                                        <div className='flex flex-row justify-between items-center'>
                                            <h2 style={{ fontFamily: 'Nunito' }} class="text-gray-700 text-sm title-font font-bold mb-1">Shooting Stars</h2>
                                            <small style={{ fontFamily: 'Nunito' }} class="text-gray-500 font-bold">4:12 PM</small>
                                        </div>
                                        <p style={{ fontFamily: 'Nunito' }} class="text-gray-500 text-xs font-bold">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    </div>
                                </div>
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
                        <div className='main-inbox-content mx-5 flex flex-col'>
                            <div class="p-2 w-full">
                                <div class="h-full flex items-center p-4 rounded-lg">
                                    <img alt="team" class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                    <div class="flex-grow">
                                        <div className='flex flex-row justify-between'>
                                            <h2 class="text-gray-400 text-xs title-font font-medium">
                                                <span className='text-gray-900 border-b border-gray-300'>HoldenCaulfield@gmail.com</span> to <span className='text-gray-900 border-b border-gray-300'>Clerkkent@gmail.com</span></h2>
                                            <h2 class="text-gray-900 title-font font-medium inline-flex space-x-1">
                                                <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></h2>
                                        </div>
                                        <p class="text-gray-500 text-xs">UI Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className='inbox-body mx-5'>
                                <div className='flex flex-col space-y-2'>
                                    <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-400'>Today 1:25 PM</p>
                                    <p style={{ fontFamily: 'Nunito' }} className='text-lg font-bold text-gray-500'>Phuket is waiting for you</p>
                                    <div className='space-y-8'>
                                        <p style={{ fontFamily: 'Nunito' }} className='text-xs font-bold text-gray-700'>
                                            Why do we use it?
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                        <p style={{ fontFamily: 'Nunito' }} className='text-xs mt-8 font-bold text-gray-500 flex flex-col'>
                                            <span>Best Regards</span>
                                            <span>Clerk kent</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ComposeEmails;