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
    return res.status(201).json({ message: 'Cadastrado com sucesso!'});
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

  getRole = async (req: Request, res: Response) => {
    const { email } = req.body;
    const role = await this._service.getRole(email);
    return res.status(200).json({ role });
  };

  getAllClients = async (_req: Request, res: Response) => {
    const allClients = await this._service.getAllClients();
    return res.status(200).json(allClients);
  };

  getClientById = async (req: Request, res: Response) => {
    const { idClient } = req.params;
    const client = await this._service.getClientById(Number(idClient));
    if(!client) {
      return res.status(401).json({ message: 'Cliente não encontrado'})
    }
    return res.status(200).json(client);
  };

  upRole = async (req: Request, res: Response) => {
    const { payload } = req.body.user;
    const { role } = req.body;
    await this._service.upRole(payload.id, role)
    return res.status(200).json({ message: 'Alteração bem sucedida!'});
  };

  upClient = async (req: Request, res: Response) => {
    const { payload } = req.body.user;
    const { email, password, name } = req.body;
    const client = await this._service.upClient(payload.id, name, email, password)
    if (client === null) {
      return res.status(400).json({ message: 'erro'});
    }
    return res.status(200).json({ message: 'Alteração bem sucedida!'});
  };
}