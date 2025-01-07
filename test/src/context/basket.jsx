import React, { useState, useEffect, createContext } from 'react';

export const basketContext = createContext(null);

const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(() => {
        const storedBasket = localStorage.getItem('basket');
        return storedBasket ? JSON.parse(storedBasket) : [];
    });

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket]);

    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const existingItem = prevBasket.find(item => item.id === product.id);
            if (existingItem) {
                return prevBasket.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevBasket, { ...product, quantity: 1 }];
        });
    };

    const removeFromBasket = (productId) => {
        setBasket((prevBasket) => prevBasket.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        setBasket((prevBasket) =>
            prevBasket.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    return (
        <basketContext.Provider value={{ basket, addToBasket, removeFromBasket, updateQuantity }}>
            {children}
        </basketContext.Provider>
    );
};

export default BasketProvider;