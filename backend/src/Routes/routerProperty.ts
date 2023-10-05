import express = require('express');
import PropertyController from '../Controllers/propertyController';
import PropertyService from '../Services/propertyService';
import Property from '../database/models/propertyModel';
import authToken from '../middlewares/validadeToken';

const propertyService = new PropertyService(Property);
const propertyController = new PropertyController(propertyService);

const routerProperty = express.Router();

routerProperty.post('/register', authToken, propertyController.postProperty);
routerProperty.get('/property', authToken, propertyController.getAllProperties);
routerProperty.get('/city', authToken, propertyController.getAllPropertyByCity);
routerProperty.get('/address', authToken, propertyController.getAllPropertyByAddress);
routerProperty.get('/state', authToken, propertyController.getAllPropertyByState);

export default routerProperty;