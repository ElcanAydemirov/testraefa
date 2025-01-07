import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../../components/card';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { wishlistContext } from '../../../context/wishlist';
import { productContext } from '../../../context/products';
import { basketContext } from '../../../context/basket';
import { FaShoppingCart } from 'react-icons/fa';
import SearchInput from '../../../components/searchinput';  

const ClientProducts = () => {
    const BASE_URL = 'http://localhost:3000/';
    const { products, setProducts } = useContext(productContext);
    const { addToBasket } = useContext(basketContext);

    const [searchValue, setSearchVlue] = useState(""); 

    const getAllProducts = async () => {
        const res = await axios(`${BASE_URL}products`);
        setProducts(res.data);
    };

    const filtered = products.filter((p) => {
        return p.title.trim().toLowerCase().includes(searchValue.toLowerCase());
    });

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <Container>
            <Row>
                <SearchInput searchValue={searchValue} setSearchValue={setSearchVlue} />  {/* Use SearchInput here */}
                {filtered.length > 0 && filtered.map((p) => {
                    return (
                        <Col key={p.id} xs={12} lg={3}>
                            <ProductCard
                                title={p.title.slice(0, 10)}
                                price={p.price}
                                description={p.description.slice(0, 50)}
                                image={p.image}
                                id={p.id}
                                product={p}
                            />
                            <Button
                                variant="primary"
                                onClick={() => addToBasket(p)}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                            >
                                <FaShoppingCart /> Add to Basket
                            </Button>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ClientProducts;
