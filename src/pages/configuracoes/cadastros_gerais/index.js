import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ConfiguracoesActions } from "../../../store/ducks/configuracoes";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

class ConfiguracoesCadastrosGerais extends Component {

  static propTypes = {
    configuracoesCadastrosGeraisRequest: PropTypes.func.isRequired,
    configuracoes: PropTypes.shape({
      cadastros_gerais: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          descricao: PropTypes.string
        }),
      ),
    })
  };

  componentDidMount() {
    document.title = "Configurações - Combos";
    const { configuracoesCadastrosGeraisRequest } = this.props;
    const usuario = 0;
    configuracoesCadastrosGeraisRequest(usuario);
  }
  render() {
    const { configuracoes } = this.props;
    return (
      <div>
        <Header />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <h3>Combos do sistema</h3>
              <table
                id="datatable1"
                className="table table-striped table-bordered"
                cellSpacing={0}
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Tipo</th>
                    <th>Listar</th>
                  </tr>
                </thead>
                <tbody>
                {!configuracoes.cadastros_gerais.length && (
                <tr>
                  <td colSpan="3" align="center">
                    Não existem informações
                  </td>
                </tr>
              )}
              {configuracoes.cadastros_gerais.map(item => (
                  <tr key={item.codigo}>
                    <td> {item.codigo} </td>
                    <td> {item.descricao} </td>
                    <td>
                    <Link to={{
                              pathname: "/acoes_cadastros_gerais_lista/" + item.codigo}}>
                      Listar</Link>
                    </td>
                  </tr>
              ))}

                </tbody>
              </table>
            </div>
          </div>
        </section>
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
)(ConfiguracoesCadastrosGerais);
