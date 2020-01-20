import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ContatosActions } from "../../store/ducks/contatos";

class Contatos extends Component {

  static propTypes = {
    contatosRequest: PropTypes.func.isRequired,
    contatos: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id:  PropTypes.number,
          email: PropTypes.string,
          ddd: PropTypes.string,
          telefone: PropTypes.string,
          tipo: PropTypes.string,
          mensagem: PropTypes.string,
          data: PropTypes.string
        }),
      ),
    })
  };

  componentDidMount() {
    document.title = "Contatos";
    const { contatosRequest } = this.props;
    const entidade = this.props.match.params.id;;
    contatosRequest(entidade);
  }
  render() {
    const { contatos } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Contatos</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>E-mail</th>
                <th>DDD</th>
                <th>Telefone</th>
                <th>Tipo</th>
                <th>Mensagem</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {!contatos.data.length && (
                <tr>
                  <td colSpan="7" align="center">
                    Não existem mensagens
                  </td>
                </tr>
              )}
              {contatos.data.map(contato => (
                <tr key={contato.id}>
                  <td> {contato.id} </td>
                  <td> {contato.email} </td>
                  <td> {contato.ddd} </td>
                  <td> {contato.telefone} </td>
                  <td> {contato.tipo} </td>
                  <td> {contato.mensagem} </td>
                  <td> {contato.data} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  contatos: state.contatos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ContatosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contatos);
