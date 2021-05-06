import React, { useState, useEffect } from "react";
import { DonutChart } from '../../../../components/GraphComponents/components';
import { CustomProgressBar } from './components';

const EmployeeStats = () => {
    const [affProjectsTeamMembers, setAffProjectsTeamMembers] = useState([]);

    useEffect(() => {
        setAffProjectsTeamMembers([
            {
                affname: 'Clerk Kent',
                affemail: 'clerkkent@gmail.com'
            },
            {
                affname: 'James Bond',
                affemail: 'james@gmail.com'
            },
            {
                affname: 'Clerk Kent',
                affemail: 'Bond@gmail.com'
            },
            {
                affname: 'Bond Kent',
                affemail: 'kent@gmail.com'
            },
            {
                affname: 'Clerk Kent',
                affemail: 'clerkkent@gmail.com'
            },
            {
                affname: 'Clerk Kent',
                affemail: 'clerkkent@gmail.com'
            }
        ])
    }, []);

    const generateRandomNum = () => {
        return Math.abs(Math.floor(Math.random() * (1 - affProjectsTeamMembers.length) + 1));
    }
    return (
        <React.Fragment>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-3">
                    <div className='col-span-4 bg-white border border-gray-200 rounded-md shadow-sm p-2 pt-1'>
                        <div class="flex items-center justify-between text-sm border-b border-gray-200">
                            <div>
                                <button class="py-1 w-20 text-sm capitalize font-semibold select-none h-full focus:outline-none border-b border-black">
                                    Employees
                                </button>
                            </div>
                        </div>
                        <ul class="py-1 h-64 bg-white shadow-sm rounded-sm sm:h-72 overflow-auto custom-scroll scrollbar">
                            {
                                affProjectsTeamMembers && affProjectsTeamMembers.length !== 0 ?
                                    affProjectsTeamMembers.map((el, index) => {
                                        return (
                                            <li className={index % 2 == 0 ? "bg-gray-50 rounded-md" : ""}>
                                                <div>
                                                    <button class="flex items-center w-full px-0 py-2 select-none hover:bg-gray-100 focus:outline-none">
                                                        <img alt="team" class="w-10 h-10 object-cover object-center flex-shrink-0 rounded-full mr-4" src={'/img/avatar-' + generateRandomNum() + '.svg'} />
                                                        <div class="transform translate-y-0.5 text-left ml-2 w-full">
                                                            <div className='flex flex-row w-full justify-between'>
                                                                <h3 class="leading-4 text-sm font-bold text-indigo-700 capitalize">{el.affname}</h3>
                                                            </div>
                                                            <span class="text-xs text-gray-500">{el.affemail}</span>
                                                        </div>
                                                    </button>
                                                    <div className='border-dashed border-b-2 border-gray-200 w-52 mx-auto'></div>
                                                </div>
                                            </li>
                                        )
                                    })
                                    :
                                    <li>
                                        <p className="text-sm font-bold mt-4">Click on a project to view affiliates</p>
                                        <img alt="team" class="w-48 h-48 mx-auto object-fit object-center flex-shrink-0 rounded-md mr-4" src="./img/notfound.svg" />
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-span-9">
                    <div className='flex flex-col'>
                        <div className='empstat-container-main'>
                            <div className='grid grid-cols-12 gap-2'>
                                <div class="col-span-4">
                                    <div class="p-2 pt-0">
                                        <div style={{ background: '#FDF1F1' }} class="h-full flex items-center justify-between p-2 px-3 rounded-lg">
                                            <div class="w-14 h-14 bg-red-200 rounded-md">
                                                <svg class="w-12 h-12 text-center py-2 mx-auto text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                                            </div>
                                            <div>
                                                <h2 class="text-red-400 title-font font-bold text-right">Holden Caulfield</h2>
                                                <small class="text-red-600 font-bold text-right">This a sample demo text.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-4">
                                    <div class="p-2 pt-0">
                                        <div style={{ background: '#EFF1FE' }} class="h-full flex items-center justify-between p-2 px-3 rounded-lg">
                                            <div class="w-14 h-14 bg-indigo-200 rounded-md">
                                                <svg class="w-12 h-12 text-center py-2 mx-auto text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                            </div>
                                            <div>
                                                <h2 class="text-indigo-400 title-font font-bold text-right">Holden Caulfield</h2>
                                                <small class="text-indigo-600 font-bold text-right">This a sample demo text.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-4">
                                    <div class="p-2 pt-0">
                                        <div style={{ background: '#FFF6F1' }} class="h-full flex items-center justify-between p-2 px-3 rounded-lg">
                                            <div class="w-14 h-14 bg-yellow-100 rounded-md">
                                                <svg class="w-12 h-12 text-center py-2 mx-auto text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path></svg>
                                            </div>
                                            <div>
                                                <h2 class="text-yellow-400 title-font font-bold text-right">Holden Caulfield</h2>
                                                <small class="text-yellow-600 font-bold text-right">This a sample demo text.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 gap-1 emp-stats-total-main'>
                            <div className='col-span-8 emp-content'>
                                <p className="text-sm text-gray-400 font-bold px-3">Employee Performance</p>
                                <div className='grid grid-cols-12 gap-1 items-center'>
                                    <div class="col-span-6 p-2 w-full">
                                        <div class="bg-gray-100 h-full flex items-center p-2 rounded-lg">
                                            <div alt="team" class="w-12 h-12 bg-gray-300 rounded-md mr-4">
                                                <p className='text-lg text-gray-500 font-bold text-center py-2'>TA</p>
                                            </div>
                                            <div class="flex-grow">
                                                <CustomProgressBar label="Total Affiliates" prog_no="69595" width_barone="10" width_bartwo="20" width_barthree="40" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-6 p-2 pt-0 w-full mt-2">
                                        <div class="bg-gray-100 h-full flex items-center p-2 rounded-lg">
                                            <div alt="team" class="w-12 h-12 bg-gray-300 rounded-md mr-4">
                                                <p className='text-lg text-gray-500 font-bold text-center py-2'>TO</p>
                                            </div>
                                            <div class="flex-grow">
                                                <CustomProgressBar label="Total Offers" prog_no="595" width_barone="10" width_bartwo="50" width_barthree="30" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-6 p-2 pt-0 w-full">
                                        <div class="bg-gray-100 h-full flex items-center p-2 rounded-lg">
                                            <div alt="team" class="w-12 h-12 bg-gray-300 rounded-md mr-4">
                                                <p className='text-lg text-gray-500 font-bold text-center py-2'>TC</p>
                                            </div>
                                            <div class="flex-grow">
                                                <CustomProgressBar label="Total Conversion" prog_no="2395" width_barone="14" width_bartwo="56" width_barthree="45" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-6 p-2 pt-0 w-full">
                                        <div class="bg-gray-100 h-full flex items-center p-2 rounded-lg">
                                            <div alt="team" class="w-12 h-12 bg-gray-300 rounded-md mr-4">
                                                <p className='text-lg text-gray-500 font-bold text-center py-2'>RE</p>
                                            </div>
                                            <div class="flex-grow">
                                                <CustomProgressBar label="Revenue" prog_no="98595" width_barone="75" width_bartwo="10" width_barthree="5" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-6 p-2 pt-0 w-full">
                                        <div class="bg-gray-100 h-full flex items-center p-2 rounded-lg">
                                            <div alt="team" class="w-12 h-12 bg-gray-300 rounded-md mr-4">
                                                <p className='text-lg text-gray-500 font-bold text-center py-2'>PY</p>
                                            </div>
                                            <div class="flex-grow">
                                                <CustomProgressBar label="Payout" prog_no="19995" width_barone="34" width_bartwo="56" width_barthree="10" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-6 p-2 pt-0 w-full">
                                        <div class="bg-gray-100 h-full flex items-center p-2 rounded-lg">
                                            <div alt="team" class="w-12 h-12 bg-gray-300 rounded-md mr-4">
                                                <p className='text-lg text-gray-500 font-bold text-center py-2'>ER</p>
                                            </div>
                                            <div class="flex-grow">
                                                <CustomProgressBar label="Earning" prog_no="46795" width_barone="10" width_bartwo="20" width_barthree="40" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-4 create-emp-shortcut w-full mt-2'>
                                <div className='bg-white w-full rounded-md py-6 border shadow-sm border-gray-200 flex flex-col space-y-4'>
                                    <div className='content-media w-full mx-auto'>
                                        <img alt="team" class="w-24 h-20 bg-gray-100 mx-auto object-cover object-center flex-shrink-0" src="./img/addemp.svg" />
                                    </div>
                                    <div className='flex flex-col w-full mx-auto'>
                                        <p className='text-center text-sm font-bold text-gray-700'>No employee created yet</p>
                                        <p className='text-center text-xs font-medium text-gray-400'>Simply create your first employee</p>
                                        <p className='text-center text-xs font-medium text-gray-400'>Just click on the button</p>
                                    </div>
                                    <button className="flex flex-row justify-evenly items-center w-40 rounded-md mx-auto p-2 text-sm font-bold text-white bg-indigo-500">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>    Create Employee
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmployeeStats;