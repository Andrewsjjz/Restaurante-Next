import Image from "next/image"
import useRestaurante from "../hook/useRestaurante"

{/* <div className="rounded shadow-lg ml-5">
  <div>
  <Image 
  src={`/assest/${imagen}.jpg`} 
  alt={`Imagen ${nombre}`}
  height={300} 
  width={300}/>

  <div className="px-6 py-4 md:w-3/6">
    <p className="font-bold text-3xl mb-">{nombre}</p>
    <p className="text-base text-yellow2-100 font-bold">
    $ {precio}
    </p>
    <button 
    onClick={() => {
      handleChangeModal()
      handleSetProducto(producto)
    }}
    type="button"
    class="mt-5 rounded-xl bg-gradient-to-br from-[#FFE569] to-[#F79327] 
    px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg
     hover:shadow-[#FFE569]/50">
        Lo quiero
    </button>
  </div> */}

  {/* <div className="md:w-3/6 ml-7">
  <p className="font-normal text-2xl">{nombre}</p>
  <p className="font-normal text-2xl">$ {precio}</p>
  </div> */}
// </div>
// </div>

export default function Productos({producto}) {

  const {handleSetProducto, handleChangeModal, modal} = useRestaurante()

    const {nombre, precio, imagen} = producto
    
  return (

<div className="rounded shadow-lg ml-2">

<div className="flex items-center justify-center">
<Image 
className="rounded-lg"
  src={`/assest/${imagen}.jpg`} 
  alt={`Imagen ${nombre}`}
  height={200} 
  width={200}/>
</div>

<div className="text-center mb-8">
  <p className="font-bold text-2xl">{nombre}</p>
  <p className="font-bold text-2xl mt-5">$ {precio}</p>
  <button 
    onClick={() => {
      handleChangeModal()
      handleSetProducto(producto)
    }}
    type="button"
    class="mt-5 rounded-xl bg-gradient-to-br from-[#FFE569] to-[#F79327] 
    px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg
     hover:shadow-[#FFE569]/50">
        Lo quiero
    </button>
</div>

</div>



  )
}
