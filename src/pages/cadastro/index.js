import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
import Footer from "../../components/footer";
import HeaderCadastro from "../../components/headerCadastro";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Modal from 'react-bootstrap/Modal'
import Endereco from "../endereco";
import Telefone from "../telefone";
import Entidade from "./entidade";
// import Contatos from "./contatos";
import Info from "./info";
import Log from "./log";
import Historico from "./historico";
import { Creators as EnderecoActions } from "../../store/ducks/endereco";
import { Creators as TelefoneActions } from "../../store/ducks/telefone";

class Cadastro extends Component {
  static propTypes = {
    cadastroClienteRequest: PropTypes.func.isRequired,
    enderecoRequest: PropTypes.func.isRequired,
    telefoneRequest: PropTypes.func.isRequired,
    endereco: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          tipo: PropTypes.string,
          endereco: PropTypes.string,
          numero: PropTypes.string,
          complemento: PropTypes.string,
          bairro: PropTypes.string,
          cidade: PropTypes.string,
          estado: PropTypes.string,
          CEP: PropTypes.string,
          excluido: PropTypes.string
        }),
      ),
    }),
    telefone: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          tipo: PropTypes.string,
          ddd: PropTypes.string,
          telefone: PropTypes.string,
          data_cadastro: PropTypes.string,
          data_atualizacao: PropTypes.string
        }),
      ),
    })
  };


  state = {
    showEndereco: false,
    showTelefone: false,
    entidade: 0
  }

  async componentDidMount(){
    document.title = "Cadastro"
    const { enderecoRequest, telefoneRequest } = this.props;
    const entidade = await this.props.match.params.id;
    await this.setState({entidade: entidade});
    localStorage.setItem("@SAO:entidade", entidade);
    await enderecoRequest(entidade);
    await telefoneRequest(entidade);
    //await cadastroClienteRequest(entidade);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.id !== newProps.match.params.id){
      const { enderecoRequest, telefoneRequest } = this.props;
      const entidade = newProps.match.params.id;
      this.setState({entidade: entidade});
      localStorage.setItem("@SAO:entidade", entidade);
      enderecoRequest(entidade);
      telefoneRequest(entidade);
    }
  }

  openEndereco = () => {
    this.setState({showEndereco: true})
  }

  openTelefone = () => {
    this.setState({showTelefone: true})
  }

  handleCloseEndereco = () => {
    this.setState({showEndereco: false})
  }

  handleCloseTelefone = () => {
    this.setState({showTelefone: false})
  }

  confirmarCliqueEND = (event, codigo) => {
    event.preventDefault();
    if(window.confirm("Você deseja excluir este registro?")) {
      return true;
      //Enviar para o reducer
    } else {
      return false;
    }
  };

  confirmarCliqueTEL = (event, codigo) => {
    event.preventDefault();
    if(window.confirm("Você deseja excluir este registro?")) {
      return true;
      //Enviar para o reducer
    } else {
      return false;
    }
  };

  render() {
    const { endereco, telefone } = this.props;
    const entidade = parseInt(this.props.match.params.id);
    return (
      <div>
        <HeaderCadastro usuario={entidade}/>
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <Tabs defaultActiveKey="cadastro" id="uncontrolled-tab-example">
                <Tab eventKey="cadastro" title="Cadastro">
                  <Entidade entidade={entidade}/>
                </Tab>
                <Tab eventKey="contato" title="Contato">
                  <div className="tab-content clearfix" id="tabs-34">
                    <div className="table-responsive">
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Endereços</h3>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target=".bs-example-modal-lg"
                            onClick={this.openEndereco}
                          >
                            Adicionar Endereço
                          </button>
                        </div>
                      </div>

                      <table
                        id="datatable1"
                        className="table table-striped table-bordered"
                        cellSpacing={0}
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>Tipo</th>
                            <th>Endereço</th>
                            <th>Número</th>
                            <th>Complemento</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Cep</th>
                            <th>Marcar como excluído</th>
                          </tr>
                        </thead>
                        <tbody>
                        {!endereco.data.length && (
                          <tr>
                            <td colSpan="9" align="center">
                              Não existem endereços cadastrados
                            </td>
                          </tr>
                        )}
                        {endereco.data.map(item => (
                          <tr key={item.codigo}>
                            <td> {item.tipo} </td>
                            <td> {item.endereco} </td>
                            <td> {item.numero} </td>
                            <td> {item.complemento} </td>
                            <td> {item.bairro} </td>
                            <td> {item.cidade} </td>
                            <td> {item.estado} </td>
                            <td> {item.CEP} </td>
                            <td>
                            <a href="/"
                         onClick={(e)=>{this.confirmarCliqueEND(e, item.codigo)}}>Excluir</a>
                            </td>
                          </tr>
                           ))}

                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive">
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Telefones</h3>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target=".bs-example-modal-lg2"
                            onClick={this.openTelefone}
                          >
                            Adicionar Telefone
                          </button>
                        </div>
                      </div>

                      <table
                        id="datatable2"
                        className="table table-striped table-bordered"
                        cellSpacing={0}
                        width="100%"
                      >
                        <thead>
                          <tr>
                            <th>Tipo</th>
                            <th>DDD</th>
                            <th>Telefone</th>
                            <th>Data de Cadastro</th>
                            <th>Data de Atualização</th>
                            <th>Marcar como excluído</th>
                          </tr>
                        </thead>
                        <tbody>
                        {!telefone.data.length && (
                          <tr>
                            <td colSpan="6" align="center">
                              Não existem telefones cadastrados
                            </td>
                          </tr>
                        )}
                         {telefone.data.map(item => (
                          <tr key={item.codigo}>
                            <td> {item.tipo} </td>
                            <td> {item.ddd} </td>
                            <td> {item.telefone} </td>
                            <td> {item.data_cadastro} </td>
                            <td> {item.data_atualizacao} </td>
                            <td>
                            <a href="/"
                         onClick={(e)=>{this.confirmarCliqueTEL(e, item.codigo)}}>Excluir</a>
                            </td>
                          </tr>
                         ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="info" title="Outras Informações">
                  <Info />
                </Tab>
                <Tab eventKey="log" title="Log">
                 <Log entidade={entidade}/>
                </Tab>
                <Tab eventKey="historico" title="Histórico">
                  <Historico entidade={entidade}/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </section>
        <Footer />

        <Modal show={this.state.showEndereco} onHide={this.handleCloseEndereco}>
        <Modal.Body><Endereco entidade={entidade} fechar={this.handleCloseEndereco}/></Modal.Body>
        </Modal>

        <Modal show={this.state.showTelefone} onHide={this.handleCloseTelefone}>
        <Modal.Body><Telefone entidade={entidade} fechar={this.handleCloseTelefone}/></Modal.Body>
        </Modal>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  cadastro: state.cadastro,
  endereco: state.endereco,
  telefone: state.telefone
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...CadastroActions, ...EnderecoActions, ...TelefoneActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cadastro);
