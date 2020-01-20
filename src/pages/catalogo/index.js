import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../store/ducks/catalogo";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
import Footer from "../../components/footer";
import HeaderCadastro from "../../components/headerCadastro";
import FiltroCatalogo from "../../components/filtroCatalogo";
import Listagem from "./listagem";
import Paginacao from "./paginacao";
import querySearch from "stringquery";


class Catalogo extends Component {

  state = {
    categoria: "",
    pagina: 1,
    pesquisar: "",
    filtrar: "",
    ordem: ""
  }

  componentDidMount() {
    document.title = "Catálogo de Prêmios";
    this.setState({categoria: this.props.location.search});
  }

  componentWillReceiveProps(newProps){
    const objParams = querySearch(newProps.location.search);
    if (objParams.cat){
      if (objParams.cat !== ""){
        this.setState({categoria: objParams.cat});
      }
    }
    if (objParams.pagina){
      if (objParams.pagina !== ""){
        this.setState({pagina: objParams.pagina});
      }
    }
    if (objParams.pesquisar){
      if (objParams.pesquisar !== ""){
        this.setState({pesquisar: objParams.pesquisar});
      }
    }
    if (objParams.filtrar){
      if (objParams.filtrar !== ""){
        this.setState({filtrar: objParams.filtrar});
      }
    }
    if (objParams.ordem){
      if (objParams.ordem !== ""){
        this.setState({ordem: objParams.ordem});
      }
    }
  }

  render() {
    const usuario = parseInt(this.props.cadastro.cliente);
    return (
      <div>
        <HeaderCadastro usuario={usuario} exibirCarrinho={true} />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="postcontent nobottommargin col_last">
                <Listagem categoria={this.state.categoria} pagina={this.state.pagina} filtrar={this.state.filtrar}  ordem={this.state.ordem} pesquisar={this.state.pesquisar}/>
                <Paginacao categoria={this.state.categoria} filtrar={this.state.filtrar}  ordem={this.state.ordem} pesquisar={this.state.pesquisar}/>
              </div>
              <FiltroCatalogo exibirFiltros={true} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catalogo: state.catalogo,
  cadastro: state.cadastro
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CatalogoActions, ...CadastroActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogo);
