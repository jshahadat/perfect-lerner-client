import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Sheared/Header/Header';
import Home from '../Pages/Home/Home/Home'
import Asides from "../Pages/Sheared/Sides/Asides";

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Col lg="4" className='d-none d-lg-block'>

                </Col>
                <Col lg="8">
                    <Outlet></Outlet>
                </Col>
            </Container>
        </div>
    );
};

export default Main;