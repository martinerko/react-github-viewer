import React, { Component } from 'react'
import Repositories from './Repositories'

export default class Commits extends Repositories {

  constructor(props) {
    super(props)

    this.title = 'Latest commits to owned/forked repositories'
    this.noDataMessage = 'No commits'
    this.headers = ['SHA', 'Date', 'Message']
  }

  renderTableLine(commit) {
    return (
      <tr key={commit.sha}>
          <td>{commit.date}</td>
          <td><a href={commit.html_url} title={commit.message} target="_blank">{commit.sha}</a></td>
          <td>{commit.message}</td>
      </tr>
    )
  }
}
