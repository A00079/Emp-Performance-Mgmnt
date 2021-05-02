import React, { useState, useEffect } from "react";

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
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <div className='col-span-4 bg-white shadow-sm p-2 pt-1 rounded-sm'>
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
                <div className="col-span-3">
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmployeeStats;