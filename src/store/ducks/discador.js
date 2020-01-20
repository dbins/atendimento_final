/**
 * Types & Creators
 */

export const Types = {
  DISCADOR_REQUEST: "discador/DISCADOR_REQUEST",
  DISCADOR_SUCCESS: "discador/DISCADOR_SUCCESS",
  DISCADOR_FAILURE: "discador/DISCADOR_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: {},
  error: false,
  loading: false
};

export default function discador(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.DISCADOR_REQUEST:
      return {
        ...state
      };
    case Types.DISCADOR_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.DISCADOR_FAILURE:
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
  discadorRequest: usuario => ({
    type: Types.DISCADOR_REQUEST,
    payload: usuario
  }),
  discadorSuccess: data => ({
    type: Types.DISCADOR_SUCCESS,
    payload: { data }
  }),
  discadorFailure: data => ({ type: Types.DISCADOR_FAILURE, payload: { data } })
};
