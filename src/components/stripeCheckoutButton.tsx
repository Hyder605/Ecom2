'use client'

import getStipePromise from '@/lib/stripe';
import React from 'react'
import { Button } from './ui/button';



interface stripeBody{
    product: {
      _id: string,
      title: string,
      price: number
    },
    quantity: number,
    totalPrice: number
  }


  export default function StripeCheckOutButton({ props }: any) {
    const dataStripe: stripeBody = props;
  
    async function handleCheckOut() {
      const stripe = await getStipePromise();
      const response = await fetch("/api/stripe-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(dataStripe),
      });
  
      try {
        const data = await response.json();
        console.log(data);
        if (data.session) {
          stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
      } catch (error) {
        console.error("Error parsing JSON response:", error);
      }
    }
  
    return (
      <div>
        <Button onClick={handleCheckOut}>CheckOut</Button>
      </div>
    );
  }