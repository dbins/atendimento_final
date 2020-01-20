/**
 * Types & Creators
 */

export const Types = {
  CATALOGO_REQUEST: "catalogo/CATALOGO_REQUEST",
  CATALOGO_SUCCESS: "catalogo/CATALOGO_SUCCESS",
  CATALOGO_FAILURE: "catalogo/CATALOGO_FAILURE",
  CATALOGO_CATEGORIAS_REQUEST: "catalogo/CATALOGO_CATEGORIAS_REQUEST",
  CATALOGO_CATEGORIAS_SUCCESS: "catalogo/CATALOGO_CATEGORIAS_SUCCESS",
  CATALOGO_CATEGORIAS_FAILURE: "catalogo/CATALOGO_CATEGORIAS_FAILURE",
  CATALOGO_PRODUTO_REQUEST: "catalogo/CATALOGO_PRODUTO_REQUEST",
  CATALOGO_PRODUTO_SUCCESS: "catalogo/CATALOGO_PRODUTO_SUCCESS",
  CATALOGO_PRODUTO_FAILURE: "catalogo/CATALOGO_PRODUTO_FAILURE",
  CATALOGO_PESQUISA_REQUEST: "catalogo/CATALOGO_PESQUISA_REQUEST",
  CATALOGO_PESQUISA_SUCCESS: "catalogo/CATALOGO_PESQUISA_SUCCESS",
  CATALOGO_PESQUISA_FAILURE: "catalogo/CATALOGO_PESQUISA_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  produto: {},
  categorias: [],
  pagina: 1,
  paginas: 10,
  cat: "",
  filtro: "",
  faixa: "",
  ordernar: "",
  error: false,
  loading: false
};

export default function catalogo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CATALOGO_REQUEST:
      return {
        ...state
      };
    case Types.CATALOGO_SUCCESS:
      return {
        ...state,
        data: action.payload.data.registros,
        pagina: action.payload.data.pagina,
        paginas: action.payload.data.paginas,
        error: false,
        loading: false
      };
    case Types.CATALOGO_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    case Types.CATALOGO_CATEGORIAS_REQUEST:
      return {
        ...state
      };
    case Types.CATALOGO_CATEGORIAS_SUCCESS:
      return {
        ...state,
        categorias: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CATALOGO_CATEGORIAS_FAILURE:
      return {
        ...state,
        categorias: [],
        error: true,
        loading: false
      };
    case Types.CATALOGO_PRODUTO_REQUEST:
      return {
        ...state
      };
    case Types.CATALOGO_PRODUTO_SUCCESS:
      return {
        ...state,
        produto: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CATALOGO_PRODUTO_FAILURE:
      return {
        ...state,
        produto: {},
        error: true,
        loading: false
      };
    case Types.CATALOGO_PESQUISA_REQUEST:
      return {
        ...state
      };
    case Types.CATALOGO_PESQUISA_SUCCESS:
      return {
        ...state,
        data: action.payload.data.registros,
        pagina: action.payload.data.pagina,
        paginas: action.payload.data.paginas,
        error: false,
        loading: false
      };
    case Types.CATALOGO_PESQUISA_FAILURE:
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
  catalogoRequest: data => ({
    type: Types.CATALOGO_REQUEST,
    payload: data
  }),
  catalogoSuccess: data => ({
    type: Types.CATALOGO_SUCCESS,
    payload: { data }
  }),
  catalogoFailure: data => ({
    type: Types.CATALOGO_FAILURE,
    payload: { data }
  }),
  catalogoCategoriasRequest: (email, password) => ({
    type: Types.CATALOGO_CATEGORIAS_REQUEST,
    payload: { email, password }
  }),
  catalogoCategoriasSuccess: data => ({
    type: Types.CATALOGO_CATEGORIAS_SUCCESS,
    payload: { data }
  }),
  catalogoCategoriasFailure: data => ({
    type: Types.CATALOGO_CATEGORIAS_FAILURE,
    payload: { data }
  }),
  catalogoProdutoRequest: produto => ({
    type: Types.CATALOGO_PRODUTO_REQUEST,
    payload: produto
  }),
  catalogoProdutoSuccess: data => ({
    type: Types.CATALOGO_PRODUTO_SUCCESS,
    payload: { data }
  }),
  catalogoProdutoFailure: data => ({
    type: Types.CATALOGO_PRODUTO_FAILURE,
    payload: { data }
  }),
  catalogoPesquisaRequest: pesquisa => ({
    type: Types.CATALOGO_PESQUISA_REQUEST,
    payload: pesquisa
  }),
  catalogoPesquisaSuccess: data => ({
    type: Types.CATALOGO_PESQUISA_SUCCESS,
    payload: { data }
  }),
  catalogoPesquisaFailure: data => ({
    type: Types.CATALOGO_PESQUISA_FAILURE,
    payload: { data }
  })
};
