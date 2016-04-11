import React, { Component } from 'react'

export default class Repositories extends Component {

  constructor(props) {
    super(props)

    this.title = 'Public repositories (owned or forked)'
    this.noDataMessage = 'No public repositories'
    this.headers = ['Name', 'Description']
  }

  renderTitle() {
    return (
      <h3>{this.title}</h3>
    )
  }

  renderNoDataLine(colSpan) {
    return (
      <tr>
        <td colSpan={this.headers.length}>{this.noDataMessage}</td>
      </tr>
    )
  }

  renderTableBody() {
    const {data} = this.props
    if (!data.length) {
      return this.renderNoDataLine()
    }

    return data.map(function(repo) {
      return (
        <tr key={repo.id}>
          <td><a href={repo.html_url} title={repo.name} target="_blank">{repo.name}</a></td>
          <td>{repo.description}</td>
      </tr>
      )
    })
  }

  renderTableHeaders() {
    return (
      <tr>
        {this.headers.map(text => <th key={text}>{text}</th>)}
      </tr>
    )
  }

  render() {
    return (
      <div className="table-responsive text-xs-left">
        {this.renderTitle()}
        <table className="table table-striped user-content">
          <thead>
            {this.renderTableHeaders()}
          </thead>
          <tbody>
            {this.renderTableBody()}
          </tbody>
        </table>
      </div>
    )
  }
}
