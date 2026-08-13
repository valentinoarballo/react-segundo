export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-900 p-4 shadow-2xl">

      <h1 className="text-xl font-bold text-blue-500 cursor-pointer">ItecMarket</h1>


      <ul className="flex gap-6 text-sm">
        <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Inicio</li>
        <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Productos</li>
        <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Soporte</li>
      </ul>

      <div className="bg-blue-600 font-bold px-4 py-1 rounded cursor-pointer">
        Carrito
      </div>

    </nav>
  )
}