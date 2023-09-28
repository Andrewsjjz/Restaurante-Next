import useRestaurante from '../hook/useRestaurante'
import Image from 'next/image'

export default function NavCategoria({categoria}) {

const {categoriaActual, handleClickCategoria} = useRestaurante()
const {id, nombre, icono} = categoria

  return (
    
<div onClick={() => handleClickCategoria(id)} 
className={`${categoriaActual?.id === id ? "bg-yellow2-50" : ""}
flex items-center gap-4 w-full p-5 border cursor-pointer hover:bg-yellow2-50 sticky`}>
  
<Image
height={70}
width={70}
src={`/assest/icono_${icono}.svg`}
alt='Iconos del navbar'
className="rounded-lg"
/>

<button 
type="button" 
className="ml-5 font-bold uppercase hover:cursor-pointer"

>
    {nombre}
</button>
</div>
  )
}
