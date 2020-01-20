/**
 * Types & Creators
 */

export const Types = {
  ACOES_REQUEST: "acoes/ACOES_REQUEST",
  ACOES_SUCCESS: "acoes/ACOES_SUCCESS",
  ACOES_FAILURE: "acoes/ACOES_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function acoes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ACOES_REQUEST:
      return {
        ...state
      };
    case Types.ACOES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.ACOES_FAILURE:
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
  acoesRequest: entidade => ({
    type: Types.ACOES_REQUEST,
    payload: entidade
  }),
  acoesSuccess: data => ({
    type: Types.ACOES_SUCCESS,
    payload: { data }
  }),
  acoesFailure: data => ({ type: Types.ACOES_FAILURE, payload: { data } })
};
