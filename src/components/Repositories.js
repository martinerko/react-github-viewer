import React, { Component } from 'react'

export default class Repositories extends Component {

  constructor(props) {
    super(props)

    this.title = 'Public repositories'
    this.noDataMessage = 'No public repositories'
    this.headers = ['Name', 'Description']
  }

  rendreNoDataLine(colSpan) {
    return (
      <tr>
          <td colSpan={this.headers.length}>{this.noDataMessage}</td>
      </tr>
    )
  }

  renderTableLine(repo) {
    return (
      <tr key={repo.id}>
          <td><a href={repo.html_url} title={repo.name} target="_blank">{repo.name}</a></td>
          <td>{repo.description}</td>
      </tr>
    )
  }

  renderHeaders() {
    return this.headers.map(text => <th key={text}>{text}</th>)
  }

  render() {
    const {data} = this.props
    const lines = data.length ? data.map(this.renderTableLine) : rendreNoDataLine()

    return (
      <div className="table-responsive text-xs-left">
        <h3>{ this.title }</h3>
        <table className="table table-striped">
          <thead>
              <tr>
                  { this.renderHeaders() }
              </tr>
          </thead>
          <tbody>
              { lines }
          </tbody>
        </table>
      </div>
    )
  }
}
