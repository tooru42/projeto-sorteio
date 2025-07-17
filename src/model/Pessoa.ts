export default class Pessoa {
    constructor(readonly nome: string, readonly email: string) {
        this.nome = nome;
        this.email = email;
    }

    get emailMascarado(){
        const regex = /(.{1,3})(.*)(@.*)/
        return this.email.replace(regex, (_,g1,g2,g3)=>{
            return g1 + "***" + g3;
        })
    }

    toString(): string {
        return `Nome: ${this.nome} < ${this.emailMascarado} >`;
    }
}