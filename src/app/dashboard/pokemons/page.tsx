import { PokemonGrid, PokemonResponse, SimplePokemon } from '../../pokemons'

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const res: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json())

  const pokemons = res.results.map(pokemon => {
    const id = pokemon.url.split('/').at(-2)!

    return {
      id,
      name: pokemon.name
    }
  })

  return pokemons
}

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151)

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>Pokemons list <small>Static</small></span>
      
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}

export default PokemonsPage
