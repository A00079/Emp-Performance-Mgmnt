import React from 'react';
import { ActiveShapePieChart, MultiRadialPieChart, DonutChart } from "../../components/GraphComponents/components";
import { GraphContainerCard, GraphTopPannel, GraphOfferTable } from "./components";

const DemoGraphics = (props) => {
    return (
        <React.Fragment className="bg-white">
            <GraphTopPannel />
            <GraphContainerCard />
            <GraphOfferTable />
        </React.Fragment>
    )
}

export default DemoGraphics;