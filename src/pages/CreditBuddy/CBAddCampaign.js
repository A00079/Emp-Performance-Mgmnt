import React from 'react'
import { CampaignForm, CampaignTable } from './components';

function CBAddCampaign() {

    return (
        <React.Fragment>
            <div className="grid grid-cols-12 gap-4 bg-white">
                <div className="col-span-4 py-10 border-r border-gray-300">
                    <CampaignForm />
                </div>
                <div className="col-span-8 py-10 fnt-sty-nunito">
                    <CampaignTable />
                </div>
            </div>
        </React.Fragment>
    )
}

export default CBAddCampaign;