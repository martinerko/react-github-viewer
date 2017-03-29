import React, { Component } from 'react'
import Repositories from './Repositories'
import CalendarHeatmap from './CalendarHeatmap'

export default class Commits extends Repositories {

  constructor(props) {
    super(props)

    this.title = 'commits (into public repositories)'
    this.noDataMessage = 'No commits'
    this.headers = ['SHA', 'Date', 'Message']
  }

  renderTitle() {
    const {year, data} = this.props

    let title = this.title
    if (year) {
      title = `${data.commits.length} ${title} in ${year}`
    }
    return (
      <div>
        <h3>{title}</h3>
        <CalendarHeatmap data={data.calendar} year={year} />
      </div>
    )
  }

  renderTableBody() {
    const {commits} = this.props.data
    if (!commits.length) {
      return this.renderNoDataLine()
    }

    return commits.map(function(commit) {
      return (
        <tr key={commit.sha}>
          <td><a href={commit.html_url} title={commit.message} target="_blank">{commit.sha}</a></td>
          <td className="date">{commit.date}</td>
          <td>{commit.message}</td>
        </tr>
      )
    })
  }
}
