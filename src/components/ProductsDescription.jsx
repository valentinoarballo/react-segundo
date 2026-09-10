import { useOutletContext } from "react-router-dom"

export default function ProductsDescription() {

    const product = useOutletContext()

    return (
        <div>
            <p className="font-bold pb-2 border-b text-xl">
                Desc del producto:
            </p>
            <p>
                {product.description}
            </p>

            <p className="mt-6 text-zinc-500">
                <label className="underline">Marca:</label> {product.brand}
            </p>
        </div>
    )
}