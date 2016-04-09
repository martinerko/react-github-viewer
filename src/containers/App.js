import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TopPanel from '../components/TopPanel'
import SideBar from '../components/SideBar'
import DashBoard from '../components/DashBoard'
import * as GithubActions from '../actions'
import debounce from 'lodash.debounce'
import { GITHUB_LOGIN } from '../constants/Defaults'


class App extends Component {
  componentDidMount() {
    //preload data for default user
    this.props.actions.getUserProfile(GITHUB_LOGIN)
  }

  render() {
    const {githubData, actions} = this.props

    // debounce search method so we won't be doing unnecessary requests
    const getUserProfile = debounce(username => {
      actions.getUserProfile(username)
    }, 300)

    return (
      <div>
        <TopPanel getUserProfile={getUserProfile} />
        <div className="container-fluid">
          <div className="row">
            <SideBar {...githubData} {...actions} />
            <DashBoard {...githubData} />
          </div>
        </div>
      </div>
      );
  }
}


App.propTypes = {
  githubData: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    githubData: state.githubData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GithubActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
