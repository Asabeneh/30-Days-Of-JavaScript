/*const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];*/

//Declare um array vazio;
let arrayVazio = [];

//Declare um array com mais de 5 elementos;
let arrayCincoElementos = ["banana", "maçã", "laranja", "uva", "pera", "kiwi"];

//Encontre o comprimento do seu array;
let comprimentoArray = arrayCincoElementos.length;
console.log("Comprimento do array:", comprimentoArray);

//Obtenha o primeiro item, o item do meio e o último item do array;
let primeiroItem = arrayCincoElementos[0];
let itemMeio = arrayCincoElementos[Math.floor(arrayCincoElementos.length / 2)];
let ultimoItem = arrayCincoElementos[arrayCincoElementos.length - 1];
console.log("Primeiro item:", primeiroItem);
console.log("Item do meio:", itemMeio);
console.log("Último item:", ultimoItem);

//Declare um array chamado mixedDataTypes, coloque diferentes tipos de dados no array e encontre o comprimento do array. O tamanho do array deve ser maior que 5;
let mixedDataTypes = [
  42,
  "texto",
  true,
  null,
  undefined,
  { chave: "valor" },
  [1, 2, 3],
];
let comprimentoMixedDataTypes = mixedDataTypes.length;
console.log("Comprimento do array mixedDataTypes:", comprimentoMixedDataTypes);

//Declare uma variável de array nomeada itCompanies e atribua valores iniciais como Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon;
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//Imprima o array usando console.log();
console.log("Empresas de TI:", itCompanies);

//Imprima o número de empresas no array;
let numeroEmpresas = itCompanies.length;
console.log("Número de empresas de TI:", numeroEmpresas);

//Imprima a primeira empresa, a empresa do meio e a última empresa;
let primeiraEmpresa = itCompanies[0];
let empresaMeio = itCompanies[Math.floor(itCompanies.length / 2)];
let ultimaEmpresa = itCompanies[itCompanies.length - 1];
console.log("Primeira empresa:", primeiraEmpresa);
console.log("Empresa do meio:", empresaMeio);
console.log("Última empresa:", ultimaEmpresa);

//Imprima cada empresa;
itCompanies.forEach((empresa) => {
  console.log("Empresa:", empresa);
});
//Mude cada nome da empresa para maiúsculas uma a uma e imprima-as;
itCompanies = itCompanies.map((empresa) => empresa.toUpperCase());
console.log("Empresas em maiúsculas:", itCompanies);

//Imprima o array como uma frase: Facebook, Google, Microsoft, Apple, IBM, Oracle e Amazon são grandes empresas de TI.
console.log(
  `${itCompanies.slice(0, -1).join(", ")} e ${itCompanies.slice(
    -1
  )} são grandes empresas de TI.`
);

//Verifique se uma determinada empresa existe no array itCompanies. Se existir, retorne a empresa, caso contrário, retorne uma mensagem de empresa não encontrada;
let empresaParaVerificar = "Google";
if (itCompanies.includes(empresaParaVerificar)) {
  console.log(`${empresaParaVerificar} existe no array.`);
} else {
  console.log(`${empresaParaVerificar} não foi encontrada no array.`);
}

//Filtre empresas que têm mais de um 'o' sem usar o método filter;
let empresasComMaisDeUmO = [];
for (let empresa of itCompanies) {
  if ((empresa.match(/o/g) || []).length > 1) {
    empresasComMaisDeUmO.push(empresa);
  }
}
console.log("Empresas com mais de um 'o':", empresasComMaisDeUmO);

//Ordene o array usando o método sort();
itCompanies.sort();
console.log("Empresas ordenadas:", itCompanies);

//Reverta o array usando o método reverse();
itCompanies.reverse();
console.log("Empresas revertidas:", itCompanies);

//Fatie os primeiros 3 empresas do array;
let primeirasTresEmpresas = itCompanies.slice(0, 3);
console.log("Primeiras 3 empresas:", primeirasTresEmpresas);

//Fatie as últimas 3 empresas do array;
let ultimasTresEmpresas = itCompanies.slice(-3);
console.log("Últimas 3 empresas:", ultimasTresEmpresas);

//Fatie a empresa ou empresas do meio do array;
let meioIndex = Math.floor(itCompanies.length / 2);
let empresasMeio = itCompanies.slice(meioIndex, meioIndex + 1);
console.log("Empresa ou empresas do meio:", empresasMeio);

//Remova a primeira empresa do array;
itCompanies.shift();
console.log("Após remover a primeira empresa:", itCompanies);

//Remova a empresa ou empresas do meio do array;
itCompanies.splice(meioIndex, 1);
console.log("Após remover a empresa do meio:", itCompanies);

//Remova a última empresa do array;
itCompanies.pop();
console.log("Após remover a última empresa:", itCompanies);

//Remova todas as empresas de TI;
itCompanies = [];
console.log("Após remover todas as empresas de TI:", itCompanies);
