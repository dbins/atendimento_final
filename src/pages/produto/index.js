import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CatalogoActions } from "../../store/ducks/catalogo";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
import { Creators as CarrinhoActions } from "../../store/ducks/carrinho";
import Footer from "../../components/footer";
import HeaderCadastro from "../../components/headerCadastro";
import Categorias from "./categorias";
import Relacionados from "./relacionados";

class Produto extends Component {

  state = {
    quantidade: 1
  }

  static propTypes = {
    catalogoProdutoRequest: PropTypes.func.isRequired
  }

  componentDidMount(){
    document.title = "Detalhes do Produto";
    const { catalogoProdutoRequest } = this.props;
    const produto = this.props.match.params.id;;
    catalogoProdutoRequest(produto);
  }

  redirecionarCarrinho = e => {
    e.preventDefault();
    this.props.history.push("/carrinho");
  }

   AdicionarProdutoCarrinho = () => {
    const { carrinhoSuccess } = this.props;
    const produto = this.props.catalogo.produto;
    var codigo = produto.codigo;
    let produtos = this.props.carrinho.data;
    var continuar = true;
    let novalista = produtos.map((item) => {
      if (item.codigo === codigo) {
        continuar = false;
      }
      return item;
   });
   if (continuar){
     var valor_total = parseInt(produto.pontos) * parseInt(this.state.quantidade);
     var produto_novo = {codigo: produto.codigo, codigo_interno: produto.codigo_interno, produto: produto.produto, imagem: produto.imagem, valor_unitario: produto.pontos, quantidade: this.state.quantidade, total: valor_total};
     novalista.push(produto_novo);
     carrinhoSuccess(novalista);
   }
   this.props.history.push("/carrinho");
   }


  adicionar = e => {
    let atual = parseInt(this.state.quantidade) + 1;
    this.setState({quantidade: atual });
  };

  remover = e => {
    let atual = parseInt(this.state.quantidade) - 1;
    if (parseInt(atual) > 0){
      this.setState({quantidade: atual });
    }
  };

  render() {
    const { catalogo } = this.props;
    const produto = catalogo.produto;
    const usuario = parseInt(this.props.cadastro.cliente);
    return (
      <div>
        <HeaderCadastro usuario={usuario} exibirCarrinho={true} />
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="single-product">
                <div className="product">
                  <div className="col_one_fifth col_last">
                    <Categorias />
                  </div>
                  <div className="col_two_fifth">
                    {/* Product Single - Gallery
								============================================= */}
                    <div className="product-image">
                      <img src={produto.imagem} alt={produto.produto} />
                    </div>
                    {/* Product Single - Gallery End */}
                  </div>
                  <div className="col_two_fifth product-desc">
                    <h3>{produto.produto}</h3>
                    {/* Product Single - Price
								============================================= */}
                    <div className="product-price">
                    {parseInt(produto.pontos) > parseInt(produto.pontos_desconto) ?
                    (<div><del>De {produto.pontos} pontos </del> <ins>Por {produto.pontos_desconto} pontos</ins></div>)

                    :
                    (
                      <ins>{produto.pontos} pontos</ins>)
                    }
                    </div>
                    {/* Product Single - Price End */}
                    <p>&nbsp;</p>
                    {/* Product Single - Short Description
								============================================= */}
                    <p>
                    {produto.descricao}
                    </p>
                    {/* Product Single - Short Description End */}
                    {/* Product Single - Meta
								============================================= */}
                    <div className="card product-meta">
                      <div className="card-body">
                        <span itemProp="productID" className="sku_wrapper">
                          SKU: <span className="sku">{produto.codigo_interno}</span>
                        </span>
                        <span className="posted_in">
                          Categoria:
                          <Link
                    to={{
                      pathname: "/catalogo",
                      search: "?cat=" + produto.codigo_categoria
                    }}
                  >
                          {produto.categoria}
                          </Link>
                          .
                        </span>
                      </div>
                    </div>
                    {/* Product Single - Meta End */}
                    <p>&nbsp;</p>
                    {/* Product Single - Quantity & Cart Button
								============================================= */}
                    <form
                      className="cart nobottommargin clearfix"
                    >
                      <div className="quantity clearfix">
                        <input
                          type="button"
                          defaultValue="-"
                          className="minus"
                          onClick={this.remover}
                        />
                        <input
                          type="text"
                          step={1}
                          min={1}
                          name="quantity"
                          value={this.state.quantidade}
                          title="Qty"
                          className="qty"
                          readOnly
                          size={4}
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="plus"
                          onClick={this.adicionar}
                        />
                      </div>

                   <div onClick={this.AdicionarProdutoCarrinho} className="add-to-cart button nomargin">Adicionar ao Carrinho</div>
                    </form>
                    {/* Product Single - Quantity & Cart Button End */}
                    <div className="clear" />
                    <div className="line" />
                  </div>
                </div>
              </div>
              <div className="clear" />
              <div className="line" />
              <Relacionados />
            </div>
          </div>
        </section>
        {/* #content end */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catalogo: state.catalogo,
  cadastro: state.cadastro,
  carrinho: state.carrinho
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...CatalogoActions, ...CadastroActions, ...CarrinhoActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Produto);
