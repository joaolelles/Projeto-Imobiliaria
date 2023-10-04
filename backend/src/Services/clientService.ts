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

  postLogin = async (email:string, passwordX: string) => {
    const client = await this._model.findOne({ where: { email } });
    if(!client){
      return null;
    }
    const hash = bcrypt.compareSync(passwordX, client.dataValues.password);
    if(hash) {
      const {passwordX: _, ...clientWithoutPassword} = client.dataValues
      return clientWithoutPassword
    }
  }
}