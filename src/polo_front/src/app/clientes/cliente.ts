import { Produto } from "../produtos/produto";

export class Cliente{
    id_user: number;
    nome: string;
    sobrenome: string;
    email: string;
    cep: string;
    logradouro: string;
    bairro: string;
    numero: string;
    complemento: string;
    empresa: string;
    produtos: Produto[];
}