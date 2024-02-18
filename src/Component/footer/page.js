
import LogoT from "../LOGO-T/Logo";
import "./Footer.scss";
import { BsCCircle } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <BsCCircle />
            <p>2023 design by Tamer Fouad Boshara</p>
            <LogoT />
        </div>
    );
}

export default Footer;
