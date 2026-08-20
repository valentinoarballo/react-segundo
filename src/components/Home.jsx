import { useState, useEffect } from "react"

const listaUsuarios = [
  { id: 1, nombre: "Valentino Arballo", email: "v.arballo@itecriocuarto.org.ar" },
  { id: 2, nombre: "Locas Robledo", email: "v.arballo@itecriocuarto.org.ar" },
  { id: 3, nombre: "Dina zoppolo", email: "v.arballo@itecriocuarto.org.ar" }
]

export default function Home() {

  const [cantidad, setCantidad] = useState(1) // retorna un estado y un setter
  // setCantidad(1)
  const [loading, setLoading] = useState(true)
  
  const [products, setProducts] = useState()

  const [user, setUser] = useState({
    nombre: "valentino",
    admin: true,
  })

  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [])


  console.log(products)

  const handleAdmin = () => {
    setUser({ ...user, admin: !user.admin })
  }


  return (
    <main className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-blue-500 font-extrabold mb-4">La mejor tecnologia al mejor precio</h1>
      <p className="text-blue-500 font-semibold mb-6">Explora nuestro catálogo!</p>
      <button className="bg-blue-600 px-6 py-2 rounded cursor-pointer">Ver Productos</button>

      {loading ? (<p>Cargando...</p>) : (<p>Datos Cargados!</p>)}


      <button
        onClick={handleAdmin}
        className="bg-purple-600 text-xs px-4 py-2 rounded-full cursor-pointer font-semibold my-5"
      >
        Simular Rol: {user.admin ? "Admin" : "User Normal"}
      </button>


      {user.admin ? (
        <div className="bg-slate-800 p-4 rounded-lg w-full max-w-md text-left border border-slate-700 shadow-2xl my-4">
          <h3 className="text-sm font-bold text-green-400 mb-3 border-b border-slate-700 pb-2">
            Panel Admin - Lista de usuarios registrados:
          </h3>

          <ul className="space-y-2">
            {listaUsuarios.map((u) => (
              <li key={u.id} className="text-sm bg-slate-700/50 p-2 rounded-2xl flex justify-between">
                <span className="font-medium"> {u.nombre}</span>
                <span className="text-slate-400"> {u.email}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-red-400 text-xs bg-red-950/40 border border-red-800/50 px-4 py-2 rounded-lg">
          Acceso restringido: Solo visible para admins
        </p>
      )}

      <div className="flex items-center">
        <button
          onClick={() => setCantidad(cantidad - 1)}
          className="p-2 bg-blue-500 rounded m-5"
        >
          -
        </button>
        Productos en el carrito: {cantidad}
        <button
          onClick={() => setCantidad(cantidad + 1)}
          className="p-2 bg-blue-500 rounded m-5"
        >
          +
        </button>
      </div>

    </main>
  )
}