import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'
import useRestaurante from '../hook/useRestaurante'
import Layout from '../layout/Layout'
import Productos from '../components/Productos'

export default function Home() {
  const {categoriaActual} = useRestaurante()
return (
  <>
    <Layout pagina={`Menu`}>
      <h1 className='text-4xl font-bold uppercase'>{categoriaActual?.nombre}</h1>
      <p>Personaliza y escoge</p>

<div className='grid gap-4 grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'>
{categoriaActual?.productos?.map(producto =>(
        <Productos
        key={producto.id}
        producto={producto}
        />
      ))}
</div>

    </Layout>
  </>
)
}


