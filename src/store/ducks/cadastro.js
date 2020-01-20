/**
 * Types & Creators
 */

export const Types = {
  CADASTRO_REQUEST: "cadastro/CADASTRO_REQUEST",
  CADASTRO_SUCCESS: "cadastro/CADASTRO_SUCCESS",
  CADASTRO_FAILURE: "cadastro/CADASTRO_FAILURE",
  CADASTRO_ATUALIZAR_REQUEST: "cadastro/CADASTRO_ATUALIZAR_REQUEST",
  CADASTRO_ATUALIZAR_SUCCESS: "cadastro/CADASTRO_ATUALIZAR_SUCCESS",
  CADASTRO_ATUALIZAR_FAILURE: "cadastro/CADASTRO_ATUALIZAR_FAILURE",
  CADASTRO_CARGO_REQUEST: "cadastro/CADASTRO_CARGO_REQUEST",
  CADASTRO_CARGO_SUCCESS: "cadastro/CADASTRO_CARGO_SUCCESS",
  CADASTRO_CARGO_FAILURE: "cadastro/CADASTRO_CARGO_FAILURE",
  CADASTRO_ESTADOCIVIL_REQUEST: "cadastro/CADASTRO_ESTADOCIVIL_REQUEST",
  CADASTRO_ESTADOCIVIL_SUCCESS: "cadastro/CADASTRO_ESTADOCIVIL_SUCCESS",
  CADASTRO_ESTADOCIVIL_FAILURE: "cadastro/CADASTRO_ESTADOCIVIL_FAILURE",
  CADASTRO_SEXO_REQUEST: "cadastro/CADASTRO_SEXO_REQUEST",
  CADASTRO_SEXO_SUCCESS: "cadastro/CADASTRO_SEXO_SUCCESS",
  CADASTRO_SEXO_FAILURE: "cadastro/CADASTRO_SEXO_FAILURE",
  CADASTRO_CLIENTE_REQUEST: "cadastro/CADASTRO_CLIENTE_REQUEST",
  CADASTRO_CLIENTE_SUCCESS: "cadastro/CADASTRO_CLIENTE_SUCCESS",
  CADASTRO_CLIENTE_FAILURE: "cadastro/CADASTRO_CLIENTE_FAILURE",
  CADASTRO_PESQUISA_REQUEST: "cadastro/CADASTRO_PESQUISA_REQUEST",
  CADASTRO_PESQUISA_SUCCESS: "cadastro/CADASTRO_PESQUISA_SUCCESS",
  CADASTRO_PESQUISA_FAILURE: "cadastro/CADASTRO_PESQUISA_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: {},
  pesquisa: [],
  cliente: 0,
  cargo: [],
  estado_civil: [],
  sexo: [],
  error: false,
  error_atualizar: false,
  loading: false
};

export default function cadastro(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CADASTRO_REQUEST:
      return {
        ...state
      };
    case Types.CADASTRO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CADASTRO_FAILURE:
      return {
        ...state,
        data: {},
        error: true,
        loading: false
      };
    case Types.CADASTRO_CARGO_REQUEST:
      return {
        ...state
      };
    case Types.CADASTRO_CARGO_SUCCESS:
      return {
        ...state,
        cargo: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CADASTRO_CARGO_FAILURE:
      return {
        ...state,
        cargo: [],
        error: true,
        loading: false
      };
    case Types.CADASTRO_ESTADOCIVIL_REQUEST:
      return {
        ...state
      };
    case Types.CADASTRO_ESTADOCIVIL_SUCCESS:
      return {
        ...state,
        estado_civil: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CADASTRO_ESTADOCIVIL_FAILURE:
      return {
        ...state,
        estado_civil: [],
        error: true,
        loading: false
      };
    case Types.CADASTRO_SEXO_REQUEST:
      return {
        ...state
      };
    case Types.CADASTRO_SEXO_SUCCESS:
      return {
        ...state,
        sexo: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CADASTRO_SEXO_FAILURE:
      return {
        ...state,
        sexo: [],
        error: true,
        loading: false
      };
    case Types.CADASTRO_ATUALIZAR_REQUEST:
      return {
        ...state
      };
    case Types.CADASTRO_ATUALIZAR_SUCCESS:
      return {
        ...state
      };
    case Types.CADASTRO_ATUALIZAR_FAILURE:
      return {
        ...state,
        error_atualizar: true
      };
    case Types.CADASTRO_CLIENTE_REQUEST:
      return {
        ...state
      };
    case Types.CADASTRO_CLIENTE_SUCCESS:
      return {
        ...state,
        cliente: action.payload.data.payload
      };
    case Types.CADASTRO_CLIENTE_FAILURE:
      return {
        ...state,
        cliente: 0
      };
    case Types.CADASTRO_PESQUISA_REQUEST:
      return {
        ...state
      };
    case Types.CADASTRO_PESQUISA_SUCCESS:
      return {
        ...state,
        pesquisa: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CADASTRO_PESQUISA_FAILURE:
      return {
        ...state,
        pesquisa: [],
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  cadastroRequest: (entidade) => ({
    type: Types.CADASTRO_REQUEST,
    payload: { entidade }
  }),
  cadastroSuccess: data => ({
    type: Types.CADASTRO_SUCCESS,
    payload: { data }
  }),
  cadastroFailure: data => ({
    type: Types.CADASTRO_FAILURE,
    payload: { data }
  }),
  cadastroCargoRequest: (usuario) => ({
    type: Types.CADASTRO_CARGO_REQUEST,
    payload: {usuario }
  }),
  cadastroCargoSuccess: data => ({
    type: Types.CADASTRO_CARGO_SUCCESS,
    payload: { data }
  }),
  cadastroCargoFailure: data => ({
    type: Types.CADASTRO_CARGO_FAILURE,
    payload: { data }
  }),
  cadastroEstadocivilRequest: (usuario) => ({
    type: Types.CADASTRO_ESTADOCIVIL_REQUEST,
    payload: { usuario }
  }),
  cadastroEstadocivilSuccess: data => ({
    type: Types.CADASTRO_ESTADOCIVIL_SUCCESS,
    payload: { data }
  }),
  cadastroEstadocivilFailure: data => ({
    type: Types.CADASTRO_ESTADOCIVIL_FAILURE,
    payload: { data }
  }),
  cadastroSexoRequest: (usuario) => ({
    type: Types.CADASTRO_SEXO_REQUEST,
    payload: { usuario}
  }),
  cadastroSexoSuccess: data => ({
    type: Types.CADASTRO_SEXO_SUCCESS,
    payload: { data }
  }),
  cadastroSexoFailure: data => ({
    type: Types.CADASTRO_SEXO_FAILURE,
    payload: { data }
  }),
  cadastroAtualizarRequest: data => ({
    type: Types.CADASTRO_ATUALIZAR_REQUEST,
    payload: data
  }),
  cadastroAtualizarSuccess: data => ({
    type: Types.CADASTRO_ATUALIZAR_SUCCESS,
    payload: { data }
  }),
  cadastroAtualizarFailure: data => ({
    type: Types.CADASTRO_ATUALIZAR_FAILURE,
    payload: { data }
  }),
  cadastroClienteRequest: data => ({
    type: Types.CADASTRO_CLIENTE_REQUEST,
    payload: data
  }),
  cadastroClienteSuccess: data => ({
    type: Types.CADASTRO_CLIENTE_SUCCESS,
    payload: { data }
  }),
  cadastroClienteFailure: data => ({
    type: Types.CADASTRO_CLIENTE_FAILURE,
    payload: { data }
  }),
  cadastroPesquisaRequest: data => ({
    type: Types.CADASTRO_PESQUISA_REQUEST,
    payload: data
  }),
  cadastroPesquisaSuccess: data => ({
    type: Types.CADASTRO_PESQUISA_SUCCESS,
    payload: { data }
  }),
  cadastroPesquisaFailure: data => ({
    type: Types.CADASTRO_PESQUISA_FAILURE,
    payload: { data }
  })
};
