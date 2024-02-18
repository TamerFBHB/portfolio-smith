'use client'
import Link from "next/link";
import "./NavBar.scss";
import DarkMode from "../dark-mode/DarkMode";
import MenuToClose from "../MenuToClose/MenuToClose";
import { useState } from "react";
import { usePathname } from "next/navigation";




export default function NavBar() {

    const CustomLink = ({ href, title }) => {
        const router = usePathname()
        return (
            <Link href={href} className={`${router === href ? 'active' : 'nonActive'}`}
            onClick={toggleClose} >
                {title}
            </Link>
        )
    }

    const [show, setShow] = useState(false)
    const toggleClose = () => {
        return setShow(prev => (prev ? false : true))
    }

    return (
        <div className="nav">

            <div className="logo">
                <Link href="/">
                    𝓼𝓶𝓲𝓽𝓱
                </Link>
                <MenuToClose show={show} toggleClose={toggleClose} />
            </div>

            <div className={` links ${show ? "see" : "hide"}`}>
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/collection" title="Collection" />
                <CustomLink href="/Contact" title="Contact Me" />

                <DarkMode />
            </div>
        </div>
    )
};
