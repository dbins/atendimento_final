import React, { Component } from "react";
import PropTypes from "prop-types";
import history from "../../routes/history";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import { Creators as CarrinhoActions } from "../../store/ducks/carrinho";
import { Creators as CatalogoActions } from "../../store/ducks/catalogo";
import Logo from '../../images/logo.png';
import { Link, withRouter } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Motivos from "../../pages/motivos";


class HeaderCadastro extends Component {

  _isMounted = false;

  static propTypes = {
    usuario:  PropTypes.number,
    exibirCarrinho:  PropTypes.bool,
    logout: PropTypes.func.isRequired,
    carrinhoRequest: PropTypes.func.isRequired,
    carrinho: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          codigo:  PropTypes.number,
          produto: PropTypes.string,
          imagem: PropTypes.string,
          valor_unitario: PropTypes.number,
          quantidade: PropTypes.number,
          total: PropTypes.number
        }),
      ),
     }),
    total:  PropTypes.number,
    quantidade:  PropTypes.number
  };

  state = {
    menuPontuacao: false,
    menuOcorrencia: false,
    menuResgate: false,
    menuOpcoes: false,
    menuCarrinho: false,
    barraPesquisa: true,
    menuResponsivo: true,
    detalheCarrinho: true,
    showSair: false,
    showCadastro: false
  }


  componentDidMount() {
    this._isMounted = true;
	//O carrinho será local
    //const { carrinhoRequest } = this.props;
    //const usuario = this.props.usuario;
    //carrinhoRequest(usuario);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  openMenuPontuacao = e => {
    e.preventDefault();
    this.setState({ menuPontuacao: true, menuCarrinho: false, menuOcorrencia: false,menuResgate: false,menuOpcoes: false }, () => {
      document.addEventListener('click', this.closeMenuPontuacao);
    });
  }

  closeMenuPontuacao = e => {
    e.preventDefault();
    this.setState({ menuPontuacao: false }, () => {
      document.removeEventListener('click', this.closeMenuPontuacao);
    });
  }

  openMenuOcorrencia = e => {
    e.preventDefault();
    this.setState({ menuOcorrencia: true, menuCarrinho: false,  menuPontuacao: false, menuResgate: false,menuOpcoes: false }, () => {
      document.addEventListener('click', this.closeMenuOcorrencia);
    });
  }

  closeMenuOcorrencia = e => {
    e.preventDefault();
    this.setState({ menuOcorrencia: false }, () => {
      document.removeEventListener('click', this.closeMenuOcorrencia);
    });
  }

  openMenuResgate = e => {
    e.preventDefault();
    this.setState({ menuResgate: true, menuCarrinho: false,  menuPontuacao: false, menuOcorrencia: false, menuOpcoes: false }, () => {
      document.addEventListener('click', this.closeMenuResgate);
    });
  }

  closeMenuResgate = e => {
    e.preventDefault();
    if (this._isMounted) {
      this.setState({ menuResgate: false }, () => {
        document.removeEventListener('click', this.closeMenuResgate);
      });
    }
  }

  openMenuOpcoes = e => {
    e.preventDefault();
    this.setState({ menuOpcoes: true, menuCarrinho: false,  menuPontuacao: false, menuOcorrencia: false,menuResgate: false }, () => {
      document.addEventListener('click', this.closeMenuOpcoes);
    });
  }

  closeMenuOpcoes = e => {
    e.preventDefault();
    this.setState({ menuOpcoes: false }, () => {
      document.removeEventListener('click', this.closeMenuOpcoes);
    });
  }

  openMenuCarrinho = e => {
    e.preventDefault();
    this.setState({ menuCarrinho: true, menuOpcoes: false,  menuPontuacao: false, menuOcorrencia: false,menuResgate: false }, () => {
      document.addEventListener('click', this.closeMenuCarrinho);
    });
  }

  closeMenuCarrinho = e => {
    e.preventDefault();
    this.setState({ menuCarrinho: false }, () => {
      document.removeEventListener('click', this.closeMenuCarrinho);
    });
  }


  openSair = e => {
    e.preventDefault();
    this.setState({showSair: true})
  }

  handleShowSair = () => {
    this.setState({showSair: false})
  }


  // Navegacao interna
  openScript = e => {
    e.preventDefault();
    window.open('#/scripts','','scrollbars=yes,width=1000,height=400');
  }

  openOcorrenciasCliente = e => {
    e.preventDefault();
    window.open('#/ocorrencias_cliente/' + this.props.usuario,'','scrollbars=yes,width=1000,height=400');
  }

  openOcorrencia = e => {
    e.preventDefault();
    window.open('#/ocorrencia/0','','scrollbars=yes,width=800,height=400');
  }

  openPontuacaoManual = e => {
    e.preventDefault();
    window.open('#/pontuacao_manual/' + this.props.usuario,'','scrollbars=yes,width=400,height=400');
  }

  openExpirados = e => {
    e.preventDefault();
    window.open('#/expirados/' + this.props.usuario,'','scrollbars=yes,width=400,height=400');
  }
  openValidades = e => {
    e.preventDefault();
    window.open('#/validades/' + this.props.usuario,'','scrollbars=yes,width=400,height=400');
  }

  openPontuacoes = e => {
    e.preventDefault();
    window.open('#/pontuacoes/' + this.props.usuario,'','scrollbars=yes,width=1000,height=400');
  }

  openAcoes = e => {
    e.preventDefault();
    window.open('#/acoes/' + this.props.usuario,'','scrollbars=yes,width=500,height=400');
  }

  openContatos = e => {
    e.preventDefault();
    window.open('#/contatos/' + this.props.usuario,'','scrollbars=yes,width=1000,height=400');
  }

  openSMS = e => {
    e.preventDefault();
    window.open('#/sms/' + this.props.usuario,'','scrollbars=yes,width=800,height=400');
  }

  openResgates = e => {
    e.preventDefault();
    window.open('#/resgates/' + this.props.usuario,'','scrollbars=yes,width=1200,height=400');
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
    } else {
      document.body.classList.remove('device-xs');
      document.body.classList.remove('device-touch');
      document.body.classList.remove('primary-menu-open');
      document.getElementById('ul-primary-menu').classList.remove('sf-js-enabled');
      document.getElementById('ul-primary-menu').classList.remove('d-block');
    }
  }

  openDetalheCarrinho = e => {
    e.preventDefault();
    let clicou;
    if (!this.state.detalheCarrinho){
      clicou = true;
    } else {
      clicou = false;
    }
    this.setState({detalheCarrinho: clicou});
    if (this.state.detalheCarrinho){
      document.getElementById("top-cart").classList.add('top-cart-open');
    } else {
      document.getElementById("top-cart").classList.remove('top-cart-open');
    }
  }

  pesquisar = e => {
    e.preventDefault();
    const {catalogoPesquisaRequest} = this.props
    const pesquisa = document.getElementById("pesquisa").value;
    document.body.classList.remove('top-search-open');
    document.getElementById("pesquisa").value = "";
    catalogoPesquisaRequest(pesquisa);
  };

  abrir_carrinho = e => {
    e.preventDefault();
    history.push('/carrinho');
  };


  render() {
    var divStyle = {
      color: '#FFFFFF',
      textAlign: 'right',
      backgroundColor: '#000000',
      padding:'10px'
    };
    const { carrinho, total, quantidade } = this.props;
    return (
      <div>
      <div style={divStyle}>Logado como: {localStorage.getItem("@SAO:nome")} - Ocorrências pendentes: 0</div>
      <header id="header" className="full-header">
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger"><i className="icon-reorder" onClick={this.openMenuResponsivo}/></div>
            <div id="logo">
             <Link to={"/home"}><img src={Logo} alt="Logo"/></Link>
					  </div>
            <nav id="primary-menu" className="style-5">
              <ul id="ul-primary-menu">
              {this.props.exibirCarrinho && (
                <li><Link to={"/cadastro/" + this.props.usuario}><div><i className="icon-user" />Cadastro</div></Link></li>
              )}

                <li><a href="/" onClick={this.openMenuPontuacao}><div><i className="icon-dollar" />Pontuação</div></a>
                {this.state.menuPontuacao ? (
                   <ul style={{display:'block'}}>
                   <li><a href="/" onClick={this.openPontuacoes}><div>Detalhado</div></a></li>
                   <li><a href="/" onClick={this.openValidades}><div>Validades</div></a></li>
                   <li><a href="/" onClick={this.openExpirados}><div>Expirados</div></a></li>
                   <li><a href="/" onClick={this.openPontuacaoManual}><div>Pontuação Manual</div></a></li>
                 </ul>
                  ) : (null)}
                </li>
                <li><a href="/" onClick={this.openMenuOcorrencia}><div><i className="icon-list2" />Ocorrências</div></a>
                {this.state.menuOcorrencia ? (

                  <ul style={{display:'block'}}>
                    <li><a href="/" onClick={this.openOcorrencia}><div>Nova Ocorrência</div></a></li>
                    <li><a href="/" onClick={this.openOcorrenciasCliente}><div>Ocorrências do cliente</div></a></li>
                  </ul>
                  ) : (null)}
                </li>
                <li><a href="/" onClick={this.openMenuResgate}><div><i className="icon-gift" />Resgates</div></a>
                {this.state.menuResgate ? (
                  <ul style={{display:'block'}}>
                  <li><Link to={"/catalogo"}><div>Catálogo</div></Link></li>
                  <li><a href="/"  onClick={this.openResgates}><div>Resgates</div></a></li>
                </ul>
                  ) : (null)}
                </li>
                <li className="mega-menu"> <a href="http://www.dbins.com.br" rel="noopener noreferrer"  target="_blank"><div><i className="icon-globe" />Site</div></a></li>
                <li><a href="/" onClick={this.openScript}><div><i className="icon-file-alt" />Scripts</div></a></li>
                <li><a href="/" onClick={this.openMenuOpcoes}><div><i className="icon-cogs" />Opções</div></a>
                {this.state.menuOpcoes ? (

                  <ul style={{display:'block'}}>
                    <li><a href="/" onClick={this.openAcoes}><div>Ações</div></a></li>
                    <li><a href="/" onClick={this.openContatos}><div>Contatos</div></a></li>
                    <li><a href="/" onClick={this.openSMS}><div>SMS</div></a></li>
                  </ul>
                   ) : (null)}
                </li>
                <li className="mega-menu"><a href="/" onClick={this.openSair}><div><i className="icon-off" />Sair</div></a></li>
              </ul>
              {this.props.exibirCarrinho ? (
              <div id="top-cart" onClick={this.openDetalheCarrinho}>
                <a href="/carrinho"><i className="icon-shopping-cart" /><span>{quantidade}</span></a>
                <div className="top-cart-content" >
                  <form method="GET" >
                    <div className="top-cart-title">
                      <h4>Carrinho</h4>
                    </div>
                    <div className="top-cart-items">
                    {!carrinho.data.length && (
                      <div className="top-cart-item clearfix">
                          Não existem produtos no seu carrinho
                      </div>
                    )}
                    {carrinho.data.map(item => (
                      <div key={item.codigo} className="top-cart-item clearfix">
                        <div className="top-cart-item-image">
                        <Link to={"/produto/" + item.codigo}>
                            <img
                              width={64}
                              height={64}
                              src={item.imagem}
                              alt={item.produto}
                            />
                          </Link>
                        </div>
                        <div className="top-cart-item-desc">
                          <Link to={"/produto/" + item.codigo}>{item.produto}</Link>
                          <span className="top-cart-item-price">{item.valor_unitario}</span>
                          <span className="top-cart-item-quantity">x {item.quantidade}</span>
                        </div>
                      </div>
                    ))}
                    </div>
                    <div className="top-cart-action clearfix">
                      <span className="fleft top-checkout-price">{total}</span>
                      <Link to={"/carrinho"}>
                      <div className="button button-3d button-small nomargin fright">Ver Carrinho</div>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
               ) : (null)}
               {this.props.exibirCarrinho ? (
              <div id="top-search">
                <a href="/" id="top-search-trigger" onClick={this.openBarraPesquisa}><i className="icon-search3" /><i className="icon-line-cross" /></a>
                <form action="/catalogo" method="GET" onSubmit={this.pesquisar}>
                  <input type="text" name="q" id="pesquisa" className="form-control" placeholder="Nome ou código do produto.." />
                </form>
            </div>
            ) : (null)}
            </nav>
          </div>
        </div>
        <Modal show={this.state.showSair} onHide={this.handleShowSair}>
        <Modal.Body><Motivos history={this.props.history} usuario={this.props.usuario} entidade={this.props.usuario}/></Modal.Body>
        </Modal>
      </header>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  login: state.login,
  carrinho: state.carrinho,
  total:
    state.carrinho.data.length > 0
      ? state.carrinho.data
          .map(item => item.total)
          .reduce((prev, curr) => prev + curr)
      : 0,
   quantidade:
      state.carrinho.data.length > 0
        ? state.carrinho.data
            .map(item => item.quantidade)
            .reduce((prev, curr) => prev + curr)
        : 0
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...LoginActions, ...CarrinhoActions, ...CatalogoActions}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderCadastro));
