import { useEffect, useState } from "react"
import Image from "next/image"
import useRestaurante from "../hook/useRestaurante"

export default function ProductoModal() {

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useRestaurante()

    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect (() => {
        if(pedido.some((pedidoState) => pedidoState.id === producto.id)){

            const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [producto, pedido])


    return (
        <div className='flex gap-4'>
            <div className='md:w-1/3'>
                <Image
                    src={`/assest/${producto.imagen}.jpg`}
                    height={500}
                    width={500}
                    alt="Imagenes de los productos"
                />
                
            </div>
            <div className='md:w-2/3'>
                <h1 className="text-3xl font-bold">{producto.nombre}</h1>
                <p className="mt-3 text-4xl font-bold text-yellow2-100">$ {producto.precio}</p>

            <div className="flex gap-6 mt-4">
                <button
                type="button"
                onClick={() => {
                    if(cantidad <= 1) return
                    setCantidad( cantidad - 1)}
                }
                >
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6">
                <path 
                fillRule="evenodd" 
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                </svg>
                </button>

                    <p className="text-3xl font-bold">{cantidad}</p>

                <button
                type="button"
                onClick={() => {
                    if(cantidad >= 5) return
                    setCantidad( cantidad + 1)
                }}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-6 h-6">
                <path 
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                </svg>
                </button>
                    
            </div>

                <button
                    onClick={() => {
                        handleAgregarPedido({...producto, cantidad})
                        handleChangeModal()
                    }}
                    type="button"
                    className="bg-yellow2-100 rounded-xl font-bold p-2 mt-5"
                >
                    {edicion ? 'Guardar cambios' : 'Añadir Pedido'}
                </button>

            </div>
            <div className="">
                <button
                onClick={handleChangeModal}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>


            </div>
        </div>
    )
}
