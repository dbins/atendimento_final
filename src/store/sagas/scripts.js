import { call, put } from "redux-saga/effects";
import api from "../../api";
import { Creators as ScriptsActions } from "../ducks/scripts";

export function* scripts() {
  try {
    const resultado = yield call(api.get, "scripts");
    if (resultado.status === 200) {
      yield put(ScriptsActions.scriptsSuccess(resultado.data));
    } else {
      yield put(ScriptsActions.scriptsFailure({}));
    }
  } catch (err) {
    yield put(ScriptsActions.scriptsFailure(err));
  }
}
