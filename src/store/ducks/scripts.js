/**
 * Types & Creators
 */

export const Types = {
  SCRIPTS_REQUEST: "scripts/SCRIPTS_REQUEST",
  SCRIPTS_SUCCESS: "scripts/SCRIPTS_SUCCESS",
  SCRIPTS_FAILURE: "scripts/SCRIPTS_FAILURE",
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export default function scripts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SCRIPTS_REQUEST:
      return {
        ...state
      };
    case Types.SCRIPTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.SCRIPTS_FAILURE:
      return {
        ...state,
        data: {},
        error: true,
        loading: false
      };
      default:
        return state;
    }
}

export const Creators = {
  scriptsRequest: () => ({
    type: Types.SCRIPTS_REQUEST,
    payload: {}
  }),
  scriptsSuccess: data => ({ type: Types.SCRIPTS_SUCCESS, payload: { data } }),
  scriptsFailure: data => ({ type: Types.SCRIPTS_FAILURE, payload: { data } }),
};
