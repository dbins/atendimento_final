/**
 * Types & Creators
 */

export const Types = {
  CONTATOS_REQUEST: "contatos/CONTATOS_REQUEST",
  CONTATOS_SUCCESS: "contatos/CONTATOS_SUCCESS",
  CONTATOS_FAILURE: "contatos/CONTATOS_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function contatos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CONTATOS_REQUEST:
      return {
        ...state
      };
    case Types.CONTATOS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONTATOS_FAILURE:
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
  contatosRequest: entidade => ({
    type: Types.CONTATOS_REQUEST,
    payload: entidade
  }),
  contatosSuccess: data => ({
    type: Types.CONTATOS_SUCCESS,
    payload: { data }
  }),
  contatosFailure: data => ({ type: Types.CONTATOS_FAILURE, payload: { data } })
};
