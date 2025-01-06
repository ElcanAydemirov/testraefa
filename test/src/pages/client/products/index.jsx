import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import ProductCard from '../../../components/card';
import { Col, Container, Row } from 'react-bootstrap';
import SearchInput from '../../../components/searchinput';
import { wishlistContext } from '../../../context/wishlist';
import { productContext } from '../../../context/products';

const ClientProducts = () => {
    const BASE_URL = 'http://localhost:3000/';
    const {products, setProducts} = useContext(productContext)

    const [searchValue, setSearchVlue] = useState("")
    const getAllProducts = async () => {
        const res = await axios(`${BASE_URL}products`)
        console.log(res.data);
        setProducts(res.data);
        console.log(products);
    }

    const filtered = products.filter((p) => {
        return p.title.trim().toLowerCase().includes(searchValue.toLocaleLowerCase())
    })

    console.log(filtered);

    useEffect(() => {
      getAllProducts()

    }, [])


    const {wishlist,setWishlist} = useContext(wishlistContext)
    console.log(wishlist);
    
  return (
    <>
    <Container>
        <Row>
        <SearchInput searchValue={searchValue} setSearchValue={setSearchVlue}/>
        {filtered.length>0 && filtered.map((p) => {return(
            <Col xs={12} lg={3}>
                <ProductCard title={p.title.slice(0,10)} price={p.price} description={p.description.slice(0,50)} image={p.image} id={p.id} key={p.id} product={p}/>
            </Col>
        )
            
        })}
        </Row>
    </Container>

    
    </>
  )
}

export default ClientProducts