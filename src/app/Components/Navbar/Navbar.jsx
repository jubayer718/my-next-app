"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname, pathname.includes('dashboard'));
  if (!pathname.includes('dashboard')) {
    
    return (
      <div className="flex justify-center">
  
        <ul className="flex items-center w-1/2 justify-between  list-none">
          <Link href='/'>  <li>Home</li></Link>
          <Link href="/about">  <li>About</li></Link>
          <Link href="/Post">  <li>Post</li></Link>
          <Link href="/services">   <li>Service</li></Link>
        </ul>
  
      </div>
    );
  } else {
    return <></>
  }
};

export default Navbar;