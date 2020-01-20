import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LogActions } from "../../../store/ducks/log";

class Log extends Component {
  static propTypes = {
    logRequest: PropTypes.func.isRequired,
    entidade: PropTypes.number,
    log: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          data: PropTypes.string,
          tabela: PropTypes.string,
          campo: PropTypes.string,
          de: PropTypes.string,
          para: PropTypes.string,
          alterado_por: PropTypes.string
        }),
      ),
    })
  };

  componentDidMount() {
    const { logRequest } = this.props;
    const entidade = this.props.entidade;
    logRequest(entidade);
  }

  render() {
    const { log } = this.props;
    return (
      <div className="tab-content clearfix" id="tabs-36">
        <h3>Log de alterações</h3>
        <div className="table-responsive">
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Código Log</th>
                <th>Data</th>
                <th>Tabela</th>
                <th>Campo</th>
                <th>De</th>
                <th>Para</th>
                <th>Alterado por</th>
              </tr>
            </thead>
            <tbody>
            {!log.data.length && <tr><td colSpan="7">Não existem informações</td></tr>}
            {log.data.map(item => (
              <tr key={item.codigo}>
                <td> {item.codigo} </td>
                <td> {item.data} </td>
                <td> {item.tabela} </td>
                <td> {item.campo} </td>
                <td> {item.de} </td>
                <td> {item.para} </td>
                <td> {item.alterado_por} </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  log: state.log
});

const mapDispatchToProps = dispatch => bindActionCreators(LogActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Log);
