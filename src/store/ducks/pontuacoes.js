/**
 * Types & Creators
 */

export const Types = {
  CONTAS_REQUEST: "contas/CONTAS_REQUEST",
  CONTAS_SUCCESS: "contas/CONTAS_SUCCESS",
  CONTAS_FAILURE: "contas/CONTAS_FAILURE",
  CONTAS_CARTOES_REQUEST: "contas/CONTAS_CARTOES_REQUEST",
  CONTAS_CARTOES_SUCCESS: "contas/CONTAS_CARTOES_SUCCESS",
  CONTAS_CARTOES_FAILURE: "contas/CONTAS_CARTOES_FAILURE",
  CONTAS_SALDO_REQUEST: "contas/CONTAS_SALDO_REQUEST",
  CONTAS_SALDO_SUCCESS: "contas/CONTAS_SALDO_SUCCESS",
  CONTAS_SALDO_FAILURE: "contas/CONTAS_SALDO_FAILURE",
  CONTAS_PONTOS_REQUEST: "contas/CONTAS_PONTOS_REQUEST",
  CONTAS_PONTOS_SUCCESS: "contas/CONTAS_PONTOS_SUCCESS",
  CONTAS_PONTOS_FAILURE: "contas/CONTAS_PONTOS_FAILURE",
  CONTAS_BONUS_REQUEST: "contas/CONTAS_BONUS_REQUEST",
  CONTAS_BONUS_SUCCESS: "contas/CONTAS_BONUS_SUCCESS",
  CONTAS_BONUS_FAILURE: "contas/CONTAS_BONUS_FAILURE",
  CONTAS_TRANSACAO_ADICIONAR_REQUEST:
    "contas/CONTAS_TRANSACAO_ADICIONAR_REQUEST",
  CONTAS_TRANSACAO_ADICIONAR_SUCCESS:
    "contas/CONTAS_TRANSACAO_ADICIONAR_SUCCESS",
  CONTAS_TRANSACAO_ADICIONAR_FAILURE:
    "contas/CONTAS_TRANSACAO_ADICIONAR_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  contas: [],
  cartoes: [],
  saldo: [],
  pontos: [],
  bonus: [],
  error: false,
  error_transacao: false,
  loading: false
};

export default function pontuacoes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CONTAS_REQUEST:
      return {
        ...state
      };
    case Types.CONTAS_SUCCESS:
      return {
        ...state,
        contas: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONTAS_FAILURE:
      return {
        ...state,
        contas: [],
        error: true,
        loading: false
      };
    case Types.CONTAS_CARTOES_REQUEST:
      return {
        ...state
      };
    case Types.CONTAS_CARTOES_SUCCESS:
      return {
        ...state,
        cartoes: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONTAS_CARTOES_FAILURE:
      return {
        ...state,
        cartoes: [],
        error: true,
        loading: false
      };
    case Types.CONTAS_SALDO_REQUEST:
      return {
        ...state
      };
    case Types.CONTAS_SALDO_SUCCESS:
      return {
        ...state,
        saldo: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONTAS_SALDO_FAILURE:
      return {
        ...state,
        saldo: [],
        error: true,
        loading: false
      };
    case Types.CONTAS_PONTOS_REQUEST:
      return {
        ...state
      };
    case Types.CONTAS_PONTOS_SUCCESS:
      return {
        ...state,
        pontos: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONTAS_PONTOS_FAILURE:
      return {
        ...state,
        pontos: [],
        error: true,
        loading: false
      };
    case Types.CONTAS_BONUS_REQUEST:
      return {
        ...state
      };
    case Types.CONTAS_BONUS_SUCCESS:
      return {
        ...state,
        bonus: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONTAS_BONUS_FAILURE:
      return {
        ...state,
        bonus: [],
        error: true,
        loading: false
      };
    case Types.CONTAS_TRANSACAO_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.CONTAS_TRANSACAO_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.CONTAS_TRANSACAO_ADICIONAR_FAILURE:
      return {
        ...state,
        error_transacao: true
      };
    default:
      return state;
  }
}

export const Creators = {
  contasRequest: entidade => ({
    type: Types.CONTAS_REQUEST,
    payload: entidade
  }),
  contasSuccess: data => ({
    type: Types.CONTAS_SUCCESS,
    payload: { data }
  }),
  contasFailure: data => ({
    type: Types.CONTAS_FAILURE,
    payload: { data }
  }),
  cartoesRequest: entidade => ({
    type: Types.CONTAS_CARTOES_REQUEST,
    payload: entidade
  }),
  cartoesSuccess: data => ({
    type: Types.CONTAS_CARTOES_SUCCESS,
    payload: { data }
  }),
  cartoesFailure: data => ({
    type: Types.CONTAS_CARTOES_FAILURE,
    payload: { data }
  }),
  saldoRequest: entidade => ({
    type: Types.CONTAS_SALDO_REQUEST,
    payload: entidade
  }),
  saldoSuccess: data => ({
    type: Types.CONTAS_SALDO_SUCCESS,
    payload: { data }
  }),
  saldoFailure: data => ({
    type: Types.CONTAS_SALDO_FAILURE,
    payload: { data }
  }),
  pontosRequest: entidade => ({
    type: Types.CONTAS_PONTOS_REQUEST,
    payload: entidade
  }),
  pontosSuccess: data => ({
    type: Types.CONTAS_PONTOS_SUCCESS,
    payload: { data }
  }),
  pontosFailure: data => ({
    type: Types.CONTAS_PONTOS_FAILURE,
    payload: { data }
  }),
  bonusRequest: entidade => ({
    type: Types.CONTAS_BONUS_REQUEST,
    payload: entidade
  }),
  bonusSuccess: data => ({
    type: Types.CONTAS_BONUS_SUCCESS,
    payload: { data }
  }),
  bonusFailure: data => ({
    type: Types.CONTAS_BONUS_FAILURE,
    payload: { data }
  }),
  transacaoRequest: data => ({
    type: Types.CONTAS_TRANSACAO_ADICIONAR_REQUEST,
    payload: data
  }),
  transacaoSuccess: data => ({
    type: Types.CONTAS_TRANSACAO_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  transacaoFailure: data => ({
    type: Types.CONTAS_TRANSACAO_ADICIONAR_FAILURE,
    payload: { data }
  })
};
