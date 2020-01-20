import { call, put } from "redux-saga/effects";
import api from "../../api";
//import history from "../../routes/history";

import { Creators as ResgatesActions } from "../ducks/resgates";

export function* resgates(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "resgates/" + entidade);
    if (resultado.status === 200) {
      yield put(ResgatesActions.resgatesSuccess(resultado.data));
    } else {
      yield put(ResgatesActions.resgatesFailure({}));
    }
  } catch (err) {
    yield put(ResgatesActions.resgatesFailure(err));
  }
}
