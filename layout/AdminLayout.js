import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// md:items-center md:justify-center xl:w-1/4  2xl:w-1/5 py-5
export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Administrador {pagina}</title>
        <meta name="description" content="Restaurante Cafetería" />
      </Head>

      <div className="md:flex justify-start items-start">
            <aside className="flex justify-center items-center xl:justify-center xl:items-center 2xl:justify-center 2xl:items-center">
                <Image
                    width={200}
                    height={200}
                    src="/assest/LogoRestaurante.jpg"
                    alt="imagen logotipo"
                />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll no-scrollbar">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}