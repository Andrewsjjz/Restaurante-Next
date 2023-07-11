import Layout from "../layout/Layout"
import { useEffect } from "react"
import useRestaurante from "../hook/useRestaurante"
import { formatearDinero } from "../helpers"

export default function TotalPagar() {

  const {pedido, 
    nombre, 
    setNombre, 
    confirmarPedido, 
    total, 
    handleVerificar
    
  } = useRestaurante()

 

  useEffect (() => {
      confirmarPedido()
  }, [pedido, confirmarPedido])




  return (
    <>
      <Layout pagina='- Total a Pagar'>
        <div className="mt-10 text-center">
            <h1 className="font-black text-5xl">Total a pagar y enviar pedido</h1>
        </div>

        <form 
        onSubmit={handleVerificar}
        className="mt-10 ml-10">
          <label className="uppercase text-2xl block font-bold" htmlFor="nombre">
            Nombre y apellido
          </label>
          <input
          id="nombre"
          className="flex bg-slate-200 rounded-xl p-1 mt-3 w-full lg:w-1/3"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          />

          <label className="uppercase text-2xl block  mt-10" htmlFor="nombre">
          Total a Pagar: <span className="font-black">$ {formatearDinero(total)}</span>
          </label>

          <div>
            <button
            disabled={confirmarPedido()}
            type="input"
            className={`${
              confirmarPedido() ? 'bg-yellow2-50' : 'bg-yellow2-100'} 
              mt-10 w-full lg:w-auto  p-5 uppercase rounded-xl font-bold text-center`}
            >
              Confirmar pedido
            </button>
          </div>
        </form>
      </Layout>


    </>
  )
}
