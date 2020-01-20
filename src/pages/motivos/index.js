import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MotivosActions } from "../../store/ducks/motivos";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Motivos extends Component {

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }),
    motivosRequest: PropTypes.func.isRequired,
    motivosAdicionarRequest: PropTypes.func.isRequired,
    motivos: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string,
          motivos: PropTypes.arrayOf(
            PropTypes.shape({
              codigo:  PropTypes.number,
              titulo: PropTypes.string
            })
          ),
        }),
      ),
    })
  };

  state = {
    motivo: ""
  };

  componentDidMount(){
    const { motivosRequest } = this.props;
    const usuario = this.props.usuario;
    motivosRequest(usuario);
  }

  salvar = e => {
    e.preventDefault();

    const { motivo } = this.state;
    const { motivosAdicionarRequest } = this.props;
    let continuar = true;

    if (motivo === "") {
      alert("Por favor selecione o motivo do atendimento");
      continuar = false;
    }


    if (continuar) {
      const dados = {
        entidade: this.props.entidade,
        atendente: localStorage.getItem("@SAO:usuario"),
        motivo: motivo
      }
      motivosAdicionarRequest(dados);
      this.props.history.push("/home");
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { motivos } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>Motivos de Atendimento</h3>
          <form onSubmit={this.salvar}>

            <Accordion defaultActiveKey="1">
              {motivos.data.map(item => (
              <Card key={item.codigo}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={item.codigo}>
                  {item.titulo}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={item.codigo}>
                  <Card.Body>
                   {item.motivos.map(item2 => (
                    <div key={item2.codigo}><input type="radio" name="motivo" value={item2.codigo} onChange={this.alterar}/>&nbsp; {item2.titulo} <br/></div>
                   ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              ))}
              </Accordion>
            <button type="submit" className="btn btn-primary">
              Gravar Motivo
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  motivos: state.motivos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MotivosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Motivos);
