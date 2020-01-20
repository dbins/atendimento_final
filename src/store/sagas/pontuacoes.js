import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as PontuacoesActions } from "../ducks/pontuacoes";

export function* contas(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "contas/" + entidade);
    if (resultado.status === 200) {
      yield put(PontuacoesActions.contasSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.contasFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.contasFailure(err));
  }
}

export function* cartoes(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "cartoes/" + entidade);
    if (resultado.status === 200) {
      yield put(PontuacoesActions.cartoesSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.cartoesFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.cartoesFailure(err));
  }
}

export function* saldo(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "saldo/" + entidade);
    if (resultado.status === 200) {
      yield put(PontuacoesActions.saldoSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.saldoFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.saldoFailure(err));
  }
}

export function* pontos(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "pontos/" + entidade);
    if (resultado.status === 200) {
      yield put(PontuacoesActions.pontosSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.pontosFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.pontosFailure(err));
  }
}

export function* bonus(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "bonus/" + entidade);
    if (resultado.status === 200) {
      yield put(PontuacoesActions.bonusSuccess(resultado.data));
    } else {
      yield put(PontuacoesActions.bonusFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.bonusFailure(err));
  }
}

export function* adicionar_transacao(data) {
  try {
    const resultado = yield call(api.post, "pontuacao_manual", {
      tipo: data.payload.tipo,
      literal: data.payload.literal,
      entidade: data.payload.entidade,
      pontos: data.payload.pontos,
      usuario: data.payload.usuario,
      motivo: data.payload.motivo
    });
    if (resultado.status === 200) {
      yield put(PontuacoesActions.transacaoSuccess(data));
    } else {
      yield put(PontuacoesActions.transacaoFailure({}));
    }
  } catch (err) {
    yield put(PontuacoesActions.transacaoFailure(err));
  }
}
