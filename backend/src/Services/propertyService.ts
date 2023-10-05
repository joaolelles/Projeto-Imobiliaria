import { ModelStatic } from 'sequelize';
import Property from '../database/models/propertyModel';
import IProperty from '../Interfaces/IProperty';

export default class PropertyService {
  _model: ModelStatic<Property>;

  constructor(model: ModelStatic<Property>) {
    this._model = model;
  }

  postProperty = async (prop: IProperty) => {
    if(prop.complement === undefined) {
      const property = await this._model.findOne({ where: { address: prop.address } });
      if (!property) {
        const propertyParams = {
          address: prop.address, 
          complement: null,  
          city: prop.city,
          state: prop.state,
          availability: prop.availability, 
          price: prop.price
      }
        const newProp = await this._model.create(propertyParams)
        return newProp;
      } else {
        return null;
      }
    }
    const property = await this._model.findOne({ where: { address: prop.address, complement: prop.complement } });
    if (!property) {
      const propertyParams = {
        address: prop.address, 
        complement: prop.complement,  
        city: prop.city,
        state: prop.state,
        availability: prop.availability, 
        price: prop.price
      }
      const newProp = await this._model.create(propertyParams)
      return newProp;
    } else {
      return null;
    }
  }
}