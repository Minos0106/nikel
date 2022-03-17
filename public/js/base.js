const nome = "matheus";
let nome2 = "";
let pessoadefault = {
  nome: "matheus",
  idade: "20",
  trabalho: "Programador"
}

let nomes = ["matheus","vanessa","leticia"]
let pessoas = [
    {
        nome: "matheus",
        idade: "20",
        trabalho: "Programador"
    },
    {
        nome: "joão",
        idade: "22",
        trabalho: "hacker"
    }
]; 

function alterarNome(){
    nome2 = "Alfredo";
    console.log("valor alterado");
    console.log(nome2);
}

function receberEalterarnome(novoNome){
    nome2=novoNome;
    console.log("valor alterado recebendo um nome");s
    console.log(nome2);
}

function imprimirpessoa(pessoa){
    console.log("nome:");
console.log(item.nome);

console.log("idade:");
console.log(item.idade);

console.log("trabalho:");
console.log(item.trabalho);

}

function adcionarpessoa(pessoa){
    pessoas.push(pessoa)
}

function imprimirpessoas(){
    pessoa.array.forEach(element => {
        console.log("nome:");
        console.log(item.nome)

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);
    });
}

adcionarpessoa({
    nome: "pedro silva",
    idade: "28",
    trabalho: "porteiro"
})

imprimirpessoas();

adcionarpessoa()

//console.log(nomes);
//console.log(pessoas);

imprimirpessoas();


//imprimirpessoa(pessoadefault)
//imprimirpessoa({
  //  nome: "Maria silva",
    //idade: "25",
    //trabalho: "UX/UI"
  //})


//receberEalterarnome("vanessa rio santos");
//receberEalterarnome("Maria suilva")

//alterarNome
