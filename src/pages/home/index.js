import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OcorrenciaActions } from "../../store/ducks/ocorrencias";
import { Creators as PausaActions } from "../../store/ducks/pausa";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

var timer;
var segundo = 0;
var minuto = 0;
var hora = 0;
var divStyle = {
  fontSize:24,
  color:"#FF0000",
  fontFamily:"Arial",
  borderStyle: "none",
  backgroundColor:"#FFFFFF"
};

class Home extends Component {

  state = {
    motivo: "",
  };


  static propTypes = {
    pausaRequest: PropTypes.func.isRequired,
    pausaTipoRequest: PropTypes.func.isRequired,
    pausaAdicionarRequest: PropTypes.func.isRequired,
    pausa: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo: PropTypes.number,
          abertura: PropTypes.string,
          encerramento: PropTypes.string,
          minutos: PropTypes.number,
        })
      )
    }),
    ocorrenciasRequest: PropTypes.func.isRequired,
    ocorrencias: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          numero:  PropTypes.number,
          abertura: PropTypes.string,
          assunto: PropTypes.string,
          aberta_por: PropTypes.string,
          encaminhada_para: PropTypes.string,
          cliente: PropTypes.string,
          codigo_cliente: PropTypes.number,
          CPF: PropTypes.string,
          status: PropTypes.string,
          encerrada: PropTypes.string,
          CNPJ_Loja: PropTypes.string,
          ultima_interacao: PropTypes.string,
          qtde_de_dias: PropTypes.number,
        })
      )
    })
  };

  tempo = () =>{
    if (segundo < 59){
     segundo++
     if(segundo < 10){segundo = "0"+segundo}
    } else
     if(segundo === 59 && minuto < 59){
      segundo = 0+"0";
      minuto++;
   if(minuto < 10){minuto = "0"+minuto}
     }
    if(minuto === 59 && segundo === 59 && hora < 23){
     segundo = 0+"0";
     minuto = 0+"0";
     hora++;
     if(hora < 10){
       hora = "0"+hora
     }
    } else
     if(minuto === 59 && segundo === 59 && hora === 23){
      segundo = 0+"0";
      minuto = 0+"0";
      hora = 0+"0";
     }
    return minuto +":"+ segundo;
  }

  async componentDidMount(){
    const { pausaRequest, ocorrenciasRequest, pausaTipoRequest } = this.props;
    document.title = "Página Inicial";
    const usuario = await  localStorage.getItem("@SAO:usuario");
    pausaRequest(usuario);
    pausaTipoRequest(usuario);

    var pesquisar_ocorrencia = {
      encaminhada: usuario,
      status: 66 //Encaminhada
    };

    ocorrenciasRequest(pesquisar_ocorrencia);
  }

  salvar = e => {
    e.preventDefault();

    const { motivo } = this.state;
    const { pausaAdicionarRequest, pausaFinalizarRequest } = this.props;
    let continuar = true;
    if (this.props.pausa.codigo_pausa ===0){
      if (motivo === "") {
        alert("Por favor informe o motivo da pausa");
        continuar = false;
      }
    }
    if (continuar) {
      if (this.props.pausa.codigo_pausa ===0){
        const dados = {
          usuario: localStorage.getItem("@SAO:usuario"),
          motivo: motivo
        }
        pausaAdicionarRequest(dados);
        document.getElementById("btnPausa").innerText = "Gravar fim da pausa";
        timer = setInterval(this.tempo(),983);
      } else {
        //Finalizar
        const dados = {
          usuario: localStorage.getItem("@SAO:usuario"),
          codigo_pausa: this.props.pausa.codigo_pausa
        }
        pausaFinalizarRequest(dados);
        clearInterval(timer);
        document.getElementById("btnPausa").innerText = "Gravar início da pausa";
      }

    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  openOcorrencia = (event, codigo) => {
    event.preventDefault();
    window.open('#/ocorrencia/' + codigo,'','scrollbars=yes,width=800,height=400');
  }

  render() {
    const { pausa, ocorrencias } = this.props;
    return (
      <div>
        <Header />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Minhas Ocorrências">
                  <div className="tab-content clearfix" id="tabs-33">
                    <h3>Ocorrências Pendentes</h3>
                    <table
                      id="datatable1"
                      className="table table-striped table-bordered"
                      cellSpacing={0}
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Abertura</th>
                          <th>Assunto</th>
                          <th>Aberta por</th>
                          <th>Encaminhada para</th>
                          <th>Cliente</th>
                          <th>CPF</th>
                          <th>Status</th>
                          <th>Encerrada</th>
                          <th>CNPJ Loja</th>
                          <th>Ultima Interação</th>
                          <th>Qtde de Dias</th>
                        </tr>
                      </thead>
                      <tbody>
                      {!ocorrencias.data.length && <tr><td colSpan="12" align="center">Nenhuma ocorrência pendente</td></tr>}
                      {ocorrencias.data.map((ocorrencia, index) => (
                        <tr key={index}>
                          <td> {ocorrencia.numero} </td>
                          <td> {ocorrencia.abertura} </td>
                          <td>
                            <a
                              href="/"
                              onClick={(e) => {
                                this.openOcorrencia(e, ocorrencia.numero)
                              }}
                            >
                              {ocorrencia.assunto}
                            </a>
                          </td>
                          <td> {ocorrencia.aberta_por} </td>
                          <td> {ocorrencia.encaminhada_para} </td>
                          <td>
                            <Link to={{
                              pathname: "/cadastro/" + ocorrencia.codigo_cliente}}>{ocorrencia.cliente}</Link>
                          </td>
                          <td> {ocorrencia.CPF} </td>
                          <td> {ocorrencia.status} </td>
                          <td> {ocorrencia.encerrada} </td>
                          <td> {ocorrencia.CNPJ_Loja} </td>
                          <td> {ocorrencia.ultima_interacao} </td>
                          <td> {ocorrencia.qtde_de_dias} dias</td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Minhas Pausas">
                  <div className="tab-content clearfix" id="tabs-34">
                    <form onSubmit={this.salvar}>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputState">Motivo da Pausa</label>
                          <select name="motivo" id="inputState" value="" className="form-control"  onChange={this.alterar}>
                            <option value="">Selecione...</option>
                            {pausa.tipo.map((item, index) => (
                              <option key={index}  value={item.codigo}>{item.titulo}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <br />
                          <button id="btnPausa" type="submit" className="btn btn-primary">
                            Gravar início da pausa
                          </button>
                        </div>
                      </div>
                    </form>

                    <form name="crono">
				              <input type="text" size="10" name="display" disabled value="00:00:00" style={divStyle} />
				            </form>

                    <h3>Suas 8 últimas pausas</h3>
                    <table
                      id="datatable1"
                      className="table table-striped table-bordered"
                      cellSpacing={0}
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th>Abertura</th>
                          <th>Encerramento</th>
                          <th>Minutos</th>
                        </tr>
                      </thead>
                      <tbody>
                      {!pausa.data.length && <tr><td colSpan="3" align="center">Nenhuma pausa registrada</td></tr>}
                      {pausa.data.map(pausa => (
                        <tr key={pausa.codigo}>
                          <td>{pausa.abertura}</td>
                          <td>{pausa.encerramento}</td>
                          <td>{pausa.minutos}</td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home,
  ocorrencias: state.ocorrencias,
  pausa: state.pausa
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...OcorrenciaActions, ...PausaActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
