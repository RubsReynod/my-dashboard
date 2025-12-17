import { CartCounter } from "../../../shopping-cart"

export const metadata = {
  title: "Shopping Cart",
  description: "A simple counter",
}

const Counter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Cart products</span>

      <CartCounter value={20} />
    </div>
  )
}

export default Counter
