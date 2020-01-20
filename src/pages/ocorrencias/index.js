import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OcorrenciasActions } from "../../store/ducks/ocorrencias";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { ExportCSV } from "../../components/exportarExcel";
import 'moment/locale/pt-br';
import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
//moment.locale('pt-BR');

class Ocorrencias extends Component {

  static propTypes = {
    ocorrenciasRequest: PropTypes.func.isRequired,
    ocorrenciasAssuntoRequest: PropTypes.func.isRequired,
    ocorrenciasEncaminhadaRequest: PropTypes.func.isRequired,
    ocorrenciasTotalRequest: PropTypes.func.isRequired,
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
        }),
      ),
      assunto: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      status: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      encaminhada: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          titulo: PropTypes.string
        }),
      ),
      total: PropTypes.shape({
        pendentes:  PropTypes.number,
          total:  PropTypes.number,
          pendentes24h:  PropTypes.number,
          pendentes72h:  PropTypes.number,
          pendentesacima72:  PropTypes.number
        }),
    })
  };

  componentDidMount(){
    const { ocorrenciasRequest, ocorrenciasAssuntoRequest, ocorrenciasStatusRequest, ocorrenciasEncaminhadaRequest, ocorrenciasTotalRequest } = this.props;
    document.title = "Ocorrências";
    const usuario = localStorage.getItem("@SAO:usuario");
    var pesquisar_ocorrencia = {
      encaminhada: usuario,
      status: 66 //Encaminhada
    };
    ocorrenciasRequest(pesquisar_ocorrencia);
    ocorrenciasAssuntoRequest(9999);
    ocorrenciasStatusRequest(usuario);
    ocorrenciasEncaminhadaRequest(usuario);
    ocorrenciasTotalRequest(usuario);
  }

  openOcorrencia = (event, codigo) => {
    event.preventDefault();
    window.open('#/ocorrencia/' + codigo,'','scrollbars=yes,width=800,height=400');
  }

  pesquisarOcorrencias = (event) => {
      event.preventDefault();
      const { ocorrenciasRequest} = this.props;
      var pesquisar_ocorrencia = {
        status: document.getElementById("status").options[document.getElementById("status").selectedIndex].value,
        ocorrencia: document.getElementById("numero_ocorrencia").value,
        assunto: document.getElementById("assunto").options[document.getElementById("assunto").selectedIndex].value,
        encaminhada: document.getElementById("encaminhada").options[document.getElementById("encaminhada").selectedIndex].value,
        dataInicio: document.getElementById("data_inicial").value,
        dataFim: document.getElementById("data_final").value
      };
      ocorrenciasRequest(pesquisar_ocorrencia);
  }

  render() {
    const { ocorrencias } = this.props;
    const { pendentes, total,  pendentes24h,  pendentes72h, pendentesacima72} = this.props.ocorrencias.total;
    return (
      <div>
        <Header/>
      <section id="content">
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-tasks" />
            <div className="counter counter-large" style={{color: '#000000'}}><span>{pendentes}</span></div>
            <h5>Pendentes</h5>
          </div>
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-table" />
            <div className="counter counter-large" style={{color: '#000000'}}><span>{total}</span></div>
            <h5>Total</h5>
          </div>
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-clock" />
            <div className="counter counter-large" style={{color: '#1abc9c'}}><span>{pendentes24h}</span></div>
            <h5>Pendentes 24h</h5>
          </div>
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-clock" />
            <div className="counter counter-large" style={{color: '#FFFF00'}}><span>{pendentes72h}</span></div>
            <h5>Pendentes 72h</h5>
          </div>
          <div className="col_one_sixth nobottommargin center">
            <i className="i-plain i-xlarge divcenter nobottommargin icon-clock" />
            <div className="counter counter-large" style={{color: '#FF0000'}}><span>{pendentesacima72}</span></div>
            <h5>Pendentes após 72h</h5>
          </div>
          <div className="line" />
          <form>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="data_inicial">Data Inicial</label>
                <DatePickerInput
            displayFormat='DD/MM/YYYY'
            id="data_inicial"
            autocomplete="off"
            returnFormat='YYYY-MM-DD'
            showOnInputClick
            onChange={(jsDate, dateString) => this.setState({ datePickerInputDate: dateString })}
            placeholder='placeholder'
            iconClassName='calendar icon'
          />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="data_final">Data Final</label>
                <DatePickerInput
            displayFormat='DD/MM/YYYY'
            autocomplete="off"
            id="data_final"
            returnFormat='YYYY-MM-DD'
            showOnInputClick
            onChange={(jsDate, dateString) => this.setState({ datePickerInputDate: dateString })}
            placeholder='placeholder'
            iconClassName='calendar icon'
          />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="numero_ocorrencia">Numero Ocorrência</label>
                <input type="text" className="form-control" id="numero_ocorrencia"  maxlength="6" placeholder={0} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="assunto">Assunto</label>
                <select id="assunto" className="form-control">
                  <option value="">Selecione...</option>
                  {ocorrencias.assunto.map(assunto => (
                  <option key={assunto.codigo} value={assunto.codigo}>{assunto.titulo}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="encaminhada">Encaminhada para</label>
                <select id="encaminhada" className="form-control">
                  <option value="">Selecione...</option>
                  {ocorrencias.encaminhada.map(encaminhada => (
                  <option key={encaminhada.codigo} value={encaminhada.codigo}>{encaminhada.titulo}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="status">Status da Ocorrência</label>
                <select id="status" className="form-control">
                  <option value="">Selecione...</option>
                  {ocorrencias.status.map(status => (
                  <option key={status.codigo} value={status.codigo}>{status.titulo}</option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary"  onClick={(e) => {
                               this.pesquisarOcorrencias(e)
                             }}>Localizar</button>
          </form>
          {ocorrencias.data.length > 0 &&
          <div style={{position: 'absolute', right: 0}}>

          <ExportCSV csvData={ocorrencias.data} fileName={"ocorrencias"} title="Exportar" />
          </div>
          }
          <table id="datatable1" className="table table-striped table-bordered" cellSpacing={0} width="100%">
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
      </div>
    </section>
    <Footer/>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ocorrencias: state.ocorrencias
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OcorrenciasActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ocorrencias);
