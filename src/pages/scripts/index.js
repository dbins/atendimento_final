import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ScriptsActions } from "../../store/ducks/scripts";

//import "../../css/bootstrap.css";
//import "../../css/style.css";
//import "../../css/swiper.css";
//import "../../css/dark.css";
//import "../../css/font-icons.css";
//import "../../css/animate.css";
//import "../../css/magnific-popup.css";
//import "../../css/responsive.css";

class Scripts extends Component {

  static propTypes = {
    scriptsRequest: PropTypes.func.isRequired,
    scripts: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo: PropTypes.number,
          nome: PropTypes.string,
          conteudo: PropTypes.string,
        })
      )
    }),
  };

  componentDidMount() {
    document.title = "Scripts";
    const { scriptsRequest } = this.props;
    scriptsRequest();
  }

  openScriptSelecionado = posicao => {
    const { scripts } = this.props;
    var conteudo = scripts.data[posicao].conteudo;
    document.getElementById("conteudo").innerHTML = conteudo;
  }

  render() {
    const { scripts } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Scripts de Atendimento</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <tbody>
              <tr>
                <td width="200">
                  <table>
                    <tbody>
                      {scripts.data.map((script, index) => (
                        <tr key={script.codigo}>
                          <td>
                          <div key={index} onClick={()=>{this.openScriptSelecionado(index);}}>
                            <u>{script.nome}</u></div></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
                <td id="conteudo">
                  <p>
                   Clique no nome do script que deseja visualizar.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  scripts: state.scripts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ScriptsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scripts);
