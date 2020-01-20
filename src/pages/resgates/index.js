import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ResgatesActions } from "../../store/ducks/resgates";

class Resgates extends Component {
  static propTypes = {
    resgates: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          numero:  PropTypes.number,
          tipo: PropTypes.string,
          data: PropTypes.string,
          origem: PropTypes.string,
          codigo_produto: PropTypes.number,
          descricao: PropTypes.string,
          pontos: PropTypes.number,
          qtde: PropTypes.number,
          sem_pontos: PropTypes.string,
          posta_restante: PropTypes.string,
          agenda: PropTypes.string,
          status: PropTypes.string,
          nota_fiscal: PropTypes.string,
          envio: PropTypes.string,
          tipo_entrega: PropTypes.string,
        }),
      ),
    })
  };

  componentDidMount() {
    document.title = "Resgates";
    const { resgatesRequest } = this.props;
    const entidade = this.props.match.params.id;
    resgatesRequest(entidade);
  }

  render() {
    const { resgates } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Resgates</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing="0"
            width="100%"
          >
            <thead>
              <tr>
                <th>No. Troca</th>
                <th>Tipo</th>
                <th>Data</th>
                <th>Origem</th>
                <th>Código</th>
                <th>Descrição</th>
                <th>Pontos</th>
                <th>Qtde</th>
                <th>Sem Pontos</th>
                <th>Posta Restante</th>
                <th>Agenda</th>
                <th>Status</th>
                <th>Nota Fiscal</th>
                <th>Envio</th>
                <th>Tipo de Entrega</th>
              </tr>
            </thead>
            <tbody>
              {!resgates.data.length && (
                <tr>
                  <td colSpan="15" align="center">
                    Não existem resgates
                  </td>
                </tr>
              )}
              {resgates.data.map(resgate => (
                <tr key={resgate.numero}>
                  <td>{resgate.numero}</td>
                  <td>{resgate.tipo}</td>
                  <td>{resgate.data}</td>
                  <td>{resgate.origem}</td>
                  <td>{resgate.codigo_produto}</td>
                  <td>{resgate.descricao}</td>
                  <td>{resgate.pontos}</td>
                  <td>{resgate.qtde}</td>
                  <td>{resgate.sem_pontos}</td>
                  <td>{resgate.posta_restante}</td>
                  <td>{resgate.agenda}</td>
                  <td>{resgate.status}</td>
                  <td>{resgate.nota_fiscal}</td>
                  <td>{resgate.envio}</td>
                  <td>{resgate.tipo_entrega}</td>
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
  resgates: state.resgates
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ResgatesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resgates);
