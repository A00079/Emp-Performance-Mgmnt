import React from 'react';

const OffersTable = () => {
    return (
        <React.Fragment>
            <div className="flex pt-2">
                <input className="w-60 rounded p-2 border border-gray-300" type="text" placeholder="Search..." />
            </div>
            <div className="flex flex-col">
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
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider ">
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p>Convertion</p>
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider">

                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p>Payout</p>
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider">
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p>Earning</p>
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-2 text-left text-xs font-bold text-white capitalize tracking-wider">
                                            <div className='flex flex-row space-x-1 items-center'>
                                                <p>Revenue</p>
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-2 whitespace-nowrap border-l-8 border-gray-300">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
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

export default OffersTable;