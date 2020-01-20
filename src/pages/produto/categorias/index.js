import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../../store/ducks/catalogo";

class Categorias extends Component {
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
          {!catalogo.categorias.length && <p>Não existem categorias</p>}
              {catalogo.categorias.map(categoria => (
                <li key={categoria.codigo}>
                  <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?cat=" + categoria.codigo
                    }}
                  >
                    {categoria.titulo}
                  </Link>
                </li>
              ))}
        </ul>
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
