import React, { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { basketContext } from '../../../context/basket';

const BasketPage = () => {
    const { basket, removeFromBasket, updateQuantity } = useContext(basketContext);

    const handleQuantityChange = (productId, quantity) => {
        if (quantity < 1) {
            removeFromBasket(productId);
        } else {
            updateQuantity(productId, quantity);
        }
    };

    return (
        <Container className="mt-4">
            <h2>My Basket</h2>
            {basket.length === 0 ? (
                <p>Your basket is empty.</p>
            ) : (
                <Row>
                    {basket.map(product => (
                        <Col key={product.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={product.image} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Price: ${product.price}</Card.Text>
                                    <Card.Text>
                                        Quantity: 
                                        <input
                                            type="number"
                                            value={product.quantity}
                                            min="1"
                                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                            style={{ width: '60px', marginLeft: '10px' }}
                                        />
                                    </Card.Text>
                                    <Button 
                                        variant="danger" 
                                        onClick={() => removeFromBasket(product.id)}
                                    >
                                        Remove
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

export default BasketPage;