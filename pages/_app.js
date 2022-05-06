import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'
import ThemeProvider from "../providers/ThemeProvider";
import "react-toggle/style.css"

function MyApp({ Component, pageProps }) {
  return <ThemeProvider> <Component {...pageProps} /></ThemeProvider>
}

export default MyApp
