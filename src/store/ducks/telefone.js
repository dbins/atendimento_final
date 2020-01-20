/**
 * Types & Creators
 */

export const Types = {
  TELEFONE_REQUEST: "telefone/TELEFONE_REQUEST",
  TELEFONE_SUCCESS: "telefone/TELEFONE_SUCCESS",
  TELEFONE_FAILURE: "telefone/TELEFONE_FAILURE",
  TELEFONE_ADICIONAR_REQUEST: "telefone/TELEFONE_ADICIONAR_REQUEST",
  TELEFONE_ADICIONAR_SUCCESS: "telefone/TELEFONE_ADICIONAR_SUCCESS",
  TELEFONE_ADICIONAR_FAILURE: "telefone/TELEFONE_ADICIONAR_FAILURE",
  TELEFONE_TIPO_REQUEST: "telefone/TELEFONE_TIPO_REQUEST",
  TELEFONE_TIPO_SUCCESS: "telefone/TELEFONE_TIPO_SUCCESS",
  TELEFONE_TIPO_FAILURE: "telefone/TELEFONE_TIPO_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  error_adicionar: false,
  error_tipo: false,
  tipo: [],
  loading: false
};

export default function telefone(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TELEFONE_REQUEST:
      return {
        ...state
      };
    case Types.TELEFONE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.TELEFONE_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    case Types.TELEFONE_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.TELEFONE_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.TELEFONE_ADICIONAR_FAILURE:
      return {
        ...state,
        error_adicionar: true
      };
    case Types.TELEFONE_TIPO_REQUEST:
      return {
        ...state
      };
    case Types.TELEFONE_TIPO_SUCCESS:
      return {
        ...state,
        tipo: action.payload.data
      };
    case Types.TELEFONE_TIPO_FAILURE:
      return {
        ...state,
        error_tipo: true
      };
    default:
      return state;
  }
}

export const Creators = {
  telefoneRequest: entidade => ({
    type: Types.TELEFONE_REQUEST,
    payload: entidade
  }),
  telefoneSuccess: data => ({
    type: Types.TELEFONE_SUCCESS,
    payload: { data }
  }),
  telefoneFailure: data => ({
    type: Types.TELEFONE_FAILURE,
    payload: { data }
  }),
  telefoneAdicionarRequest: data => ({
    type: Types.TELEFONE_ADICIONAR_REQUEST,
    payload: data
  }),
  telefoneAdicionarSuccess: data => ({
    type: Types.TELEFONE_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  telefoneAdicionarFailure: data => ({
    type: Types.TELEFONE_ADICIONAR_FAILURE,
    payload: { data }
  }),
  telefoneTipoRequest: data => ({
    type: Types.TELEFONE_TIPO_REQUEST,
    payload: data
  }),
  telefoneTipoSuccess: data => ({
    type: Types.TELEFONE_TIPO_SUCCESS,
    payload: { data }
  }),
  telefoneTipoFailure: data => ({
    type: Types.TELEFONE_TIPO_FAILURE,
    payload: { data }
  })
};
