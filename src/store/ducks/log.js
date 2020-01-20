/**
 * Types & Creators
 */

export const Types = {
  LOG_REQUEST: "log/LOG_REQUEST",
  LOG_SUCCESS: "log/LOG_SUCCESS",
  LOG_FAILURE: "log/LOG_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export default function log(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOG_REQUEST:
      return {
        ...state
      };
    case Types.LOG_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.LOG_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  logRequest: entidade => ({
    type: Types.LOG_REQUEST,
    payload: entidade
  }),
  logSuccess: data => ({
    type: Types.LOG_SUCCESS,
    payload: { data }
  }),
  logFailure: data => ({ type: Types.LOG_FAILURE, payload: { data } })
};
