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

class ConfiguracoesAcoesPerguntas extends Component {

  static propTypes = {
    configuracoesAcoesPerguntasRequest: PropTypes.func.isRequired,
    configuracoes: PropTypes.shape({
      perguntas: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          sequencia: PropTypes.number,
          pergunta: PropTypes.string,
          tipo: PropTypes.string
        }),
      ),
    })
  };

  state = {
    showModal: false,
  }


  componentDidMount() {
    document.title = "Configurações - Perguntas";
    const { configuracoesAcoesPerguntasRequest } = this.props;
    const acao = this.props.match.params.id;
    configuracoesAcoesPerguntasRequest(acao);
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
              <h3>Perguntas</h3>
              <p>
                <a
                  href="/"
                  onClick={this.openModal}
                >
                  Adicionar Pergunta
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
                    <th>Sequencia</th>
                    <th>Pergunta</th>
                    <th>Tipo</th>
                    <th>Opções de Resposta</th>
                    <th>Alterar</th>
                    <th>Excluir</th>
                  </tr>
                </thead>
                <tbody>
                {!configuracoes.perguntas.length && (
                <tr>
                  <td colSpan="7" align="center">
                    Não existem perguntas
                  </td>
                </tr>
              )}
              {configuracoes.perguntas.map(item => (
                  <tr key={item.codigo}>
                    <td>{item.codigo}</td>
                    <td>{item.sequencia}</td>
                    <td>{item.pergunta}</td>
                    <td>{item.tipo}</td>
                    <td>
                    <Link to={{
                              pathname: "/acoes_opcoes_resposta/" + item.codigo}}>
                      Opções</Link>
                    </td>
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
              <Link to={"/acoes_listagem"}>Voltar para a página de ações</Link>
            </div>
          </div>
        </section>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
         <Modal.Body><ModalCG acao={this.props.match.params.id} fechar={this.closeModal}/></Modal.Body>
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
)(ConfiguracoesAcoesPerguntas);
