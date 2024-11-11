# KenzieHub (Redux)

## Descrição do projeto

O projeto KenzieHub (Redux) consiste em uma refatoração completa do projeto [KenzieHub](https://github.com/Gabriel-Zarpellon/kenziehub-Gabriel-Zarpellon) utilizando o React Redux. 
Sendo assim, todas as funções anteriormente desenvolvidas através de estados e contexto, agora estão construídas em stores, com thunks, actions e reducers.

O projeto é desenvolvido em React, Redux e utiliza SASS para a estilização dos componentes.

## Implementações do projeto

### Cadastro e Login de usuários
    - Rotas desenvolvidas com React Router Dom;
    - Formulários utilizando React Hook Form;
    - Componentes de páginas Register, Login e Dashboard;
    - Validação de formulários;
    - Funcionalidades de login, logout e registro;
    - Consumo da API https://kenziehub.herokuapp.com com Axios;
    - Módulo de Redux Store para criação e leitura de perfis de usuário.

### Autenticação
    - Rotas de usuário protegidas: apenas acessíveis por usuários logados e autenticados através de TOKEN fornecido na realização do login; 

### Cadastro, leitura, atualização e exclusão de tecnologias
    - Modais de criação e atualização de tecnologias;
    - Componentes de lista e card de tecnologias: Techlist e TechCard;
    - Módulo de Redux Store para CRUD completo de tecnologias;
    - Integração de tecnologias e usuário.


## Visualizar deploy do [projeto no Vercel](https://kenziehub-refatorado-gabriel-zarpellon.vercel.app/)
