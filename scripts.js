
const container = document.querySelector('.fundo');



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
//                console.log(types);

                accumulator += `
                
                
                <li class="card ${types[0]} ${types[1]}" onclick="requestInfo(${pokemon.id})">
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

function requestPokeInput(){

    
    var conteudoInput = document.getElementById('buscar').value;

    if(conteudoInput == ''){
        requestPokeInfo();
    }
    else{
        const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
     const PokeArray= [];


         PokeArray.push(fetch(getUrl(conteudoInput)).then(response => response.json()));
    
         Promise.all(PokeArray)
         .then(pokemons => {


                 const spanPoke = pokemons.reduce((accumulator,pokemon) => {
                 const types = pokemon.types.map(typeInfo => typeInfo.type.name);

                 accumulator += `
                
                
                 <li class="card ${types[0]} ${types[1]}">
                 <div class="fundo">
                 <img class="card-img" alt="${pokemon.name}" src="https:pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
                 </div>
                     <h2>${pokemon.id}.${pokemon.name}</h2>
                     <p class="card-info">${types.join(' | ')}</p>
                 </li>

                 <li class="card ${types[0]} ${types[1]}">
                 <div class="fundo">
                 </div>
                 <h2 class="name">Name: ${pokemon.name}</h2>
                 <h3 class="type">Type: ${pokemon.types.map(item => '' + item.type.name).toString()}</h3>
                 <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
                 <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
                </li>
                
                 `
                 return accumulator;


             },'')
             const ul = document.querySelector('[data-js = "pokedex"]');
             ul.innerHTML = spanPoke;

         })
    console.log(conteudoInput);
    }
     
}

function requestInfo(conteudoBusca){

    

    if(conteudoBusca == ''){
        requestPokeInfo();
    }
    else{
        const getUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
     const PokeArray= [];


         PokeArray.push(fetch(getUrl(conteudoBusca)).then(response => response.json()));
    
         Promise.all(PokeArray)
         .then(pokemons => {


                 const spanPoke = pokemons.reduce((accumulator,pokemon) => {
                 const types = pokemon.types.map(typeInfo => typeInfo.type.name);

                 accumulator += `
                
                 <li class="card ${types[0]} ${types[1]}">
                 <div class="fundo">
                 <img class="card-img" alt="${pokemon.name}" src="https:pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
                 </div>
                     <h2>${pokemon.id}.${pokemon.name}</h2>
                     <p class="card-info">${types.join(' | ')}</p>
                 </li>

                 <li class="card ${types[0]} ${types[1]}">
                 <div class="fundo">
                 </div>
                 <h2 class="name">Name: ${pokemon.name}</h2>
                 <h3 class="type">Type: ${pokemon.types.map(item => '' + item.type.name).toString()}</h3>
                 <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
                 <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
                </li>
                
                 `
                 return accumulator;


             },'')
             const ul = document.querySelector('[data-js = "pokedex"]');
             ul.innerHTML = spanPoke;

         })
    console.log(conteudoBusca);
    }
     
}

requestPokeInfo();
requestPokeInput();