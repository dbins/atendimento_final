import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as HistoricoActions } from "../../../store/ducks/historico";

class Info extends Component {
  render() {
    return (
      <div className="tab-content clearfix" id="tabs-35">
        <div className="table-responsive">
          <h3>Lojas deste proprietário</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Razão Social</th>
                <th>Nome Fantasia</th>
                <th>Código Indústria</th>
                <th>Status</th>
                <th>CNPJ</th>
                <th>E-mail</th>
                <th>Segmento</th>
                <th>Região</th>
                <th>AGP Segmento</th>
                <th>Meso Região</th>
                <th>Micro Região</th>
                <th>Sub Segmento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
              <tr>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
              <tr>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
              <tr>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discador: state.discador
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HistoricoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
