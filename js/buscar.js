async function buscar(){ //async é assincrona
    console.log("mingoo, pena de urubu");

    const resposta = await fetch("https://660f44b4356b87a55c510e38.mockapi.io/gamecast/game"); //resposta da api
            //o await indica que o ocdigo espere a resposta do fetch para continuar

            const respostaDadosGame = await resposta.json();// transformando os dados recebidos em json

    console.log("Resposta: ", respostaDadosGame); //exibe os dados da constante q ta pegando da url


    const cards = document.getElementById("cards_games"); //pega a div mãe onde os cards vão carregar

    cards.innerHTML = respostaDadosGame.map((itemAgenda) => { //o MAP faz a iteração e guarda como array, cada item do array é um itemAgenda
            return `
            <div class="cardItem">
            <div class="dataGame"> 
                <img src="../imagens/calendar-solid.svg" alt=""> ${itemAgenda.dataJogo}  
            </div>
            <img class="img-background" src="${itemAgenda.urlImagem}" alt="">
            <div class="descricao">
                <p> <strong>${itemAgenda.nome}</strong> </p>
                <p> ${itemAgenda.descricao} </p>
                <p><strong>Gamers: </strong></p>

                <div class="gamers">

                        ${itemAgenda.gamers.map((gamerItem)=>{
                                return`
                                <div class="gamerItem">@${gamerItem}</div>
                                `
                        }).join('')//tirar a virgula
                } //função pra percorrer lista dentro da lista

                </div>

              
            </div>  
            <div class="assistir">
                    <a class="assistirItem" href="${itemAgenda.urlAssistir} ">  <img src="../imagens/youtube.svg" alt=""> Assistir </a>
            </div>
        </div>

            `
    }).join('');// O  MAP é tipo um FOR. isso dentro do () é uma fun

}

console.log("antes de buscar")
buscar(); //chamando a função criada
console.log("depois de buscar")