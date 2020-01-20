import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as CadastroActions } from "../ducks/cadastro";

export function* entidade(data) {
  const { entidade } = data.payload;
  try {
    const resultado = yield call(api.get, "entidade/" + entidade);
    if (resultado.status === 200) {
      if (resultado.data[0]) {
        localStorage.setItem("@SAO:entidade_saldo", resultado.data[0].pontos);
        localStorage.setItem("@SAO:entidade_CPF", resultado.data[0].CPF);
        yield put(CadastroActions.cadastroSuccess(resultado.data[0]));
      }
    } else {
      yield put(CadastroActions.cadastroFailure({}));
    }
  } catch (err) {
    yield put(CadastroActions.cadastroFailure(err));
  }
}

export function* cargos(data) {
  //const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "cargos");
    if (resultado.status === 200) {
      yield put(CadastroActions.cadastroCargoSuccess(resultado.data));
    } else {
      yield put(CadastroActions.cadastroCargoFailure({}));
    }
  } catch (err) {
    yield put(CadastroActions.cadastroCargoFailure(err));
  }
}

export function* estadocivil(data) {
  //const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "estadocivil");
    if (resultado.status === 200) {
      yield put(CadastroActions.cadastroEstadocivilSuccess(resultado.data));
    } else {
      yield put(CadastroActions.cadastroEstadocivilFailure({}));
    }
  } catch (err) {
    yield put(CadastroActions.cadastroEstadocivilFailure(err));
  }
}

export function* sexo(data) {
  //const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "sexo");
    if (resultado.status === 200) {
      yield put(CadastroActions.cadastroSexoSuccess(resultado.data));
    } else {
      yield put(CadastroActions.cadastroSexoFailure({}));
    }
  } catch (err) {
    yield put(CadastroActions.cadastroSexoFailure(err));
  }
}

export function* entidade_atualizar(data) {
  yield put(CadastroActions.cadastroAtualizarSuccess(data));
}

export function* cliente(data) {
  yield put(CadastroActions.cadastroClienteSuccess(data));
}

export function* entidade_pesquisar(data) {
  const pesquisar = data.payload;
  try {
    const resultado = yield call(api.post, "entidades_pesquisar", {
      criterio: pesquisar
    });
    if (resultado.status === 200) {
      yield put(CadastroActions.cadastroPesquisaSuccess(resultado.data));
      yield call(history.push, "/localizar_cliente");
    } else {
      yield put(CadastroActions.cadastroPesquisaFailure({}));
    }
  } catch (err) {
    yield put(CadastroActions.cadastroPesquisaFailure(err));
  }
}
