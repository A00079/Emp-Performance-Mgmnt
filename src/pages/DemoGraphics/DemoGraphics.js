import React from 'react';
import { ActiveShapePieChart, MultiRadialPieChart } from "../../components/GraphComponents/components";

const DemoGraphics = (props) => {
    return (
        <React.Fragment>
            <section className='p-20'>
                <ActiveShapePieChart />
                <MultiRadialPieChart />
            </section>
        </React.Fragment>
    )
}

export default DemoGraphics;