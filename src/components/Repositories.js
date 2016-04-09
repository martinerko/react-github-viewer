import React, { Component } from 'react'

export default class Repositories extends Component {

  rendreEmptyLine(colSpan, text) {
    return (
      <tr>
          <td colSpan={colSpan}>{text}</td>
      </tr>
    )
  }
  renderRepositoryLine(repo) {
    return (
      <tr key={repo.id}>
          <td><a href={repo.html_url} title={repo.name} target="_blank">{repo.name}</a></td>
          <td>{repo.description}</td>
      </tr>
    )
  }

  render() {
    const { repositories } = this.props
    const lines = repositories.length ? repositories.map(this.renderRepositoryLine) : rendreEmptyLine(2, 'No public repositories')

    return (
      <div className="table-responsive text-xs-left">
        <h3>Public repositories</h3>
        <table className="table table-striped">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Description</th>
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
