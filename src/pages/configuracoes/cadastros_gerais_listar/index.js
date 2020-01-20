import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from 'react-bootstrap/Modal'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../store/ducks/configuracoes";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import ModalCG from "./modal";

class ConfiguracoesCadastrosGeraisListar extends Component {
  static propTypes = {
    configuracoesCadastrosGeraisCombosRequest: PropTypes.func.isRequired,
    configuracoes: PropTypes.shape({
      combos: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          descricao: PropTypes.string,
          codigo_interno: PropTypes.string,
          status: PropTypes.string
        }),
      ),
    })
  };
  state = {
    showModal: false,
  }
  componentDidMount() {
    document.title = "Configurações - Combos";
    const { configuracoesCadastrosGeraisCombosRequest } = this.props;
    const tipo = this.props.match.params.id;;
    configuracoesCadastrosGeraisCombosRequest(tipo);
  }

  openModal = e => {
    e.preventDefault();
    this.setState({showModal: true});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  confirmarClique = (event, codigo) => {
    event.preventDefault();
    if(window.confirm("Você deseja excluir este registro?")) {
      return true;
      //Enviar para o reducer
    } else {
      return false;
    }
  };

  render() {
    const { configuracoes } = this.props;
    return (
      <div>
        <Header />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <h3>Combos do Sistema</h3>
              <p>
                <a
                  href="/"
                  onClick={this.openModal}
                >
                  Adicionar item
                </a>
              </p>

              <table
                id="datatable1"
                className="table table-striped table-bordered"
                cellSpacing={0}
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th>Código Interno</th>
                    <th>Status</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                  </tr>
                </thead>
                <tbody>
                {!configuracoes.combos.length && (
                <tr>
                  <td colSpan="6" align="center">
                    Não existem informações
                  </td>
                </tr>
              )}
              {configuracoes.combos.map(item => (
                  <tr key={item.codigo}>
                    <td> {item.codigo} </td>
                    <td> {item.descricao} </td>
                    <td> {item.codigo_interno} </td>
                    <td> {item.status} </td>
                    <td>
                      <a
                        href="/"
                        onClick={this.openModal}
                      >
                        Alterar
                      </a>
                    </td>
                    <td>
                      <a href="/"
                         onClick={(e)=>{this.confirmarClique(e, item.codigo)}}>Excluir</a>
                    </td>
                  </tr>
              ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
         <Modal.Body><ModalCG/></Modal.Body>
        </Modal>
        <Footer />
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
)(ConfiguracoesCadastrosGeraisListar);
