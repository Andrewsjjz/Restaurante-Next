import '../styles/globals.css'
import { RestauranteProvider } from '../context/RestauranteProvider'

function MyApp({ Component, pageProps }) {
  return (
    <RestauranteProvider>
      <Component {...pageProps} />
    </RestauranteProvider>
  )
}

export default MyApp
