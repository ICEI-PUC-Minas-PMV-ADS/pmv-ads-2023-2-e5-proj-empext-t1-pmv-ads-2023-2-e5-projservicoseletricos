# Implantação do Software

Planejamento da Implantação
Tecnologias Utilizadas

Servidor de Aplicação:

O front ficou hospedado no pages.github.com 
<img width="1102" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/docs/img/Polo home.jpg">

<img width="1102" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/docs/img/Polo produtos.jpg">

<img width="1102" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/blob/main/docs/img/Polo%20carrinho.jpg">

<img width="1102" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/docs/img/Polo empresa.jpg">

No Render esta hospedado backend e nosso banco. 


<img width="1102" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/docs/img/back.jpg">


<img width="1102" alt="image" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e5-proj-empext-t1-pmv-ads-2023-2-e5-projservicoseletricos/docs/img/back - BD.jpg">

Banco de Dados:

 O SGBD (Sistema de Gerenciamento de Banco de Dados) utilizado foi PostgreSQL.


Configuração do Ambiente de Produção:

Script de Banco de Dados:

CREATE TABLE SERVICOS(
	ID_SERVICOS SERIAL PRIMARY KEY,
	NOME VARCHAR(200) NOT NULL,
	DESCRICAO VARCHAR(10000) NOT NULL,
	IMAGE bytea
);

CREATE TABLE PRODUTOS(
	ID_PRODUTO serial PRIMARY KEY,
	NOME VARCHAR(200) NOT NULL,
	MARCA VARCHAR(200),
	GARANTIA CHAR(1),
	QUANTIDADE INT,
	ESPECIFICACOES VARCHAR(2500),
	PRECO FLOAT,
	ID_CATEGORIA INT,
	ID_SUBCATEGORIA INT,
	IMAGE bytea
);

CREATE TABLE USER(
	ID_USER serial PRIMARY key,
	NOME VARCHAR(200) NOT NULL,
	SOBRENOME VARCHAR(200) NOT NULL,
	SENHA VARCHAR(200) NOT NULL,
	EMAIL VARCHAR(200) NOT NULL,
	CEP VARCHAR(9) NOT NULL,
	LOGRADOURO VARCHAR(200) NOT NULL,
	BAIRRO VARCHAR(100) NOT NULL,
	NUMERO VARCHAR(10) NOT NULL,
	COMPLEMENTO VARCHAR(100),
	EMPRESA VARCHAR(100),
	ROLE VARCHAR(50)
);

CREATE TABLE ORCAMENTOS(
	ID_USER INT NOT NULL,
	ID_PRODUTO INT NOT NULL,
	QUANTIDADE INT,
	DATA_CRIACAO DATE default (CURRENT_DATE)
);

CREATE TABLE CATEGORIAS(
	ID_CATEGORIA SERIAL PRIMARY KEY,
	NOME VARCHAR(200)
);

CREATE TABLE SUBCATEGORIAS(
	ID_SUBCATEGORIA serial PRIMARY KEY,
	NOME VARCHAR(200)
);

-- Criação das chaves estrangeiras

ALTER TABLE PRODUTOS
ADD CONSTRAINT FK_PRODUTOS_CATEGORIAS
FOREIGN KEY(ID_CATEGORIA)
REFERENCES CATEGORIAS(ID_CATEGORIA);

ALTER TABLE PRODUTOS
ADD CONSTRAINT FK_PRODUTOS_SUBCATEGORIAS
FOREIGN KEY(ID_SUBCATEGORIA)
REFERENCES SUBCATEGORIAS(ID_SUBCATEGORIA);

ALTER TABLE ORCAMENTOS
ADD CONSTRAINT FK_ORCAMENTOS_USER
FOREIGN KEY(ID_USER)
REFERENCES USUARIO(ID_USER);

ALTER TABLE ORCAMENTOS
ADD CONSTRAINT FK_ORCAMENTO_PRODUTO
FOREIGN KEY(ID_PRODUTO)
REFERENCES PRODUTOS(ID_PRODUTO);

ALTER TABLE ORCAMENTOS
ADD CONSTRAINT FK_ORCAMENTO_USER
FOREIGN KEY(ID_USER)
REFERENCES USUARIO(ID_USER);


-
REFERENCES USUARIO(ID_USER);


-
