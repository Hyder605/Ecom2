'use client'
import { getCookie } from 'cookies-next';

import React, { useEffect, useState } from 'react';


interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
}
export const AddToCart = () => {
  const [cartData, setCartData] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const url = getCookie('user_id')
        // console.log(url)
        const response = await fetch(`/api/cart?user_id=${url}`);
        const data = await response.json();
        // console.log(data)
        setCartData(data.res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartData();
  }, []);
  const ss=cartData.map((item)=>item.quantity)
  const total = ss.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log(ss)

  return (
    <div>
      {/* {cartData.map((item) => {
        const i = 0
        const total = i + item.quantity
        return (
          <div key={item.id}>
            <p>User ID: {item.user_id}</p>
            <p>Product ID: {item.product_id}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        )
      })} */}
      <p>{total}</p>
    </div>
  );
};