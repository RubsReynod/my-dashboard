import Image from 'next/image'
import { PokemonResponse, SimplePokemon } from '../../pokemons'

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
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        {pokemons.map(pokemon => (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width={100}
            height={100}
            alt={pokemon.name}
            key={pokemon.id}
          />
        ))}
      </div>
    </div>
  )
}

export default PokemonsPage
