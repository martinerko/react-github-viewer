import CalHeatMap from 'cal-heatmap'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import data from './datayears'

export default class CalendarHeatmap extends Component {
  componentDidMount() {
    const {data, year} = this.props
    const cal = new CalHeatMap();

    cal.init({
      itemSelector: ReactDOM.findDOMNode(this.refs.heatmap),
      domain: 'year',
      subDomain: 'day',
      data: data,
      start: new Date(year, 1),
      cellSize: 10,
      range: 1,
      legend: [2, 5, 10, 20]
    });
  }

  render() {
    return (
      <div ref="heatmap"></div>
    )
  }
}
