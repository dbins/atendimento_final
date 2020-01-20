import { call, put } from "redux-saga/effects";
import api from "../../api";
import { Creators as LogActions } from "../ducks/log";

export function* log(data) {
  const { entidade } = data.payload;
  try {
    const resultado = yield call(api.get, "log/" + entidade);
    if (resultado.status === 200) {
      yield put(LogActions.logSuccess(resultado.data));
    } else {
      yield put(LogActions.logFailure({}));
    }
  } catch (err) {
    yield put(LogActions.logFailure(err));
  }
}
