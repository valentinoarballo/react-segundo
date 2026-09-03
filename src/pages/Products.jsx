import { useEffect, useState } from "react"

export default function Products() {
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => {
                console.log(data.products)
                setProducts(data.products)
                setLoading(false)
            });
    }, [])

    if (loading) return <h1 className="text-6xl font-bold">Cargando...</h1>

    return (
        <div className="max-w-3xl flex justify-center mx-auto pt-6">
            <div className="grid grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="p-4 bg-zinc-800 rounded">
                        <img src={product.thumbnail} />
                        <h1>{product.title}</h1>
                        <p>
                            ${product.price}
                        </p>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}