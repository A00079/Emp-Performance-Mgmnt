import React from 'react';
import { ActiveShapePieChart, MultiRadialPieChart } from "../../components/GraphComponents/components";
import { GraphContainerCard, GraphTopPannel } from "./components";

const DemoGraphics = (props) => {
    return (
        <React.Fragment className="bg-white">
            <GraphTopPannel />
            <GraphContainerCard />
        </React.Fragment>
    )
}

export default DemoGraphics;