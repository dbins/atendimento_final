import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as ConfiguracoesActions } from "../ducks/configuracoes";

export function* acoes_config(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "acoes_config");
    if (resultado.status === 200) {
      yield put(ConfiguracoesActions.configuracoesAcoesSuccess(resultado.data));
    } else {
      yield put(ConfiguracoesActions.configuracoesAcoesFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesAcoesFailure(err));
  }
}

export function* pontuacoes(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "pontuacoes");
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesPontuacoesSuccess(resultado.data)
      );
    } else {
      yield put(ConfiguracoesActions.configuracoesPontuacoesFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesPontuacoesFailure(err));
  }
}

export function* cadastros_gerais(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "cadastros_gerais");
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesCadastrosGeraisSuccess(resultado.data)
      );
    } else {
      yield put(ConfiguracoesActions.configuracoesCadastrosGeraisFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesCadastrosGeraisFailure(err));
  }
}

export function* combos(data) {
  const tipo = data.payload;
  try {
    const resultado = yield call(api.get, "combos/" + tipo);
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesCadastrosGeraisCombosSuccess(
          resultado.data
        )
      );
    } else {
      yield put(
        ConfiguracoesActions.configuracoesCadastrosGeraisCombosFailure({})
      );
    }
  } catch (err) {
    yield put(
      ConfiguracoesActions.configuracoesCadastrosGeraisCombosFailure(err)
    );
  }
}

export function* perguntas(data) {
  const acao = data.payload;
  try {
    const resultado = yield call(api.get, "perguntas/" + acao);
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesAcoesPerguntasSuccess(resultado.data)
      );
    } else {
      yield put(ConfiguracoesActions.configuracoesAcoesPerguntasFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesAcoesPerguntasFailure(err));
  }
}

export function* opcoes(data) {
  const pergunta = data.payload;
  try {
    const resultado = yield call(api.get, "opcoes/" + pergunta);
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesAcoesOpcoesSuccess(resultado.data)
      );
    } else {
      yield put(ConfiguracoesActions.configuracoesAcoesOpcoesFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesAcoesOpcoesFailure(err));
  }
}

export function* acoes_adicionar(data) {
  yield put(ConfiguracoesActions.configuracoesAcoesAdicionarSuccess(data));
}

export function* perguntas_adicionar(data) {
  try {
    const resultado = yield call(api.post, "perguntas_inserir/", {
      pergunta: data.payload.pergunta,
      acao: data.payload.acao,
      ativo: data.payload.ativo,
      sequencia: data.payload.sequencia
    });
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesAcoesPerguntasAdicionarSuccess(data)
      );
      const resultado2 = yield call(api.get, "perguntas/" + data.payload.acao);
      if (resultado2.status === 200) {
        yield put(
          ConfiguracoesActions.configuracoesAcoesPerguntasSuccess(
            resultado2.data
          )
        );
      }
    } else {
      yield put(ConfiguracoesActions.configuracoesAcoesOpcoesFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesAcoesOpcoesFailure(err));
  }
}

export function* opcoes_adicionar(data) {
  try {
    const resultado = yield call(api.post, "opcoes_inserir/", {
      pergunta: data.payload.pergunta,
      descricao: data.payload.descricao,
      ativo: data.payload.ativo,
      valida: data.payload.valida
    });
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesAcoesOpcoesAdicionarSuccess(
          resultado.data
        )
      );
      const resultado2 = yield call(api.get, "opcoes/" + data.payload.pergunta);
      if (resultado2.status === 200) {
        yield put(
          ConfiguracoesActions.configuracoesAcoesOpcoesSuccess(resultado2.data)
        );
      }
    } else {
      yield put(
        ConfiguracoesActions.configuracoesAcoesOpcoesAdicionarFailure({})
      );
    }
  } catch (err) {
    yield put(
      ConfiguracoesActions.configuracoesAcoesOpcoessAdicionarFailure(err)
    );
  }
}

export function* cadastrosgerais_adicionar(data) {
  try {
    const resultado = yield call(api.post, "cadastros_gerais_inserir/", {
      tipo: data.payload.tipo,
      codigo_externo: data.payload.codigo_externo,
      descricao: data.payload.descricao,
      par01_num: data.payload.par01_num,
      ativo: data.payload.ativo
    });
    if (resultado.status === 200) {
      yield put(
        ConfiguracoesActions.configuracoesCadastrosGeraisSuccess(resultado.data)
      );
      const resultado2 = yield call(api.get, "combos/" + data.payload.tipo);
      if (resultado2.status === 200) {
        yield put(
          ConfiguracoesActions.configuracoesCadastrosGeraisCombosSuccess(
            resultado2.data
          )
        );
      }
    } else {
      yield put(ConfiguracoesActions.configuracoesCadastrosGeraisFailure({}));
    }
  } catch (err) {
    yield put(ConfiguracoesActions.configuracoesCadastrosGeraisFailure(err));
  }
}
