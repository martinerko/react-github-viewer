import React, { Component } from 'react';

export default class TopPanel extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
          <button type="button" className="navbar-toggler hidden-sm-up" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Project name</a>
          <div id="navbar">
              <nav className="nav navbar-nav pull-xs-left">
                  <a className="nav-item nav-link" href="#">Dashboard</a>
                  <a className="nav-item nav-link" href="#">Settings</a>
                  <a className="nav-item nav-link" href="#">Profile</a>
                  <a className="nav-item nav-link" href="#">Help</a>
              </nav>
              <form className="pull-xs-right">
                  <input type="text" className="form-control" placeholder="Search..." ></input>
              </form>
          </div>
      </nav>
    );
  }
}
