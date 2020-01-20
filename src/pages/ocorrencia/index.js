import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from 'react-bootstrap-dialog'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OcorrenciasActions } from "../../store/ducks/ocorrencias";

class Ocorrencia extends Component {

  static propTypes = {
    ocorrenciasRequest: PropTypes.func.isRequired,
    ocorrenciasAdicionarRequest: PropTypes.func.isRequired,
    ocorrenciasAssuntoRequest: PropTypes.func.isRequired,
    ocorrenciasEncaminhadaRequest: PropTypes.func.isRequired,
    ocorrenciasTotalRequest: PropTypes.func.isRequired,
    ocorrencias: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          numero:  PropTypes.number,
          abertura: PropTypes.string,
          assunto: PropTypes.string,
          aberta_por: PropTypes.string,
          encaminhada_para: PropTypes.string,
          cliente: PropTypes.string,
          codigo_cliente: PropTypes.number,
          CPF: PropTypes.string,
          status: PropTypes.string,
          encerrada: PropTypes.string,
          CNPJ_Loja: PropTypes.string,
          ultima_interacao: PropTypes.string,
          qtde_de_dias: PropTypes.number,
        }),
      ),
      assunto: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      status: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      encaminhada: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      tipo: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      ocorrencia: PropTypes.shape({
        numero: PropTypes.number,
        tipo: PropTypes.string,
        cliente: PropTypes.string,
        codigo_cliente: PropTypes.string,
        CPF: PropTypes.string,
        telefone: PropTypes.string,
        assunto: PropTypes.string,
        status: PropTypes.string,
        encaminhar: PropTypes.string,
        data: PropTypes.string,
        usuario: PropTypes.string,
        codigo_usuario: PropTypes.string,
        historico: PropTypes.arrayOf(
          PropTypes.shape({
            data:  PropTypes.string,
            usuario: PropTypes.string,
            resposta: PropTypes.string
          }),
        )
      }),
    })
  };

  state = {
    tipo: "",
    assunto: "",
    status: "",
    encaminhar: "",
    resposta: ""
  };


  componentDidMount(){
    document.title = "Ocorrência";
    const { ocorrenciasAssuntoRequest, ocorrenciasStatusRequest, ocorrenciasEncaminhadaRequest, ocorrenciasTipoRequest, ocorrenciasDetalheRequest } = this.props;
    const usuario = 0;
    const codigo_ocorrencia = this.props.match.params.id;
    ocorrenciasAssuntoRequest(0);
    ocorrenciasStatusRequest(usuario);
    ocorrenciasEncaminhadaRequest(usuario);
    ocorrenciasTipoRequest(usuario);
    ocorrenciasDetalheRequest(codigo_ocorrencia);
  }

  salvar = e => {
    e.preventDefault();
    const {  numero, tipo, assunto, status, encaminhar} = this.props.ocorrencias.ocorrencia;
    const {  resposta } = this.state;
    const { ocorrenciasAdicionarRequest, ocorrenciasAtualizarRequest } = this.props;
    let continuar = true;
    let mensagem = "";
    //if (tipo === "" || assunto === "" || status === "" || encaminhar === "" || resposta === ""){
    //  alert("Por favor preencha os dados da ocorrência");
    //  continuar = false;
    //} else {
      if (tipo === "") {
        mensagem = "Selecione o tipo da ocorrência.\n\n";
        continuar = false;
      }
      if (assunto === "") {
        mensagem = "Selecione o assunto da ocorrência\n";
        continuar = false;
      }
      if (status === "") {
        mensagem = "Selecione o status da ocorrência\n";
        continuar = false;
      }
      if (encaminhar === "") {
        mensagem = "Selecione o usuário que deve tratar a ocorrência\n";
        continuar = false;
      }
      if (resposta === "") {
        mensagem = "Por favor informe a resposta da ocorrência\n";
        continuar = false;
      }
    //}

    if (continuar) {
      const dados = {
        ocorrencia: numero,
        cliente: localStorage.getItem("@SAO:entidade"),
        atendente: localStorage.getItem("@SAO:usuario"),
        tipo: tipo,
        assunto: assunto,
        status: status,
        solicitada: localStorage.getItem("@SAO:usuario"),
        encaminhada: encaminhar,
        texto: resposta
      }
      if (numero === 0){
        ocorrenciasAdicionarRequest(dados);
      } else {
        ocorrenciasAtualizarRequest(dados);
      }
      window.self.close();
    } else {
      this.dialog.showAlert(mensagem);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  alterarTipo = e => {
    const { ocorrenciaCampoTipoRequest, ocorrenciasAssuntoRequest } = this.props;
    var valor = e.target.value;
    ocorrenciaCampoTipoRequest(valor);
    ocorrenciasAssuntoRequest(valor);
  };

  alterarAssunto = e => {
    const { ocorrenciaCampoAssuntoRequest } = this.props;
    var valor = e.target.value;
    ocorrenciaCampoAssuntoRequest(valor);
  };

  alterarEncaminhar = e => {
    const { ocorrenciaCampoEncaminharRequest } = this.props;
    var valor = e.target.value;
    ocorrenciaCampoEncaminharRequest(valor);
  };
  alterarStatus = e => {
    const { ocorrenciaCampoStatusRequest } = this.props;
    var valor = e.target.value;
    ocorrenciaCampoStatusRequest(valor);
  };

  render() {

    const { ocorrencias } = this.props;
    const { ocorrencia } = this.props.ocorrencias;
    if (this.props.match.params.id === 0){
      ocorrencia.cliente = "PROGRAMAR...";
      ocorrencia.CPF = "PROGRAMAR...";
      ocorrencia.telefone = "PROGRAMAR...";
    }
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Nova Ocorrência</h3>
          <form onSubmit={this.salvar}>
            <div className="form-row">
              {this.props.match.params.id !== 0 &&
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">No. Ocorrência</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="No."
                  value={ocorrencia.numero}
                />
              </div>
              }
              <div className="form-group col-md-6">
                <label htmlFor="tipo">Tipo de Ocorrência</label>
                <select name="tipo" id="tipo" className="form-control" onChange={this.alterarTipo}  value={ocorrencia.tipo}>
                  <option>Selecione...</option>
                  {ocorrencias.tipo.map(tipo => (
                  <option key={tipo.codigo} value={tipo.codigo}>{tipo.titulo}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="cliente">Cliente</label>
                <input
                  type="text"
                  className="form-control"
                  id="cliente"
                  placeholder="....."
                  value={ocorrencia.cliente}
                  name="cliente"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="CPF">CPF</label>
                <input
                  type="text"
                  className="form-control"
                  id="CPF"
                  name="CPF"
                  placeholder={"00000000000"}
                  value={ocorrencia.CPF}
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  name="telefone"
                  placeholder="(00)00000-0000"
                  value={ocorrencia.telefone}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="assunto">Assunto</label>
                <select id="assunto" name="assunto" className="form-control"  onChange={this.alterarAssunto} value={ocorrencia.assunto}>
                  <option value="0">Selecione...</option>
                  {ocorrencias.assunto.map(assunto => (
                  <option value={assunto.codigo}>{assunto.titulo}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="status">Status</label>
                <select name="status" id="status" className="form-control"  onChange={this.alterarStatus} value={ocorrencia.status}>
                  <option>Selecione...</option>
                  {ocorrencias.status.map(status => (
                  <option value={status.codigo}>{status.titulo}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="encaminhar">Encaminhar</label>
                <select name="encamnhar" id="encaminhar" className="form-control" onChange={this.alterarEncaminhar} value={ocorrencia.encaminhar}>
                  <option>Selecione...</option>
                  {ocorrencias.encaminhada.map(encaminhada => (
                  <option value={encaminhada.codigo}>{encaminhada.titulo}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <p>
                <strong>
                  Ocorrência aberta por XXXX - Departamento xxxxxx
                </strong>
              </p>
            </div>
            {ocorrencia.status !== 68 &&
            <div className="form-row">
              <label htmlFor="exampleFormControlTextarea1">
                Resposta desta Ocorrência
              </label>
              <textarea
                className="form-control"
                name="resposta"
                id="resposta"
                rows={3}
                defaultValue={""}
                onChange={this.alterar}
              />
            </div>
            }
            <br />
            {ocorrencia.status !== 68 &&
            <button type="submit" className="btn btn-primary">
              Gravar Ocorrência
            </button>
            }
          </form>
          <br />
          <h3>Histórico</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Data</th>
                <th>Usuário</th>
                <th>Resposta</th>
              </tr>
            </thead>
            <tbody>
            {!ocorrencia.historico.length && <tr><td colSpan="3" align="center">Nenhuma ocorrência pendente</td></tr>}
            {ocorrencia.historico.map((item, index) => (
              <tr key={index}>
                <td> {item.data} </td>
                <td> {item.usuario} </td>
                <td> {item.resposta} </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <Dialog ref={(component) => { this.dialog = component }} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  ocorrencias: state.ocorrencias
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OcorrenciasActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ocorrencia);
