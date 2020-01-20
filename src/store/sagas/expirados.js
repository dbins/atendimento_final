import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as ExpiradosActions } from "../ducks/expirados";

export function* expirados(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "expirados/" + entidade);
    if (resultado.status === 200) {
      yield put(ExpiradosActions.expiradosSuccess(resultado.data));
    } else {
      yield put(ExpiradosActions.expiradosFailure({}));
    }
  } catch (err) {
    yield put(ExpiradosActions.expiradosFailure(err));
  }
}
