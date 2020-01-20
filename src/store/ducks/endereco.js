/**
 * Types & Creators
 */

export const Types = {
  ENDERECO_REQUEST: "endereco/ENDERECO_REQUEST",
  ENDERECO_SUCCESS: "endereco/ENDERECO_SUCCESS",
  ENDERECO_FAILURE: "endereco/ENDERECO_FAILURE",
  ENDERECO_ADICIONAR_REQUEST: "endereco/ENDERECO_ADICIONAR_REQUEST",
  ENDERECO_ADICIONAR_SUCCESS: "endereco/ENDERECO_ADICIONAR_SUCCESS",
  ENDERECO_ADICIONAR_FAILURE: "endereco/ENDERECO_ADICIONAR_FAILURE",
  ENDERECO_TIPO_REQUEST: "endereco/ENDERECO_TIPO_REQUEST",
  ENDERECO_TIPO_SUCCESS: "endereco/ENDERECO_TIPO_SUCCESS",
  ENDERECO_TIPO_FAILURE: "endereco/ENDERECO_TIPO_FAILURE",
  ENDERECO_CEP_REQUEST: "endereco/ENDERECO_CEP_REQUEST",
  ENDERECO_CEP_SUCCESS: "endereco/ENDERECO_CEP_SUCCESS",
  ENDERECO_CEP_FAILURE: "endereco/ENDERECO_CEP_FAILURE",
  ENDERECO_CEP_RUA_REQUEST: "endereco/ENDERECO_CEP_RUA_REQUEST",
  ENDERECO_CEP_BAIRRO_REQUEST: "endereco/ENDERECO_CEP_BAIRRO_REQUEST"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  tipo: [],
  cep: {
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: ""
  },
  error: false,
  error_adicionar: false,
  error_tipo: false,
  loading: false
};

export default function endereco(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ENDERECO_REQUEST:
      return {
        ...state
      };
    case Types.ENDERECO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.ENDERECO_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    case Types.ENDERECO_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.ENDERECO_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.ENDERECO_ADICIONAR_FAILURE:
      return {
        ...state,
        error_adicionar: true
      };
    case Types.ENDERECO_TIPO_REQUEST:
      return {
        ...state
      };
    case Types.ENDERECO_TIPO_SUCCESS:
      return {
        ...state,
        tipo: action.payload.data
      };
    case Types.ENDERECO_TIPO_FAILURE:
      return {
        ...state,
        error_tipo: true
      };
    case Types.ENDERECO_CEP_REQUEST:
      return {
        ...state
      };
    case Types.ENDERECO_CEP_SUCCESS:
      return {
        ...state,
        cep: action.payload.data
      };
    case Types.ENDERECO_CEP_FAILURE:
      return {
        ...state
      };
    case Types.ENDERECO_CEP_RUA_REQUEST:
      return {
        ...state,
        cep: { ...state.cep, rua: action.payload }
      };
    case Types.ENDERECO_CEP_BAIRRO_REQUEST:
      return {
        ...state,
        bairro: { ...state.cep, bairro: action.payload }
      };
    default:
      return state;
  }
}

export const Creators = {
  enderecoRequest: entidade => ({
    type: Types.ENDERECO_REQUEST,
    payload: entidade
  }),
  enderecoSuccess: data => ({
    type: Types.ENDERECO_SUCCESS,
    payload: { data }
  }),
  enderecoFailure: data => ({
    type: Types.ENDERECO_FAILURE,
    payload: { data }
  }),
  enderecoAdicionarRequest: data => ({
    type: Types.ENDERECO_ADICIONAR_REQUEST,
    payload: data
  }),
  enderecoAdicionarSuccess: data => ({
    type: Types.ENDERECO_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  enderecoAdicionarFailure: data => ({
    type: Types.ENDERECO_ADICIONAR_FAILURE,
    payload: { data }
  }),
  enderecoTipoRequest: data => ({
    type: Types.ENDERECO_TIPO_REQUEST,
    payload: data
  }),
  enderecoTipoSuccess: data => ({
    type: Types.ENDERECO_TIPO_SUCCESS,
    payload: { data }
  }),
  enderecoTipoFailure: data => ({
    type: Types.ENDERECO_TIPO_FAILURE,
    payload: { data }
  }),
  enderecoCEPRequest: data => ({
    type: Types.ENDERECO_CEP_REQUEST,
    payload: data
  }),
  enderecoCEPSuccess: data => ({
    type: Types.ENDERECO_CEP_SUCCESS,
    payload: { data }
  }),
  enderecoCEPFailure: data => ({
    type: Types.ENDERECO_CEP_FAILURE,
    payload: { data }
  }),
  enderecoCEPRuaRequest: data => ({
    type: Types.ENDERECO_CEP_RUA_REQUEST,
    payload: data
  }),
  enderecoCEPBairroRequest: data => ({
    type: Types.ENDERECO_CEP_BAIRRO_REQUEST,
    payload: data
  })
};
