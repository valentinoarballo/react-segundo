import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function AgregarProducto() {

    const { user } = useContext(UserContext)
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: "",
    })
    const [errors, setErrors] = useState({})

    if (!user.admin) {
        return (
            <section className='flex-1 flex justify-center items-center'>
                <p className='text-red-600 text-4xl font-bold'>
                    No tienes acceso a este formulario.
                </p>
            </section>
        )
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const validate = () => {
        const newErrors = {}

        if (!form.title.trim()) newErrors.title = "El titulo es obligatorio"

        if (!form.price) {
            newErrors.price = "El precio es obligatorio"
        } else if (Number(form.price) <= 0) {
            newErrors.price = "El precio debe ser mayor a 0"
        }

        if (!form.description.trim()) newErrors.description = "La descripcion es obligatorio"


        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = validate()

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }


        setErrors({})
        console.log("success: ", form)
        setForm({
            title: "",
            price: "",
            description: "",
        })
    }

    return (
        <section className='flex-1 flex flex-col items-center pt-10 px-4'>
            <p className='text-2xl font-bold mb-6'>Agregar producto</p>

            <form onSubmit={handleSubmit} className='w-full max-w-md bg-zinc-800 p-6 rounded '>
                <div>
                    <label className='block text-md mb-1 mt-2'>titulo</label>
                    {errors.title && <p className=' text-sm text-red-700 animate-pulse'>{errors.title}</p>}
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder='Titulo'
                        className='w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700'
                    />
                </div>

                <div>
                    <label className='block text-md mb-1 mt-6'>Precio</label>
                    {errors.price && <p className=' text-sm text-red-700 animate-pulse'>{errors.price}</p>}
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder='$1.000'
                        className='w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700'
                    />
                </div>

                <div>
                    <label className='block text-md mb-1 mt-6'>Descripcion</label>
                    {errors.description && <p className=' text-sm text-red-700 animate-pulse'>{errors.description}</p>}
                    <input
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder='Descripcion del producto'
                        className='w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-700'
                    />
                </div>

                <button type='submit' className='bg-blue-600 w-full my-4 rounded-lg py-4 cursor-pointer hover:bg-blue-500'>
                    Guardar
                </button>
            </form>
        </section>
    )
}
