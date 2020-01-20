import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../../store/ducks/configuracoes";

class ModalCG extends Component {

  state = {
    nome: "",
    tipo: "",
    status: ""
  };

  static propTypes = {
    configuracoesCadastrosGeraisAdicionarRequest: PropTypes.func.isRequired
  };


  componentDidMount() {
    document.title = "Configurações - Combos";
  }

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  salvar = e => {
    e.preventDefault();
    const {configuracoesCadastrosGeraisAdicionarRequest} = this.props;
    const { nome,  tipo, status} = this.state;
    let continuar = true;
    let mensagem = "";

      if (nome === "") {
        mensagem += "Por favor informe o nome do literal\n";
        continuar = false;
      }
      if (tipo === "") {
        mensagem += "Informe se o literal é de pontos ou bônus\n";
        continuar = false;
      }
      if (status === "") {
        mensagem += "Informe se este código está ativo ou inativo\n";
        continuar = false;
      }


      if (continuar) {
        const dados = {
          tipo: 10, //Precisa sempre o cad_tipo
          codigo_externo: "",
          descricao: nome,
          par01_num: tipo,
          ativo: status
        }
        configuracoesCadastrosGeraisAdicionarRequest(dados);
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
            <div className="form-group col-md-4">
              <label htmlFor="inputEmail4">Descrição</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                id="nome"
                placeholder="Nome do Literal"
                onChange={this.alterar}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Ativo</label>
              <select name="status" id="status" className="form-control" onChange={this.alterar}>
                <option value="">Selecione...</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Tipo de Pontuação</label>
              <select name="tipo" id="tipo" className="form-control" onChange={this.alterar}>
                <option>Selecione...</option>
                <option value="1">Pontos</option>
                <option value="2">Bônus</option>
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
