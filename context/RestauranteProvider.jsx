import { useState, useEffect, createContext, useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const RestauranteContext = createContext()

const RestauranteProvider = ({children}) => {

const [categorias, setCategorias] = useState([])
const [categoriaActual, setCategoriaActual] = useState({})
const [producto, setProducto] = useState({})
const [modal, setModal] = useState(false)
const [pedido, setPedido] = useState([])
const [nombre, setNombre] = useState('')
const [total, setTotal] = useState('')

const router = useRouter()

const ObtenerCategorias = async () => {
    const {data} = await axios ("/api/categoria")
    setCategorias(data)
}

useEffect(() => {
    ObtenerCategorias()
}, [])

useEffect(() =>{
    setCategoriaActual(categorias[0])
}, [categorias])

useEffect(() => {
    const montoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad)
    + total, 0)
    setTotal(montoTotal)
}, [pedido])

const handleClickCategoria = id => {
    const categoria = categorias.filter( cat => cat.id === id)
    setCategoriaActual(categoria[0])
    router.push('/')
}


const handleSetProducto = producto => {
    setProducto(producto)
}

const handleChangeModal = () => {
    setModal(!modal)
}

const handleAgregarPedido = ({categoriaId, ...producto}) => {
    if (pedido.some(productoState => productoState.id === producto.id)) {
    
        //ACTUALIZAR PEDIDO

        const pedidoActualizado = pedido.map(productoState => productoState.id === 
        producto.id ? producto : productoState)
        setPedido(pedidoActualizado)
        toast.info('Pedido Actualizado', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    } else{
        
        setPedido([...pedido, producto])
        toast.success('Pedido Añadido', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
}

const handleChangeEditarCantidad = id => {

    const cantidadActualizar = pedido.filter( producto => producto.id === id)

    setProducto(cantidadActualizar[0])
    setModal(!modal)

}

const handleEliminar = id => {
    const eliminarPedido = pedido.filter( producto => producto.id !== id)
    setPedido(eliminarPedido)
}

const confirmarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  }, [pedido, nombre]) 


  const handleVerificar = async (e) => {
    e.preventDefault()

    //Asi me comunico entre API y next
    try {
        await axios.post ('/api/pedidos', {pedido,nombre,total, fecha: Date.now().toString()})

        //Reiniciar app despues de un pedido
        setCategoriaActual([0])
        setPedido([])
        setNombre('')
        setTotal(0)

        toast.success('Pedido realizado correctamente', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        setTimeout(() => {
            router.push('/')
        }, 3000);

    } catch (error) {
        console.log(error)
    }
  }

    return (
        <RestauranteContext.Provider
            value={{
                categorias,
                categoriaActual,
                producto,
                handleClickCategoria,
                handleSetProducto,
                modal, 
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleChangeEditarCantidad,
                handleEliminar,
                nombre,
                setNombre,
                confirmarPedido,
                total,
                handleVerificar
            }}
        >
            {children}
        </RestauranteContext.Provider>
    )
}

export {
    RestauranteProvider
}

export default RestauranteContext
