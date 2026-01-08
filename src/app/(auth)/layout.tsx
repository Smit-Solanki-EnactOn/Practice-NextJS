'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  return (
    <>
      <div className="flex gap-5">
        {navLink.map((link) => {
          const isActive = pathname.startsWith(link.href)
          return (
            <Link href={link.href} key={link.name} className={isActive ? 'font-bold' : 'font-normal'} >
              {link.name}
            </Link>
          )
        })}
      </div>
      <div className="flex flex-col ">
        {children}
      </div>
    </>
  );  
}