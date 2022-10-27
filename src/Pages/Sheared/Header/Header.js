import React, { useContext, useEffect, useState } from 'react';
import './Header.css'
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LOGO from '../../../assets/logo/logo.png'
import ReactSwitch from 'react-switch';








const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }



    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme");
        }
        else {
            setTheme("dark-theme")
        }

    };

    useEffect(() => {
        document.body.className = theme;

    }, [theme])


    return (
        <Navbar collapseOnSelect className='mb-4 bg-secondary pt-4' expand="lg" bg="secondary" variant="light">
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none'>

                    <div className='d-flex mb-4' >
                        <div style={{ height: '30px' }}>

                            <img className='rounded mb-2' src={LOGO} alt="" style={{ height: '60px' }} />
                        </div>
                        <h1 className='ms-3 me-5'><span className='perfect'>Perfect</span> <span className='learn'>Learn</span></h1>
                    </div>

                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link to='/courses' className='text-decoration-none me-4 mb-4 fs-4 fw-semibold color'>Courses</Link>
                        <Link to='/faq' className='text-decoration-none me-4 mb-4 fs-4 fw-semibold color'>FAQ</Link>
                        <Link to='/blog' className='text-decoration-none fs-4 fw-semibold color mb-4'>Blog</Link>


                    </Nav>
                    <Nav>

                        <Link to="/">
                            {user?.photoURL ?
                                <Image
                                    className='me-5 mb-4'
                                    title={user?.displayName}
                                    style={{ height: '40px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser style={{ height: '30px' }} title={user?.displayName} className='me-4 mt-2 mb-4'></FaUser>
                            }
                        </Link>

                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className=' me-4 mb-4'><Button onClick={handleLogOut} variant="light">Log out</Button></span>
                                    </>
                                    :
                                    <>

                                        <Link to='/login' className='text-decoration-none fs-4 fw-semibold color me-5 mb-4'>Login</Link>
                                        <Link to='/register' className='text-decoration-none  '><Button className='fw-semibold fs-4 me-4 mb-4'>Register</Button></Link>
                                    </>
                            }


                        </>
                    </Nav>
                    <div className='mb-3'>
                        <ReactSwitch onClick={toggleTheme}></ReactSwitch>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;