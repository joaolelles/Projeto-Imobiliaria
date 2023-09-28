import { Request, Response } from 'express';
import ClientService from '../Services/clientService';

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
}