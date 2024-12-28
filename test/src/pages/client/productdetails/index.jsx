import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../../components/card';

const ProductDetails = () => {
    const [product, setProduct] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const { id } = useParams();  

    const BASE_URL = 'http://localhost:3000/';

    const getElemById = async () => {
        try {
            const res = await axios(`${BASE_URL}products/${id}`);
            console.log(res.data);
            setProduct(res.data); 
            setLoading(false); 
        } catch (error) {
            console.error("Error fetching product data", error);
            setLoading(false);  
        }
    };

    useEffect(() => {
        getElemById(); 
    }, [id]); 

    if (loading) {
        return <div>Loading...</div>;  
    }


    return (
        <>
            {product ? (
                <ProductCard
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    description={product.description}  
                    id={product.id}
                    product={product}
                />
            ) : (
                <div>Product not found!</div> 
            )}
        </>
    );
};

export default ProductDetails;
