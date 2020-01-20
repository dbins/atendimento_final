/**
 * Types & Creators
 */

export const Types = {
  PAUSA_REQUEST: "pausa/PAUSA_REQUEST",
  PAUSA_SUCCESS: "pausa/PAUSA_SUCCESS",
  PAUSA_FAILURE: "pausa/PAUSA_FAILURE",
  PAUSA_ADICIONAR_REQUEST: "pausa/PAUSA_ADICIONAR_REQUEST",
  PAUSA_ADICIONAR_SUCCESS: "pausa/PAUSA_ADICIONAR_SUCCESS",
  PAUSA_ADICIONAR_FAILURE: "pausa/PAUSA_ADICIONAR_FAILURE",
  PAUSA_FINALIZAR_REQUEST: "pausa/PAUSA_FINALIZAR_REQUEST",
  PAUSA_FINALIZAR_SUCCESS: "pausa/PAUSA_FINALIZAR_SUCCESS",
  PAUSA_FINALIZAR_FAILURE: "pausa/PAUSA_FINALIZAR_FAILURE",
  PAUSA_TIPO_REQUEST: "pausa/PAUSA_TIPO_REQUEST",
  PAUSA_TIPO_SUCCESS: "pausa/PAUSA_TIPO_SUCCESS",
  PAUSA_TIPO_FAILURE: "pausa/PAUSA_TIPO_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  tipo: [],
  error: false,
  error_pausa: false,
  error_tipo: false,
  loading: false,
  codigo_pausa: 0
};

export default function pausa(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PAUSA_REQUEST:
      return {
        ...state
      };
    case Types.PAUSA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.PAUSA_FAILURE:
      return {
        ...state,
        data: {},
        error: true,
        loading: false
      };
    case Types.PAUSA_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.PAUSA_ADICIONAR_SUCCESS:
      return {
        ...state,
        codigo_pausa: action.payload.codigo
      };
    case Types.PAUSA_ADICIONAR_FAILURE:
      return {
        ...state,
        error_adicionar: true
      };
    case Types.PAUSA_FINALIZAR_REQUEST:
      return {
        ...state
      };
    case Types.PAUSA_FINALIZAR_SUCCESS:
      return {
        ...state,
        codigo_pausa: action.payload.codigo
      };
    case Types.PAUSA_FINALIZAR_FAILURE:
      return {
        ...state,
        error_adicionar: true
      };
    case Types.PAUSA_TIPO_REQUEST:
      return {
        ...state
      };
    case Types.PAUSA_TIPO_SUCCESS:
      return {
        ...state,
        tipo: action.payload.data
      };
    case Types.PAUSA_TIPO_FAILURE:
      return {
        ...state,
        error_tipo: true
      };
    default:
      return state;
  }
}

export const Creators = {
  pausaRequest: usuario => ({
    type: Types.PAUSA_REQUEST,
    payload: usuario
  }),
  pausaSuccess: data => ({
    type: Types.PAUSA_SUCCESS,
    payload: { data }
  }),
  pausaFailure: data => ({ type: Types.PAUSA_FAILURE, payload: { data } }),
  pausaAdicionarRequest: data => ({
    type: Types.PAUSA_ADICIONAR_REQUEST,
    payload: data
  }),
  pausaAdicionarSuccess: data => ({
    type: Types.PAUSA_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  pausaAdicionarFailure: data => ({
    type: Types.PAUSA_ADICIONAR_FAILURE,
    payload: { data }
  }),
  pausaFinalizarRequest: data => ({
    type: Types.PAUSA_FINALIZAR_REQUEST,
    payload: data
  }),
  pausaFinalizarSuccess: data => ({
    type: Types.PAUSA_FINALIZAR_SUCCESS,
    payload: { data }
  }),
  pausaFinalizarFailure: data => ({
    type: Types.PAUSA_FINALIZAR_FAILURE,
    payload: { data }
  }),
  pausaTipoRequest: data => ({
    type: Types.PAUSA_TIPO_REQUEST,
    payload: data
  }),
  pausaTipoSuccess: data => ({
    type: Types.PAUSA_TIPO_SUCCESS,
    payload: { data }
  }),
  pausaTipoFailure: data => ({
    type: Types.PAUSA_TIPO_FAILURE,
    payload: { data }
  })
};
