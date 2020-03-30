const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

// routes.get('/', (request, response) => {
//   //return response.send('Hello world!'); (resposa em texto normal)
//   return response.json({ //resposta em json
//     evento: 'Semana Omnistack 11',
//     aluno: 'Diego Fernandes'
//   });
// });

module.exports = routes; //exporta a variável routes de dentro do arquivo
