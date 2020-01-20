import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CadastroActions } from "../../../store/ducks/cadastro";

class Entidades extends Component {
  static propTypes = {
    cadastroRequest: PropTypes.func.isRequired,
    cadastroAtualizarRequest: PropTypes.func.isRequired,
    cadastroCargoRequest: PropTypes.func.isRequired,
    cadastroEstadocivilRequest: PropTypes.func.isRequired,
    cadastroSexoRequest: PropTypes.func.isRequired,
    cadastro: PropTypes.shape({
      data: PropTypes.shape({
        codigo: PropTypes.number,
        CPF: PropTypes.string,
        categoria: PropTypes.string,
        subcategoria: PropTypes.string,
        pontos: PropTypes.number,
        status_entidade: PropTypes.number,
        status_conta: PropTypes.number,
        descricao_status_conta: PropTypes.string,
        descricao_status_entidade: PropTypes.string,
        nome: PropTypes.string,
        data_nascimento: PropTypes.string,
        sexo: PropTypes.number,
        descricao_sexo: PropTypes.string,
        estado_civil: PropTypes.number,
        descricao_estado_civil: PropTypes.string,
        cargo: PropTypes.number,
        descricao_cargo: PropTypes.string,
        email: PropTypes.string,
        email_capturado: PropTypes.string
      }),
      cargo: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          tiulo: PropTypes.string
        }),
      ),
      estado_civil: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          tiulo: PropTypes.string
        }),
      ),
      sexo: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          tiulo: PropTypes.string
        }),
      ),
    }),
  };

  state = {
    status_acesso: "",
    status_troca: "",
    nome: "",
    data_nascimento: "",
    sexo: "",
    estado_civil: "",
    cargo: "",
    email: "",
    email_capturado: "",
  };

  salvar = e => {
    e.preventDefault();

    const { status_acesso, status_troca, nome, data_nascimento, sexo, estado_civil, cargo, email, email_capturado} = this.state;
    const { cadastroAtualizarRequest } = this.props;
    let continuar = true;
    let mensagem = "";

    //if (status_acesso === "" || status_troca === "" || nome === "" || data_nascimento === "" || sexo === "" || estado_civil === "" || cargo === "" || email === "" || email_capturado) {
    //  alert("Por favor informe todos os dados do cadastro");
    //  continuar = false;
    //} else {
      if (status_acesso === "") {
        mensagem += 'Por favor informe o status de acesso\n';
        continuar = false;
      }
      if (status_troca === "") {
        mensagem += 'Por favor informe o status de troca\n';
        continuar = false;
      }
      if (nome === "") {
        mensagem += 'Por favor informe o nome\n';
        continuar = false;
      }
      if (data_nascimento === "") {
        mensagem += 'Por favor informe a data de nascimento\n';
        continuar = false;
      }
      if (sexo === "") {
        mensagem += 'Por favor informe o sexo\n';
        continuar = false;
      }
      if (cargo === "") {
        mensagem += 'Por favor informe o cargo\n';
        continuar = false;
      }
      if (email === "") {
        mensagem += 'Por favor informe o email\n';
        continuar = false;
      }
      if (email_capturado === "") {
        mensagem += 'Por favor informe o email capturado\n';
        continuar = false;
      }
    //}

    if (continuar) {
      const dados = {
        codigo_entidade: 0,
        codigo_usuario: 0,
        status_acesso: status_acesso,
        status_troca: status_troca,
        nome: nome,
        data_nascimento: data_nascimento,
        sexo: sexo,
        estado_civil: estado_civil,
        cargo: cargo,
        email: email,
        email_capturado: email_capturado,
      }
      cadastroAtualizarRequest(dados);
    } else {
      alert(mensagem);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  componentDidMount(){
    const { cadastroRequest, cadastroCargoRequest, cadastroEstadocivilRequest, cadastroSexoRequest } = this.props;
    const entidade = this.props.entidade;
    const usuario = 0;
    cadastroRequest(entidade);
    cadastroCargoRequest(usuario);
    cadastroEstadocivilRequest(usuario);
    cadastroSexoRequest(usuario);
  }

  componentWillReceiveProps(newProps){
    //if (this.props.entidade !== newProps.entidade ) {
    //const { cadastroRequest, cadastroCargoRequest, cadastroEstadocivilRequest, cadastroSexoRequest } = this.props;
    //const entidade = newProps.entidade;
    //const usuario = 0;
    //cadastroRequest(entidade);
    //cadastroCargoRequest(usuario);
    //cadastroEstadocivilRequest(usuario);
    //cadastroSexoRequest(usuario);
    //}
  }

  render() {
    const { cadastro } = this.props;
    const user = cadastro.data;
    // const { status_acesso, status_troca, nome, data_nascimento, sexo, estado_civil, cargo, email, email_capturado} = this.state;
    return (
      <div className="tab-content clearfix" id="tabs-33">
        <form onSubmit={this.salvar}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="CPF">CPF</label>
              <input
                type="text"
                className="form-control"
                id="CPF"
                name="CPF"
                defaultValue = {user.CPF}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="categoria">Categoria</label>
              <input
                type="text"
                className="form-control"
                id="categoria"
                name="categoria"
                placeholder="Categoria"
                defaultValue = {user.categoria}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="subcategoria">Subcategoria</label>
              <input
                type="text"
                className="form-control"
                id="subcategoria"
                name="subcategoria"
                placeholder="Subcategoria"
                defaultValue = {user.subcategoria}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="pontos">Pontos</label>
              <input
                type="text"
                className="form-control"
                id="pontos"
                name="pontos"
                placeholder={"00000"}
                defaultValue = {user.pontos}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="status_acesso">Status de acesso ao site</label>
              <input
                type="text"
                className="form-control"
                id="status_acesso"
                name="status_acesso"
                placeholder="Ativo"
                defaultValue = {user.descricao_status_entidade}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="status">Status de Troca SAO/Site</label>
              <input
                type="text"
                name="status_conta"
                className="form-control"
                id="status_conta"
                placeholder="Consulta e Troca"
                defaultValue = {user.descricao_status_conta}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              placeholder="Participante do Programa"
              defaultValue = {user.nome}
              name="nome"
              onChange={this.alterar}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="data_nascimento">Data de Nascimento</label>
              <input
                type="text"
                className="form-control"
                id="data_nascimento"
                placeholder="00/00/0000"
                defaultValue = {user.data_nascimento}
                name="data_nascimento"
                onChange={this.alterar}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="sexo">Sexo</label>
              <select name="sexo" id="sexo" className="form-control"  value={user.sexo}>
                <option>Selecione...</option>
                {cadastro.sexo.map(item => (
                <option key={item.codigo} value={item.codigo}>{item.titulo}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="estado_civil">Estado Civil</label>
              <select name="estado_civil" id="estado_civil" className="form-control"  value={user.estado_civil}>
                <option>Selecione...</option>
                {cadastro.estado_civil.map(item => (
                <option key={item.codigo} value={item.codigo}>{item.titulo}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="cargo">Cargo</label>
              <select name="cargo" id="cargo" className="form-control"  value={user.cargo}>
                <option>Selecione...</option>
                {cadastro.cargo.map(item => (
                <option key={item.codigo} value={item.codigo}>{item.titulo}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                defaultValue = {user.email}
                name="email"
                onChange={this.alterar}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email_capturado">Email Capturado</label>
              <input
                type="text"
                className="form-control"
                id="email_capturado"
                defaultValue = {user.email_capturado}
                name="email_capturado"
                onChange={this.alterar}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Salvar Alterações
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cadastro: state.cadastro
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CadastroActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entidades);
