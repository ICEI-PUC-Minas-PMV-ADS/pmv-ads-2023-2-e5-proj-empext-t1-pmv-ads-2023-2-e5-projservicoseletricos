-- SCRIPT BD PROJETO SERVICOS ELETRICOS

CREATE DATABASE PROJETOSERVICOSELETRICOS;
USE PROJETOSERVICOSELETRICOS;

-- Criação das tabelas

CREATE TABLE CLIENTES(
	ID_CLIENTE INT PRIMARY KEY AUTO_INCREMENT,
	NOME VARCHAR(45) NOT NULL,
	TELEFONE VARCHAR(45),
	EMAIL VARCHAR(45) NOT NULL,
	ENDERECO VARCHAR(100) NOT NULL
);

CREATE TABLE SERVICOS(
	ID_SERVICOS INT PRIMARY KEY AUTO_INCREMENT,
	NOME VARCHAR(50) NOT NULL,
	DESCRICAO VARCHAR(10000) NOT NULL,
	IMAGE_PATH VARCHAR(100)
);

CREATE TABLE ORCAMENTOS(
	ID_ORCAMENTO INT PRIMARY KEY AUTO_INCREMENT,
	VALOR FLOAT NOT NULL,
	DATA DATE NOT NULL
);

CREATE TABLE PRODUTOS(
	ID_PRODUTO INT PRIMARY KEY AUTO_INCREMENT,
	NOME VARCHAR(45) NOT NULL,
	QUANTIDADE INT,
	PRECO DECIMAL NOT NULL,
	IMAGE_PATH VARCHAR(100)
);

CREATE TABLE ADMIN(
	ID_ADMIN INT PRIMARY KEY AUTO_INCREMENT,
	NOME_ADMIN VARCHAR(100) NOT NULL,
	SENHA VARCHAR(1000) NOT NULL,
	EMAIL VARCHAR(45) NOT NULL
);


-- Criação das tabelas de relacionamento NxN

-- CREATE TABLE SERVICOS_ORCAMENTOS(
-- ID_SERVICO INT,
-- ID_ORCAMENTO INT,
-- PRIMARY KEY(ID_SERVICO, ID_ORCAMENTO)
-- );

CREATE TABLE ORCAMENTOS_PRODUTOS(
	ID_ORCAMENTO INT,
	ID_PRODUTO INT,
	PRIMARY KEY(ID_ORCAMENTO, ID_PRODUTO)
);


-- Criação das chaves estrangeiras

-- ALTER TABLE SERVICOS_ORCAMENTOS
-- ADD CONSTRAINT FK_SERVICOS_ORCAMENTOS_SERVICOS
-- FOREIGN KEY (ID_SERVICO)
-- REFERENCES SERVICOS(ID_SERVICOS);

-- ALTER TABLE SERVICOS_ORCAMENTOS
-- ADD CONSTRAINT FK_SERVICOS_ORCAMENTOS_ORCAMENTOS
-- FOREIGN KEY(ID_ORCAMENTO)
-- REFERENCES ORCAMENTOS(ID_ORCAMENTO);

ALTER TABLE ORCAMENTOS_PRODUTOS
ADD CONSTRAINT FK_ORCAMENTOS_PRODUTOS_ORCAMENTOS
FOREIGN KEY(ID_ORCAMENTO)
REFERENCES ORCAMENTOS(ID_ORCAMENTO);

ALTER TABLE ORCAMENTOS_PRODUTOS
ADD CONSTRAINT FK_ORCAMENTOS_PRODUTOS_PRODUTOS
FOREIGN KEY(ID_PRODUTO)
REFERENCES PRODUTOS(ID_PRODUTO);


-- Inserção de serviços

INSERT INTO SERVICOS (NOME, DESCRICAO) VALUES	
('Análise de Óleo de Transformador', 'Determina a concentração dos gases dissolvidos no óleo mineral isolante. A formação de gases em equipamentos elétricos imersos em óleo pode se dar devido ao processo de envelhecimento natural e/ou em maior quantidade, como resultado de defeitos. A operação em presença de imperfeições pode causar sérios danos aos equipamentos. Por isso é de grande interesse que seja possível detectar a falha em seu estágio inicial de desenvolvimento, podendo a natureza e importância das deficiências serem precisadas a partir da composição dos gases e da rapidez com que são formados.'),

('Manutenção de Cabine Primária', 'A Delta P eletromecânica possui um corpo técnico especializado em manutenção de subestações, cabines primárias e equipamentos de média e alta tensão.

Equipes composta por engenheiros, eletrotécnicos, eletricistas e auxiliares.

Realizamos visitas comerciais para elaboração de orçamentos sem custo de visita. Equipe comercial formada por engenheiros para melhor entendimento da necessidade dos clientes.

Após o fechamento dos serviços nosso time de planejamento alinha todas as etapas desde a integração de segurança, alinhamento de datas, tratativas com concessionárias para solicitações de desligamentos programados, emissões de cronogramas, APR, PTR e todos os relatórios acompanhados de ART.'),

('Tratamento de Óleo', 'A análise de risco ou estudo de gerenciamento de risco consiste no levantamento de dados relativos à estrutura e é recomendado que seja realizado antes de se efetuar qualquer adequação ou de se iniciar um novo projeto. Todos os dados são baseados na norma NBR 5419:2015, caderno 2, que com o auxílio de um software, irá determinar a necessidade ou não da instalação de um SPDA e qual seria o seu respectivo nível de proteção. '),

('SPDA', 'Esta etapa é vital para que se obtenha a máxima eficiência econômica: através do projeto executivo, é possível reduzir perdas, desperdício de materiais e mão de obra. O projeto é o desenho técnico da estrutura. A partir dele é possível escolher o melhor método de proteção e o posicionamento de cada um dos subsistemas, de forma que a construção siga essas especificações. Para isso é realizado o detalhamento de todos os itens que serão utilizados. '),

('Inspeção Termográfica (Termografia)', 'Existem diversas maneiras de prevenir seus sistemas elétricos contra falhas e manter a eficiência deles por mais tempo. Uma das mais eficientes é a termografia elétrica!

Este tipo de procedimento é feito por meio da análise termográfica de um componente, processo ou equipamento através de radiação infravermelha. Isso significa que esta técnica não causa nenhum tipo de dano a qualquer aparelho, por se tratar de uma medição de temperatura, que geram imagens térmicas que determinam como os equipamentos estão funcionando.

A Delta P Eletromecânica realiza inspeção termográfica de alta tecnologia para a prevenção de sinistros como interrupções de fornecimento de energia ou mesmo acidentes mais graves, como incêndios.

As instalações elétricas de qualquer natureza estão sujeitas à sobrecarga, desbalanceamento de fases e mau contato, que apresentam como efeitos a geração de calor. Esse calor é detectável pela termografia, que pode ser aplicada na inspeção termográfica em sistemas, desde a subestação ou cabine de entrada até as instalações secundárias e ramais em geral, revelando e localizando os pontos críticos e indicando os componentes e equipamentos com aquecimento fora do normal.

Conte com a Delta P Eletromecânica para realizar a análise termográfica em seus equipamentos e garantir mais segurança no dia a dia das suas operações. '),

('Laudos', 'A Delta P Eletromecânica possui um corpo técnico especializado em manutenção de subestações, cabines primárias e equipamentos de média e alta tensão. Estas equipes são compostas por engenheiros, eletrotécnicos, eletricistas e auxiliares.

Antes de fechar um serviço, enviamos nossa equipe comercial formada por engenheiros para melhor entendimento da necessidade dos clientes. Realizamos essas visitas comerciais para elaboração de orçamentos sem custo de visita.

Após este processo, nosso time de planejamento alinha todas as etapas desde a integração de segurança, alinhamento de datas, tratativas com concessionárias para solicitações de desligamentos programados, emissões de cronogramas, APR, PTR e todos os relatórios acompanhados de ART laudo técnico.

A Delta P Eletromecânica trabalha conforme às normas e atendendo as exigências da legislação, investe constantemente na qualificação de seus colaboradores e possui, dentre outras, as principais documentações para melhor atender a seus clientes: '),

('Teste de EPIs e Ferramentas', 'A DeltaP Eletromecânica oferece a realização de ensaio em EPI’s, EPc’s e Ferramentas Isoladas. Os ensaios verificam a manutenção das características dielétricas de isolamento de ferramentas, EPI´s e EPC´s e visam garantir a segurança do trabalhador no uso dos mesmos e atendimento às exigências da NR 10.'),

('Banco de Capacitor', 'A Delta P Eletromecânica realiza serviços de estudo, projeto, instalação e manutenção em bancos de capacitores para que você garanta sempre a proteção elétrica ideal.')
;


-- Inserção de Produtos

INSERT INTO PRODUTOS (NOME, PRECO) VALUES

('Transformadores trifásicos a seco', 1000),

('Eletrodutos galvanizados', 1000),

('Lâmpadas LED', 1000),

('Projetor LED', 1000),

('Tomadas industriais', 1000),

('Quadros de comando', 1000)

;