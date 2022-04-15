import React from 'react'
import { CampaignForm, CampaignTable } from './components';

function CBAddCampaign() {

    return (
        <React.Fragment>
            <div className="grid grid-cols-11 gap-4 bg-white">
                <div className="col-span-3 py-5 border-r border-gray-300">
                    <CampaignForm />
                </div>
                <div className="col-span-8 py-5 fnt-sty-nunito">
                    <CampaignTable />
                </div>
            </div>
        </React.Fragment>
    )
}

export default CBAddCampaign;