import React from 'react'

const getPokemons = async (limit = 20, offset = 0) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json())

  return res.results
}

const PokemonsPage = async () => {
  const pokemons = await getPokemons()

  return (
    <div>
      { JSON.stringify(pokemons) }
    </div>
  )
}

export default PokemonsPage
