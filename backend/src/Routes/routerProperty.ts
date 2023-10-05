import express = require('express');
import PropertyController from '../Controllers/propertyController';
import PropertyService from '../Services/propertyService';
import Property from '../database/models/propertyModel';
import authToken from '../middlewares/validadeToken';

const propertyService = new PropertyService(Property);
const propertyController = new PropertyController(propertyService);

const routerProperty = express.Router();

routerProperty.post('/register', propertyController.postProperty);

export default routerProperty;