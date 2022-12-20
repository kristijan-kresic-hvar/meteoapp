import React, { memo } from 'react'
import Chart from 'react-apexcharts'

import PropTypes from 'prop-types'

const RenderChart = ({ type, options, series }) => {
    return (
        <Chart
            options={options}
            series={series}
            type={type}
        />

    )
}

RenderChart.propTypes = {
    type: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    series: PropTypes.array.isRequired
}

export default memo(RenderChart)