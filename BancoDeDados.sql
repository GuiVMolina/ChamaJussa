USE master;
GO

IF DB_ID('ChamaJussa') IS NOT NULL
    DROP DATABASE ChamaJussa
GO

CREATE DATABASE ChamaJussa;
GO

USE ChamaJussa;
GO

-- Tabela Usuario
CREATE TABLE usuario (
    usuario_id  UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    nome        VARCHAR(50) NOT NULL,
    email       VARCHAR(50) UNIQUE NOT NULL,
    senha       VARCHAR(255) NOT NULL,
    nif         INT UNIQUE NOT NULL
);
GO

-- Tabela Localizacao
CREATE TABLE localizacao (
    localizacao_id  INT PRIMARY KEY IDENTITY(1,1),
    nome            VARCHAR(50) NOT NULL,
    andar           VARCHAR(15) NOT NULL
);
GO

-- Tabela Fila
CREATE TABLE fila (
    fila_id  INT PRIMARY KEY IDENTITY(1,1),
    nome     VARCHAR(50) NOT NULL
);
GO

-- Tabela Status
CREATE TABLE status (
    status_id  INT PRIMARY KEY IDENTITY(1,1),
    nome       VARCHAR(50) NOT NULL
);
GO

-- Tabela OrdemDeServico
CREATE TABLE OrdemDeServico (
    os_id           INT PRIMARY KEY IDENTITY(1,1),
    nome_item       VARCHAR(50) NOT NULL,
    dt_criacao      DATETIME2 NOT NULL DEFAULT GETDATE(),
    descricao       VARCHAR(255) NOT NULL,
    imagem          VARCHAR(MAX) NULL,
    
    solicitante     UNIQUEIDENTIFIER NULL,
    localizacao_id  INT NULL,
    fila_id         INT NULL,
    status          INT NULL,

    CONSTRAINT FK_Ordem_Usuario FOREIGN KEY (solicitante)
        REFERENCES usuario(usuario_id),

    CONSTRAINT FK_Ordem_Localizacao FOREIGN KEY (localizacao_id)
        REFERENCES localizacao(localizacao_id),

    CONSTRAINT FK_Ordem_Fila FOREIGN KEY (fila_id)
        REFERENCES fila(fila_id),

    CONSTRAINT FK_Ordem_Status FOREIGN KEY (status)
        REFERENCES status(status_id)
);
GO