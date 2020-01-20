import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";

class Header extends Component {

  _isMounted = false;

  state = {
    menuConfig: false,
    barraPesquisa: true,
    menuResponsivo: true,
  }

  static propTypes = {
    cadastroPesquisaRequest: PropTypes.func.isRequired
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  openMenuConfig = e => {
    e.preventDefault();
    this.setState({ menuConfig: true }, () => {
      document.addEventListener('click', this.closeMenuConfig);
    });
  }

  closeMenuConfig = e => {
    e.preventDefault();
    if (this._isMounted) {
      this.setState({ menuConfig: false }, () => {
        document.removeEventListener('click', this.closeMenuConfig);
      });
    }
  }

  openScript = e => {
    e.preventDefault();
    window.open('#/scripts','','scrollbars=yes,width=1000,height=400');
  }

  openBarraPesquisa = e => {
    e.preventDefault();
    let clicou;
    if (!this.state.barraPesquisa){
      clicou = true;
    } else {
      clicou = false;
    }
    this.setState({barraPesquisa: clicou});
    if (this.state.barraPesquisa){
      document.body.classList.add('top-search-open');
      document.getElementById("pesquisa").focus();
    } else {
      document.body.classList.remove('top-search-open');
    }
  }

  pesquisar = e => {
    e.preventDefault();
    const criterio_pesquisa = document.getElementById("pesquisa").value;
    const { cadastroPesquisaRequest } = this.props;
    cadastroPesquisaRequest(criterio_pesquisa);
  };

  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  openMenuResponsivo = e => {
    e.preventDefault();
    let clicou;
    if (!this.state.menuResponsivo){
      clicou = true;
    } else {
      clicou = false;
    }
    this.setState({menuResponsivo: clicou});
    if (this.state.menuResponsivo){
      document.body.classList.add('device-xs');
      document.body.classList.add('device-touch');
      document.body.classList.add('primary-menu-open');
      document.getElementById('ul-primary-menu').classList.add('sf-js-enabled');
      document.getElementById('ul-primary-menu').classList.add('d-block');
      document.addEventListener('click', this.closeMenuResponsivo);
    } else {
      document.body.classList.remove('device-xs');
      document.body.classList.remove('device-touch');
      document.body.classList.remove('primary-menu-open');
      document.getElementById('ul-primary-menu').classList.remove('sf-js-enabled');
      document.getElementById('ul-primary-menu').classList.remove('d-block');
    }
  }

  closeMenuResponsivo = e => {
    e.preventDefault();
    if (this._isMounted) {
      this.setState({ menuResponsivo: false }, () => {
      document.body.classList.remove('device-xs');
      document.body.classList.remove('device-touch');
      document.body.classList.remove('primary-menu-open');
      document.getElementById('ul-primary-menu').classList.remove('sf-js-enabled');
      document.getElementById('ul-primary-menu').classList.remove('d-block');
      document.removeEventListener('click', this.closeMenuResponsivo);
      });
    }
  }

  render() {
    var divStyle = {
      color: '#FFFFFF',
      textAlign: 'right',
      backgroundColor: '#000000',
      padding:'10px',
      margin: '0px auto',
      height:'50px',
      display: 'block',
      clear: 'both'
    };
    return (
      <div>
      <div style={divStyle}>
        <div>Logado como: {localStorage.getItem("@SAO:nome")} - Ocorrências pendentes: {localStorage.getItem("@SAO:pendentes")}</div>
      </div>
      <header id="header" className="full-header">
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger"><i className="icon-reorder"  onClick={this.openMenuResponsivo}/></div>
            <div id="logo">
              <Link to={"/home"}><img src={Logo} alt="Logo" /></Link>
            </div>
              <nav id="primary-menu" className="style-5">
              <ul id="ul-primary-menu">
                <li className="current"><Link to={"/home"}><div><i className="icon-home2" />Home</div></Link></li>
                <li><Link to={"/ocorrencias"}><div><i className="icon-list2" />Ocorrências</div>
                  </Link></li>
                <li>
                <a href="/" onClick={this.openScript}><div><i className="icon-file-alt" />Scripts</div></a>
                </li>
                <li><Link to={"/discador"}><div><i className="icon-phone3" />Discador</div></Link></li>
                <li><a href="/" onClick={this.openMenuConfig}><div><i className="icon-cog" />Config</div></a>
                {this.state.menuConfig ? (
                  <ul style={{display:'block'}}>
                    <li><Link to={"/acoes_listagem"}><div>Ações</div></Link></li>
                    <li><Link to={"/acoes_cadastros_gerais"}><div>Cadastros de itens de Combos</div></Link></li>
                    <li><Link to={"/acoes_pontuacoes"}><div>Literais de Pontuação</div></Link></li>
                  </ul>
                  ) : (null)}
                </li>

                <li className="mega-menu"><a href="/" onClick={this.props.logout}><div><i className="icon-off" />Sair</div></a></li>
              </ul>
              <div id="top-search">
                <a href="/" id="top-search-trigger"  onClick={this.openBarraPesquisa}>
                  <i className="icon-search3"/>
                  <i className="icon-line-cross" /></a>
                <form onSubmit={this.pesquisar}>
                  <input type="text" id="pesquisa" name="pesquisa" className="form-control" placeholder="Informe o CPF, nome, email ou telefone" />
                </form>
              </div>

            </nav>

          </div>
        </div>
      </header>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...LoginActions, ...CadastroActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
