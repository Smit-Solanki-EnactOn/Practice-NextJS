import Image from 'next/image'

const page = () => {
  return (
    <>
      <div>About Page</div>
      <Image src='/images/image1.jpeg' width={500} height={500} alt="image" />
    </>
  )
}

export default page