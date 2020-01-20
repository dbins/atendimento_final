import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SMSActions } from "../../store/ducks/sms";

class SMS extends Component {

  static propTypes = {
    smsRequest: PropTypes.func.isRequired,
    sms: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id:  PropTypes.number,
          tipo: PropTypes.string,
          celular: PropTypes.string,
          status: PropTypes.string,
          data: PropTypes.string,
          mensagem: PropTypes.string
        }),
      ),
    })
  };

  componentDidMount() {
    document.title = "SMS";
    const { smsRequest } = this.props;
    const entidade = this.props.match.params.id;
    smsRequest(entidade);
  }

  render() {
    const { sms } = this.props;
    return (
      <section id="content">
        <div className="container clearfix">
          <h3>SMS</h3>
          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Celular</th>
                <th>Status</th>
                <th>Data</th>
                <th>Mensagem</th>
              </tr>
            </thead>
            <tbody>
              {!sms.data.length && (
                <tr>
                  <td colSpan="6" align="center">
                    Nenhum SMS foi enviado para este cliente
                  </td>
                </tr>
              )}
              {sms.data.map(item => (
                <tr key={item.id}>
                  <td> {item.id} </td>
                  <td> {item.tipo} </td>
                  <td> {item.celular} </td>
                  <td> {item.status} </td>
                  <td> {item.data} </td>
                  <td> {item.mensagem} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  sms: state.sms
});

const mapDispatchToProps = dispatch => bindActionCreators(SMSActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SMS);
