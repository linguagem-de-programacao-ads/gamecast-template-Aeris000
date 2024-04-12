async function buscar(){ //async é assincrona
    console.log("mingoo, pena de urubu");

    const resposta = await fetch("https://660f44b4356b87a55c510e38.mockapi.io/gamecast/game"); //resposta da api
            //o await indica que o ocdigo espere a resposta do fetch para continuar

            const respostaDadosGame = await resposta.json();// transformando os dados recebidos em json

    console.log("Resposta: ", respostaDadosGame); //exibe os dados da constante q ta pegando da url


    const cards = document.getElementById("cards_games");

    cards.innerHTML = respostaDadosGame.map((itemAgenda) => {
            return "TESTE"
    });// O  MAP é tipo um FOR. isso dentro do () é uma fun

}

console.log("antes de buscar")
buscar(); //chamando a função criada
console.log("depois de buscar")