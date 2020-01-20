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

class ConfiguracoesAcoesOpcoesResposta extends Component {

  static propTypes = {
    configuracoesAcoesOpcoesRequest: PropTypes.func.isRequired,
    configuracoes: PropTypes.shape({
      opcoes: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          descricao: PropTypes.string,
          status: PropTypes.string,
          resposta_certa: PropTypes.string
        }),
      ),
    })
  };


  state = {
    showModal: false,
  }

  componentDidMount() {
    document.title = "Configurações - Perguntas - Opções de Respostas";
    const { configuracoesAcoesOpcoesRequest } = this.props;
    const pergunta = this.props.match.params.id;
    configuracoesAcoesOpcoesRequest(pergunta);
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
              <h3>Opções de Resposta</h3>
              <p>
                <a
                  href="/"
                  onClick={this.openModal}
                >
                  Adicionar Opção de Resposta
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
                    <th>Status</th>
                    <th>Resposta Certa</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                  </tr>
                </thead>
                <tbody>
                {!configuracoes.opcoes.length && (
                <tr>
                  <td colSpan="7" align="center">
                    Não existem opções de resposta
                  </td>
                </tr>
              )}
              {configuracoes.opcoes.map(item => (
                  <tr key={item.codigo}>
                    <td>{item.codigo}</td>
                    <td>{item.descricao}</td>
                    <td>{item.status}</td>
                    <td>{item.resposta_certa}</td>
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
              <Link to={"/acoes_perguntas"}>
                Voltar para a página de perguntas
              </Link>
            </div>
          </div>
        </section>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Body>
            <ModalCG pergunta={this.props.match.params.id} fechar={this.closeModal}/>
          </Modal.Body>
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
)(ConfiguracoesAcoesOpcoesResposta);
