CREATE DATABASE ChamaJussa;
GO

USE ChamaJussa;
GO

CREATE TABLE Usuario (
    UsuarioID   UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Nome        VARCHAR(50) NOT NULL,
    Email       VARCHAR(50) UNIQUE NOT NULL,
    Senha       VARCHAR(255) NOT NULL,
    NIF         INT UNIQUE NOT NULL
);
GO

CREATE TABLE Localizacao (
    LocalizacaoID   INT PRIMARY KEY IDENTITY(1,1),
    Nome            VARCHAR(50) NOT NULL,
    Andar           VARCHAR(15) NOT NULL
);
GO

CREATE TABLE Fila (
    FilaID  INT PRIMARY KEY IDENTITY(1,1),
    Nome    VARCHAR(50) NOT NULL
);
GO

CREATE TABLE StatusOrdem (
    StatusOrdemID   INT PRIMARY KEY IDENTITY(1,1),
    Nome            VARCHAR(50) NOT NULL
);
GO

CREATE TABLE OrdemDeServico (
    OrdemID         INT PRIMARY KEY IDENTITY(1,1),
    NomeItem        VARCHAR(50) NOT NULL,
    Titulo          VARCHAR(50) NOT NULL,
    Dt_Criacao      DATETIME2 NOT NULL DEFAULT GETDATE(),
    Descricao       VARCHAR(255) NOT NULL,
    Imagem          VARBINARY(MAX) NULL,

    Solicitante     UNIQUEIDENTIFIER NOT NULL,
    LocalizacaoID   INT NOT NULL,
    FilaID          INT NOT NULL,
    StatusOrdemID   INT NOT NULL,

    CONSTRAINT FK_Ordem_Usuario FOREIGN KEY (Solicitante)
        REFERENCES Usuario(UsuarioID),

    CONSTRAINT FK_Ordem_Localizacao FOREIGN KEY (LocalizacaoID)
        REFERENCES Localizacao(LocalizacaoID),

    CONSTRAINT FK_Ordem_Fila FOREIGN KEY (FilaID)
        REFERENCES Fila(FilaID),

    CONSTRAINT FK_Ordem_StatusOrdem FOREIGN KEY (StatusOrdemID)
        REFERENCES StatusOrdem(StatusOrdemID)
);
GO