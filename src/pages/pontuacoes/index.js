import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PontuacoesActions } from "../../store/ducks/pontuacoes";

class Pontuacoes extends Component {

  static propTypes = {
    contasRequest: PropTypes.func.isRequired,
    cartoesRequest: PropTypes.func.isRequired,
    saldoRequest: PropTypes.func.isRequired,
    pontosRequest: PropTypes.func.isRequired,
    bonusRequest: PropTypes.func.isRequired,
    pontuacoes: PropTypes.shape({
      contas: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          conta: PropTypes.string,
          produto: PropTypes.string,
          descricao: PropTypes.string,
          status: PropTypes.string,
          bloq1: PropTypes.string,
          bloq2: PropTypes.string,
          vencimento: PropTypes.string,
          validade: PropTypes.string,
          cadastro: PropTypes.string,
          atualizacao: PropTypes.string,
        }),
      ),
      cartoes: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          cartao: PropTypes.string,
          nome: PropTypes.string,
          titular: PropTypes.string,
          status: PropTypes.string,
          bloqueio: PropTypes.string,
          cadastro: PropTypes.string,
          atualizacao: PropTypes.string
        }),
      ),
      saldo: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          cartao: PropTypes.string,
          pontos: PropTypes.number,
          vinculado: PropTypes.number,
          bonus: PropTypes.number,
          premio: PropTypes.number,
          expirados: PropTypes.number,
          total: PropTypes.number

        }),
      ),
      pontos: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          data:  PropTypes.string,
          pontos:  PropTypes.number,
          tipo:  PropTypes.string
        }),
      ),
      bonus: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          data:  PropTypes.string,
          pontos:  PropTypes.number,
          tipo:  PropTypes.string
        }),
      ),
    })
  };


  componentDidMount() {
    document.title = "Pontuações";
    const {
      contasRequest,
      cartoesRequest,
      saldoRequest,
      pontosRequest,
      bonusRequest
    } = this.props;
    const entidade = this.props.match.params.id;
    contasRequest(entidade);
    cartoesRequest(entidade);
    saldoRequest(entidade);
    pontosRequest(entidade);
    bonusRequest(entidade);
  }
  render() {
    const { pontuacoes } = this.props;
    return (
      <section id="content">
        <div className="content-wrap">
          <h3>Pontuações</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Conta</th>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Bloq1</th>
                <th>Bloq2</th>
                <th>Vencimento</th>
                <th>Validade</th>
                <th>Cadastro</th>
                <th>Atualização</th>
              </tr>
            </thead>
            <tbody>
              {!pontuacoes.contas.length && (
                <tr>
                  <td colSpan="10" align="center">
                    Este cliente não possui contas
                  </td>
                </tr>
              )}
              {pontuacoes.contas.map((item, index) => (
                <tr key={index}>
                  <td> {item.conta}  </td>
                  <td> {item.produto}  </td>
                  <td> {item.descricao}  </td>
                  <td> {item.status}  </td>
                  <td> {item.bloq1}  </td>
                  <td> {item.bloq2}  </td>
                  <td> {item.vencimento}  </td>
                  <td> {item.validade}  </td>
                  <td> {item.cadastro}  </td>
                  <td> {item.atualizacao}  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <table
            id="datatable2"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Cartão</th>
                <th>Nome</th>
                <th>Titular</th>
                <th>Status</th>
                <th>Bloqueio</th>
                <th>Cadastro</th>
                <th>Atualização</th>
              </tr>
            </thead>
            <tbody>
              {!pontuacoes.cartoes.length && (
                <tr>
                  <td colSpan="7" align="center">
                    Este cliente não possui cartões
                  </td>
                </tr>
              )}
              {pontuacoes.cartoes.map((item, index) => (
                <tr key={index}>
                  <td> {item.cartao}  </td>
                  <td> {item.nome}  </td>
                  <td> {item.titular}  </td>
                  <td> {item.status}  </td>
                  <td> {item.bloqueio}  </td>
                  <td> {item.cadastro}  </td>
                  <td> {item.atualizacao}  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <table
            id="datatable3"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Cartão</th>
                <th>Pontos</th>
                <th>Vinculado</th>
                <th>Bônus</th>
                <th>Prêmio</th>
                <th>Expirados</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {!pontuacoes.saldo.length && (
                <tr>
                  <td colSpan="7" align="center">
                    Este cliente não possui saldos
                  </td>
                </tr>
              )}
              {pontuacoes.saldo.map((item, index) => (
                <tr key={index}>
                  <td> {item.cartao}  </td>
                  <td> {item.pontos}  </td>
                  <td> {item.vinculado}  </td>
                  <td> {item.bonus}  </td>
                  <td> {item.premio} </td>
                  <td> {item.expirados}  </td>
                  <td> {item.total}  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <div className="clear" />
          <div className="col_half">
            <h5>Transações de Pontos</h5>
            <table
              id="datatable4"
              className="table table-striped table-bordered"
              cellSpacing={0}
              width="100%"
            >
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Pontos</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {!pontuacoes.pontos.length && (
                  <tr>
                    <td colSpan="3" align="center">
                      Este cliente não possui pontos
                    </td>
                  </tr>
                )}
                {pontuacoes.pontos.map((item, index) => (
                  <tr key={index}>
                    <td> {item.data} </td>
                    <td> {item.pontos} </td>
                    <td> {item.tipo} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col_half col_last">
            <h5>Transações de Bônus</h5>
            <table
              id="datatable5"
              className="table table-striped table-bordered"
              cellSpacing={0}
              width="100%"
            >
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Pontos</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {!pontuacoes.bonus.length && (
                  <tr>
                    <td colSpan="3" align="center">
                      Este cliente não possui pontos
                    </td>
                  </tr>
                )}
                {pontuacoes.bonus.map((item, index) => (
                  <tr key={index}>
                    <td> {item.data} </td>
                    <td> {item.pontos} </td>
                    <td> {item.tipo} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  pontuacoes: state.pontuacoes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PontuacoesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pontuacoes);
