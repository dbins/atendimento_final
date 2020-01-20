import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../../store/ducks/catalogo";

var divStyle = {};
var divStyle2 = {
  height: '150px'
};

//var divStyle = {
//  width: '33.33%'
//};

class Listagem extends Component {
  static propTypes = {
    catalogoRequest: PropTypes.func,
    catalogo: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          codigo_interno: PropTypes.string,
          imagem: PropTypes.string,
          imagem2: PropTypes.string,
          produto: PropTypes.string,
          pontos: PropTypes.number,
          pontos_desconto: PropTypes.number
        }),
      ),
    })
  };

  componentDidMount() {
    const { catalogoRequest } = this.props;
    const usuario = 0;
    const categoria = this.props.categoria;
    const pagina = this.props.pagina;
    const filtrar = this.props.filtrar;
    const ordem = this.props.ordem;
    const pesquisar = this.props.pesquisar;
    catalogoRequest({usuario, categoria, pagina, filtrar, ordem, pesquisar});
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(newProps){
    const { catalogoRequest } = this.props;
    const usuario = 0;
    const categoria = newProps.categoria;
    const pagina = newProps.pagina;
    const filtrar = newProps.filtrar;
    const ordem = newProps.ordem;
    const pesquisar = newProps.pesquisar;
    var continuar = false;

    if (this.props.categoria !== newProps.categoria){
      continuar = true;
    }
    if (this.props.pagina !== newProps.pagina){
      continuar = true;
    }
    if (this.props.filtrar !== newProps.filtrar){
      continuar = true;
    }
    if (this.props.ordem !== newProps.ordem){
      continuar = true;
    }
    if (this.props.pesquisar !== newProps.pesquisar){
      continuar = true;
    }
    if (continuar){
      catalogoRequest({usuario, categoria, pagina, filtrar, ordem, pesquisar});
      window.scrollTo(0, 0);
    }

  }

  render() {
    const { catalogo } = this.props;
    return (
      <div id="shop" className="shop product-3 grid-container clearfix">
        {!catalogo.data.length && (
          <p>Não existem produtos com o critério solicitado</p>
        )}
        {catalogo.data.map(produto => (
          <div key={produto.codigo} className="product sf-dress clearfix" style={divStyle}>
            <div className="product-image">
              <Link to={"/produto/" + produto.codigo}>
                <img src={produto.imagem} alt={produto.produto} />
              </Link>
              <Link to={"/produto/" + produto.codigo}>
                <img src={produto.imagem2} alt={produto.produto} />
              </Link>
              {parseInt(produto.pontos) > parseInt(produto.pontos_desconto) &&
              (<div className="sale-flash">Desconto!</div>)
              }
              <div className="product-overlay">
                <Link to={"/produto/" + produto.codigo} className="item-quick-view">
                  <i className="icon-zoom-in2" />
                  <span> Detalhes...</span>
                </Link>
              </div>
            </div>
            <div className="product-desc center">
              <div className="product-title">
                <h3 style={divStyle2}>
                  <Link to={"/produto/" + produto.codigo} className="item-quick-view">
                    {produto.produto}
                  </Link>
                </h3>
              </div>
              <div className="product-price">
                 {parseInt(produto.pontos) > parseInt(produto.pontos_desconto) ?
                 (<div><del>De {produto.pontos} pontos </del> <ins>Por {produto.pontos_desconto} pontos</ins></div>)

                :
                (
                  <ins>{produto.pontos} pontos</ins>)
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catalogo: state.catalogo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CatalogoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listagem);
