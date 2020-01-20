import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../../store/ducks/configuracoes";

class ModalCG extends Component {

  state = {
    nome: "",
    resposta_valida: "",
    status: ""
  };

  static propTypes = {
    configuracoesAcoesOpcoesAdicionarRequest: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.title = "Configurações - Combos";
  }

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  salvar = e => {
    e.preventDefault();
    const {configuracoesAcoesOpcoesAdicionarRequest} = this.props;
    const { nome,  resposta_valida, status} = this.state;
    let continuar = true;
    let mensagem = "";

      if (nome === "") {
        mensagem += "Por favor informe o nome da opção de resposta\n";
        continuar = false;
      }
      if (resposta_valida === "") {
        mensagem += "Informe se esta opção é a correta ou não\n";
        continuar = false;
      }
      if (status === "") {
        mensagem += "Informe se esta opção está ativo ou inativo\n";
        continuar = false;
      }


      if (continuar) {
        const dados = {
          pergunta: this.props.pergunta, //Precisa sempre o per_cod
          descricao: nome,
          valida: resposta_valida,
          ativo: status
        }
        configuracoesAcoesOpcoesAdicionarRequest(dados);
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
            <div className="form-group col-md-12">
              <label htmlFor="inputEmail4">Descrição</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                id="nome"
                placeholder="Nome da opção"
                onChange={this.alterar}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Opção Válida?</label>
              <select id="resposta_valida" name="resposta_valida" className="form-control"  onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">Ativo</label>
              <select name="status" id="status" className="form-control"  onChange={this.alterar}>
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
