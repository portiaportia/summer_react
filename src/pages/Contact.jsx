import '../css/contact.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div id="contact-page" className="columns">
            <div>
                <h3>Contact Me</h3>
                <p>My address</p>
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;