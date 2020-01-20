import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AcoesActions } from "../../store/ducks/acoes";

class Acoes extends Component {

  static propTypes = {
    acoes: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          acao:  PropTypes.string,
          data_cadastro: PropTypes.string,
          data_atualizacao: PropTypes.string,
          status: PropTypes.string
        }),
      ),
    })
  };

  componentDidMount() {
    document.title = "Ações";
    const { acoesRequest } = this.props;
    const entidade = this.props.match.params.id;
    acoesRequest(entidade);
  }

  render() {
    const { acoes } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Ações</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Ação</th>
                <th>Data Cadastro</th>
                <th>Data Atualização</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {!acoes.data.length && (
                <tr>
                  <td colSpan="4" align="center">
                    Não existem ações
                  </td>
                </tr>
              )}
              {acoes.data.map(acao => (
                <tr key={acao.codigo}>
                  <td> {acao.acao} </td>
                  <td> {acao.data_cadastro} </td>
                  <td> {acao.data_atualizacao} </td>
                  <td> {acao.status} </td>
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
  acoes: state.acoes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AcoesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Acoes);
