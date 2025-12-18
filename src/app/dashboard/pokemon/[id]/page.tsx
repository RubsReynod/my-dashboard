import { FC } from "react"
import { Metadata } from "next"
import { Pokemon } from "../../../../pokemons"

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { id } = await props.params

  const { name } = await getPokemon(id)

  return {
    title: `#${id} - ${name}`,
    description: `Pokemon page ${name}`,
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
        { pokemon.name }
      </div>
    </div>
  )
}

export default PokemonPage
