import React from 'react';
import { ActiveShapePieChart, MultiRadialPieChart, TimeSeriesChart } from "../../components/GraphComponents/components";

const DemoGraphics = (props) => {
    return (
        <React.Fragment>
            <section className='p-20'>
                <ActiveShapePieChart />
                <MultiRadialPieChart />
                <TimeSeriesChart />
            </section>
        </React.Fragment>
    )
}

export default DemoGraphics;