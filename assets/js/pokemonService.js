class PokemonService {
    constructor() {
        this._baseUrl = 'https://pokeapi.co/api/v2'
    }

    getPokemon(name) {
        return fetch(`${this._baseUrl}/pokemon/${name}`)
        .then(response => response.json())
        .then(data => data)
    }

    getPokemons() {
        return fetch(`${this._baseUrl}/pokemon/?limit=1118&offset=200`)
        .then(response => response.json())
        .then(data => data)
    }
}