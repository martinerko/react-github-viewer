import React, { Component } from 'react'

export default class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  renderProfileCard() {
    return (
      <div className="card text-xs-center">
        <img src={this.props.data.avatar_url} className="thumbnail" style={{
        width: "100%"
      }}/>
        <p className="card-text">
        {this.props.data.name}
        </p>
      </div>
      );
  }

  render() {
    let card = null

    if (!this.props.error) {
      card = this.renderProfileCard();
    }

    return (
      <div className="col-sm-3 col-md-2 sidebar">
          {card}
          <ul className="nav nav-sidebar">
              <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Analytics</a></li>
              <li><a href="#">Export</a></li>
          </ul>
          <ul className="nav nav-sidebar">
              <li><a href="">Nav item</a></li>
              <li><a href="">Nav item again</a></li>
              <li><a href="">One more nav</a></li>
              <li><a href="">Another nav item</a></li>
              <li><a href="">More navigation</a></li>
          </ul>
          <ul className="nav nav-sidebar">
              <li><a href="">Nav item again</a></li>
              <li><a href="">One more nav</a></li>
              <li><a href="">Another nav item</a></li>
          </ul>
      </div>
      );
  }
}
