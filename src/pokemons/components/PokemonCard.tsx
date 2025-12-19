import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoHeartOutline } from 'react-icons/io5'
import { SimplePokemon } from '../../pokemons'

interface Props {
  pokemon: SimplePokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name } = pokemon

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-centertext-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            width={100}
            height={100}
            alt={name}
            key={id}
            preload={false}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ name }</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              About Pokemon
            </Link>
          </div>
        </div>

        <div className="border-b">
          <Link className="flex items-center px-4 py-2 hover:bg-gray-100" href="/dashboard/main" >
            <div className="text-red-600">
              <IoHeartOutline className='' />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                It is not favorite
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
