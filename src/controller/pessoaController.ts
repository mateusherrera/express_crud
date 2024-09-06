import { Request, Response } from 'express';
import http from 'http-status-codes';

import Pessoa from '../database/models/Pessoa';


export const getAllPessoa = async (req: Request, res: Response) => {
    const expectedUrl = `${req.baseUrl}${req.path}`;

    if (req.originalUrl !== expectedUrl) {
        return res
            .status(http.BAD_REQUEST)
            .json({ message: 'A URL não está correta.' });
    }

    const pessoa = await Pessoa.findAll();
    return res
        .status(http.OK)
        .json(pessoa);
};

export const getUserPessoaById = async (req: Request, res: Response) => {
    const pessoa = await Pessoa.findByPk(req.params.id);
    return res
        .status(http.OK)
        .json(pessoa);
};

export const createPessoa = async (req: Request, res: Response) => {
    const pessoa = await Pessoa.create(req.body);
    return res
        .status(http.CREATED)
        .json(pessoa);
};

export const updatePessoa = async (req: Request, res: Response) => {
    const pessoa = await Pessoa.findByPk(req.params.id);

    if (!pessoa) {
        return res
            .status(http.NOT_FOUND)
            .json({ message: `Não foi encontrado registro com o id ${req.params.id}` });
    }

    await pessoa.update(req.body);
    return res
        .status(http.OK)
        .json(pessoa);
};

export const deletePessoa = async (req: Request, res: Response) => {
    const pessoa = await Pessoa.findByPk(req.params.id);

    if (!pessoa) {
        return res
            .status(http.NOT_FOUND)
            .json({ message: `Não foi encontrado registro com o id ${req.params.id}` });
    }

    await pessoa.destroy();
    return res
        .status(http.NO_CONTENT)
        .send();
};
