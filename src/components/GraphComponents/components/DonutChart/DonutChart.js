import React from 'react';
import { Donut } from 'britecharts-react';
const donutData = require('./donutChart.fixtures.js').default;

const DonutChart = () => {
    const logMouseOver = () => console.log('Mouse Over');

    return (
        <Donut
            data={donutData.with4Slices()}
            customMouseOver={logMouseOver}
            externalRadius={70}
            internalRadius={40}
            highlightSliceById={1}
        />
    )
}

export default DonutChart;