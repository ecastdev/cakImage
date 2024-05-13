
"use client";

// import Link from "next/link";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { cakLogo } from "../assests/assest";

 function Navbarr() {
  return (
    <Navbar fluid rounded className="rounded-2xl  bg-gradient-to-r from-slate-50 to-slate-900">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={cakLogo} className="mr-3 h-6 sm:h-9" alt="cak-image" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Cak</span> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
            
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbarr;