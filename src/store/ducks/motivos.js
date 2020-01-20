/**
 * Types & Creators
 */

export const Types = {
  MOTIVOS_REQUEST: "motivos/MOTIVOS_REQUEST",
  MOTIVOS_SUCCESS: "motivos/MOTIVOS_SUCCESS",
  MOTIVOS_FAILURE: "motivos/MOTIVOS_FAILURE",
  MOTIVOS_ADICIONAR_REQUEST: "motivos/MOTIVOS_ADICIONAR_REQUEST",
  MOTIVOS_ADICIONAR_SUCCESS: "motivos/MOTIVOS_ADICIONAR_SUCCESS",
  MOTIVOS_ADICIONAR_FAILURE: "motivos/MOTIVOS_ADICIONAR_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  error_adicionar: false,
  loading: false
};

export default function motivos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MOTIVOS_REQUEST:
      return {
        ...state
      };
    case Types.MOTIVOS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.MOTIVOS_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    case Types.MOTIVOS_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.MOTIVOS_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.MOTIVOS_ADICIONAR_FAILURE:
      return {
        ...state,
        error_adicionar: true
      };
    default:
      return state;
  }
}

export const Creators = {
  motivosRequest: usuario => ({
    type: Types.MOTIVOS_REQUEST,
    payload: usuario
  }),
  motivosSuccess: data => ({
    type: Types.MOTIVOS_SUCCESS,
    payload: { data }
  }),
  motivosFailure: data => ({ type: Types.MOTIVOS_FAILURE, payload: { data } }),
  motivosAdicionarRequest: data => ({
    type: Types.MOTIVOS_ADICIONAR_REQUEST,
    payload: data
  }),
  motivosAdicionarSuccess: data => ({
    type: Types.MOTIVOS_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  motivosAdicionarFailure: data => ({
    type: Types.MOTIVOS_ADICIONAR_FAILURE,
    payload: { data }
  })
};
