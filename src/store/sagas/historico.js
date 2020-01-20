import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as HistoricoActions } from "../ducks/historico";

export function* historico(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "historico/" + entidade);
    if (resultado.status === 200) {
      yield put(HistoricoActions.historicoSuccess(resultado.data));
    } else {
      yield put(HistoricoActions.historicoFailure({}));
    }
  } catch (err) {
    yield put(HistoricoActions.historicoFailure(err));
  }
}

export function* historico_adicionar(data) {
  try {
    const resultado = yield call(api.post, "historico_gravar/", {
      cliente: data.payload.cliente,
      atendente: data.payload.atendente,
      texto: data.payload.texto
    });
    if (resultado.status === 200) {
      yield put(HistoricoActions.historicoAdicionarSuccess(data));
      const resultado2 = yield call(
        api.get,
        "historico/" + data.payload.cliente
      );
      if (resultado2.status === 200) {
        yield put(HistoricoActions.historicoSuccess(resultado2.data));
      } else {
        yield put(HistoricoActions.historicoFailure({}));
      }
    } else {
      yield put(HistoricoActions.historicoAdicionarFailure({}));
    }
  } catch (err) {
    yield put(HistoricoActions.historicoAdicionarFailure(err));
  }
}
