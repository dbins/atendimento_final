/**
 * Types & Creators
 */

export const Types = {
  PRODUTO_REQUEST: "produto/PRODUTO_REQUEST",
  PRODUTO_SUCCESS: "produto/PRODUTO_SUCCESS",
  PRODUTO_FAILURE: "produto/PRODUTO_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: {},
  error: false,
  loading: false
};

export default function produto(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PRODUTO_REQUEST:
      return {
        ...state
      };
    case Types.PRODUTO_SUCCESS:
      return {
        ...state,
        data: {},
        error: false,
        loading: false
      };
    case Types.PRODUTO_FAILURE:
      return {
        ...state,
        data: {},
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  produtoRequest: (email, password) => ({
    type: Types.PRODUTO_REQUEST,
    payload: { email, password }
  }),
  produtoSuccess: data => ({
    type: Types.PRODUTO_SUCCESS,
    payload: { data }
  }),
  produtoFailure: data => ({ type: Types.PRODUTO_FAILURE, payload: { data } })
};
