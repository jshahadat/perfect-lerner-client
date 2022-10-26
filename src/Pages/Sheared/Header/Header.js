import React, { useContext } from 'react';
import './Header.css'
import { Button, Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LOGO from '../../../assets/logo/logo.png'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect className='mb-4 bg-secondary' expand="lg" bg="secondary" variant="light">
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none'>

                    <div className='d-flex me-5' >
                        <div style={{ height: '30px' }}>

                            <img className='rounded' src={LOGO} alt="" style={{ height: '60px' }} />
                        </div>
                        <h1 className='ms-3'><span className='perfect'>Perfect</span> <span className='learn'>Learn</span></h1>
                    </div>

                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link to='/courses' className='text-decoration-none me-4 fs-4 fw-semibold color'>Courses</Link>
                        <Link to='/blog' className='text-decoration-none me-4 fs-4 fw-semibold color'>FAQ</Link>
                        <Link to='/blog' className='text-decoration-none fs-4 fw-semibold color'>Blog</Link>


                    </Nav>
                    <Nav>

                        <Link to="/">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser style={{ height: '30px' }} title={user?.displayName} className='me-4'></FaUser>
                            }
                        </Link>

                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span></span>
                                        <Button onClick={handleLogOut} variant="light">Log out</Button>
                                    </>
                                    :
                                    <>

                                        <Link to='/login' className='text-decoration-none me-4 fs-4 fw-semibold'><Button variant="success" className='fs-4 fw-semibold' >Login</Button></Link>
                                        <Link to='/register' className='text-decoration-none  '><Button className='fw-semibold fs-4'>Register</Button></Link>
                                    </>
                            }


                        </>
                    </Nav>
                    <div className='d-lg-none'>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;