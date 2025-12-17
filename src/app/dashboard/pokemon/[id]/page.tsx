import { FC } from "react"

interface Props {
  params: {
    id: string
  }
}

const PokemonPage: FC<Props> = async ({ params }) => {
  const { id } = await params

  return (
    <div>PokemonPage {id}</div>
  )
}

export default PokemonPage
