import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as DiscadorActions } from "../../store/ducks/discador";
import Footer from "../../components/footer";
import Header from "../../components/header";

class Discador extends Component {
  static propTypes = {
    discadorRequest: PropTypes.func.isRequired,
    motivos: PropTypes.shape({
      entidade: PropTypes.number
      })
  };

  componentDidMount() {
    document.title = "Discador";
    const { discadorRequest } = this.props;
    const usuario = 0;
    discadorRequest(usuario);
  }
  render() {
    return (
      <div>
        <Header />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <h1>Discador</h1>
              <p>
                Esta página deve ser recarregada a cada 2 segundos e
                redirecionar para o cadastro se receber retorno do Discador
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discador: state.discador
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DiscadorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discador);
