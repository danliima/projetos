var formulario = document.querySelector('form');

// vai analisar a nossa página quando entrar o submit
formulario.addEventListener('submit', function(e) {

    //Bloqueia o refresh da página.
    e.preventDefault();

    //Url da pesquisa.
    let urlForm = " https://pokeapi.co/api/v2/pokemon/"

    //Valor do input name 
    let nome = document.getElementById("name")

    //concatena a Url com o input name
    urlForm = urlForm + this.name.value

    //transforma as letras em minúsculas
    urlForm = urlForm.toLocaleLowerCase();

    //ID content
    let resposta = document.getElementById('content');

    //id imgPokemon
    let imagem = document.getElementById('imgPokemon');

    //resposta em html
    let html = ''

    //Comondo onde fazemos a pesquisa e ele vai retoenar o valor da pesquisa.
    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data) {
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src ='" + data.sprites.front_default + "'> <img src='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado :('
            } else{
                html = 'Erro: ' + err
            }
            resposta.innerHTML = html
        })
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}
