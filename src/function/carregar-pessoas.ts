import Pessoa from '../model/pessoa';
import fs from 'fs';

export default function carregarPessoas(arquivo: string): Pessoa[] {
    const conteudo = fs.readFileSync(arquivo, 'utf-8');
    const linhas = conteudo.split('\n');
    const pessoas = linhas.filter(l => l.trim().length > 0)
    .map(linha => {
        const [nome,email] = linha.split(';');
        return new Pessoa(nome.trim(),email.trim())
    })

    return pessoas;
}