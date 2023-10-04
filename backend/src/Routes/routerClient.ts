import express = require('express');
import ClientController from '../Controllers/clientController';
import ClientService from '../Services/clientService';
import Client from '../database/models/clientModel';

const clientService = new ClientService(Client);
const clientController = new ClientController(clientService);

const routerClient = express.Router();

routerClient.post('/register', clientController.postClient);

export default routerClient;