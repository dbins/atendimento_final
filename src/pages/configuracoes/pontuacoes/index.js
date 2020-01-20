import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../store/ducks/configuracoes";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Modal from 'react-bootstrap/Modal'
import ModalCG from "./modal";

class ConfiguracoesLiteraisPontuacao extends Component {

  static propTypes = {
    configuracoesPontuacoesRequest: PropTypes.func.isRequired,
    configuracoes: PropTypes.shape({
      acoes: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          descricao: PropTypes.string,
          status: PropTypes.string,
          tipo: PropTypes.string
        }),
      ),
    })
  };


  state = {
    showModal: false,
  }
  componentDidMount() {
    document.title = "Configurações - Literais de Pontuações";
    const { configuracoesPontuacoesRequest } = this.props;
    const usuario = 0;
    configuracoesPontuacoesRequest(usuario);
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
              <h3>Literais de Pontuação</h3>
              <p>
                <a
                    href="/"
                    onClick={this.openModal}
                >
                  Adicionar
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
                    <th>Tipo</th>
                    <th>Status</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                  </tr>
                </thead>
                <tbody>
                {!configuracoes.pontuacoes.length && (
                <tr>
                  <td colSpan="6" align="center">
                    Não existem mensagens
                  </td>
                </tr>
              )}
              {configuracoes.pontuacoes.map(item => (
                  <tr key={item.codigo}>
                    <td> {item.codigo} </td>
                    <td> {item.descricao} </td>
                    <td> {item.tipo} </td>
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
         <Modal.Body><ModalCG fechar={this.closeModal}/></Modal.Body>
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
)(ConfiguracoesLiteraisPontuacao);
