import express = require('express');
import ClientController from '../Controllers/clientController';
import ClientService from '../Services/clientService';
import Client from '../database/models/clientModel';

const clientService = new ClientService(Client);
const clientController = new ClientController(clientService);

const router = express.Router();

router.post('/register', clientController.postClient);

export default router;