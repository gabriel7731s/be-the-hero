const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express(); //instância a aplicação

// app.use(cors({
//   origin: 'http://heroku.com' permite que apenas o front hospedado neste endereço seja capaz de utilizar nosso back-end
// }));
app.use(cors()); //permite que todas as aplicações front-end utilizem nosso back-end
app.use(express.json()); //utiliza o formato JSON
app.use(routes);

app.listen(3333); //a aplicação ouve a porta 3333

/*Tipos de parâmetros:

  Query params (request.query):
    Parâmetros nomeados enviados através da URL (localhost:3333/users?name=diego, como o  parâmetro name e seu valor diego)
    Geralmente os query params são úteis para filtros, paginação
    Outro exemplo: localhost:3333/users?page=2&name=diego&age=25

  Route params (request.params):
    Parâmetros utilizados para identificar recursos (localhost:3333/users/:id, o id depois dos dois pontos será substituído por um valor)

  Request body (request.body):
    Parâmetros enviados através do corpo da requisição (body request)        
    Utilizado para criar ou alterar recursos
*/
