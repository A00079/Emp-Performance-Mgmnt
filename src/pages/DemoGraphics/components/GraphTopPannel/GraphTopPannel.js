import React from 'react';
import { CricularProgressBar } from '../../components';
const GraphTopPannel = () => {
    return (
        <React.Fragment>

            <div className='px-6 py-4 flex flex-wrap justify-between'>
                <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
                    <div className="font-medium text-blue-600 text-lg">
                        Total Campaigns Completed
                </div>
                    <h4 className="font-bold text-blue-600 text-lg">1,405</h4>
                    <div class="w-full flex flex-row">
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#4CDA64', width: '10%' }}></div>
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#007AFF', width: '10%' }}></div>
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#FF00C6', width: '10%' }}></div>
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#FFCC00', width: '7%' }}></div>
                        <div class="text-xs leading-none py-1 text-center text-white" style={{ background: '#D141F0', width: '7%' }}></div>
                    </div>
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