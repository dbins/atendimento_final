/**
 * Types & Creators
 */

export const Types = {
  PONTUACAO_REQUEST: "pontuacao/PONTUACAO_REQUEST",
  PONTUACAO_SUCCESS: "pontuacao/PONTUACAO_SUCCESS",
  PONTUACAO_FAILURE: "pontuacao/PONTUACAO_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: {},
  error: false,
  loading: false
};

export default function pontuacao(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PONTUACAO_REQUEST:
      return {
        ...state
      };
    case Types.PONTUACAO_SUCCESS:
      return {
        ...state,
        data: {},
        error: false,
        loading: false
      };
    case Types.PONTUACAO_FAILURE:
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
  pontuacaoRequest: (email, password) => ({
    type: Types.PONTUACAO_REQUEST,
    payload: { email, password }
  }),
  pontuacaoSuccess: data => ({
    type: Types.PONTUACAO_SUCCESS,
    payload: { data }
  }),
  pontuacaoFailure: data => ({
    type: Types.PONTUACAO_FAILURE,
    payload: { data }
  })
};
