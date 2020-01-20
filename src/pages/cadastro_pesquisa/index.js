import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
import Footer from "../../components/footer";
import Header from "../../components/header";

class CadastroPesquisa extends Component {

  static propTypes = {
    cadastro: PropTypes.shape({
      pesquisa: PropTypes.arrayOf(
        PropTypes.shape({
          codigo: PropTypes.number,
          cartao: PropTypes.string,
          conta: PropTypes.string,
          produto: PropTypes.string,
          nome: PropTypes.string,
          documento: PropTypes.string,
          data_nascimento: PropTypes.string
        })
      )
    }),
  };

  componentDidMount(){
    document.title = "Resultados da Pesquisa";
    document.body.classList.remove('top-search-open');
  }

  render() {
    const { cadastro } = this.props;
    if (cadastro.pesquisa.length ===1){
      var entidade_localizada = cadastro.pesquisa[0].codigo;
      this.props.history.push("/cadastro/" + entidade_localizada);
    }
    return (
      <div>
        <Header />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <h3>Resultados da Pesquisa</h3>
              <table
                id="datatable1"
                className="table table-striped table-bordered"
                cellSpacing={0}
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Cartão</th>
                    <th>Conta</th>
                    <th>Produto</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Data Nascimento</th>
                  </tr>
                </thead>
                <tbody>
                  {!cadastro.pesquisa.length && (
                    <tr>
                      <td colSpan="8" align="center">
                        Não foram encontrados resultados com o critério
                        informado
                      </td>
                    </tr>
                  )}
                  {cadastro.pesquisa.map((item, index) => (
                    <tr key={index}>
                      <td> {item.codigo} </td>
                      <td> {item.cartao} </td>
                      <td> {item.conta} </td>
                      <td> {item.produto} </td>
                      <td>
                        <Link
                          to={{
                            pathname: "/cadastro/" + item.codigo
                          }}
                        >
                          {item.nome}
                        </Link>
                      </td>
                      <td> {item.documento} </td>
                      <td> {item.data_nascimento} </td>
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
  cadastro: state.cadastro
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CadastroActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CadastroPesquisa);
