/**
 * Types & Creators
 */

export const Types = {
  VALIDADES_REQUEST: "validades/VALIDADES_REQUEST",
  VALIDADES_SUCCESS: "validades/VALIDADES_SUCCESS",
  VALIDADES_FAILURE: "validades/VALIDADES_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function validades(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.VALIDADES_REQUEST:
      return {
        ...state
      };
    case Types.VALIDADES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.VALIDADES_FAILURE:
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
  validadesRequest: entidade => ({
    type: Types.VALIDADES_REQUEST,
    payload: entidade
  }),
  validadesSuccess: data => ({
    type: Types.VALIDADES_SUCCESS,
    payload: { data }
  }),
  validadesFailure: data => ({
    type: Types.VALIDADES_FAILURE,
    payload: { data }
  })
};
