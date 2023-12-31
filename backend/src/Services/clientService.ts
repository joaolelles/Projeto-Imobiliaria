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

  getAllClients = async () => {
    const clients = await this._model.findAll( { attributes: { exclude: ['password']} } );
    if (!clients) {
      return null;
    }
    return clients;
  };

  getClientById = async (id: number ) => {
    const client = await this._model.findByPk(id, {attributes: { exclude: ['password']} });
    if (!client) {
      return null;
    }
    return client;
  };

  getRole = async (email: string) => {
    const client = await this._model.findOne({ where: { email } });
    if (!client) {
      return null;
    }
    const { role } = client.dataValues;
    return role;
  };

  upRole = async (id: number, newRole: string) => {
    const client = await this._model.findOne({ where: { idClient: id } });
    if (!client) {
      return null;
    }
    client.update(
      {
        role: newRole,
      }
    );
  };

  upClient = async (id: number, name: string, email: string, password: string) => {
    const client = await this._model.findByPk( id );
    const clientPassword = bcrypt.hashSync(password, salt);
    if (!client) {
      return null;
    }
    client.update(
      {
        email: email, 
        password: clientPassword, 
        username: name
      }
    );
  };

  delClient = async (id: number,) => {
    const client = await this._model.findByPk( id );
    if (!client) {
      return null;
    }
    await this._model.destroy( { where: { idClient: id } })
    return 1;
  }
}