<h3 align="center">
   <img alt="Logo" title="#logo" width="250px" src="/parladorideal/src/assets/logoH.png">
   <br><br>
   <b>Parlador Ideal</b>  
   <br><br>
 
   <p align="center">
   <img src="https://img.shields.io/badge/made by-Patricia-orange" />
   <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/back--end-NodeJS-brightgreen" />
   </a>
   <a href="https://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/framework-Express-brightgreen" />
   </a>
   <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/badge/front--end-React--Native-blue" />
   </a>
   <a href="https://typeorm.io/#/">
    <img src="https://img.shields.io/badge/ORM-TypeORM-orange" />
   </a>
   </p>
</h3>

## 🔖Índice

- [Sobre](#sobre)
- [Etapas](#etapas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Design](#design)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)

<a id="sobre"></a>
## 🧐 Sobre

Esta aplicação visa facilitar a troca de ideias e pensamentos do dia a dia de uma equipe, onde os colaboradores podem publicar posts de até 280 caracteres.
O projeto se encontra em fase desenvolvimento faltando o consumo de API nas telas de listagem de posts, salvar, editar e excluir post.


<a id="etapas"></a>
## 🚧 Etapas

O Projeto foi desenvolvido na seguinte ordem:
1. Wireframe
2. Back-end: API Restful
3. Front-end: React Native

<a id="tecnologias-utilizadas"></a>
## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as stacks:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

<a id="design"></a>
## 🎨 Design

- O wireframe está dinponível no **[Figma](https://www.figma.com/proto/Lx7mDvaC9BzQrOs3kxIWR4/Parlador-Ideal?node-id=1%3A6&viewport=116%2C197%2C0.2803868055343628&scaling=scale-down)** contendo as telas:
   - Splash Screren
   - Login
   - Cadastro
   - Feed
   - Meus Posts: página onde lista os posts do usuário e permite a edição e exclusão.
   - Publicar post

<a id="como-usar"></a>
## 🔥 Como usar

- ### **Pré-requisitos**
  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina.
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**. Para o desenvolvimento foi utilizado o yarn.
  - Como Banco de Dados foi utilizado o **[PostgreSQL](https://www.postgresql.org/)**.
  - Para visualizar a aplicação mobile necessita de emulador ou conexão do dispositivo móvel via cabo USB. Como sugestão para configurar a máquina deixo o seguinte **[link](https://react-native.rocketseat.dev/)**.

- ### **Banco de dados**
  - Verificar o arquivo `ormconfig.json` da pasta `backend` e realizar os ajustes para conectar com o banco de dados.
  - As migrations podem ser rodadas com o seguinte comando `yarn typeorm migration:run`
  - Para popular o banco de dados e verificar as API pode ser usado a plataforma **[Insomnia](https://insomnia.rest/)**.

1. Faça um clone:

```sh
  $ git clone link
```

2. Navegue até o repositório clonado:

```sh
  $ cd Parlador_Ideal/
  $ cd backend/
```

3. Baixe as dependências - backend:

```sh
  $ yarn
```

4. Rode o servidor

```sh
  $ yarn dev:server
```

5. Navegue até parladorideal (mobile)

```sh
  $ cd parladorideal/
```

4. Divirta-se 🎉

```sh
  $ yarn android
  ou
  $ yarn ios
```

<a id="como-contribuir"></a>
## 💪🏻 Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

---

<h4 align="center">
    Feito com 🧡 by <a href="https://www.linkedin.com/in/patricia-mashiba/" target="_blank">Patrícia</a>
</h4>
