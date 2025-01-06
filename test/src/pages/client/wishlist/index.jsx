import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaHeartBroken } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { productContext } from '../../../context/products';
import { wishlistContext } from '../../../context/wishlist';

const Wishlist = () => {

    const {products,Wishlist} = useContext(productContext)


    return (
        <Container>
            <Row>

                <Col key={} md={4}>

                </Col>
            </Row>
        </Container>
    );
};

export default Wishlist;
