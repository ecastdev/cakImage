
"use client";

// import Link from "next/link";
import { Navbar } from "flowbite-react";
import { cakLogo } from "../assests/assest";
import { FacebookRounded, Instagram, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

const { Link, NavLink } = require("react-router-dom");

 function Navbarr() {
  const YouTube1 = () => {
   
    window.open('https://youtube.com/channel/UC6lFSlyPQaQ2J9NlNJ30Zrg');
    
}
  return (
    <>
    <Navbar fluid rounded className="rounded-2xl  bg-gradient-to-r from-rose-900 to-rose-400">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={cakLogo} className="mr-3 h-6 sm:h-9" alt="cak-image" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Cak</span> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to='/' active>
          Home
        </Link>
          <Link to='about'>
             About
          </Link>
          <Link to='Services'>
             Services
          </Link>
          <Link to='contact'>
             Contact
          </Link>
        {/* <Navbar.Link to='services'>Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link to='contact'>Contact</Navbar.Link> */}
      </Navbar.Collapse>
      {/* social media */}
          <div className="flex-row space-x-6 hidden lg:block "> 
                  <YouTube color="secondary" onClick={YouTube1} />
                  <Instagram color="secondary" />
                  <FacebookRounded color="secondary" />
                  <WhatsApp color="secondary" />
                  <Twitter color="secondary" />
            </div>
    </Navbar>
    </>
  );
}
export default Navbarr;
