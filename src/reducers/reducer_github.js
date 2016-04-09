import { GET_USER_PROFILE, GET_PR, GET_COMMITS, GET_REPOSITORIES, GET_ISSUES } from '../constants/ActionTypes'

const defaults = {
  login: '',
  data: {}
}

export default function (state = defaults, action) {
  const type = action.type

  switch (type) {
    case GET_USER_PROFILE:
    case GET_PR:
    case GET_COMMITS:
    case GET_REPOSITORIES:
    case GET_ISSUES:
      const {login, error, errorMessage} = action
      //enhance original data from state with new one.
      //because we want to keep the original info about the user
      const data = mergeStateWithActionData(state, action)

      return {
        type,
        data,
        login,
        error,
        errorMessage
      }
    default:
      break;
  }

  return state;
}

function mergeStateWithActionData(state, {type, data}) {
  switch (type) {
    case GET_PR:
      return data;
    case GET_COMMITS:
      return data;
    case GET_REPOSITORIES:
      //enhance original state with info about repositories
      return Object.assign({}, state.data, {
        repositories: data
      });
    case GET_ISSUES:
      return data;
    default:
      return data;
  }
}
