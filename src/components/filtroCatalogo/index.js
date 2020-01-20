import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../store/ducks/catalogo";

class FiltroCatalogo extends Component {
  static propTypes = {
    catalogoCategoriasRequest: PropTypes.func.isRequired,
    catalogo: PropTypes.shape({
      categorias: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
    })
  };

  componentDidMount() {
    const { catalogoCategoriasRequest } = this.props;
    const usuario = 0;
    catalogoCategoriasRequest(usuario);
  }

  render() {
    const { catalogo } = this.props;
    return (
      <div className="sidebar nobottommargin">
        <div className="sidebar-widgets-wrap">
          <div className="widget widget-filter-links clearfix">
            <h4>Categorias</h4>
            <ul
              className="custom-filter"
              data-container="#shop"
              data-active-class="active-filter"
            >
              <li className="widget-filter-reset active-filter">
                <a href="/" data-filter="*">
                  Clear
                </a>
              </li>
              <li key="0">
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?cat=0&pagina=1"
                    }}
                  >
                    <strong>Todos os produtos</strong>
                  </Link>
                </li>
              {!catalogo.categorias.length && <p>Não existem categorias</p>}
              {catalogo.categorias.map(categoria => (
                <li key={categoria.codigo}>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?cat=" + categoria.codigo + "&pagina=1"
                    }}
                  >
                    {categoria.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {this.props.exibirFiltros ? (
            <div className="widget widget-filter-links clearfix">
              <br/>
              <h4>Filtrar por</h4>
              <ul className="shop-sorting">
                <li className="widget-filter-reset active-filter">
                  <a href="/" data-sort-by="original-order">
                    Clear
                  </a>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?filtrar=1"
                    }}
                  >
                    Até 1.000 pontos
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?filtrar=2"
                    }}
                  >
                    1.001 a 3.500 pontos
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?filtrar=3"
                    }}
                  >
                    Acima de 3.501 pontos
                  </Link>
                </li>

              </ul>
            </div>
          ) : null}
          {this.props.exibirFiltros ? (
            <div className="widget widget-filter-links clearfix">
              <br/>
              <h4>Ordenar por</h4>
              <ul className="shop-sorting">
                <li className="widget-filter-reset active-filter">
                  <a href="/" data-sort-by="original-order">
                    Clear
                  </a>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?ordem=1"
                    }}
                  >
                    Nome
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?ordem=2"
                    }}
                  >
                    Valor mais baixo
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?ordem=3"
                    }}
                  >
                    Valor mais alto
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
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
)(FiltroCatalogo);
