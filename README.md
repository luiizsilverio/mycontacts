# MYCONTACTS

## Conteúdo
* [Sobre a Aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
API desenvolvida em __Node.js__ que implementa um CRUD com banco de dados __MongoDB__.<br />
Possui 2 coleções: Contacts e Users, com autenticação __JWT__.<br />
O banco de dados pode ser local ou na nuvem, com MongoDB Atlas. Para definir o banco na nuvem, informe as configurações do banco no arquivo __.env__.<br />
Desenvolvido durante o vídeo [Learn Node.js & Express with Project in 2 Hours](https://www.youtube.com/watch?v=H9M02of22z4), do canal do __Youtube__ de __Dipesh Malvia__.<br />
<br />

### Rotas da aplicação

| Método | Caminho da Rota | Descrição da Rota |
|---|---|---|
| GET | http://localhost:5000/api/contacts | Retorna a lista de contatos do usuário |
| GET | http://localhost:5000/api/contacts/:id | Procura um contato pelo id |
| POST | http://localhost:5000/api/contacts | Inclui novo contato |
| PUT | http://localhost:5000/api/contacts/:id | Altera um contato |
| DELETE | http://localhost:5000/api/contacts/:id | Exclui um contato |
| POST | http://localhost:5000/api/users/register | Cadastra novo usuário |
| POST | http://localhost:5000/api/users/login | Faz o login do usuário |
| GET | http://localhost:5000/api/users/current | Busca os dados do usuário logado |
|

<br />

## :hammer_and_wrench: Tecnologias
* __NodeJS__
* __Mongoose__
* __Jsonwebtoken__
* __Dotenv__

## :car: Iniciando a aplicação
Renomeie o arquivo ```.env-example``` para ```.env``` e informe a string de conexão do banco.
```bash
$ git clone https://github.com/luiizsilverio/mycontacts.git
$ cd mycontacts
$ npm install
$ npm start
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
