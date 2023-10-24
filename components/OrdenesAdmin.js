import Image from "next/image"
import axios from "axios"
import { toast } from "react-toastify"
import { formatearDinero } from "../helpers"

export default function OrdenesAdmin({ orden }) {


    const { id, cliente, fehca, pedido, total } = orden

    const  completarOrden = async () => {

        if(confirm('¿Seguro que quiere completar la orden?')){
            try {
                await axios.post(`/api/ordenes/${id}`)
                toast.success('Orden completada')
           } catch (error) {
            toast.error('Ups, ocurrio un problema')
           }
        }
    }


    return (

        <div className="p-10 space-y-5 mt-5 border-4">

            <div className="md:flex md:items-start md:justify-between">
            <p className="font-normal text-2xl">Nombre del cliente: <span className="font-bold">{cliente}</span></p>
        
            <button 
            onClick={() => {
            completarOrden()
            }}
            className="bg-green-500 text-white font-bold uppercase rounded-lg p-5">
            Completar orden
            </button>
                
            </div>

            <p className="font-normal text-2xl">Id de la orden: <span className="font-bold">{id}</span></p>

            <div>
                
                {pedido.map(platillos =>
                    <div key={platillos.id} platillos={platillos} className=" py-3 flex items-center last-of-type:border-0">
                        <div className="w-32">
                            <Image
                                src={`/assest/${platillos.imagen}.jpg`}
                                alt={`Imagen ${platillos.nombre}`}
                                height={200}
                                width={200}
                            />
                        </div>
                        <div className="md:w-3/6 ml-7">
                            <p className="font-normal text-2xl">Cantidad: <span className="font-bold">{platillos.cantidad}</span></p>
                            <p className="font-normal text-2xl">Producto: <span className="font-bold">{platillos.nombre}</span></p>
                        </div>
                    </div>
                )}
                    
                <div className="flex justify-end items-end">
                    
                    <h1 className="text-3xl uppercase">Total a pagar: {''}
                        <span className="text-3xl font-bold uppercase">${formatearDinero(total)}</span></h1>
                            
                </div>

            </div>
        </div>
    )
}
