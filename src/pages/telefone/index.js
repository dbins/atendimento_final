import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TelefoneActions } from "../../store/ducks/telefone";

class Telefone extends Component {
  static propTypes = {
    telefoneAdicionarRequest: PropTypes.func.isRequired,
    telefoneTipoRequest: PropTypes.func.isRequired
  };
  state = {
    tipo: "",
    ddd: "",
    numero_telefone: "",
  };
  componentDidMount(){
    const { telefoneTipoRequest } = this.props;
    document.title = "Telefone";
    telefoneTipoRequest();
  }
  salvar = e => {
    e.preventDefault();

    const { tipo, DDD, numero_telefone } = this.state;
    const { telefoneAdicionarRequest } = this.props;
    let continuar = true;
    let mensagem = "";

    //if (tipo === "" || ddd === "" || numero_telefone === "") {
    //  alert("Por favor preencha os dados do telefone");
    //  continuar = false;
    //} else {
      if (tipo === "") {
        mensagem += 'Por favor selecione o tipo de telefone\n';
        continuar = false;
      }
      if (DDD === "") {
        mensagem += 'Por favor informe o DDD\n';
        continuar = false;
      }
      if (numero_telefone === "") {
        mensagem += 'Por favor informe o telefone\n';
        continuar = false;
      }
    //}
    if (continuar) {
      const dados = {
        entidade: this.props.entidade,
        codigo_usuario: localStorage.getItem("@SAO:usuario"),
        tipo: tipo,
        ddd: DDD,
        telefone: numero_telefone
      }
      telefoneAdicionarRequest(dados);
	  this.props.fechar();
    } else {
      alert(mensagem);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { DDD, numero_telefone } = this.state;
    const { telefone } = this.props;
    return (
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <h3>Adicionar Telefone</h3>
            <form onSubmit={this.salvar}>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="tipo">Tipo de Telefone</label>
                  <select id="tipo" name="tipo" className="form-control"  onChange={this.alterar}>
                    <option  value="">Selecione...</option>
                    {telefone.tipo.map(item => (
                    <option key={item.codigo} value={item.codigo}>{item.titulo}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="DDD">DDD</label>
                  <input
                    type="text"
                    className="form-control"
                    id="DDD"
                    placeholder={"00"}
                    name="DDD"
                    maxLength={2}
                    value={DDD}
                    onChange={this.alterar}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="numero_telefone">Número</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numero_telefone"
                    placeholder={"0000000"}
                    name="numero_telefone"
                    maxLength={10}
                    value={numero_telefone}
                    onChange={this.alterar}
                  />
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  telefone: state.telefone
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TelefoneActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Telefone);
