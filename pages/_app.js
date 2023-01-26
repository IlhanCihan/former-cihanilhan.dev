import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.scss'
import ThemeProvider from "../providers/ThemeProvider";
import "react-toggle/style.css"
import "@fortawesome/fontawesome-svg-core/styles.css";

import {config} from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

function MyApp({Component, pageProps})
{
	return <ThemeProvider> <Component {...pageProps} /></ThemeProvider>
}

export default MyApp
