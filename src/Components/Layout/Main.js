import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Contents from '../Pages/Contents/Contents';
import Home from '../Pages/Home/Home';
import Header from '../SharedPage/Header/Header';
import RightSideNav from '../SharedPage/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Container>
                <Container>
                    <Categories></Categories>
                    <Row>
                        <Col lg='8'>
                            <Contents></Contents>
                        </Col>
                        <Col lg='4'>
                            <RightSideNav></RightSideNav>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </div>
    );
};

export default Main;