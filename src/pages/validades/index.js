import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ValidadesActions } from "../../store/ducks/validades";

class Validades extends Component {
  static propTypes = {
    validadesRequest: PropTypes.func.isRequired,
    validades: PropTypes.shape({
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
    document.title = "Validades";
    const { validadesRequest } = this.props;
    const entidade = this.props.match.params.id;
    validadesRequest(entidade);
  }
  render() {
    const { validades, total } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Validades</h3>
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
              {!validades.data.length && (
                <tr>
                  <td colSpan="2" align="center">
                    Não existem pontos disponíveis
                  </td>
                </tr>
              )}
              {validades.data.map((item, index) => (
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
  validades: state.validades,
  total:
    state.validades.data.length > 0
      ? state.validades.data
          .map(item => item.pontos)
          .reduce((prev, curr) => prev + curr)
      : 0
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ValidadesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Validades);
