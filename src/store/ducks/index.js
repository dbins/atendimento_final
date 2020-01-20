import { combineReducers } from "redux";
import login from "./login";
import home from "./home";
import scripts from "./scripts";
import discador from "./discador";
import ocorrencias from "./ocorrencias";
import cadastro from "./cadastro";
import endereco from "./endereco";
import telefone from "./telefone";
import pontuacao from "./pontuacao";
import expirados from "./expirados";
import validades from "./validades";
import pontuacoes from "./pontuacoes";
import acoes from "./acoes";
import contatos from "./contatos";
import sms from "./sms";
import resgates from "./resgates";
import catalogo from "./catalogo";
import carrinho from "./carrinho";
import produto from "./produto";
import log from "./log";
import historico from "./historico";
import pausa from "./pausa";
import motivos from "./motivos";
import configuracoes from "./configuracoes";

export default combineReducers({
  login,
  home,
  scripts,
  discador,
  ocorrencias,
  cadastro,
  endereco,
  telefone,
  pontuacao,
  expirados,
  validades,
  pontuacoes,
  acoes,
  contatos,
  sms,
  resgates,
  catalogo,
  carrinho,
  produto,
  log,
  historico,
  pausa,
  motivos,
  configuracoes
});
