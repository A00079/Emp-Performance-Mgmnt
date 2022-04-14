import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { CustomAvatar, CricularProgressBar } from '../../components';

const GraphOfferTable = () => {
    return (
        <React.Fragment>
            <div className="flex pt-6 pb-2 mx-10 ">
                <input className="w-full rounded p-2 border border-gray-300" type="text" placeholder="Search..." />
                <button className="rounded border border-gray-300 bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="flex flex-col mx-10">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-indigo-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider">
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p>Offer</p>
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider">
                                            Convertion
                                    </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider">
                                            Payout
                                    </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider">
                                            Earning
                                    </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider">
                                            Revenue
                                    </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap border-l-8 border-gray-300">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <CustomAvatar val='MOTILAL' />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-xs font-extrabold text-blue-500">
                                                        48949588485
                                                </div>
                                                    <div className="text-xs text-gray-500 font-extrabold">
                                                        MOTILAL OSWAL [CPL2] 2021
                                                </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-left text-sm text-gray-500">
                                            <div className="flex flex-col space-y-0">
                                                <small className="text-gray-500 title-font font-bold">
                                                    Total Conversion
                                            </small>
                                                <div className="bg-gray-300 w-full rounded-sm h-2">
                                                    <div
                                                        className="w-24 bg-indigo-600 rounded-sm h-2"
                                                    ></div>
                                                </div>
                                                <p className="text-indigo-700 title-font font-bold text-xs">
                                                    40
                                            </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <div className='flex flex-row items-center space-x-1'>
                                                <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                                                <p className='text-xs text-indigo-600 font-extrabold'>58,858</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex flex-col space-y-0">
                                                <small className="text-gray-500 title-font font-bold">
                                                    Total Earnings
                                            </small>
                                                <div className="bg-gray-300 w-full rounded-sm h-2">
                                                    <div
                                                        className="w-40 bg-green-600 rounded-sm h-2"
                                                    ></div>
                                                </div>
                                                <p className="text-green-700 title-font font-bold text-xs">
                                                    70
                                            </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap font-extrabold text-xs text-gray-700">
                                            <div style={{ background: '#AAFFBE' }} className='w-24 rounded-sm p-2 flex flex-row space-x-1 items-center'>
                                                <p>INR</p>
                                                <p>58,8595</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='bg-blue-50'>
                                        <td className="px-6 py-2 whitespace-nowrap border-l-8 border-gray-300">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <CustomAvatar val='MOTILAL' />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-xs font-extrabold text-blue-500">
                                                        48949588485
                                                </div>
                                                    <div className="text-xs text-gray-500 font-extrabold">
                                                        MOTILAL OSWAL [CPL2] 2021
                                                </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-left text-sm text-gray-500">
                                            <div className="flex flex-col space-y-0">
                                                <small className="text-gray-500 title-font font-bold">
                                                    Total Conversion
                                            </small>
                                                <div className="bg-gray-300 w-full rounded-sm h-2">
                                                    <div
                                                        className="w-20 bg-indigo-600 rounded-sm h-2"
                                                    ></div>
                                                </div>
                                                <p className="text-indigo-700 title-font font-bold text-xs">
                                                    40
                                            </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <div className='flex flex-row items-center space-x-1'>
                                                <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                                                <p className='text-xs text-indigo-600 font-extrabold'>58,858</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex flex-col space-y-0">
                                                <small className="text-gray-500 title-font font-bold">
                                                    Total Earnings
                                            </small>
                                                <div className="bg-gray-300 w-full rounded-sm h-2">
                                                    <div
                                                        className="w-24 bg-green-600 rounded-sm h-2"
                                                    ></div>
                                                </div>
                                                <p className="text-green-700 title-font font-bold text-xs">
                                                    70
                                            </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap font-extrabold text-xs text-gray-700">
                                            <div style={{ background: '#AAFFBE' }} className='w-24 rounded-sm p-2 flex flex-row space-x-1 items-center'>
                                                <p>INR</p>
                                                <p>58,8595</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap border-l-8 border-gray-300">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <CustomAvatar val='MOTILAL' />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-xs font-extrabold text-blue-500">
                                                        48949588485
                                                </div>
                                                    <div className="text-xs text-gray-500 font-extrabold">
                                                        MOTILAL OSWAL [CPL2] 2021
                                                </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-left text-sm text-gray-500">
                                            <div className="flex flex-col space-y-0">
                                                <small className="text-gray-500 title-font font-bold">
                                                    Total Conversion
                                            </small>
                                                <div className="bg-gray-300 w-full rounded-sm h-2">
                                                    <div
                                                        className="w-10 bg-indigo-600 rounded-sm h-2"
                                                    ></div>
                                                </div>
                                                <p className="text-indigo-700 title-font font-bold text-xs">
                                                    40
                                            </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <div className='flex flex-row items-center space-x-1'>
                                                <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                                                <p className='text-xs text-indigo-600 font-extrabold'>58,858</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex flex-col space-y-0">
                                                <small className="text-gray-500 title-font font-bold">
                                                    Total Earnings
                                            </small>
                                                <div className="bg-gray-300 w-full rounded-sm h-2">
                                                    <div
                                                        className="w-10 bg-green-600 rounded-sm h-2"
                                                    ></div>
                                                </div>
                                                <p className="text-green-700 title-font font-bold text-xs">
                                                    70
                                            </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap font-extrabold text-xs text-gray-700">
                                            <div style={{ background: '#AAFFBE' }} className='w-24 rounded-sm p-2 flex flex-row space-x-1 items-center'>
                                                <p>INR</p>
                                                <p>58,8595</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='bg-blue-50'>
                                        <td className="px-6 py-2 whitespace-nowrap border-l-8 border-gray-300">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <CustomAvatar val='MOTILAL' />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-xs font-extrabold text-blue-500">
                                                        48949588485
                                                </div>
                                                    <div className="text-xs text-gray-500 font-extrabold">
                                                        MOTILAL OSWAL [CPL2] 2021
                                                </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-left text-sm text-gray-500">
                                            <div className="flex flex-col space-y-0">
                                                <small className="text-gray-500 title-font font-bold">
                                                    Total Conversion
                                            </small>
                                                <div className="bg-gray-300 w-full rounded-sm h-2">
                                                    <div
                                                        className="w-10 bg-indigo-600 rounded-sm h-2"
                                                    ></div>
                                                </div>
                                                <p className="text-indigo-700 title-font font-bold text-xs">
                                                    40
                                            </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <div className='flex flex-row items-center space-x-1'>
                                                <div className='w-2 h-2 bg-yellow-400 rounded-full'></div>
                                                <p className='text-xs text-indigo-600 font-extrabold'>58,858</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex flex-col space-y-0">
                                                <small className="text-gray-500 title-font font-bold">
                                                    Total Earnings
                                            </small>
                                                <div className="bg-gray-300 w-full rounded-sm h-2">
                                                    <div
                                                        className="w-10 bg-green-600 rounded-sm h-2"
                                                    ></div>
                                                </div>
                                                <p className="text-green-700 title-font font-bold text-xs">
                                                    70
                                            </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-2 whitespace-nowrap font-extrabold text-xs text-gray-700">
                                            <div style={{ background: '#AAFFBE' }} className='w-24 rounded-sm p-2 flex flex-row space-x-1 items-center'>
                                                <p>INR</p>
                                                <p>58,8595</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >

    )
}

export default GraphOfferTable;