import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressCard, faEnvelope, faFeather} from '@fortawesome/free-solid-svg-icons';
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";



const MainNavbar = ({theme, toggleTheme}) => {

    return (
            <Navbar variant={theme.type} className="fj-navbar fj-nav-base" bg="transparent" expand="lg"  >


            <Navbar.Brand className="fj-navbar-brand">
                <Link href="/">
                    <a style={{color: theme.fontColor}}> Cihan Ilhan</a>
                </Link>

            </Navbar.Brand>


            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav      className="ml-auto" >

                    <Nav.Link
                        as={() =>
                            <Link   href='/blog'>
                                <a  style={{marginLeft: '25px'}} className="fj-navbar-item fj-navbar-link"> <FontAwesomeIcon icon={ faFeather }/> Blogs</a>
                            </Link>
                        }
                    />

                    <Nav.Link
                        as={() =>
                            <Link   href='/CV'>
                                <a  style={{marginLeft: '25px'}} className="fj-navbar-item fj-navbar-link"> <FontAwesomeIcon icon={ faAddressCard }/> CV</a>
                            </Link>
                        }
                    />

                    {/*<Nav.Link*/}
                    {/*    as={() =>*/}
                    {/*        <Link   href='/Contact'>*/}
                    {/*            <a  style={{marginLeft: '25px'}} className="fj-navbar-item fj-navbar-link"> <FontAwesomeIcon icon={ faEnvelope }/> Contact</a>*/}
                    {/*        </Link>*/}
                    {/*    }*/}
                    {/*/>*/}

                </Nav>



                <div style={{marginLeft: '25px'}} >
                    <ThemeToggle   onChange={toggleTheme}/>
                </div>
                <Search />



            </Navbar.Collapse>


        </Navbar>
    )
}

export default MainNavbar;
