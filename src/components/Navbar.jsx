import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { UserContext } from "../context/UserContext"

export default function Navbar() {
  const linkStyle = ({ isActive }) => isActive ? "text-blue-400 font-black" : "cursor-pointer text-blue-500 hover:text-blue-400 transition-colors"

  const { cart } = useContext(CartContext)

  const { user } = useContext(UserContext)

  console.log("navbar: "+ user.admin)
  return (
    <nav className="flex justify-between items-center bg-slate-900 p-4 shadow-2xl">

      <h1 className="text-xl font-bold text-blue-500 cursor-pointer">ItecMarket</h1>

      <ul className="flex gap-6 text-sm">
        <NavLink to={"/"} className={linkStyle} >Home</NavLink>
        <NavLink to={"/products"} className={linkStyle}>Products</NavLink>
        <NavLink to={"/about"} className={linkStyle}>About</NavLink>

        {user.admin && (<NavLink to={"/create"} className={linkStyle}>Create</NavLink>)}

      </ul>

      <div className="bg-blue-600 font-bold px-4 py-1 rounded cursor-pointer">
        {cart.length > 0 ? (<p>Carrito: {cart.length}</p>) : (<p>Mi carrito</p>)}
      </div>

    </nav>
  )
}