//Libreria para redireccionar a otras paginas con next
import { useRouter } from "next/router"

const pasos = [
    {paso : 1, nombre : 'Menu', url : '/'},
    {paso : 2, nombre : 'Resumen', url : '/resume'},
    {paso : 3, nombre : 'Datos y total', url : '/totalPagar'},
]


export default function Pasos() {


    const router = useRouter()

    const calcularPorcentaje = () =>{
        let valor 
        if(router.pathname === '/' ) {
            valor = 2
        } else if (router.pathname === '/resume') {
            valor = 50
        } else {
            valor = 100
        }
        return valor
    }

  return (
    <>
      <div className="flex justify-between mb-8 mr-8">
        {pasos.map( paso => (
            <button
            //colocar un OnClick, atributo router.push y luego hacia donde queremos redireccionar
            onClick={() => {
                router.push(paso.url)
            }} 
            className="text-2xl font-bold"
            key={paso.paso}>
                {paso.nombre}
            </button>
        ))}
      </div>

      <div className="bg-gray-100">
        <div 
        className="rounded-full bg-yellow2-100 text-xs leading-none h-2 text-center text-white"
        style={{width: `${calcularPorcentaje()}%`}}
        >

        </div>
      </div>
    </>
  )
}
