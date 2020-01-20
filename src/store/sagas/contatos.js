import { call, put } from "redux-saga/effects";
import api from "../../api";
import { Creators as ContatosActions } from "../ducks/contatos";

export function* contatos(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "contatos/" + entidade);
    if (resultado.status === 200) {
      yield put(ContatosActions.contatosSuccess(resultado.data));
    } else {
      yield put(ContatosActions.contatosFailure({}));
    }
  } catch (err) {
    yield put(ContatosActions.contatosFailure(err));
  }
}
