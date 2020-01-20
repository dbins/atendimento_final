import { call, put } from "redux-saga/effects";
import api from "../../api";

import { Creators as OcorrenciasActions } from "../ducks/ocorrencias";

export function* ocorrencias(data) {
  //const { entidade } = data.payload;
  var request = {
    entidade: 0,
    status: "",
    todas: "",
    usuario: "",
    ocorrencia: "",
    assunto: "",
    aberta: "",
    encaminhada: "",
    dataInicio: "",
    dataFim: ""
  };
  if (data.payload.entidade) {
    request.entidade = data.payload.entidade;
  }
  if (data.payload.encaminhada) {
    request.encaminhada = data.payload.encaminhada;
  }
  if (data.payload.status) {
    request.status = data.payload.status;
  }
  if (data.payload.todas) {
    request.todas = data.payload.todas;
  }
  if (data.payload.usuario) {
    request.usuario = data.payload.usuario;
  }
  if (data.payload.ocorrencia) {
    request.ocorrencia = data.payload.ocorrencia;
  }
  if (data.payload.assunto) {
    request.assunto = data.payload.assunto;
  }
  if (data.payload.aberta) {
    request.aberta = data.payload.aberta;
  }
  //As datas vao ser recebidas como dd/mm/yyyy e convertidas para yyyy-mm-dd
  if (data.payload.dataInicio) {
    var tmp_data1 = data.payload.dataInicio;
    var tmp_data2 =
      tmp_data1.split("/")[2] +
      "-" +
      tmp_data1.split("/")[1] +
      "-" +
      tmp_data1.split("/")[0];
    request.dataInicio = tmp_data2;
  }
  if (data.payload.dataFim) {
    var tmp_data3 = data.payload.dataInicio;
    var tmp_data4 =
      tmp_data3.split("/")[2] +
      "-" +
      tmp_data3.split("/")[1] +
      "-" +
      tmp_data3.split("/")[0];
    request.dataFim = tmp_data4;
  }

  try {
    const resultado = yield call(api.post, "ocorrencias", {
      entidade: request.entidade,
      status: request.status,
      todas: request.todas,
      usuario: request.usuario,
      ocorrencia: request.ocorrencia,
      assunto: request.assunto,
      aberta: request.aberta,
      encaminhada: request.encaminhada,
      dataInicio: request.dataInicio,
      dataFim: request.dataFim
    });
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasFailure(err));
  }
}

export function* ocorrenciasAssunto(data) {
  const tipo = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencias_assunto/" + tipo);
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasAssuntoSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasAssuntoFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasAssuntoFailure(err));
  }
}

export function* ocorrenciasStatus(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencias_status");
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasStatusSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasStatusFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasStatusFailure(err));
  }
}

export function* ocorrenciasEncaminhada(data) {
  //const { usuario } = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrenciasEncaminhada");
    if (resultado.status === 200) {
      yield put(
        OcorrenciasActions.ocorrenciasEncaminhadaSuccess(resultado.data)
      );
    } else {
      yield put(OcorrenciasActions.ocorrenciasEncaminhadaFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasEncaminhadaFailure(err));
  }
}

export function* ocorrenciasTipo(data) {
  //const { usuario } = data.payload;

  try {
    const resultado = yield call(api.get, "ocorrencias_tipo");
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasTipoSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasTipoFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasTipoFailure(err));
  }
}

export function* ocorrenciasTotal(data) {
  const usuario = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencias_total/" + usuario);
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasTotalSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasTotalFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasTotalFailure(err));
  }
}

export function* ocorrencia(data) {
  const codigo = data.payload;
  try {
    const resultado = yield call(api.get, "ocorrencia/" + codigo);
    if (resultado.status === 200) {
      if (resultado.data[0]) {
        yield put(
          OcorrenciasActions.ocorrenciasDetalheSuccess(resultado.data[0])
        );
        const resultado2 = yield call(
          api.get,
          "ocorrencias_assunto/" + resultado.data[0].tipo
        );
        if (resultado2.status === 200) {
          yield put(
            OcorrenciasActions.ocorrenciasAssuntoSuccess(resultado2.data)
          );
        } else {
          yield put(OcorrenciasActions.ocorrenciasAssuntoFailure({}));
        }
      }
    } else {
      yield put(OcorrenciasActions.ocorrenciasDetalheFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasDetalheFailure(err));
  }
}

export function* ocorrencia_adicionar(data) {
  try {
    const resultado = yield call(api.post, "ocorrencia_gravar/", {
      cliente: data.payload.data.cliente,
      tipo: data.payload.data.tipo,
      assunto: data.payload.data.assunto,
      atendente: data.payload.data.atendente,
      status: data.payload.data.status,
      solicitada: data.payload.data.solicitada,
      encaminhada: data.payload.data.encaminhada,
      texto: data.payload.data.texto
    });
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasAdicionarSuccess(resultado.data));
    } else {
      yield put(OcorrenciasActions.ocorrenciasAdicionarFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasAdicionarFailure(err));
  }
}

export function* ocorrencia_atualizar(data) {
  try {
    const resultado = yield call(api.post, "ocorrencia_item_gravar/", {
      ocorrencia: data.payload.ocorrencia,
      tipo: data.payload.tipo,
      assunto: data.payload.assunto,
      atendente: data.payload.atendente,
      status: data.payload.status,
      encaminhada: data.payload.encaminhada,
      texto: data.payload.texto
    });
    if (resultado.status === 200) {
      yield put(OcorrenciasActions.ocorrenciasAtualizarSuccess(resultado.data));
      const resultado2 = yield call(
        api.get,
        "ocorrencia/" + data.payload.ocorrencia
      );
      if (resultado2.status === 200) {
        if (resultado2.data[0]) {
          yield put(
            OcorrenciasActions.ocorrenciasDetalheSuccess(resultado2.data[0])
          );
        }
      }
    } else {
      yield put(OcorrenciasActions.ocorrenciasAtualizarFailure({}));
    }
  } catch (err) {
    yield put(OcorrenciasActions.ocorrenciasAtualizarFailure(err));
  }
}
