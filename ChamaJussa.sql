USE [master]
GO

-- Limpa objetos criados por engano no banco master
IF OBJECT_ID('dbo.OrdemDeServico', 'U') IS NOT NULL DROP TABLE [dbo].[OrdemDeServico];
IF OBJECT_ID('dbo.usuario', 'U') IS NOT NULL DROP TABLE [dbo].[usuario];
IF OBJECT_ID('dbo.status', 'U') IS NOT NULL DROP TABLE [dbo].[status];
IF OBJECT_ID('dbo.localizacao', 'U') IS NOT NULL DROP TABLE [dbo].[localizacao];
IF OBJECT_ID('dbo.fila', 'U') IS NOT NULL DROP TABLE [dbo].[fila];
GO

-- Exclui o banco de dados se ele já existir parcialmente
IF EXISTS (SELECT name FROM sys.databases WHERE name = N'ChamaJussa')
BEGIN
    ALTER DATABASE [ChamaJussa] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE [ChamaJussa];
END
GO

-- 1. Criação do Banco (deixando o SQL Server definir o caminho padrão correto)
CREATE DATABASE [ChamaJussa]
GO

ALTER DATABASE [ChamaJussa] SET COMPATIBILITY_LEVEL = 160
GO

ALTER DATABASE [ChamaJussa] SET AUTO_CLOSE OFF 
GO

-- 2. Seleção do banco criado
USE [ChamaJussa]
GO

-- 3. Criação das Tabelas
CREATE TABLE [dbo].[fila](
	[fila_id] [int] IDENTITY(1,1) NOT NULL,
	[nome] [varchar](50) NOT NULL,
    PRIMARY KEY CLUSTERED ([fila_id] ASC)
)
GO

CREATE TABLE [dbo].[localizacao](
	[localizacao_id] [int] IDENTITY(1,1) NOT NULL,
	[nome] [varchar](50) NOT NULL,
	[andar] [varchar](15) NOT NULL,
    PRIMARY KEY CLUSTERED ([localizacao_id] ASC)
)
GO

CREATE TABLE [dbo].[status](
	[status_id] [int] IDENTITY(1,1) NOT NULL,
	[nome] [varchar](30) NOT NULL,
    PRIMARY KEY CLUSTERED ([status_id] ASC)
)
GO

CREATE TABLE [dbo].[usuario](
	[usuario_id] [uniqueidentifier] NOT NULL DEFAULT (newid()),
	[nome] [varchar](50) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[senha] [varbinary](32) NOT NULL,
	[nif] [int] NOT NULL,
    PRIMARY KEY CLUSTERED ([usuario_id] ASC),
    CONSTRAINT [UQ_usuario_email] UNIQUE ([email]),
    CONSTRAINT [UQ_usuario_nif] UNIQUE ([nif])
)
GO

CREATE TABLE [dbo].[OrdemDeServico](
	[os_id] [int] IDENTITY(1,1) NOT NULL,
	[nome_item] [varchar](50) NOT NULL,
	[solicitante] [uniqueidentifier] NULL,
	[dt_criacao] [datetime] NOT NULL DEFAULT (getdate()),
	[localizacao_id] [int] NULL,
	[descricao] [varchar](255) NOT NULL,
	[imagem] [varchar](max) NULL,
	[status] [int] NULL,
	[fila] [int] NULL,
    PRIMARY KEY CLUSTERED ([os_id] ASC),
    CONSTRAINT [FK_OrdemDeServico_Fila] FOREIGN KEY([fila]) REFERENCES [dbo].[fila] ([fila_id]),
    CONSTRAINT [FK_OrdemDeServico_Localizacao] FOREIGN KEY([localizacao_id]) REFERENCES [dbo].[localizacao] ([localizacao_id]),
    CONSTRAINT [FK_OrdemDeServico_Status] FOREIGN KEY([status]) REFERENCES [dbo].[status] ([status_id]),
    CONSTRAINT [FK_OrdemDeServico_Usuario] FOREIGN KEY([solicitante]) REFERENCES [dbo].[usuario] ([usuario_id])
)
GO

-- 4. Inserção dos Dados
SET IDENTITY_INSERT [dbo].[fila] ON 
INSERT [dbo].[fila] ([fila_id], [nome]) VALUES (1, N'Geral'), (2, N'Suporte'), (3, N'Manutenção')
SET IDENTITY_INSERT [dbo].[fila] OFF
GO

SET IDENTITY_INSERT [dbo].[localizacao] ON 
INSERT [dbo].[localizacao] ([localizacao_id], [nome], [andar]) VALUES 
(1, N'Sala do Diretor', N'Térreo'),
(2, N'Sala da Coordenação da Faculdade', N'Térreo'),
(3, N'Sala de Reunião', N'Térreo'),
(4, N'Secretaria', N'Térreo'),
(5, N'Biblioteca', N'Térreo'),
(6, N'Copa dos Funcionários', N'Térreo'),
(7, N'Atendimento', N'Térreo'),
(8, N'Sala 1', N'1º Andar'),
(9, N'Sala 2', N'1º Andar'),
(10, N'Sala 3', N'1º Andar'),
(11, N'Sala 04/05', N'1º Andar'),
(12, N'Sala 06/07', N'1º Andar'),
(13, N'Studio', N'1º Andar'),
(14, N'Mesacast', N'1º Andar')
SET IDENTITY_INSERT [dbo].[localizacao] OFF
GO

SET IDENTITY_INSERT [dbo].[status] ON 
INSERT [dbo].[status] ([status_id], [nome]) VALUES 
(1, N'Aberto'),
(2, N'Em andamento'),
(3, N'Concluído'),
(4, N'Cancelado')
SET IDENTITY_INSERT [dbo].[status] OFF
GO

INSERT [dbo].[usuario] ([usuario_id], [nome], [email], [senha], [nif]) VALUES 
(N'8c7b9660-e897-4935-9bb8-dbce3f2ad542', N'samanta', N'samanta@email.com', 0x55A5E9E78207B4DF8699D60886FA070079463547B095D1A05BC719BB4E6CD251, 1234567)
GO

SET IDENTITY_INSERT [dbo].[OrdemDeServico] ON 
INSERT [dbo].[OrdemDeServico] ([os_id], [nome_item], [solicitante], [dt_criacao], [localizacao_id], [descricao], [imagem], [status], [fila]) VALUES 
(2, N'teste', N'8c7b9660-e897-4935-9bb8-dbce3f2ad542', CAST(N'2026-07-29T19:29:13.713' AS DateTime), 1, N'teste', N'/uploads/os-01c1acbb-b740-467a-ab2e-1eb9b13c91a8.png', 1, 1),
(3, N'string', N'8c7b9660-e897-4935-9bb8-dbce3f2ad542', CAST(N'2026-07-31T08:18:05.880' AS DateTime), 1, N'string', N'/uploads/os-1fa50191-bbb2-4a6c-8a68-844d9f1061c2.jpg', 1, 1)
SET IDENTITY_INSERT [dbo].[OrdemDeServico] OFF
GO