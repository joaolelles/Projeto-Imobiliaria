import { ModelStatic } from 'sequelize';
import Client from '../database/models/clientModel';
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

export default class ClientService {
  _model: ModelStatic<Client>;

  constructor(model: ModelStatic<Client>) {
    this._model = model;
  }

  postClient = async (name: string, email: string, password: string) => {
    const client = await this._model.findOne({ where: { email } });
    if (!client) {
        const clientPassword = bcrypt.hashSync(password, salt);
        const newClient = await Client.create({email: email, role: 'default', password: clientPassword, username: name})
        return newClient.idClient;
      } else {
        return null;
      }
    
    
  }
}