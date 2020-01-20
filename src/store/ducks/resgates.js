/**
 * Types & Creators
 */

export const Types = {
  RESGATES_REQUEST: "resgates/RESGATES_REQUEST",
  RESGATES_SUCCESS: "resgates/RESGATES_SUCCESS",
  RESGATES_FAILURE: "resgates/RESGATES_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function resgates(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.RESGATES_REQUEST:
      return {
        ...state
      };
    case Types.RESGATES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.RESGATES_FAILURE:
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
  resgatesRequest: entidade => ({
    type: Types.RESGATES_REQUEST,
    payload: entidade
  }),
  resgatesSuccess: data => ({
    type: Types.RESGATES_SUCCESS,
    payload: { data }
  }),
  resgatesFailure: data => ({ type: Types.RESGATES_FAILURE, payload: { data } })
};
