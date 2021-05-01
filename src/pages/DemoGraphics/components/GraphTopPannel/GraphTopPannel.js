import React from 'react';
import { CricularProgressBar } from '../../components';
const GraphTopPannel = () => {

    const getCurrentDate = () => {
        var today = new Date();
        var day = today.getDay();
        var daylist = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday ",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        var prepand = hour >= 12 ? " PM " : " AM ";
        hour = hour >= 12 ? hour - 12 : hour;
        if (hour === 0 && prepand === " PM ") {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = " Noon";
            } else {
                hour = 12;
                prepand = " PM";
            }
        }
        if (hour === 0 && prepand === " AM ") {
            if (minute === 0 && second === 0) {
                hour = 12;
                prepand = " Midnight";
            } else {
                hour = 12;
                prepand = " AM";
            }
        }
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const d = new Date();
        return (
            hour +
            ":" +
            minute +
            prepand
        );
    };
    return (
        <React.Fragment>

            <div className='px-2 py-4 flex flex-wrap justify-between'>
                <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                    <div style={{ fontFamily: 'Nunito' }} className="font-semibold text-gray-400 text-sm">
                        Last Updated
                    </div>
                    <h4 style={{ fontFamily: 'Nunito' }} className="font-bold text-gray-400 text-lg">Today {getCurrentDate()}</h4>
                    <small className='flex flex-col'>
                        <p className='text-gray-400'>
                            All system are running smoothly & your activity are displayed below.
                        </p>
                    </small>
                    {/* <div class="w-full flex flex-row">
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#4CDA64', width: '10%' }}></div>
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#007AFF', width: '10%' }}></div>
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#FF00C6', width: '10%' }}></div>
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#FFCC00', width: '7%' }}></div>
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#D141F0', width: '7%' }}></div>
                    </div> */}
                </div>
                <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                    <div class="bg-gray-700 h-full flex items-center border-gray-700 border p-2 rounded-lg">
                        <div class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4">
                            <CricularProgressBar percent={20} />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Holden Caulfield</h2>
                            <p class="text-white">UI Designer</p>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                    <div class="bg-gray-700 h-full flex items-center border-gray-700 border p-2 rounded-lg">
                        <div class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4">
                            <CricularProgressBar percent={60} />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Holden Caulfield</h2>
                            <p class="text-white">UI Designer</p>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                    <div class="bg-gray-700 h-full flex items-center border-gray-700 border p-2 rounded-lg">
                        <div class="w-14 h-14 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4">
                            <CricularProgressBar percent={90} />
                        </div>
                        <div class="flex-grow">
                            <h2 class="text-white title-font font-medium">Holden Caulfield</h2>
                            <p class="text-white">UI Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GraphTopPannel;