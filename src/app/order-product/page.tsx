'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Ordering Product')

    // using push, when user go back it will actually go back to previous page.
    // router.push('/products')

    // using replace, when user go back it will redirect to HOME page
    router.replace('/products');

    

  }
  return (
    <>
      <h1>Order Prouct</h1>
      <button onClick={handleClick} className='p-2 bg-amber-200 text-lg cursor-pointer'>Order</button>
    </>
  )
}
