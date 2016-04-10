import React, { Component } from 'react'

export default class TopPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }

  onInputChange(event) {
    const username = event.target.value
    this.setState({
      username: username
    })
    //  get user's profile
    this.props.getUserProfile(username)
  }

  render() {
    return (
      <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
          <a className="navbar-brand" href="#">React Github Viewer</a>
          <div id="navbar">
              <form className="pull-xs-right">
                  <input type="text" className="form-control" placeholder="Search..." value={this.state.username} onChange={event => this.onInputChange(event)} />
              </form>
          </div>
      </nav>
      );
  }
}
