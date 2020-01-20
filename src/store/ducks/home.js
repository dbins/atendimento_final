/**
 * Types & Creators
 */

export const Types = {
    HOME_REQUEST: "login/HOME_REQUEST",
    HOME_SUCCESS: "login/HOME_SUCCESS",
    HOME_FAILURE: "login/HOME_FAILURE"
  };

  /**
   * Initial State
   */
  export const INITIAL_STATE = {
    data: {},
    error: false,
    loading: false,
  };

  export default function home(state = INITIAL_STATE, action) {
    switch (action.type) {
      case Types.HOME_REQUEST:
        return {
          ...state
        };
      case Types.HOME_SUCCESS:
        return {
          ...state
        };
      case Types.HOME_FAILURE:
        return {
          ...state
        };
      default:
        return state;
    }
  }

  export const Creators = {
    homeRequest: (email, password) => ({
      type: Types.HOME_REQUEST,
      payload: { email, password }
    }),
    homeSuccess: data => ({ type: Types.HOME_SUCCESS, payload: { data } }),
    homeFailure: data => ({ type: Types.HOME_FAILURE, payload: { data } }),
  };
