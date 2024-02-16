'use client'
import Link from "next/link";
import "./NavBar.scss";
import DarkMode from "../dark-mode/DarkMode";
import MenuToClose from "../MenuToClose/MenuToClose";
import { useState } from "react";




export default function NavBar() {
    const [show , setShow] = useState()
    const toggleClose =()=>{
        return setShow(prev => (prev? false : true))
    } 

    return (
        <div className="nav">

            <div className="logo">
                <Link href="#">
                    𝓼𝓶𝓲𝓽𝓱
                </Link>
                <MenuToClose show={show} toggleClose={toggleClose}/>
            </div>

            <ul className={`${show? "see" : "hide"}`}>
                <li><Link href="#home" >Home</Link></li>
                <li><Link href="#about" >About Me</Link></li>
                <li><Link href="#service" >service</Link></li>
                <li><Link href="#collect" >collection</Link></li>
                <li><Link href="#contact" >contact me</Link></li>

                <DarkMode />
            </ul>
        </div>
    )
};
