import Image from 'next/image'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'About',
  description: 'About page',
}

export default async function page() {

  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  console.log(theme)

  return (
    <>
      <div>About Page</div>
      <Image src='/images/image1.jpeg' width={500} height={500} alt="image" />
    </>
  )
}
