import LayoutDesktop from '../components/LayoutDesktop'
import '../styles/globals.css'
import '../styles/semantic.min.css'
import BitcoinPage from './btc-page'


function MyApp({ Component, pageProps}) {
  return (
  <div><Component {...pageProps}  />
  </div>
    )
}

export default MyApp
