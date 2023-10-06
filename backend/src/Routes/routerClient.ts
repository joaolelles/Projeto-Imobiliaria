import express = require('express');
import ClientController from '../Controllers/clientController';
import ClientService from '../Services/clientService';
import Client from '../database/models/clientModel';
import authToken from '../middlewares/validadeToken';
import authRole from '../middlewares/validadeRole';

const clientService = new ClientService(Client);
const clientController = new ClientController(clientService);

const routerClient = express.Router();

routerClient.post('/register', clientController.postClient);
routerClient.post('/login', clientController.postLogin);
routerClient.get('/clients', authToken, clientController.getAllClients);
routerClient.get('/clients/:idClient', authToken, clientController.getClientById);
routerClient.get('/role', authToken, clientController.getRole);
routerClient.put('/role', authToken, authRole, clientController.upRole);
routerClient.put('/clients', authToken, clientController.upClient);

export default routerClient;