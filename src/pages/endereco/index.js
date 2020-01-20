import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as EnderecoActions } from "../../store/ducks/endereco";

//const estados = [
//  {sigla: 'AC', nome:'Acre' },
//  {sigla: 'AL', nome:'Alagoas' },
//  {sigla: 'AP', nome:'Amapá' },
//  {sigla: 'AM', nome:'Amazonas' },
//  {sigla: 'BA', nome:'Bahia' },
//  {sigla: 'CE', nome:'Ceará' },
//  {sigla: 'DF', nome:'Distrito Federal' },
//  {sigla: 'ES', nome:'Espírito Santo' },
//  {sigla: 'GO', nome:'Goías' },
//  {sigla: 'MA', nome:'Maranhão' },
//  {sigla: 'MT', nome:'Mato Grosso' },
//  {sigla: 'MS', nome:'Mato Grosso do Sul' },
//  {sigla: 'MG', nome:'Minas Gerais' },
//  {sigla: 'PA', nome:'Pará' },
//  {sigla: 'PB', nome:'Paraíba' },
//  {sigla: 'PR', nome:'Paraná' },
//  {sigla: 'PE', nome:'Pernambuco' },
//  {sigla: 'PI', nome:'Piauí' },
//  {sigla: 'RJ', nome:'Rio de Janeiro' },
//  {sigla: 'RN', nome:'Rio Grande do Norte' },
//  {sigla: 'RS', nome:'Rio Grande do Sul' },
//  {sigla: 'RO', nome:'Rondônia' },
//  {sigla: 'RR', nome:'Roraíma' },
//  {sigla: 'SC', nome:'Santa Catarina' },
//  {sigla: 'SP', nome:'São Paulo' },
//  {sigla: 'SE', nome:'Sergipe' },
//  {sigla: 'TO', nome:'Tocantins' },
//]

class Endereco extends Component {
  static propTypes = {
    enderecoAdicionarRequest: PropTypes.func.isRequired,
    enderecoCEPRequest: PropTypes.func.isRequired,
    enderecoCEPRuaRequest: PropTypes.func.isRequired,
    enderecoCEPBairroRequest: PropTypes.func.isRequired,
  };
  state = {
    tipo: "",
    endereco_novo: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    CEP: "",
  };
  componentDidMount(){
    document.title = "Endereço";
    const { enderecoTipoRequest } = this.props;
    enderecoTipoRequest();
  }
  salvar = e => {
    e.preventDefault();

    //const {  tipo, endereco_novo, numero, complemento, bairro, cidade, estado, CEP} = this.state;
    const {  tipo, numero, complemento} = this.state;
    const {  rua, bairro, cidade, estado, cep} = this.endereco.cep;
    const { enderecoAdicionarRequest} = this.props;
    let continuar = true;
    let mensagem = "";

    //if (tipo === "" || endereco_novo === "" || numero === "" || bairro === "" || cidade === "" || estado === "" || CEP){
    //  alert("Por favor preencha os dados do endereço");
    //  continuar = false;
    //} else {
      if (tipo === "") {
        mensagem += 'Por favor selecione o tipo de endereço\n';
        continuar = false;
      }
      if (rua === "") {
        mensagem += 'Por favor informe o endereço\n';
        continuar = false;
      }
      if (numero === "") {
        mensagem += 'Por favor informe o número\n';
        continuar = false;
      }
      if (bairro === "") {
        mensagem += 'Por favor informe o bairro\n';
        continuar = false;
      }
      if (cidade === "") {
        mensagem += 'Por favor informe a cidade\n';
        continuar = false;
      }
      if (estado === "") {
        mensagem += 'Por favor informe o estado\n';
        continuar = false;
      }
      if (cep === "") {
        mensagem += 'Por favor informe o CEP\n';
        continuar = false;
      }
    //}
    if (continuar) {
      const dados = {
        entidade: this.props.entidade,
        codigo_usuario: localStorage.getItem("@SAO:usuario"),
        tipo: tipo,
        rua: rua,
        numero: numero,
        compl: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
      }
      enderecoAdicionarRequest(dados);
	  this.props.fechar();
    } else {
      alert(mensagem);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  pesquisarCEP = e => {
    const cep = e.target.value;
    if (cep.length === 8){
    const { enderecoCEPRequest } = this.props;
    enderecoCEPRequest(cep);
    }

  };

  alterarRua = e => {
    const rua = e.target.value;
    const { enderecoCEPRuaRequest } = this.props;
    enderecoCEPRuaRequest(rua);
  };

  alterarBairro = e => {
    const bairro = e.target.value;
    const { enderecoCEPBairroRequest } = this.props;
    enderecoCEPBairroRequest(bairro);
  };

  render() {
    const {  numero, complemento} = this.state;
    const { endereco } = this.props;
    const cep = this.props.endereco.cep;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Adicionar Endereço</h3>
          <form onSubmit={this.salvar}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Tipo de Endereco</label>
                <select name="tipo" id="inputState" className="form-control"  onChange={this.alterar}>
                  <option value="">Selecione...</option>
                  {endereco.tipo.map(item => (
                    <option key={item.codigo} value={item.codigo}>{item.titulo}</option>
                    ))}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">CEP</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder={"00000000"}
                  name="CEP"
                  onChange={this.pesquisarCEP}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Endereço</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Rua X"
                  name="endereco_novo"
                  value={cep.rua}
                  onChange={this.alterarRua}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Número</label>
                <input
                  type="text"
                  className="form-control"
                  id="numero"
                  placeholder={"00"}
                  name="numero"
                  value={numero}
                  onChange={this.alterar}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Complemento</label>
                <input
                  type="text"
                  className="form-control"
                  id="complemento"
                  placeholder="Apto, casa"
                  name="complemento"
                  value={complemento}
                  onChange={this.alterar}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Bairro</label>
                <input
                  type="text"
                  className="form-control"
                  id="bairro"
                  placeholder="Bairro Y"
                  name="bairro"
                  value={cep.bairro}
                  onChange={this.alterarBairro}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Cidade</label>
                <input
                  type="text"
                  className="form-control"
                  id="cidade"
                  placeholder="Apto, casa"
                  name="cidade"
                  value={cep.cidade}
                  readOnly
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputState">Estado</label>
                <input
                  type="text"
                  className="form-control"
                  id="estado"
                  placeholder="Sigla"
                  name="estado"
                  value={cep.estado}
                  readOnly
                />
              </div>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  endereco: state.endereco
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(EnderecoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Endereco);
