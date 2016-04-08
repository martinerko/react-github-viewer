import { GET_USER_PROFILE, GET_PR, GET_COMMITS } from '../constants/ActionTypes'
import axios from 'axios'

const CLIENT_ID = '2161b6f34365089c494d'
const CLIENT_SECRET = '987b150832f7e50fbb91409149b6d4cd95e0c9b3'
const ROOT_URL = `https://api.github.com/users`
const AUTH_PARAMS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

export function getUserProfile(login) {
  const url = `${ROOT_URL}/${login}?${AUTH_PARAMS}`
  return axios.get(url)
    .then(processResult.bind(null, GET_USER_PROFILE, login))
    .catch(processError.bind(null, GET_USER_PROFILE, login));
}

export function getPullRequests(login) {
  return {
    type: GET_PR,
    payload: null //TODO
  }
}

export function getCommits(login) {
  return {
    type: GET_COMMITS,
    payload: null //TODO
  }
}


function processResult(type, login, {data}) {
  return {
    type,
    login,
    data
  }
}

function processError(type, login, response) {
  return {
    type,
    login,
    data: {},
    error: true,
    errorMessage: response.data.message
  }
}
