import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../store/ducks/configuracoes";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Modal from "react-bootstrap/Modal";
import ModalCG from "./modal";

class ConfiguracoesAcoes extends Component {

  static propTypes = {
    configuracoesAcoesRequest: PropTypes.func.isRequired,
    configuracoes: PropTypes.shape({
      acoes: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          acao: PropTypes.string,
          tipo: PropTypes.string,
          data_inicial: PropTypes.string,
          data_final: PropTypes.string,
          status: PropTypes.string
        }),
      ),
    })
  };

  state = {
    showModal: false,
  }

  componentDidMount() {
    document.title = "Configurações - Ações";
    const { configuracoesAcoesRequest } = this.props;
    const usuario = 0;
    configuracoesAcoesRequest(usuario);
  }

  openModal = e => {
    e.preventDefault();
    this.setState({showModal: true});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    const { configuracoes } = this.props;
    return (
      <div>
        <Header />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <h3>Ações</h3>
              <p>
                <a
                  href="/"
                  onClick={this.openModal}
                >
                  Adicionar Ação
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
                    <th>Ação</th>
                    <th>Tipo</th>
                    <th>Data Inicial</th>
                    <th>Data Final</th>
                    <th>Status</th>
                    <th>Alterar</th>
                    <th>Perguntas</th>
                  </tr>
                </thead>
                <tbody>
                {!configuracoes.acoes.length && (
                <tr>
                  <td colSpan="7" align="center">
                    Não existem ações
                  </td>
                </tr>
              )}
              {configuracoes.acoes.map(item => (
                  <tr key={item.codigo}>
                    <td> {item.codigo} </td>
                    <td> {item.acao} </td>
                    <td> {item.tipo} </td>
                    <td> {item.data_inicial} </td>
                    <td> {item.data_final} </td>
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
                      <Link to={"/acoes_perguntas"}>Perguntas</Link>
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
)(ConfiguracoesAcoes);
