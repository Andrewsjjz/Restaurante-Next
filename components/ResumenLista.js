import React from 'react'
import Image from 'next/image'
import useRestaurante from '../hook/useRestaurante'

import  {formatearDinero}  from '../helpers'

export default function ResumenLista({producto}) {

    const {handleChangeEditarCantidad , handleEliminar} = useRestaurante()

  return (
<>
    <div className="ml-5 mt-9 flex gap-10 items-center rounded shadow-lg text-center">
      
        <div className='md:w-5/1'>
      
        <Image 
  src={`/assest/${producto.imagen}.jpg`} 
  alt={`Imagen ${producto.nombre}`}
  height={200} 
  width={200}/>
      
        </div>
  

  <div className="md:w-3/6">
      
    <div className="font-bold text-4xl mb-2">{producto.nombre}</div>
      
    <p className="text-2xl">Cantidad:  
    <span className="font-bold "> {producto.cantidad}</span>
    </p>
        
    <p className="text-2xl font-bold "> <span className="font-normal">Precio: </span>
    $ {producto.precio }
    </p>
    
    <p className="text-2xl font-bold "> <span className="font-normal">Subtotal: </span>
    $ {formatearDinero(producto.precio  * producto.cantidad)}
    </p>
        
  </div>

<div className='grid '>

<button
type='button'
onClick={() =>{
    handleEliminar(producto.id)
}}>
    
    <svg class="h-8 w-8 text-red-600 mt-5"  viewBox="0 0 24 24"  
    fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  
    stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  
    <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
    
    </button>
        
<button 
type="button"
onClick={() => {
    handleChangeEditarCantidad(producto.id)
}}>

<svg className="h-8 w-8 mt-10"  width="24"  height="24"  viewBox="0 0 24 24"  
xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  
stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  
<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
</svg>
    
</button>
    
</div>
</div>

</>
  )
}
