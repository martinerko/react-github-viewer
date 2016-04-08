import { GET_USER_PROFILE, GET_PR, GET_COMMITS } from '../constants/ActionTypes'

const defaults = {
  login: '',
  data: {}
}

export default function (state = defaults, action) {
  switch (action.type) {
    case GET_USER_PROFILE:
      const {data, login, error, errorMessage} = action

      return {
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
