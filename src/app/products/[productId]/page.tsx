import React from 'react'

interface Props {
  params: Promise<{
    productId: string
  }>
}

const page = async ({ params }: Props) => {
  const { productId } = await params;
  return (
    <div>Single Product Page {productId}</div>
  )
}

export default page