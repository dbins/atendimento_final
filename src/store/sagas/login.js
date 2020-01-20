import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as LoginActions } from "../ducks/login";

export function* login(data) {
  const { login, password } = data.payload;
  try {
    const resultado = yield call(api.post, "login", {
      login: login,
      senha: password
    });

    if (resultado.status === 200) {
      const data = resultado.data;
      if (data.token) {
        localStorage.setItem("@SAO:token", data.token);
        localStorage.setItem("@SAO:usuario", data.codigo);
        localStorage.setItem("@SAO:nome", data.nome);
        localStorage.setItem("@SAO:pendentes", data.pendentes);
        yield put(LoginActions.loginSuccess(data));
        yield call(history.push, "/home");
      } else {
        yield put(LoginActions.loginFailure({}));
      }
    } else {
      yield put(LoginActions.loginFailure({}));
    }
  } catch (err) {
    yield put(LoginActions.loginFailure(err));
  }
}

export function* logout() {
  localStorage.removeItem("@SAO:token");
  localStorage.removeItem("@SAO:usuario");
  localStorage.removeItem("@SAO:nome");
  localStorage.removeItem("@SAO:pendentes");
  localStorage.removeItem("@SAO:entidade");
  localStorage.removeItem("@SAO:entidade_saldo");
  localStorage.removeItem("@SAO:entidade_CPF");
  yield call(history.push, "/");
}
