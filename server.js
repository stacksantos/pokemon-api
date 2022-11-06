document.querySelector('button').addEventListener('mousedown', getFetch)
document.querySelector('input').addEventListener('onsubmit', getFetch)

const pokemonName = document.querySelector('#pokemonName')
const pokemonImage = document.querySelector('img')
const pokemonMoves = document.querySelector('#pokemonMoves')

function getFetch() {

    const pokemon = document.querySelector('input').value
    const poke = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    fetch(poke)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.abilities.forEach(e => {
                console.log(e.ability.name)
            }));
            pokemonName.innerHTML = data.name;
            pokemonImage.src = data.sprites.front_default;
            let moves = []
            
            data.abilities.forEach(e => {
                moves.push(' ' + e.ability.name + ' ')
            })
            pokemonMoves.innerHTML = moves
        }).catch((err) => {
            console.log(err);
        })
}
