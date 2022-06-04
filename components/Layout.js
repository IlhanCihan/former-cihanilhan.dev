import MainNavbar from "./Navbar";
import {Container} from "react-bootstrap";
import Head from 'next/head'
import Link from 'next/link';
import {useTheme} from "../providers/ThemeProvider";


export default function Layout({title, keywords, description, children, className}) {
    const { theme, toggleTheme } = useTheme();
    return (
<div className={theme.type}>
    <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords}/>
        <meta name="description" content={description}/>
        <meta name="yandex-verification" content="7108d2073afc0767" />
    </Head>
        <Container>

                <MainNavbar
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <hr/>
            <div className={`page-wrapper ${className}`}>
                {children}
            </div>
                <footer className="page-footer">
                    <div style={{marginTop: '100px' }}>
                        <Link href="/" passHref>
                        <a  style={{ textDecoration: 'none'  }} >
                            © {new Date().getFullYear()} Cihan Ilhan
                        </a>
                        </Link>
                    </div>
                </footer>
        </Container>
    <style jsx global>{`
        html, body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
        }
      `}
    </style>
</div>

    )
}

Layout.defaultProps = {
    title: 'Cihan Ilhan',
    keywords: 'development, coding, programming, javascript, python, aws',
    description: "I like to make stuff and post it on internet"
}
