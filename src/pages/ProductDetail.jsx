import { useState, useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Link, NavLink } from "react-router-dom"

export default function ProductDetail() {

    const { id } = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
                setLoading(false)
            });
    }, [id])

    if (loading) return <h1 className="text-6xl font-bold">Cargando...</h1>


    return (
        <div className="max-w-3xl mx-auto pt-6 px-4 w-full">
            <Link to="/products" className="text-sm text-indigo-400 hover:underline">← Volver a productos</Link>

            <div className="flex gap-6 mt-4 bg-zinc-800 p-6 rounded-lg items-center">
                <img src={product.thumbnail} alt={product.title} className="w-48 h-48 object-cover rounded bg-zinc-900" />
                <div>
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-2xl font-semibold text-green-400 mt-2">${product.price}</p>
                    <p className="text-zinc-400 text-sm mt-1">Categoría: {product.category}</p>
                </div>
            </div>

            <div
                className="flex gap-4 border-b border-zinc-700 mt-8 mb-4"
            >
                <NavLink
                    to={""}
                    end
                    className={({ isActive }) => 
                        `pb-2 font-medium border-b-2 transition-colors 
                    ${isActive ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`
                    }
                >
                    Descripcion
                </NavLink>

                <NavLink
                    to={"reviews"}
                    className={({ isActive }) => 
                        `pb-2 font-medium border-b-2 transition-colors 
                    ${isActive ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`
                    }
                >
                    Reviews
                </NavLink>

            </div>

            <Outlet context={product}/>

        </div>
    )
}