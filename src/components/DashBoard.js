
import React, { Component } from 'react';

export default class DashBoard extends Component {
  render() {
    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 className="page-header">Dashboard</h1>

          <div className="row placeholders">
              <h2>Section title</h2>
              <div className="table-responsive">
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
              </div>
          </div>
      </div>
    );
  }
}
