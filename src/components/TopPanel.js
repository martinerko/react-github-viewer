import React, { Component } from 'react'

export default class TopPanel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      login: ''
    }
  }

  onInputChange(event) {
    const login = event.target.value
    this.setState({
      login: login
    })
    //  get user's profile
    this.props.getUserProfile(login)
  }

  render() {
    return (
      <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
          <a className="navbar-brand" href="#">React Github Viewer</a>
          <div id="navbar">
              <form className="pull-xs-left">
                  <input type="text" className="form-control" placeholder="Search user..." value={this.state.login} onChange={event => this.onInputChange(event)} />
              </form>
          </div>
      </nav>
      );
  }
}
