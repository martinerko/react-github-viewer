import React, { Component } from 'react';
import TopPanel from './TopPanel';
import SideBar from './SideBar';
import DashBoard from './DashBoard';

export default class App extends Component {
  render() {
    return (
      <div>
        <TopPanel />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <DashBoard />
          </div>
        </div>
      </div>
    );
  }
}
