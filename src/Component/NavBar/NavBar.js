import Link from "next/link";
import "./NavBar.scss";
import DarkMode from "../dark-mode/DarkMode";




export default function NavBar() {
    return (
        <div className="nav">
            <Link href="#">
                <div className="logo">
                𝓼𝓶𝓲𝓽𝓱
                </div>
            </Link>
            <ul>
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
