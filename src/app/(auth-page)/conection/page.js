'use client'
import Lottie from "lottie-react";
import ContactForm from "./ContactForm/ContactForm.js";
import contactAnimation from './contact.json'
import "./Contact.scss"

const Contact = () => {
    return (
        <div className="contact" id="Contact">
            <div className="contactForm">
                <ContactForm />
            </div>
            <div className="animation">
                <Lottie
                    className="contact-animation"
                    style={{ height: 355 }}
                    animationData={contactAnimation}
                />
            </div>
        </div>
    );
}

export default Contact;
