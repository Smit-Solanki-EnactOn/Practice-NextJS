import React from 'react'

export default function ProductDetailLayout({
  children
} : {
  children: React.ReactNode;
}) {
  return ( 
    <>
    {children}
    <div>layout</div>
    </>
  )
}
