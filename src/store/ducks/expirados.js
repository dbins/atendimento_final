/**
 * Types & Creators
 */

export const Types = {
  EXPIRADOS_REQUEST: "expirados/EXPIRADOS_REQUEST",
  EXPIRADOS_SUCCESS: "expirados/EXPIRADOS_SUCCESS",
  EXPIRADOS_FAILURE: "expirados/EXPIRADOS_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function expirados(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.EXPIRADOS_REQUEST:
      return {
        ...state
      };
    case Types.EXPIRADOS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.EXPIRADOS_FAILURE:
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
  expiradosRequest: entidade => ({
    type: Types.EXPIRADOS_REQUEST,
    payload: entidade
  }),
  expiradosSuccess: data => ({
    type: Types.EXPIRADOS_SUCCESS,
    payload: { data }
  }),
  expiradosFailure: data => ({
    type: Types.EXPIRADOS_FAILURE,
    payload: { data }
  })
};
