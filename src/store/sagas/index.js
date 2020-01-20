import { all, takeLatest } from "redux-saga/effects";

import { Types as LoginTypes } from "../ducks/login";

import { Types as PausaTypes } from "../ducks/pausa";
import { Types as OcorrenciasTypes } from "../ducks/ocorrencias";
import { Types as ResgatesTypes } from "../ducks/resgates";
import { Types as ScriptsTypes } from "../ducks/scripts";
import { Types as SMSTypes } from "../ducks/sms";
import { Types as AcoesTypes } from "../ducks/acoes";
import { Types as ContatosTypes } from "../ducks/contatos";
import { Types as LogTypes } from "../ducks/log";
import { Types as HistoricoTypes } from "../ducks/historico";
import { Types as EnderecoTypes } from "../ducks/endereco";
import { Types as TelefoneTypes } from "../ducks/telefone";
import { Types as CatalogoTypes } from "../ducks/catalogo";
import { Types as CadastroTypes } from "../ducks/cadastro";
import { Types as CarrinhoTypes } from "../ducks/carrinho";
import { Types as ExpiradosTypes } from "../ducks/expirados";
import { Types as ValidadesTypes } from "../ducks/validades";
import { Types as PontuacoesTypes } from "../ducks/pontuacoes";
import { Types as MotivosTypes } from "../ducks/motivos";
import { Types as DiscadorTypes } from "../ducks/discador";
import { Types as ConfiguracoesTypes } from "../ducks/configuracoes";

import { login, logout } from "./login";
import { pausa, pausa_tipo, pausa_adicionar, pausa_finalizar } from "./pausa";
import {
  ocorrencias,
  ocorrenciasAssunto,
  ocorrenciasStatus,
  ocorrenciasEncaminhada,
  ocorrenciasTipo,
  ocorrenciasTotal,
  ocorrencia,
  ocorrencia_adicionar,
  ocorrencia_atualizar
} from "./ocorrencias";
import { scripts } from "./scripts";
import { resgates } from "./resgates";
import { sms } from "./sms";
import { acoes } from "./acoes";
import { contatos } from "./contatos";
import { log } from "./log";
import { historico, historico_adicionar } from "./historico";
import { endereco, endereco_adicionar, endereco_tipo, CEP } from "./endereco";
import { telefone, telefone_adicionar, telefone_tipo } from "./telefone";
import { catalogo, produto, categorias, catalogo_pesquisa } from "./catalogo";
import {
  entidade,
  entidade_atualizar,
  cargos,
  estadocivil,
  sexo,
  cliente,
  entidade_pesquisar
} from "./cadastros";
import { carrinho, carrinho_endereco, carrinho_finalizar } from "./carrinho";
import { expirados } from "./expirados";
import { validades } from "./validades";
import {
  contas,
  cartoes,
  saldo,
  pontos,
  bonus,
  adicionar_transacao
} from "./pontuacoes";
import { motivos, motivos_adicionar } from "./motivos";
import { discador } from "./discador";
import {
  acoes_config,
  pontuacoes,
  cadastros_gerais,
  combos,
  perguntas,
  opcoes,
  acoes_adicionar,
  perguntas_adicionar,
  opcoes_adicionar,
  cadastrosgerais_adicionar
} from "./configuracoes";

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(LoginTypes.LOGOUT, logout),
    takeLatest(PausaTypes.PAUSA_REQUEST, pausa),
    takeLatest(PausaTypes.PAUSA_TIPO_REQUEST, pausa_tipo),
    takeLatest(PausaTypes.PAUSA_ADICIONAR_REQUEST, pausa_adicionar),
    takeLatest(PausaTypes.PAUSA_FINALIZAR_REQUEST, pausa_finalizar),
    takeLatest(OcorrenciasTypes.OCORRENCIAS_REQUEST, ocorrencias),
    takeLatest(
      OcorrenciasTypes.OCORRENCIAS_ASSUNTO_REQUEST,
      ocorrenciasAssunto
    ),
    takeLatest(OcorrenciasTypes.OCORRENCIAS_STATUS_REQUEST, ocorrenciasStatus),
    takeLatest(
      OcorrenciasTypes.OCORRENCIAS_ENCAMINHADA_REQUEST,
      ocorrenciasEncaminhada
    ),
    takeLatest(OcorrenciasTypes.OCORRENCIAS_TIPO_REQUEST, ocorrenciasTipo),
    takeLatest(OcorrenciasTypes.OCORRENCIAS_TOTAL_REQUEST, ocorrenciasTotal),
    takeLatest(OcorrenciasTypes.OCORRENCIAS_DETALHE_REQUEST, ocorrencia),
    takeLatest(
      OcorrenciasTypes.OCORRENCIAS_ADICIONAR_REQUEST,
      ocorrencia_adicionar
    ),
    takeLatest(
      OcorrenciasTypes.OCORRENCIAS_ATUALIZAR_REQUEST,
      ocorrencia_atualizar
    ),
    takeLatest(ResgatesTypes.RESGATES_REQUEST, resgates),
    takeLatest(ScriptsTypes.SCRIPTS_REQUEST, scripts),
    takeLatest(SMSTypes.SMS_REQUEST, sms),
    takeLatest(AcoesTypes.ACOES_REQUEST, acoes),
    takeLatest(ContatosTypes.CONTATOS_REQUEST, contatos),
    takeLatest(LogTypes.LOG_REQUEST, log),
    takeLatest(HistoricoTypes.HISTORICO_REQUEST, historico),
    takeLatest(HistoricoTypes.HISTORICO_ADICIONAR_REQUEST, historico_adicionar),
    takeLatest(EnderecoTypes.ENDERECO_REQUEST, endereco),
    takeLatest(EnderecoTypes.ENDERECO_ADICIONAR_REQUEST, endereco_adicionar),
    takeLatest(EnderecoTypes.ENDERECO_TIPO_REQUEST, endereco_tipo),
    takeLatest(EnderecoTypes.ENDERECO_CEP_REQUEST, CEP),
    takeLatest(TelefoneTypes.TELEFONE_REQUEST, telefone),
    takeLatest(TelefoneTypes.TELEFONE_ADICIONAR_REQUEST, telefone_adicionar),
    takeLatest(TelefoneTypes.TELEFONE_TIPO_REQUEST, telefone_tipo),
    takeLatest(CatalogoTypes.CATALOGO_REQUEST, catalogo),
    takeLatest(CatalogoTypes.CATALOGO_PRODUTO_REQUEST, produto),
    takeLatest(CatalogoTypes.CATALOGO_CATEGORIAS_REQUEST, categorias),
    takeLatest(CatalogoTypes.CATALOGO_PESQUISA_REQUEST, catalogo_pesquisa),
    takeLatest(CadastroTypes.CADASTRO_REQUEST, entidade),
    takeLatest(CadastroTypes.CADASTRO_ATUALIZAR_REQUEST, entidade_atualizar),
    takeLatest(CadastroTypes.CADASTRO_CARGO_REQUEST, cargos),
    takeLatest(CadastroTypes.CADASTRO_ESTADOCIVIL_REQUEST, estadocivil),
    takeLatest(CadastroTypes.CADASTRO_SEXO_REQUEST, sexo),
    takeLatest(CadastroTypes.CADASTRO_CLIENTE_REQUEST, cliente),
    takeLatest(CadastroTypes.CADASTRO_PESQUISA_REQUEST, entidade_pesquisar),
    takeLatest(CarrinhoTypes.CARRINHO_REQUEST, carrinho),
    takeLatest(CarrinhoTypes.CARRINHO_ENDERECO_REQUEST, carrinho_endereco),
    takeLatest(CarrinhoTypes.CARRINHO_FINALIZAR_REQUEST, carrinho_finalizar),
    takeLatest(ExpiradosTypes.EXPIRADOS_REQUEST, expirados),
    takeLatest(ValidadesTypes.VALIDADES_REQUEST, validades),
    takeLatest(PontuacoesTypes.CONTAS_REQUEST, contas),
    takeLatest(PontuacoesTypes.CONTAS_CARTOES_REQUEST, cartoes),
    takeLatest(PontuacoesTypes.CONTAS_SALDO_REQUEST, saldo),
    takeLatest(PontuacoesTypes.CONTAS_PONTOS_REQUEST, pontos),
    takeLatest(PontuacoesTypes.CONTAS_BONUS_REQUEST, bonus),
    takeLatest(
      PontuacoesTypes.CONTAS_TRANSACAO_ADICIONAR_REQUEST,
      adicionar_transacao
    ),
    takeLatest(MotivosTypes.MOTIVOS_REQUEST, motivos),
    takeLatest(MotivosTypes.MOTIVOS_ADICIONAR_REQUEST, motivos_adicionar),
    takeLatest(DiscadorTypes.DISCADOR_REQUEST, discador),
    takeLatest(ConfiguracoesTypes.CONFIGURACOES_ACOES_REQUEST, acoes_config),
    takeLatest(ConfiguracoesTypes.CONFIGURACOES_PONTUACOES_REQUEST, pontuacoes),
    takeLatest(
      ConfiguracoesTypes.CONFIGURACOES_CADASTROS_GERAIS_REQUEST,
      cadastros_gerais
    ),
    takeLatest(
      ConfiguracoesTypes.CONFIGURACOES_CADASTROS_GERAIS_COMBOS_REQUEST,
      combos
    ),
    takeLatest(
      ConfiguracoesTypes.CONFIGURACOES_ACOES_PERGUNTAS_REQUEST,
      perguntas
    ),
    takeLatest(ConfiguracoesTypes.CONFIGURACOES_ACOES_OPCOES_REQUEST, opcoes),
    takeLatest(
      ConfiguracoesTypes.CONFIGURACOES_ACOES_ADICIONAR_REQUEST,
      acoes_adicionar
    ),
    takeLatest(
      ConfiguracoesTypes.CONFIGURACOES_ACOES_PERGUNTAS_ADICIONAR_REQUEST,
      perguntas_adicionar
    ),
    takeLatest(
      ConfiguracoesTypes.CONFIGURACOES_ACOES_OPCOES_ADICIONAR_REQUEST,
      opcoes_adicionar
    ),
    takeLatest(
      ConfiguracoesTypes.CONFIGURACOES_CADASTROS_GERAIS_ADICIONAR_REQUEST,
      cadastrosgerais_adicionar
    )
  ]);
}
