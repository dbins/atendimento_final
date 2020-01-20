import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as TelefoneActions } from "../ducks/telefone";

export function* telefone(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "telefone/" + entidade);
    if (resultado.status === 200) {
      yield put(TelefoneActions.telefoneSuccess(resultado.data));
    } else {
      yield put(TelefoneActions.telefoneFailure({}));
    }
  } catch (err) {
    yield put(TelefoneActions.telefoneFailure(err));
  }
}

export function* telefone_adicionar(data) {
  try {
    const resultado = yield call(api.post, "telefone_inserir/", {
      tipo: data.payload.tipo,
      entidade: data.payload.entidade,
      ddd: data.payload.ddd,
      telefone: data.payload.telefone
    });
    if (resultado.status === 200) {
      yield put(TelefoneActions.telefoneAdicionarSuccess(data));
      const resultado2 = yield call(
        api.get,
        "telefone/" + data.payload.entidade
      );
      if (resultado2.status === 200) {
        yield put(TelefoneActions.telefoneSuccess(resultado2.data));
      } else {
        yield put(TelefoneActions.telefoneFailure({}));
      }
    } else {
      yield put(TelefoneActions.telefoneAdicionarFailure({}));
    }
  } catch (err) {
    yield put(TelefoneActions.telefoneAdicionarFailure(err));
  }

}

export function* telefone_tipo() {
  try {
    const resultado = yield call(api.get, "telefone_tipo");
    if (resultado.status === 200) {
      yield put(TelefoneActions.telefoneTipoSuccess(resultado.data));
    } else {
      yield put(TelefoneActions.telefoneTipoFailure({}));
    }
  } catch (err) {
    yield put(TelefoneActions.telefoneTipoFailure(err));
  }
}
