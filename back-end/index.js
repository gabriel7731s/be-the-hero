const express = require('express');

const app = express(); //instância a aplicação

app.get('/', (request, response) => {
  //return response.send('Hello world!'); (resposa em texto normal)
  return response.json({ //resposta em json
    evento: 'Semana Omnistack 11',
    aluno: 'Diego Fernandes'
  });
});

app.listen(3333); //a aplicação ouve a porta 3333
