# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Arquitetura e Tecnologias

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas
<img width="1102" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/assets/88354883/c51cc606-3df8-4236-a1e6-152a88210fa9">


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001.1| Permitir que o usuário cadastre produtos | ALTA |
|RF-001.2| Permitir que o usuário edite produtos | ALTA |
|RF-001.3| Permitir que o usuário exclua produtos | ALTA |
|RF-001.4| Permitir que o cliente pesquise produtos | ALTA |
|RF-002.1| Permitir que o usuário cadastre serviços | ALTA |
|RF-002.2| Permitir que o usuário edite serviços | ALTA |
|RF-002.3| Permitir que o usuário exclua serviços | ALTA |
|RF-002.4| Permitir que o cliente visualize os serviços | ALTA |
|RF-003.1| Permitir que o cliente solicite orçamento | ALTA |
|RF-003.2| Permitir que o usuário responda o orçamento | ALTA |
|RF-004.1| Permitir que o cadastro do cliente | ALTA |
|RF-004.2| Permitir que cliente edite o cadastro | ALTA |
|RF-004.3| Permitir que cliente exclua o cadastro | ALTA |
|RF-005.1| Permitir que cliente crie orçamento | ALTA |
|RF-005.2| Permitir que cliente edite o orçamento | ALTA |
|RF-005.3| Permitir que cliente gerencie os orçamentos | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

![diagrama](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/blob/main/src/Diagrama%20de%20caso%20de%20uso.png)

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

<div align="center">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/blob/main/src/ModeloConceitual.png" alt='ER' width: 300px; height: 220px/>
</div>


## Projeto da Base de Dados
O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.

<div align="center">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/blob/main/src/er_model.png" alt='ER' width: 250px; height: 180px/>
</div>
