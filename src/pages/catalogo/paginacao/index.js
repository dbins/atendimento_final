import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../../store/ducks/catalogo";
class Paginacao extends Component {
  render() {
    const pagina_final = this.props.catalogo.paginas;
    const pagina = this.props.catalogo.pagina;
    const filtrar = this.props.filtrar;
    const categoria = this.props.categoria;
    const ordem = this.props.ordem;
    const pesquisar = this.props.pesquisar;
    let paginas = [];
    for (let i = 1; i <= pagina_final; i++) {
      paginas.push(i);
    }
    return (
      <div>
        {pagina_final > 1 && (
          <ul className="pagination">
            <li className="page-item">
              <Link
                className="page-link"
                to={{
                  pathname: "/catalogo",
                  search:
                    "?pagina=1&cat=" +
                    categoria +
                    "&ordem=" +
                    ordem +
                    "&filtrar=" +
                    filtrar +
                    "&pesquisar=" +
                    pesquisar
                }}
              >
                «
              </Link>
            </li>
            {paginas.map(item => (
              <li key={item} className="page-item">
                <Link
                  className="page-link"
                  to={{
                    pathname: "/catalogo",
                    search:
                      "?pagina=" +
                      item +
                      "&cat=" +
                      categoria +
                      "&ordem=" +
                      ordem +
                      "&filtrar=" +
                      filtrar +
                      "&pesquisar=" +
                      pesquisar
                  }}
                >
                  {pagina === item ? (
                    <strong>{item}</strong>
                  ) : (
                    <div>{item}</div>
                  )}
                </Link>
              </li>
            ))}
            <li className="page-item">
              <Link
                className="page-link"
                to={{
                  pathname: "/catalogo",
                  search:
                    "?pagina=" +
                    pagina_final +
                    "&cat=" +
                    categoria +
                    "&ordem=" +
                    ordem +
                    "&filtrar=" +
                    filtrar +
                    "&pesquisar=" +
                    pesquisar
                }}
              >
                »
              </Link>
            </li>
          </ul>
        )}
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
)(Paginacao);
