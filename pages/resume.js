import Layout from "../layout/Layout"
import useRestaurante from "../hook/useRestaurante"
import PaginaVacia from "../components/PaginaVacia"
import ResumenLista from "../components/ResumenLista"

export default function Resume() {

    const {pedido} = useRestaurante()

  return (
    <>
      <Layout pagina='- Resumen del pedido'>
        <div className="mt-10 text-center">
            <h1 className="font-black text-5xl">Resumen del Pedido</h1>
            <p className="font-black text-3xl mt-10">Chequea tu pedido</p>
        </div>

        {pedido.length === 0 ? (
            <PaginaVacia/>
        ) :
           pedido.map( producto => (
                <ResumenLista
                key={producto.id}
                producto={producto}
                />
           )) }
      </Layout>
    </>
  )
}
