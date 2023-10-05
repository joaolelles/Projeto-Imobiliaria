import { Request, Response } from 'express';
import PropertyService from '../Services/propertyService';
import IProperty from '../Interfaces/IProperty';

export default class PropertyController {
  _service: PropertyService;

  constructor(service: PropertyService) {
    this._service = service;
  }

  postProperty = async (req: Request, res: Response) => {
    const { address, complement, city, state, availability, price } = req.body;
    const propertyParams = {
        address, 
        complement,  
        city,
        state,
        availability, 
        price
    }
    const property = await this._service.postProperty(propertyParams as IProperty);
    if(!property) {
        return res.status(409).json({ message: 'Propiedade já cadastrada' });
    }
    return res.status(201).json({ message: 'Propiedade cadastrada com sucesso!'});
  }
}