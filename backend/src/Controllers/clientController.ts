import { Request, Response } from 'express';
import ClientService from '../Services/clientService';
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'batatinha';

export default class ClientController {
  _service: ClientService;

  constructor(service: ClientService) {
    this._service = service;
  }

  postClient = async (req: Request, res: Response) => {
    const { email, password, name } = req.body;
    const client = await this._service.postClient(name, email, password);
    if(!client) {
        return res.status(409).json({ message: 'Cliente já cadastrado' });
    }
    return res.status(200).json({ message: 'Cadastrado com sucesso!'});
  }

  postLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const client = await this._service.postLogin(email, password);
    if(!client) {
      return res.status(401).json({ message: 'Não autorizado'})
    }
    if(client){
      const token = jwt.sign({id: client.idClient}, secret, { algorithm: 'HS256', expiresIn: '1d' });
      return res.status(200).json({ token });
    }
  }
}