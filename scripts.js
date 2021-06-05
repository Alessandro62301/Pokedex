
// Get Elements --------------------------------------------
const container = getElement('.fundo');
  

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function requestPokeInfo() {
    const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const PokeArray= [];

    for(var i = 1 ; i <= 150 ; i++){
        PokeArray.push(fetch(getUrl(i)).then(response => response.json()));
    }
    Promise.all(PokeArray)
        .then(pokemons => {

            const spanPoke = pokemons.reduce((accumulator,pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name);
                console.log(types);

                accumulator += `
                
                
                <li class="card ${types[0]} ${types[1]}">
                <div class="fundo">
                <img class="card-img" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
                </div>
                    <h2>${pokemon.id}.${pokemon.name}</h2>
                    <p class="card-info">${types.join(' | ')}</p>
                </li>
                
                `
                return accumulator;

            },'')
            const ul = document.querySelector('[data-js = "pokedex"]');
            ul.innerHTML = spanPoke;

        })
}
requestPokeInfo();


