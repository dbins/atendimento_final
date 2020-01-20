import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as EnderecoActions } from "../../../store/ducks/endereco";
import { Creators as TelefoneActions } from "../../../store/ducks/telefone";

class Contatos extends Component {
  static propTypes = {
    enderecoRequest: PropTypes.func.isRequired,
    telefoneRequest: PropTypes.func.isRequired,
    endereco: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          tipo: PropTypes.string,
          endereco: PropTypes.string,
          numero: PropTypes.string,
          complemento: PropTypes.string,
          bairro: PropTypes.string,
          cidade: PropTypes.string,
          estado: PropTypes.string,
          CEP: PropTypes.string,
          excluido: PropTypes.string
        }),
      ),
    }),
    telefone: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          tipo: PropTypes.string,
          ddd: PropTypes.string,
          telefone: PropTypes.string,
          data_cadastro: PropTypes.string,
          data_atualizacao: PropTypes.string
        }),
      ),
    })
  };

  componentDidMount() {
    const { enderecoRequest, telefoneRequest } = this.props;
    document.title = "Ocorrências";
    const usuario = 0;
    enderecoRequest(usuario);
    telefoneRequest(usuario);
  }

  confirmarCliqueEND = (event, codigo) => {
    event.preventDefault();
    if(window.confirm("Você deseja excluir este registro?")) {
      return true;
      //Enviar para o reducer
    } else {
      return false;
    }
  };

  confirmarCliqueTEL = (event, codigo) => {
    event.preventDefault();
    if(window.confirm("Você deseja excluir este registro?")) {
      return true;
      //Enviar para o reducer
    } else {
      return false;
    }
  };

  render() {
    const { endereco } = this.props;
    return (
      <div className="tab-content clearfix" id="tabs-34">
        <div className="table-responsive">
          <div className="row">
            <div className="col-md-6">
              <h3>Endereços</h3>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".bs-example-modal-lg"
                onClick={this.openEndereco}
              >
                Adicionar Endereço
              </button>
            </div>
          </div>

          <table
            id="datatable1"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Endereço</th>
                <th>Número</th>
                <th>Complemento</th>
                <th>Bairro</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Cep</th>
                <th>Marcar como excluído</th>
              </tr>
            </thead>
            <tbody>
              {!endereco.data.length && (
                <tr>
                  <td colspan="9" align="center">
                    Não existem endereços cadastrados
                  </td>
                </tr>
              )}
                {endereco.data.map(item => (
                          <tr>
                            <td> {item.tipo} </td>
                            <td> {item.endereco} </td>
                            <td> {item.numero} </td>
                            <td> {item.complemento} </td>
                            <td> {item.bairro} </td>
                            <td> {item.cidade} </td>
                            <td> {item.estado} </td>
                            <td> {item.CEP} </td>
                            <td>
                            <a href="/"
                         onClick={(e)=>{this.confirmarCliqueEND(e, item.codigo)}}>Excluir</a>
                            </td>
                          </tr>
                           ))}
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <div className="row">
            <div className="col-md-6">
              <h3>Telefones</h3>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".bs-example-modal-lg2"
                onClick={this.openTelefone}
              >
                Adicionar Telefone
              </button>
            </div>
          </div>

          <table
            id="datatable2"
            className="table table-striped table-bordered"
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <th>Tipo</th>
                <th>DDD</th>
                <th>Telefone</th>
                <th>Data de Cadastro</th>
                <th>Data de Atualização</th>
                <th>Marcar como excluído</th>
              </tr>
            </thead>
            <tbody>
            {!telefone.data.length && (
                          <tr>
                            <td colspan="6" align="center">
                              Não existem telefones cadastrados
                            </td>
                          </tr>
                        )}
                         {telefone.data.map(item => (
                          <tr>
                            <td> {item.tipo} </td>
                            <td> {item.ddd} </td>
                            <td> {item.telefone} </td>
                            <td> {item.data_cadastro} </td>
                            <td> {item.data_atualizacao} </td>
                            <td><a href="/"
                         onClick={(e)=>{this.confirmarCliqueTEL(e, item.codigo)}}>Excluir</a></td>
                          </tr>
                         ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  endereco: state.endereco,
  telefone: state.telefone
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...EnderecoActions, ...TelefoneActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contatos);
