/**
 * Types & Creators
 */

export const Types = {
  HISTORICO_REQUEST: "historico/HISTORICO_REQUEST",
  HISTORICO_SUCCESS: "historico/HISTORICO_SUCCESS",
  HISTORICO_FAILURE: "historico/HISTORICO_FAILURE",
  HISTORICO_ADICIONAR_REQUEST: "historico/HISTORICO_ADICIONAR_REQUEST",
  HISTORICO_ADICIONAR_SUCCESS: "historico/HISTORICO_ADICIONAR_SUCCESS",
  HISTORICO_ADICIONAR_FAILURE: "historico/HISTORICO_ADICIONAR_FAILURE"
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

export default function historico(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.HISTORICO_REQUEST:
      return {
        ...state
      };
    case Types.HISTORICO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.HISTORICO_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    case Types.HISTORICO_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.HISTORICO_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.HISTORICO_ADICIONAR_FAILURE:
      return {
        ...state,
        error_adicionar: true
      };
    default:
      return state;
  }
}

export const Creators = {
  historicoRequest: entidade => ({
    type: Types.HISTORICO_REQUEST,
    payload: entidade
  }),
  historicoSuccess: data => ({
    type: Types.HISTORICO_SUCCESS,
    payload: { data }
  }),
  historicoFailure: data => ({
    type: Types.HISTORICO_FAILURE,
    payload: { data }
  }),
  historicoAdicionarRequest: data => ({
    type: Types.HISTORICO_ADICIONAR_REQUEST,
    payload: data
  }),
  historicoAdicionarSuccess: data => ({
    type: Types.HISTORICO_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  historicoAdicionarFailure: data => ({
    type: Types.HISTORICO_ADICIONAR_FAILURE,
    payload: { data }
  })
};
