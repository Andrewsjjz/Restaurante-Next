import Image from "next/image"
import useRestaurante from "../hook/useRestaurante"
import NavCategoria from "./NavCategoria"

const Sidebar = () => {

  const {categorias} = useRestaurante()
  return (
    <>
    <div className="flex justify-center items-center xl:justify-center xl:items-center 2xl:justify-center 2xl:items-center">
      <Image
      height={200}
      width={200}
      src="/assest/LogoRestaurante.jpg"
      alt="Logo tipo"
      />
    </div>

      <nav className="mt-10">
      {categorias.map( categoria =>(
        <NavCategoria
        key={categoria.id}
        categoria={categoria}
        />
      ))}
      </nav>
    </>
  )
}

export default Sidebar
