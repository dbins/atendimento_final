import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as PausaActions } from "../ducks/pausa";

export function* pausa(data) {
  try {
    const usuario = data.payload;
    const resultado = yield call(api.get, "pausa/" + usuario);
    if (resultado.status === 200) {
      yield put(PausaActions.pausaSuccess(resultado.data));
    } else {
      yield put(PausaActions.pausaFailure({}));
    }
  } catch (err) {
    yield put(PausaActions.pausaFailure(err));
  }
}

export function* pausa_tipo(data) {
  // const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "pausa_tipo");
    if (resultado.status === 200) {
      yield put(PausaActions.pausaTipoSuccess(resultado.data));
    } else {
      yield put(PausaActions.pausaTipoFailure({}));
    }
  } catch (err) {
    yield put(PausaActions.pausaTipoFailure(err));
  }
}

export function* pausa_adicionar(data) {
  try {
    const resultado = yield call(api.post, "pausa_iniciar", {
      usuario: data.payload.usuario,
      motivo: data.payload.motivo
    });
    if (resultado.status === 200) {
      yield put(PausaActions.pausaAdicionarSuccess(resultado.data));
    } else {
      yield put(PausaActions.pausaAdicionarFailure({}));
    }
  } catch (err) {
    yield put(PausaActions.pausaAdicionarFailure(err));
  }
}

export function* pausa_finalizar(data) {
  try {
    const resultado = yield call(api.post, "pausa_finalizar", {
      usuario: data.payload.usuario,
      codigo_pausa: data.payload.codigo_pausa
    });
    if (resultado.status === 200) {
      yield put(PausaActions.pausaFinalizarSuccess(resultado.data));
    } else {
      yield put(PausaActions.pausaFinalizarFailure({}));
    }
  } catch (err) {
    yield put(PausaActions.pausaFinalizarFailure(err));
  }
}
