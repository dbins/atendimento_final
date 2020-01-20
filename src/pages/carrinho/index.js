import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CarrinhoActions } from "../../store/ducks/carrinho";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
import Footer from "../../components/footer";
import HeaderCadastro from "../../components/headerCadastro";


class Carrinho extends Component {
  static propTypes = {
    carrinhoRequest: PropTypes.func.isRequired,
    carrinhoSuccess: PropTypes.func.isRequired,
    carrinhoEnderecoRequest: PropTypes.func.isRequired,
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
      endereco:
        PropTypes.shape({
          codigo:  PropTypes.number,
          endereco: PropTypes.string,
          bairro: PropTypes.string,
          cidade: PropTypes.string,
          estado: PropTypes.string,
          CEP: PropTypes.string,
        }),
    }),
    total:  PropTypes.number
  };

  componentDidMount() {
    document.title = "Carrinho";
    const { carrinhoEnderecoRequest } = this.props;
    const entidade = localStorage.getItem("@SAO:entidade");
    //O carrinho vai ser local
    //carrinhoRequest(entidade);
    carrinhoEnderecoRequest(entidade);
  }

  salvar = e => {
    alert('Troca finalizada com sucesso!');
  };

  confirmarClique = (event, codigo) => {
    event.preventDefault();
    const { carrinhoSuccess } = this.props;
    let produtos = this.props.carrinho.data;
    if(window.confirm("Você deseja excluir este registro?")) {
      let novalista = produtos.filter((item) => {
        return item.codigo !== codigo
     });
     //Enviar para o reducer
     carrinhoSuccess(novalista);
     return true;
    } else {
      return false;
    }
  };

  adicionar = id => {
    const { carrinhoSuccess } = this.props;
    let produtos = this.props.carrinho.data;
    let novalista = produtos.filter((item) => {
      if (item.codigo === id) {
          item.quantidade = item.quantidade + 1;
          item.total = parseInt(item.valor_unitario) * parseInt(item.quantidade);
       }
       return item;
   });
   carrinhoSuccess(novalista);
  };

  finalizarTroca = event => {
    event.preventDefault();
    //Precisa vincular funcao com o botao!
    var troca = {}
    var entidade = localStorage.getItem("@SAO:entidade");
    var array_produtos = [];
    let produtos = this.props.carrinho.data;
    for (var i = 0; i < produtos.length; i++) {
      var tmp = {
        produto: produtos[i].codigo_interno,
        quantidade: produtos[i].quantidade,
      }
      array_produtos.push(tmp);
    }
    troca.CPF = localStorage.getItem("@SAO:entidade_CPF");
    troca.usuario = localStorage.getItem("@SAO:entidade_usuario");
    troca.produtos = array_produtos;
    //Finalizar a troca
    const { carrinhoFinalizarRequest } = this.props;
    carrinhoFinalizarRequest(troca);
    this.props.history.push("/cadastro/" + entidade);
  }

  remover = id => {
    const { carrinhoSuccess } = this.props;
    let produtos = this.props.carrinho.data;
    let novalista = produtos.filter((item) => {
      if (item.codigo === id) {
          if (item.quantidade>=2){
            item.quantidade = item.quantidade - 1;
            item.total = parseInt(item.valor_unitario) * parseInt(item.quantidade);
          }
       }
       return item;
   });
   carrinhoSuccess(novalista);

  };


  render() {
    const { carrinho, total } = this.props;
    const usuario = parseInt(this.props.cadastro.cliente);
    const saldo = localStorage.getItem("@SAO:entidade_saldo");
    const diferenca = parseInt(saldo) - parseInt(total);
    var permitir_troca  = true;
    if (parseInt(total) > parseInt(saldo)){
      permitir_troca  = false;
    }
    if (parseInt(total)===0){
      permitir_troca  = false;
    }
    return (
      <div>
        <HeaderCadastro usuario={usuario}/>
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="table-responsive">
                <table className="table cart">
                  <thead>
                    <tr>
                      <th className="cart-product-remove">&nbsp;</th>
                      <th className="cart-product-thumbnail">&nbsp;</th>
                      <th className="cart-product-name">Produto</th>
                      <th className="cart-product-price">Valor unitário</th>
                      <th className="cart-product-quantity">Quantidade</th>
                      <th className="cart-product-subtotal">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!carrinho.data.length && (
                      <tr>
                        <td colSpan="6" align="center">
                          Não existem produtos no seu carrinho
                        </td>
                      </tr>
                    )}
                    {carrinho.data.map(item => (
                      <tr key={item.codigo} className="cart_item">
                        <td className="cart-product-remove">
                          <a
                            href="/"
                            className="remove"
                            title="Excluir"
                            onClick={(e)=>{this.confirmarClique(e, item.codigo)}}
                          >
                            <i className="icon-trash2" />
                          </a>
                        </td>
                        <td className="cart-product-thumbnail">
                          <Link to={"/produto/" + item.codigo}>
                            <img
                              width={64}
                              height={64}
                              src={item.imagem}
                              alt={item.produto}
                            />
                          </Link>
                        </td>
                        <td className="cart-product-name">
                          <Link to={"/produto/" + item.codigo}>{item.produto}</Link>
                        </td>
                        <td className="cart-product-price">
                          <span className="amount">{item.valor_unitario}</span>
                        </td>
                        <td className="cart-product-quantity">
                          <div className="quantity clearfix">
                            <input
                              type="button"
                              defaultValue="-"
                              className="minus"
                              onClick={()=>{this.remover(item.codigo)}}
                            />
                            <input
                              type="text"
                              name="quantity"
                              value={item.quantidade}
                              className="qty"
                              readOnly
                            />
                            <input
                              type="button"
                              defaultValue="+"
                              className="plus"
                              onClick={()=>{this.adicionar(item.codigo)}}
                            />
                          </div>
                        </td>
                        <td className="cart-product-subtotal">
                          <span className="amount">{item.total}</span>
                        </td>
                      </tr>
                    ))}

                    <tr className="cart_item">
                      <td colSpan={6}>
                        <div className="row clearfix">
                          <div className="col-lg-4 col-4 nopadding"></div>

                          <div className="col-lg-8 col-8 nopadding">

                          {permitir_troca && (
                            <a
                              href="/"
                              className="button button-3d notopmargin fright"
                              onClick={(e)=>{this.finalizarTroca(e)}}
                            >
                              Finalizar Troca
                            </a>
                            )}
                            <Link  className="button button-3d notopmargin fright" to={"/catalogo"}>
                            Adicionar mais produtos
                          </Link>
                          </div>

                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row clearfix">
                <div className="col-lg-6 clearfix">
                  <p>
                    <strong>Endereço de Entrega:</strong>
                  </p>
                  {carrinho.endereco.endereco} <br />
                  {carrinho.endereco.bairro} <br />
                  Cidade: {carrinho.endereco.cidade} <br />
                  Estado: {carrinho.endereco.estado} <br />
                  CEP: {carrinho.endereco.CEP} <br />
                </div>
                <div className="col-lg-6 clearfix">
                  <h4>Total</h4>
                  <div className="table-responsive">
                    <table className="table cart">
                      <tbody>
                        <tr className="cart_item">
                          <td className="cart-product-name">
                            <strong>Total carrinho</strong>
                          </td>
                          <td className="cart-product-name">
                            <span className="amount">{total}</span>
                          </td>
                        </tr>
                        <tr className="cart_item">
                          <td className="cart-product-name">
                            <strong>Frete</strong>
                          </td>
                          <td className="cart-product-name">
                            <span className="amount">Grátis</span>
                          </td>
                        </tr>
                        <tr className="cart_item">
                          <td className="cart-product-name">
                            <strong>Total</strong>
                          </td>
                          <td className="cart-product-name">
                            <span className="amount color lead">
                              <strong>{total}</strong>
                            </span>
                          </td>
                        </tr>
                        <tr className="cart_item">
                          <td className="cart-product-name">
                            <strong>Saldo atual</strong>
                          </td>
                          <td className="cart-product-name">
                            <span className="amount color lead">
                              <strong>{saldo}</strong>
                            </span>
                          </td>
                        </tr>
                        <tr className="cart_item">
                          <td className="cart-product-name">
                            <strong>Saldo após a troca</strong>
                          </td>
                          <td className="cart-product-name">
                            <span className="amount color lead">
                              <strong>{diferenca}</strong>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cadastro: state.cadastro,
  carrinho: state.carrinho,
  total:
    state.carrinho.data.length > 0
      ? state.carrinho.data
          .map(item => item.total)
          .reduce((prev, curr) => prev + curr)
      : 0
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...CarrinhoActions, ...CadastroActions}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carrinho);
