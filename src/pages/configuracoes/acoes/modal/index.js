import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../../store/ducks/configuracoes";

class ModalCG extends Component {

  static propTypes = {
    configuracoesAcoesAdicionarRequest: PropTypes.func.isRequired
  };

  state = {
    nome: "",
    tipo: "",
    data_inicio: "",
    data_termino: "",
    tipo_pontuacao: "",
    enviar_SMS: "",
    todos: "",
    status: "",
    ativar_aplicativo: "",
    publico_alvo: "",
    modulo: "",
    grupo: ""
  };

  componentDidMount() {
    document.title = "Configurações - Combos";
  }

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  salvar = e => {
    e.preventDefault();

    const { configuracoesAcoesAdicionarRequest } = this.props;
    const { nome,  tipo, data_inicio, data_termino, tipo_pontuacao, enviar_SMS, todos, status, ativar_aplicativo, publico_alvo, modulo, grupo} = this.state;
    let continuar = true;
    let mensagem = "";

      if (nome === "") {
        mensagem += "Por favor informe o nome da açao\n";
        continuar = false;
      }
      if (tipo === "") {
        mensagem += "Selecione o tipo da ação\n";
        continuar = false;
      }
      if (data_inicio === "") {
        mensagem += "Por favor informe a data de ínicio\n";
        continuar = false;
      }
      if (data_termino === "") {
        mensagem += "Por favor informe a data de término\n";
        continuar = false;
      }
      if (tipo_pontuacao === "") {
        mensagem += "Se a ação gerar pontuação, por favor informar o valor\n";
        continuar = false;
      }
      if (enviar_SMS === "") {
        mensagem += "Esta ação deve enviar SMS?\n";
        continuar = false;
      }
      if (todos === "") {
        mensagem += "Esta ação se aplica a todos?\n";
        continuar = false;
      }

      if (status === "") {
        mensagem += "Por favor informe o status da ação\n";
        continuar = false;
      }
      if (ativar_aplicativo === "") {
        mensagem += "Esta ação permite interação pelo aplicativo\n";
        continuar = false;
      }
      if (publico_alvo === "") {
        mensagem += "Informe o público alvo\n";
        continuar = false;
      }
      if (modulo === "") {
        mensagem += "Informe o módulo\n";
        continuar = false;
      }
      if (grupo === "") {
        mensagem += "Informe o grupo\n";
        continuar = false;
      }

    if (continuar) {
      const dados = {
        nome,
        tipo,
        data_inicio,
        data_termino,
        tipo_pontuacao,
        enviar_SMS,
        todos,
        status,
        ativar_aplicativo,
        publico_alvo,
        modulo,
        grupo
      }
      configuracoesAcoesAdicionarRequest(dados);
      } else {
        alert(mensagem);
      }

    }



  render() {
    return (
      <div className="modal-body">
        <form onSubmit={this.salvar}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputState">Nome da Ação</label>
              <input
                type="text"
                name="nome"
                className="form-control"
                id="nomeAcao"
                placeholder="Nome da ação"
                onChange={this.alterar}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputState">Tipo de Ação</label>
              <select name="tipo "id="tipo" className="form-control"  onChange={this.alterar}>
                <option>Selecione...</option>
                <option>Pesquisa</option>
                <option>Quiz</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputState">Data de Início</label>
              <input
                type="text"
                className="form-control"
                name="data_inicio"
                id="data_inicio"
                placeholder="00/00/0000"
                onChange={this.alterar}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputState">Data de Término</label>
              <input
                type="text"
                className="form-control"
                name="data_termino"
                id="data_termino"
                placeholder="00/00/0000"
                onChange={this.alterar}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputState">Pontuação</label>
              <input
                type="text"
                className="form-control"
                name="pontuacao"
                id="pontuacao"
                placeholder={0}
                onChange={this.alterar}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Tipo de Pontuação</label>
              <select name="tipo_pontuacao" id="tipo_pontuacao" className="form-control"  onChange={this.alterar}>
                <option value="" >Selecione...</option>
                <option value="1">Literal 1</option>
                <option value="2">Literal 2</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Enviar SMS?</label>
              <select name="enviar_SMS"  id="enviar_SMS" className="form-control"  onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Todos?</label>
              <select name="todos"  className="form-control" onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Status</label>
              <select name="status" id="status" className="form-control" onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">Ativo</option>
                <option value="0">Inativo</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Ativar no Aplicativo?</label>
              <select name="ativar_aplicativo" id="ativar_aplicativo" className="form-control" onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Público Alvo</label>
              <select name="publico_alvo" id="publico_alvo" className="form-control" onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">Vendedor</option>
                <option value="2">Gerente</option>
                <option value="3">Proprietário</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Módulo</label>
              <select name="modulo" id="modulo" className="form-control" onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Grupo</label>
              <select name="grupo" className="form-control" onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  configuracoes: state.configuracoes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ConfiguracoesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalCG);
