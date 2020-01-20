import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../../store/ducks/catalogo";

class Categorias extends Component {
  static propTypes = {
    catalogoRequest: PropTypes.func,
    catalogo: PropTypes.shape({
      produto: PropTypes.shape({
          codigo:  PropTypes.number,
          codigo_interno: PropTypes.string,
          categoria: PropTypes.string,
          imagem: PropTypes.string,
          imagem2: PropTypes.string,
          produto: PropTypes.string,
          pontos: PropTypes.number,
          pontos_desconto: PropTypes.number,
          descricao: PropTypes.string,
        }),
    })
  };
  componentDidMount() {
    const { catalogoRequest } = this.props;
    const usuario = 0;
    catalogoRequest(usuario);
  }
  render() {
    const { catalogo } = this.props;
    const relacionados = catalogo.data.slice(0, 3);
    return (
      <div className="col_full nobottommargin">
        <h4>Produtos Relacionados</h4>
        <div id="shop" className="shop product-3 grid-container clearfix">
          {!relacionados.length && (
            <p>Não existem produtos com o critério solicitado</p>
          )}
          {relacionados.map(produto => (
            <div key={produto.codigo} className="product sf-dress clearfix">
              <div className="product-image">
                <Link to={"/produto/" + produto.codigo}>
                  <img src={produto.imagem} alt={produto.produto} />
                </Link>
                <Link to={"/produto/" + produto.codigo}>
                  <img src={produto.imagem2} alt={produto.produto}/>
                </Link>
                <div className="sale-flash">Desconto*</div>
                <div className="product-overlay">
                  <Link to={"/produto/" + produto.codigo} className="item-quick-view">
                    <i className="icon-zoom-in2" />
                    <span> Detalhes...</span>
                  </Link>
                </div>
              </div>
              <div className="product-desc center">
                <div className="product-title">
                  <h3>
                    <Link to={"/produto/" + produto.codigo} className="item-quick-view">
                      {produto.produto}
                    </Link>
                  </h3>
                </div>
                <div className="product-price">
                  <del>{produto.pontos}</del>{" "}
                  <ins>{produto.pontos_desconto}</ins>
                </div>
              </div>
            </div>
          ))}
        </div>
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
)(Categorias);
