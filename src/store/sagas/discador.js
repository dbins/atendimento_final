import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as DiscadorActions } from "../ducks/discador";

export function* discador(data) {
  //const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "discador");
    if (resultado.status === 200) {
      yield put(DiscadorActions.discadorSuccess(resultado.data));
      yield call(history.push, "/cadastro/10");
    } else {
      yield put(DiscadorActions.discadorFailure({}));
    }
  } catch (err) {
    yield put(DiscadorActions.discadorFailure(err));
  }
}
