import { call, put } from "redux-saga/effects";
import api from "../../api";
//import history from "../../routes/history";

import { Creators as CarrinhoActions } from "../ducks/carrinho";

export function* carrinho(data) {
  const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "carrinho?usuario=" + usuario);
    if (resultado.status === 200) {
      yield put(CarrinhoActions.carrinhoSuccess(resultado.data));
    } else {
      yield put(CarrinhoActions.carrinhoFailure({}));
    }
  } catch (err) {
    yield put(CarrinhoActions.carrinhoFailure(err));
  }
}

export function* carrinho_endereco(data) {
  const entidade = data.payload;
  try {
    const resultado = yield call(api.get, "carrinho_endereco/" + entidade);
    if (resultado.status === 200) {
      yield put(CarrinhoActions.carrinhoEnderecoSuccess(resultado.data[0]));
    } else {
      yield put(CarrinhoActions.carrinhoEnderecoFailure({}));
    }
  } catch (err) {
    yield put(CarrinhoActions.carrinhoEnderecoFailure(err));
  }
}

export function* carrinho_finalizar(data) {
  try {
    const resultado = yield call(api.post, "finalizapedido", {
      CPF: data.payload.CPF,
      produtos: data.payload.produtos,
      usuario: data.payload.usuario
    });
    if (resultado.status === 200) {
      yield put(CarrinhoActions.carrinhoFinalizarSuccess(resultado.data));
    } else {
      yield put(CarrinhoActions.carrinhoFinalizarFailure({}));
    }
  } catch (err) {
    yield put(CarrinhoActions.carrinhoFinalizarFailure(err));
  }
}
