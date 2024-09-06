import { Router } from 'express';

import {
    getAllPessoa,
    getUserPessoaById,
    createPessoa,
    updatePessoa,
    deletePessoa,
} from '../controller/pessoaController';


// Router
const router = Router();

// Endpoints

// public_teste.pessoa_teste
const table_pessoa_path = 'pessoas_teste'
router.get(`/${table_pessoa_path}`, getAllPessoa);
router.get(`/${table_pessoa_path}/:id`, getUserPessoaById);
router.post(`/${table_pessoa_path}`, createPessoa);
router.put(`/${table_pessoa_path}/:id`, updatePessoa);
router.delete(`/${table_pessoa_path}/:id`, deletePessoa);

export default router;
