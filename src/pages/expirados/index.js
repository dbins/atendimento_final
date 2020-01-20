import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ExpiradosActions } from "../../store/ducks/expirados";

class Expirados extends Component {
  static propTypes = {
    expiradosRequest: PropTypes.func.isRequired,
    expirados: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          periodo:  PropTypes.string,
          pontos: PropTypes.number
        }),
      )
    }),
    total:  PropTypes.number
  };
  componentDidMount() {
    document.title = "Pontos Expirados";
    const { expiradosRequest } = this.props;
    const entidade = this.props.match.params.id;;
    expiradosRequest(entidade);
  }
  render() {
    const { expirados, total } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Expirados</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Mes/Ano</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {!expirados.data.length && (
                <tr>
                  <td colSpan="2" align="center">
                    Não existem pontos expirados
                  </td>
                </tr>
              )}
              {expirados.data.map((item, index) => (
                <tr key={index}>
                  <td> {item.periodo} </td>
                  <td> {item.pontos} </td>
                </tr>
              ))}
               <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td> {total} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  expirados: state.expirados,
  total:
    state.expirados.data.length > 0
      ? state.expirados.data
          .map(item => item.pontos)
          .reduce((prev, curr) => prev + curr)
      : 0
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ExpiradosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expirados);
