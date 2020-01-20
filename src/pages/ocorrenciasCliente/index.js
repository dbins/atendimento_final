import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OcorrenciasActions } from "../../store/ducks/ocorrencias";

class OcorrenciasCliente extends Component {

  static propTypes = {
    ocorrencias: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          numero:  PropTypes.number,
          abertura: PropTypes.string,
          assunto: PropTypes.string,
          aberta_por: PropTypes.string,
          encaminhada_para: PropTypes.string,
          cliente: PropTypes.string,
          codigo_cliente: PropTypes.number,
          CPF: PropTypes.string,
          status: PropTypes.string,
          encerrada: PropTypes.string,
          CNPJ_Loja: PropTypes.string,
          ultima_interacao: PropTypes.string,
          qtde_de_dias: PropTypes.number,
        }),
      ),
    })
  };


  componentDidMount(){
    const { ocorrenciasRequest } = this.props;
    document.title = "Ocorrências do cliente";
    const entidade = this.props.match.params.id;
    ocorrenciasRequest({entidade});
  }

  openOcorrencia = (event, codigo) => {
    event.preventDefault();
    window.open('#/ocorrencia/' + codigo,'','scrollbars=yes,width=800,height=400');
  }

  render() {
    const { ocorrencias } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Ocorrências</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>No.</th>
                <th>Abertura</th>
                <th>Assunto</th>
                <th>Aberta por</th>
                <th>Encaminhada</th>
                <th>Status</th>
                <th>Encerrada</th>
              </tr>
            </thead>
            <tbody>
            {!ocorrencias.data.length && <tr><td colSpan="7" align="center">Não existem ocorrências</td></tr>}
            {ocorrencias.data.map((ocorrencia, index) => (
              <tr key={index}>
                <td> {ocorrencia.numero} </td>
                <td> {ocorrencia.abertura} </td>
                <td>
                  <a
                   href="/"
                   onClick={(e) => {
                     this.openOcorrencia(e, ocorrencia.numero)
                   }}
                  >{ocorrencia.assunto}</a>
                </td>
                <td> {ocorrencia.aberta_por} </td>
                <td> {ocorrencia.encaminhada_para} </td>
                <td> {ocorrencia.status} </td>
                <td> {ocorrencia.encerrada} </td>
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
  ocorrencias: state.ocorrencias
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OcorrenciasActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OcorrenciasCliente);
