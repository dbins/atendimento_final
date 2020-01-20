import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../../store/ducks/configuracoes";

class ModalCG extends Component {

  state = {
    nome: "",
    sequencia: "",
    tipo: "",
    status: ""
  };

  static propTypes = {
    configuracoesAcoesPerguntasAdicionarRequest: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.title = "Configurações - Combos";
  }

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  salvar = e => {
    e.preventDefault();
    const {configuracoesAcoesPerguntasAdicionarRequest} = this.props;
    const { nome, sequencia, tipo, status} = this.state;
    let continuar = true;
    let mensagem = "";

      if (nome === "") {
        mensagem += "Por favor informe o nome da pergunta\n";
        continuar = false;
      }
      if (sequencia === "") {
        mensagem += "Informe a ordem de exibição da pergunta\n";
        continuar = false;
      }
      if (tipo === "") {
        mensagem += "Informe o tipo de pergunta\n";
        continuar = false;
      }
      if (status === "") {
        mensagem += "Informe se a pergunta está ativo ou inativo\n";
        continuar = false;
      }


      if (continuar) {
        const dados = {
          acao: this.props.acao, //Precisa sempre o aco_cod
          pergunta: nome,
          sequencia: sequencia,
          tipo: tipo,
          ativo: status
        }
        configuracoesAcoesPerguntasAdicionarRequest(dados);
        this.props.fechar();
      } else {
        alert(mensagem);
      }

    }

  render() {
    return (
      <div className="modal-body">
        <form onSubmit={this.salvar}>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputEmail4">Descrição</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                id="nome"
                placeholder="Nome da pergunta"
                onChange={this.alterar}

              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputEmail4">Sequencia</label>
              <input
                type="text"
                className="form-control"
                name="sequencia"
                id="sequencia"
                placeholder="Código"
                onChange={this.alterar}

              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Tipo de Pergunta</label>
              <select name="tipo" id="tipo" className="form-control"  onChange={this.alterar}
>
                <option value="">Selecione...</option>
                <option value="1">Multipla Escolha</option>
                <option value="2">Resposta Única</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Ativo</label>
              <select name="status" id="status" className="form-control"  onChange={this.alterar}
>
                <option value="">Selecione...</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
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
