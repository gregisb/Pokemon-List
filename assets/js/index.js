const elSelect = document.getElementById('select-options');

function setValues(pokemon) {
  const elPokemonName = document.getElementById('pokemon-name');
  const elPokemonHeight = document.getElementById('pokemon-height');
  const elPokemonBaseExperience = document.getElementById('pokemon-experience');
  const elPokemonAbilities = document.getElementById('pokemon-abilities');
  const elPokemonImage = document.getElementById('pokemon-image');

  elPokemonName.innerHTML = pokemon ? pokemon.name : '-';
  elPokemonHeight.innerHTML = pokemon ? pokemon.height : '-';
  elPokemonBaseExperience.innerHTML = pokemon ? pokemon.baseExperience : '-';
  elPokemonAbilities.innerHTML = pokemon ? pokemon.abilities : '-';
  elPokemonImage.setAttribute('src', pokemon ? pokemon.image : 'https://via.placeholder.com/150x150')
}


function getValues(value) {

  const service = new PokemonService()
  service.getPokemon(value).then(function(response){
    const { name, abilities, height, base_experience, sprites} = response

    const pokemon = new Pokemon(
     { name, abilities, height, baseExperience: base_experience, sprites }
    )

    setValues(pokemon)
  }) 
};

function loadOptions(){
  const service = new PokemonService();

  service.getPokemons().then(response => {
    const {results} = response
    setOptions(results)
  })
};

function setOptions(options) {
  options.map(option => {
    const pokemon = new Pokemon({name: option.name})
    elSelect.add(new Option(pokemon.name, option.name), null)
  })
}



elSelect.addEventListener('change', function(event) {
  const value = event.target.value;

  value ? getValues(value) : setValues()
})

loadOptions()