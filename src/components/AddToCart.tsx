'use client'
import { getCookie } from 'cookies-next';

import React, { useEffect, useState } from 'react';


interface CartItem {
    id: string;
    user_id: string;
    product_id: string;
    quantity: number;
  }
export const AddToCart=()=>{
    const [cartData, setCartData] = useState<CartItem[]>([]);
  
    useEffect(() => {
      const fetchCartData = async () => {
        try {
          const url = getCookie('user_id')
          console.log(url)
          const response = await fetch(`/api/cart?user_id=${url}`);
          const data = await response.json();
          console.log(data)
          setCartData(data.res);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCartData();
    }, []);
  
    return (
      <div>
        {cartData.map((item) => (
          <div key={item.id}>
            <p>User ID: {item.user_id}</p>
            <p>Product ID: {item.product_id}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    );
  };