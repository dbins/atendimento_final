import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as MotivosActions } from "../ducks/motivos";

export function* motivos() {
  try {
    const resultado = yield call(api.get, "motivos");
    if (resultado.status === 200) {
      yield put(MotivosActions.motivosSuccess(resultado.data));
    } else {
      yield put(MotivosActions.motivosFailure({}));
    }
  } catch (err) {
    yield put(MotivosActions.motivosFailure(err));
  }
}

export function* motivos_adicionar(data) {
  try {
    const resultado = yield call(api.post, "motivo_gravar", {
      entidade: data.payload.entidade,
      atendente: data.payload.atendente,
      motivo: data.payload.motivo
    });
    if (resultado.status === 200) {
      yield put(MotivosActions.motivosAdicionarSuccess(data));
    } else {
      yield put(MotivosActions.motivosAdicicionarFailure({}));
    }
  } catch (err) {
    yield put(MotivosActions.motivosAdicionarFailure(err));
  }
}
