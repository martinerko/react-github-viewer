import React, { Component } from 'react'

export default class DashBoard extends Component {
  constructor(props) {
    super(props)
  }

  renderProfile() {
    return (
      <table className="table table-striped">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1,015</td>
                      <td>sodales</td>
                      <td>ligula</td>
                      <td>in</td>
                      <td>libero</td>
                  </tr>
              </tbody>
          </table>
      );
  }

  renderError() {
    return (<div>There was an error while getting profile ({this.props.errorMessage})</div>);
  }

  render() {
    const {login, data} = this.props
    const title = login ? `${login}'s profile` : ''

    const content = this[this.props.error ? 'renderError' : 'renderProfile']()
    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 className="page-header">Dashboard</h1>

          <div className="row placeholders">
              <h2>{title}</h2>
              <div className="table-responsive">
                {content}
              </div>
          </div>
      </div>
      );
  }
}
