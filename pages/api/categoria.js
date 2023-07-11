import { PrismaClient } from "@prisma/client"


//Metodo 1 ´para traer datos de la BDD
// export default function Home({categorias}) {
//   console.log(categorias)
//   return <h1>HOLA.QUIOSCO</h1>;
// }

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient();

//   const categorias = await prisma.categoria.findMany();
  
//   return {
//     props: {
//       categorias,
//     },
//   };
// }



//Metodo 2 para traer datos de BDD



export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const categorias = await prisma.Categoria.findMany({
    include: {
      productos: true
    }
  });

  res.status(200).json(categorias)
}
