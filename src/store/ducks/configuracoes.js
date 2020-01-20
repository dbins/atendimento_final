/**
 * Types & Creators
 */

export const Types = {
  CONFIGURACOES_ACOES_REQUEST: "configuracoes/CONFIGURACOES_ACOES_REQUEST",
  CONFIGURACOES_ACOES_SUCCESS: "configuracoes/CONFIGURACOES_ACOES_SUCCESS",
  CONFIGURACOES_ACOES_FAILURE: "configuracoes/CONFIGURACOES_ACOES_FAILURE",
  CONFIGURACOES_ACOES_ADICIONAR_REQUEST:
    "configuracoes/CONFIGURACOES_ACOES_ADICIONAR_REQUEST",
  CONFIGURACOES_ACOES_ADICIONAR_SUCCESS:
    "configuracoes/CONFIGURACOES_ACOES_ADICIONAR_SUCCESS",
  CONFIGURACOES_ACOES_ADICIONAR_FAILURE:
    "configuracoes/CONFIGURACOES_ACOES_ADICIONAR_FAILURE",
  CONFIGURACOES_ACOES_PERGUNTAS_REQUEST:
    "configuracoes/CONFIGURACOES_ACOES_PERGUNTAS_REQUEST",
  CONFIGURACOES_ACOES_PERGUNTAS_SUCCESS:
    "configuracoes/CONFIGURACOES_ACOES_PERGUNTAS_SUCCESS",
  CONFIGURACOES_ACOES_PERGUNTAS_FAILURE:
    "configuracoes/CONFIGURACOES_ACOES_PERGUNTAS_FAILURE",
  CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_REQUEST:
    "configuracoes/CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_REQUEST",
  CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_SUCCESS:
    "configuracoes/CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_SUCCESS",
  CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_FAILURE:
    "configuracoes/CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_FAILURE",
  CONFIGURACOES_ACOES_OPCOES_REQUEST:
    "configuracoes/CONFIGURACOES_ACOES_OPCOES_REQUEST",
  CONFIGURACOES_ACOES_OPCOES_SUCCESS:
    "configuracoes/CONFIGURACOES_ACOES_OPCOES_SUCCESS",
  CONFIGURACOES_ACOES_OPCOES_FAILURE:
    "configuracoes/CONFIGURACOES_ACOES_OPCOES_FAILURE",
  CONFIGURACOES_ACOES_OPCOES_ADICIONAR_REQUEST:
    "configuracoes/CONFIGURACOES_ACOES_OPCOES_ADICIONAR_REQUEST",
  CONFIGURACOES_ACOES_OPCOES_ADICIONAR_SUCCESS:
    "configuracoes/CONFIGURACOES_ACOES_OPCOES_ADICIONAR_SUCCESS",
  CONFIGURACOES_ACOES_OPCOES_ADICIONAR_FAILURE:
    "configuracoes/CONFIGURACOES_ACOES_OPCOES_ADICIONAR_FAILURE",
  CONFIGURACOES_CADASTROS_GERAIS_REQUEST:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_REQUEST",
  CONFIGURACOES_CADASTROS_GERAIS_SUCCESS:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_SUCCESS",
  CONFIGURACOES_CADASTROS_GERAIS_FAILURE:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_FAILURE",
  CONFIGURACOES_PONTUACOES_REQUEST:
    "configuracoes/CONFIGURACOES_PONTUACOES_REQUEST",
  CONFIGURACOES_PONTUACOES_SUCCESS:
    "configuracoes/CONFIGURACOES_PONTUACOES_SUCCESS",
  CONFIGURACOES_PONTUACOES_FAILURE:
    "configuracoes/CONFIGURACOES_PONTUACOES_FAILURE",
  CONFIGURACOES_CADASTROS_GERAIS_COMBOS_REQUEST:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_COMBOS_REQUEST",
  CONFIGURACOES_CADASTROS_GERAIS_COMBOS_SUCCESS:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_COMBOS_SUCCESS",
  CONFIGURACOES_CADASTROS_GERAIS_COMBOS_FAILURE:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_COMBOS_FAILURE",
  CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_REQUEST:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_REQUEST",
  CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_SUCCESS:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_SUCCESS",
  CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_FAILURE:
    "configuracoes/CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  acoes: [],
  cadastros_gerais: [],
  combos: [],
  pontuacoes: [],
  perguntas: [],
  opcoes: [],
  error: false,
  loading: false
};

export default function configuracoes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CONFIGURACOES_CADASTROS_GERAIS_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_CADASTROS_GERAIS_SUCCESS:
      return {
        ...state,
        cadastros_gerais: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONFIGURACOES_CADASTROS_GERAIS_FAILURE:
      return {
        ...state,
        cadastros_gerais: [],
        error: true,
        loading: false
      };
    case Types.CONFIGURACOES_CADASTROS_GERAIS_COMBOS_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_CADASTROS_GERAIS_COMBOS_SUCCESS:
      return {
        ...state,
        combos: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONFIGURACOES_CADASTROS_GERAIS_COMBOS_FAILURE:
      return {
        ...state,
        combos: [],
        error: true,
        loading: false
      };
    case Types.CONFIGURACOES_ACOES_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_SUCCESS:
      return {
        ...state,
        acoes: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONFIGURACOES_ACOES_FAILURE:
      return {
        ...state,
        acoes: [],
        error: true,
        loading: false
      };
    case Types.CONFIGURACOES_ACOES_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_ADICIONAR_FAILURE:
      return {
        ...state
      };
    case Types.CONFIGURACOES_PONTUACOES_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_PONTUACOES_SUCCESS:
      return {
        ...state,
        pontuacoes: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONFIGURACOES_PONTUACOES_FAILURE:
      return {
        ...state,
        pontuacoes: [],
        error: true,
        loading: false
      };

    case Types.CONFIGURACOES_ACOES_PERGUNTAS_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_PERGUNTAS_SUCCESS:
      return {
        ...state,
        perguntas: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONFIGURACOES_ACOES_PERGUNTAS_FAILURE:
      return {
        ...state,
        perguntas: [],
        error: true,
        loading: false
      };

    case Types.CONFIGURACOES_ACOES_OPCOES_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_OPCOES_SUCCESS:
      return {
        ...state,
        opcoes: action.payload.data,
        error: false,
        loading: false
      };
    case Types.CONFIGURACOES_ACOES_OPCOES_FAILURE:
      return {
        ...state,
        opcoes: [],
        error: true,
        loading: false
      };
    case Types.CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_FAILURE:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_OPCOES_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_OPCOES_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.CONFIGURACOES_ACOES_OPCOES_ADICIONAR_FAILURE:
      return {
        ...state
      };
    case Types.CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_REQUEST:
      return {
        ...state
      };
    case Types.CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_SUCCESS:
      return {
        ...state
      };
    case Types.CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}

export const Creators = {
  configuracoesCadastrosGeraisRequest: tipo => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_REQUEST,
    payload: tipo
  }),
  configuracoesCadastrosGeraisSuccess: data => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_SUCCESS,
    payload: { data }
  }),
  configuracoesCadastrosGeraisFailure: data => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_FAILURE,
    payload: { data }
  }),
  configuracoesCadastrosGeraisCombosRequest: tipo => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_COMBOS_REQUEST,
    payload: tipo
  }),
  configuracoesCadastrosGeraisCombosSuccess: data => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_COMBOS_SUCCESS,
    payload: { data }
  }),
  configuracoesCadastrosGeraisCombosFailure: data => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_COMBOS_FAILURE,
    payload: { data }
  }),
  configuracoesAcoesRequest: (email, password) => ({
    type: Types.CONFIGURACOES_ACOES_REQUEST,
    payload: { email, password }
  }),
  configuracoesAcoesSuccess: data => ({
    type: Types.CONFIGURACOES_ACOES_SUCCESS,
    payload: { data }
  }),
  configuracoesAcoesFailure: data => ({
    type: Types.CONFIGURACOES_ACOES_FAILURE,
    payload: { data }
  }),
  configuracoesAcoesAdicionarRequest: (email, password) => ({
    type: Types.CONFIGURACOES_ACOES_ADICIONAR_REQUEST,
    payload: { email, password }
  }),
  configuracoesAcoesAdicionarSuccess: data => ({
    type: Types.CONFIGURACOES_ACOES_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  configuracoesAcoesAdicionarFailure: data => ({
    type: Types.CONFIGURACOES_ACOES_ADICIONAR_FAILURE,
    payload: { data }
  }),
  configuracoesPontuacoesRequest: (email, password) => ({
    type: Types.CONFIGURACOES_PONTUACOES_REQUEST,
    payload: { email, password }
  }),
  configuracoesPontuacoesSuccess: data => ({
    type: Types.CONFIGURACOES_PONTUACOES_SUCCESS,
    payload: { data }
  }),
  configuracoesPontuacoesFailure: data => ({
    type: Types.CONFIGURACOES_PONTUACOES_FAILURE,
    payload: { data }
  }),
  configuracoesAcoesPerguntasRequest: acao => ({
    type: Types.CONFIGURACOES_ACOES_PERGUNTAS_REQUEST,
    payload: acao
  }),
  configuracoesAcoesPerguntasSuccess: data => ({
    type: Types.CONFIGURACOES_ACOES_PERGUNTAS_SUCCESS,
    payload: { data }
  }),
  configuracoesAcoesPerguntasFailure: data => ({
    type: Types.CONFIGURACOES_ACOES_PERGUNTAS_FAILURE,
    payload: { data }
  }),
  configuracoesAcoesOpcoesRequest: pergunta => ({
    type: Types.CONFIGURACOES_ACOES_OPCOES_REQUEST,
    payload: pergunta
  }),
  configuracoesAcoesOpcoesSuccess: data => ({
    type: Types.CONFIGURACOES_ACOES_OPCOES_SUCCESS,
    payload: { data }
  }),
  configuracoesAcoesOpcoesFailure: data => ({
    type: Types.CONFIGURACOES_ACOES_OPCOES_FAILURE,
    payload: { data }
  }),
  configuracoesAcoesPerguntasAdicionarRequest: dados => ({
    type: Types.CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_REQUEST,
    payload: dados
  }),
  configuracoesAcoesPerguntasAdicionarSuccess: data => ({
    type: Types.CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  configuracoesAcoesPerguntasAdicionarFailure: data => ({
    type: Types.CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_FAILURE,
    payload: { data }
  }),
  configuracoesAcoesOpcoesAdicionarRequest: dados => ({
    type: Types.CONFIGURACOES_ACOES_OPCOES_ADICIONAR_REQUEST,
    payload: dados
  }),
  configuracoesAcoesOpcoesAdicionarSuccess: data => ({
    type: Types.CONFIGURACOES_ACOES_OPCOES_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  configuracoesAcoesOpcoesAdicionarFailure: data => ({
    type: Types.CONFIGURACOES_ACOES_OPCOES_ADICIONAR_FAILURE,
    payload: { data }
  }),
  configuracoesCadastrosGeraisAdicionarRequest: dados => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_REQUEST,
    payload: dados
  }),
  configuracoesCadastrosGeraisAdicionarSuccess: data => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_SUCCESS,
    payload: { data }
  }),
  configuracoesCadastrosGeraisAdicionarFailure: data => ({
    type: Types.CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_FAILURE,
    payload: { data }
  })
};
