import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaHeartBroken } from "react-icons/fa";
import { wishlistContext } from '../../../context/wishlist';
import { productContext } from '../../../context/products';

const Wishlist = () => {
    const { products } = useContext(productContext);
    const { wishlist, setWishlist } = useContext(wishlistContext);

    const removeFromWishlist = (productId) => {
        setWishlist(wishlist.filter(id => id !== productId));
    };

    const wishlistProducts = products.filter(product => wishlist.includes(product.id));

    return (
        <Container className="mt-4">
            <h2>My Wishlist</h2>
            {wishlistProducts.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <Row>
                    {wishlistProducts.map(product => (
                        <Col key={product.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={product.image} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        Price: ${product.price}
                                    </Card.Text>
                                    <Button 
                                        variant="danger" 
                                        onClick={() => removeFromWishlist(product.id)}
                                    >
                                        <FaHeartBroken className="me-2" /> Remove
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Wishlist;
