import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    //Mostrar ordenes en otro panel 

    const ordenes = await prisma.orden.findMany({
        where: {
            estado: false
        }
    })
    res.status(200).json(ordenes)


    //Crear ordenes y enviar a BDD
    if (req.method === "POST") {

        const orden = await prisma.orden.create({
            data : {
                cliente: req.body.nombre,
                fehca: req.body.fecha,
                total: req.body.total,
                pedido: req.body.pedido,
            },
        })
        res.json (orden)
    }

    


  }