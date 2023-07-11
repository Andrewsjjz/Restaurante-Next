import Head from "next/head"
import Sidebar from "../components/Sidebar"
import Modal from 'react-modal';

import ProductoModal from "../components/ProductoModal";
import useRestaurante from "../hook/useRestaurante";
import Pasos from "../components/Pasos";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#__next');

export default function Layout({children, pagina}) {

    const {modal} = useRestaurante()

    return (
      <>  
      <Head>
            <title>My way {pagina}</title>
            <meta name="description" content="Restaurante"></meta>
        </Head>

{/* Debe estar dentro del aside el sidebar para estar estatico en toda la pantalla cuando se realice scroll */}
        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                <Sidebar/>
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-auto no-scrollbar">
                <div className="py-10">
                  <Pasos/>
                  {children}</div>
            </main>
        </div>
        {modal && (
            <Modal
            isOpen={modal}
            style={customStyles}
            >
            <ProductoModal/>
            </Modal>
        )}
        <ToastContainer/>
      </>
    )
    }
    