import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as EnderecoActions } from "../ducks/endereco";

export function* endereco(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "endereco/" + entidade);
    if (resultado.status === 200) {
      yield put(EnderecoActions.enderecoSuccess(resultado.data));
    } else {
      yield put(EnderecoActions.enderecoFailure({}));
    }
  } catch (err) {
    yield put(EnderecoActions.enderecoFailure(err));
  }
}

export function* endereco_adicionar(data) {
  try {
    const resultado = yield call(api.post, "endereco_inserir", {
      tipo: data.payload.tipo,
      entidade: data.payload.entidade,
      rua: data.payload.rua,
      numero: data.payload.numero,
      compl: data.payload.compl,
      cep: data.payload.cep,
      bairro: data.payload.bairro,
      cidade: data.payload.cidade,
      estado: data.payload.estado
    });
    if (resultado.status === 200) {
      yield put(EnderecoActions.enderecoAdicionarSuccess(data));
      const resultado2 = yield call(
        api.get,
        "endereco/" + data.payload.entidade
      );
      if (resultado2.status === 200) {
        yield put(EnderecoActions.enderecoSuccess(resultado2.data));
      } else {
        yield put(EnderecoActions.enderecoFailure({}));
      }
    } else {
      yield put(EnderecoActions.enderecoAdicionarFailure({}));
    }
  } catch (err) {
    yield put(EnderecoActions.enderecoAdicionarFailure(err));
  }
}

export function* endereco_tipo() {
  try {
    const resultado = yield call(api.get, "endereco_tipo");
    if (resultado.status === 200) {
      yield put(EnderecoActions.enderecoTipoSuccess(resultado.data));
    } else {
      yield put(EnderecoActions.enderecoTipoFailure({}));
    }
  } catch (err) {
    yield put(EnderecoActions.enderecoTipoFailure(err));
  }
}

export function* CEP(data) {
  const cep = data.payload;
  try {
    const resultado = yield call(api.get, "CEP/" + cep);
    if (resultado.status === 200) {
      yield put(EnderecoActions.enderecoCEPSuccess(resultado.data));
    } else {
      yield put(EnderecoActions.enderecoCEPFailure({}));
    }
  } catch (err) {
    yield put(EnderecoActions.enderecoCEPFailure(err));
  }
}
