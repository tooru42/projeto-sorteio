import carregarPessoas from "./function/carregar-pessoas";
import sortearAzarado from "./function/sortear-azarado";
import terminal from "./ui/terminal";

const pessoas = carregarPessoas('src/data/dados.csv');
const azarado = sortearAzarado(pessoas);
console.log(azarado.toString());
//pessoas.forEach(pessoas => console.log(pessoas.toString()));

terminal.white('\n\nO').brightRed(' Azarado')
terminal.bold.brightGreen(' mais sortudo').white(' é: \n')
terminal.bold.brightYellow(azarado.toString())
terminal('\n\n...')
console.log()