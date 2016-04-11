import { GET_USER_PROFILE, GET_COMMITS, GET_REPOSITORIES, SHOW_LOADER } from '../constants/ActionTypes'
import moment from 'moment'

const defaults = {
  loading: true,
  login: '',
  data: {}
}

export default function (state = defaults, action) {
  const {type, login, error, errorMessage, loading} = action

  switch (type) {
    case GET_USER_PROFILE:
    case GET_COMMITS:
    case GET_REPOSITORIES:
    case SHOW_LOADER:

      //enhance original data from state with new one.
      //because we want to keep the original info about the user
      const data = mergeStateWithActionData(state, action)

      return {
        loading,
        type,
        data,
        login,
        error,
        errorMessage
      }
    default:
      return state
  }
}

function mergeStateWithActionData(state, {type, data}) {
  switch (type) {
    case GET_REPOSITORIES:
      //enhance original state with info about repositories
      return Object.assign({}, state.data, {
        repositories: data
      })
    case GET_COMMITS:
      const commits = processCommits(data)
      return Object.assign({}, state.data, {
        commits
      })
    case SHOW_LOADER:
      return Object.assign({}, state.data)
    default:
      return data
  }
}

function processCommits(repositories) {
  //get unique commits mapped by sha
  let shaMap = repositories.reduce(function(commitsMap, branches) {
    return branches.reduce(function(commitsMap, branch) {
      return branch.commits.reduce(commitsMapReducer, commitsMap)
    }, commitsMap)
  }, {})

  //convert them back to array sort them by unix time
  let commits = Object.keys(shaMap).map(key => shaMap[key])
  commits.sort((a, b) => b.unix - a.unix)

  //now create a map where commits are
  //grouped by years and also contains a calendar heatmap
  let resultMap = {}
  commits.forEach(function(commit) {
    let {year, unix} = commit

    if (!resultMap.hasOwnProperty(year)) {
      resultMap[year] = {
        commits: [],
        calendar: {}
      }
    }

    let {commits, calendar} = resultMap[year]
    //save commit unduer this year
    commits.push(commit)
    //mark commit into callendar
    calendar[unix] = (calendar[unix] || 0) + 1
  });

  return resultMap;
}

function commitsMapReducer(commitsMap, {sha, html_url, commit}) {
  if (!commitsMap.hasOwnProperty(sha)) {
    const {message, author} = commit
    const {name, date} = commit.author
    const dateObj = moment(moment(date).format('YYYY-MM-DD'))

    commitsMap[sha] = {
      sha,
      message,
      html_url,
      name,
      date,
      year: dateObj.format('YYYY'),
      unix: dateObj.unix()
    }
  }
  return commitsMap
}
