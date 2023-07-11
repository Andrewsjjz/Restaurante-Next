import AdminLayout from "../layout/AdminLayout"
import useSWR from 'swr'
import axios from "axios"
import OrdenesAdmin from "../components/OrdenesAdmin"

export default function Admin() {

    const fetcher = () => axios('/api/pedidos').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/pedidos', fetcher, {refreshInterval : 150})

    

  return (
    <>
    <AdminLayout>
    <h1 className="font-black text-5xl text-center">Lista de pedidos</h1>
    <p className="font-black text-3xl mt-10 mb-10 text-center">Chequea y administra los pedidos</p>

    {data && data.length ? data.map( orden => 
            <OrdenesAdmin
            key={orden.id}
            orden={orden}
            />
    ) : <h1>No hay ordenes pendientes</h1>}
    </AdminLayout>
    </>
  )
}
