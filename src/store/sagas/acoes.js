import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as AcoesActions } from "../ducks/acoes";

export function* acoes(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "acoes/" + entidade);
    if (resultado.status === 200) {
      yield put(AcoesActions.acoesSuccess(resultado.data));
    } else {
      yield put(AcoesActions.acoesFailure({}));
    }
  } catch (err) {
    yield put(AcoesActions.acoesFailure(err));
  }
}
