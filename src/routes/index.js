import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Scripts from "../pages/scripts";
import Ocorrencias from "../pages/ocorrencias";
import Discador from "../pages/discador";
import Cadastro from "../pages/cadastro";
import Ocorrencia from "../pages/ocorrencia";
import OcorrenciasCliente from "../pages/ocorrenciasCliente";
import PontuacaoManual from "../pages/pontuacaoManual";
import Expirados from "../pages/expirados";
import Validades from "../pages/validades";
import Pontuacoes from "../pages/pontuacoes";
import Resgates from "../pages/resgates";
import Acoes from "../pages/acoes";
import Contatos from "../pages/contatos";
import SMS from "../pages/sms";
import Catalogo from "../pages/catalogo";
import Carrinho from "../pages/carrinho";
import Produto from "../pages/produto";
import ConfiguracoesCadastrosGerais from "../pages/configuracoes/cadastros_gerais";
import ConfiguracoesLiteraisPontuacao from "../pages/configuracoes/pontuacoes";
import ConfiguracoesAcoes from "../pages/configuracoes/acoes";
import ConfiguracoesAcoesPerguntas from "../pages/configuracoes/acoes_perguntas";
import ConfiguracoesAcoesOpcoesResposta from "../pages/configuracoes/acoes_opcoes_resposta";
import ConfiguracoesCadastrosGeraisListar from "../pages/configuracoes/cadastros_gerais_listar";
import CadastroPesquisa from "../pages/cadastro_pesquisa";

import { restrito } from "./restrito.js";
const AllRoutes = () => (
  <HashRouter>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={restrito(Home)} />
    <Route exact path="/scripts" component={restrito(Scripts)} />
    <Route exact path="/ocorrencias" component={restrito(Ocorrencias)} />
    <Route exact path="/discador" component={restrito(Discador)} />
    <Route exact path="/ocorrencia/:id" component={restrito(Ocorrencia)} />
    <Route exact path="/cadastro/:id" component={restrito(Cadastro)} />
    <Route
      exact
      path="/localizar_cliente"
      component={restrito(CadastroPesquisa)}
    />
    <Route
      exact
      path="/pontuacao_manual/:id"
      component={restrito(PontuacaoManual)}
    />
    <Route
      exact
      path="/ocorrencias_cliente/:id"
      component={restrito(OcorrenciasCliente)}
    />
    <Route exact path="/expirados/:id" component={restrito(Expirados)} />
    <Route exact path="/validades/:id" component={restrito(Validades)} />
    <Route exact path="/pontuacoes/:id" component={restrito(Pontuacoes)} />
    <Route exact path="/resgates/:id" component={restrito(Resgates)} />
    <Route exact path="/acoes/:id" component={restrito(Acoes)} />
    <Route exact path="/contatos/:id" component={restrito(Contatos)} />
    <Route exact path="/sms/:id" component={restrito(SMS)} />
    <Route exact path="/catalogo" component={restrito(Catalogo)} />
    <Route exact path="/carrinho" component={restrito(Carrinho)} />
    <Route exact path="/produto/:id" component={restrito(Produto)} />
    <Route
      exact
      path="/acoes_cadastros_gerais"
      component={restrito(ConfiguracoesCadastrosGerais)}
    />
    <Route
      exact
      path="/acoes_cadastros_gerais_lista/:id"
      component={restrito(ConfiguracoesCadastrosGeraisListar)}
    />
    <Route
      exact
      path="/acoes_pontuacoes"
      component={restrito(ConfiguracoesLiteraisPontuacao)}
    />
    <Route
      exact
      path="/acoes_listagem"
      component={restrito(ConfiguracoesAcoes)}
    />
    <Route
      exact
      path="/acoes_perguntas/:id"
      component={restrito(ConfiguracoesAcoesPerguntas)}
    />
    <Route
      exact
      path="/acoes_opcoes_resposta/:id"
      component={restrito(ConfiguracoesAcoesOpcoesResposta)}
    />
  </HashRouter>
);

export default AllRoutes;
