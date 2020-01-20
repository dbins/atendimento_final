import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as HistoricoActions } from "../../../store/ducks/historico";

class Historico extends Component {
  static propTypes = {
    historicoRequest: PropTypes.func.isRequired,
    historicoAdicionarRequest: PropTypes.func.isRequired,
    historico: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          usuario: PropTypes.string,
          data: PropTypes.string,
          conteudo: PropTypes.string
        }),
      ),
    })
  };

  state = {
    historico_novo: "",
  };


  componentDidMount() {
    const { historicoRequest } = this.props;
    const usuario = this.props.entidade;
    historicoRequest(usuario);
  }

  salvar = e => {
    e.preventDefault();

    const { historico_novo } = this.state;
    const { historicoAdicionarRequest } = this.props;
    let continuar = true;
    if (historico_novo === "") {
      alert("Por favor informe o histórico");
      continuar = false;
    }
    if (continuar) {
      const dados = {
        cliente: this.props.entidade,
        atendente: localStorage.getItem("@SAO:usuario"),
        texto: historico_novo
      }
      historicoAdicionarRequest(dados);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { historico } = this.props;
    const { historico_novo } = this.state;
    return (
      <div className="tab-content clearfix" id="tabs-37">
        <form method="POST" onSubmit={this.salvar}>
          <div className="form-row">
            <label htmlFor="exampleFormControlTextarea1">
              Inserir Histórico
            </label>
            <textarea
              className="form-control"
              name="historico_novo"
              id="exampleFormControlTextarea1"
              rows={3}
              value={historico_novo}
              onChange={this.alterar}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Gravar
          </button>
        </form>
        {!historico.data.length && <p>Não existem informações</p>}
        {historico.data.map(item => (
          <div className="card" key={item.codigo}>
            {/* Default panel contents */}
            <div className="card-header">
              Data: {item.data} - Código: {item.codigo} - Usuário: {item.usuario}
            </div>
            <div className="card-body">
              <p className="card-text">{item.conteudo}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  historico: state.historico
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HistoricoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Historico);
