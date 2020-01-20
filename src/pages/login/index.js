import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog from 'react-bootstrap-dialog'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";

import { Erro } from "./styles";

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
      error: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired
    })
  };

  state = {
    login: "",
    password: ""
  };

  componentDidMount(){
    document.title = "Login"
  }

  autenticar = e => {
    e.preventDefault();

    const { login, password } = this.state;
    const { loginRequest } = this.props;
    let continuar = true;
    if (login === "") {
      //alert("Por favor informe o seu login");
      this.dialog.showAlert('Por favor informe o seu login');
      continuar = false;
    } else {
      if (password === "") {
        //alert("Por favor informe sua senha!");
        this.dialog.showAlert('Por favor informe sua senha!');
        continuar = false;
      }
    }
    if (continuar) {
      loginRequest(login, password);
    }
  };

  alterar = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { login, password } = this.state;
    return (

       <section id="content" style={{width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, background: '#444'}}>
        <div className="content-wrap nopadding" style={{marginTop: 60}}>
        {this.props.login.error && (
            <Erro>
              <span>
                Houve um problema com o login e a senha informados. Por favor
                verifique se estão corretos e se você tem permissão para acessar
                este sistema
              </span>
            </Erro>
          )}
          <div className="section nopadding nomargin"/>
          <div className="section nobg full-screen nopadding nomargin">
            <div className="container-fluid vertical-middle divcenter clearfix">
              <div className="card divcenter noradius noborder" style={{maxWidth: 400}}>
                <div className="card-body" style={{padding: 40}}>
                  <form id="login-form" name="login-form" className="nobottommargin" onSubmit={this.autenticar}>
                    <h3>Acesso ao sistema</h3>
                    <div className="col_full">
                      <label htmlFor="login-form-username">Usuário:</label>
                      <input type="text" id="login-form-username" name="login"
            value={login}
            onChange={this.alterar} className="form-control not-dark" />
                    </div>
                    <div className="col_full">
                      <label htmlFor="login-form-password">Senha:</label>
                      <input type="password" id="login-form-password" name="password"
            value={password}
            onChange={this.alterar} className="form-control not-dark" />
                    </div>
                    <div className="col_full nobottommargin">
                      <button className="button button-3d button-black nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                    </div>
                  </form>
                  <div className="line line-sm" />
                </div>
              </div>
              <div className="center dark"><small>2018</small></div>
            </div>
          </div>
        </div>
        <Dialog ref={(component) => { this.dialog = component }} />
      </section>

    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
