import React from 'react'

interface Props {
  params: {
    productId: string
  }
}

const page = ({ params }: Props) => {
  return (
    <div>Single Product Page {params.productId}</div>
  )
}

export default page