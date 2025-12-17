
"use client"
import { FC, useState } from 'react'

interface Props {
  value?: number
}

const CartCounter: FC<Props> = ({ value = 5 }) => {
  const [count, setCount] = useState(value)

  const onIncrement = () => {
    setCount(count + 1)
  }

  const onDecrement = () => {
    if (count > 0) setCount(count - 1)
  }

  return (
    <>
    <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={onIncrement}
          className="flex items-center justify-center cursor-pointer p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={onDecrement}
          className="flex items-center justify-center cursor-pointer p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
        >
          -1
        </button>
      </div>
    </>
  )
}

export default CartCounter
