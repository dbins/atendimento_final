import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../../store/ducks/configuracoes";

class ModalCG extends Component {

  state = {
    nome: "",
    codigo_interno: "",
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
    const { nome,  codigo_interno, status} = this.state;
    let continuar = true;
    let mensagem = "";

      if (nome === "") {
        mensagem += "Por favor informe o nome do literal\n";
        continuar = false;
      }
      if (codigo_interno === "") {
        mensagem += "Informe o código interno\n";
        continuar = false;
      }
      if (status === "") {
        mensagem += "Informe se este código está ativo ou inativo\n";
        continuar = false;
      }


      if (continuar) {
        const dados = {
          tipo: 0, //Precisa sempre o cad_tipo
          nome,
          codigo_interno,
          status
        }
        configuracoesCadastrosGeraisAdicionarRequest(dados);
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
              <label htmlFor="nome">Descrição</label>
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
              <label htmlFor="codigo_interno">Código interno</label>
              <input
                type="text"
                name="codigo_interno"
                className="form-control"
                id="codigo_interno"
                placeholder="Código"
                onChange={this.alterar}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="status">Ativo</label>
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
