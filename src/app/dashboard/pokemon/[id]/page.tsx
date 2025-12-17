import { FC } from "react"
import { Pokemon } from "../../../../pokemons"

interface Props {
  params: {
    id: string
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache' // TODO: Change to 'no-store'
  }).then(res => res.json())

  return res
}

const PokemonPage: FC<Props> = async ({ params }) => {
  const { id } = await params

  const pokemon = await getPokemon(id)

  return (
    <div>
      <h1>PokemonPage {pokemon.name}</h1>
      <div>
        { JSON.stringify(pokemon) }
      </div>
    </div>
  )
}

export default PokemonPage
