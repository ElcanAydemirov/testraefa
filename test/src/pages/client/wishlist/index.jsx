import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaHeartBroken } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const [heartProduct, setHeartProduct] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        const heartProducts = savedFavorites ? JSON.parse(savedFavorites) : [];
        setHeartProduct(heartProducts);
    }, []);

    const handleRemove = (productId) => {
        const updatedHeartProduct = heartProduct.filter((item) => item.id !== productId);
        setHeartProduct(updatedHeartProduct);
        localStorage.setItem('favorites', JSON.stringify(updatedHeartProduct)); 
    };

    return (
        <Container>
            <Row>
                {heartProduct.length === 0 ? (
                    <Col>No products in wishlist</Col>
                ) : (
                    heartProduct.map((product) => (
                        <Col key={product.id} md={4}>
                            <div>
                                <h5>{product.title}</h5>
                                <img src={product.image} alt={product.title} width={100} />
                                <p>{product.description}</p>
                                <Button variant="danger" onClick={() => handleRemove(product.id)}>
                                    <FaHeartBroken /> Remove from wishlist
                                </Button>
                            </div>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default Wishlist;
