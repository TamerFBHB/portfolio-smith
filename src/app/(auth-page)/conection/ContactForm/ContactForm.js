
import "./ContactForm.scss";

const ContactForm = () => {

  return (
    <>
      <div className="sendEmail">
        <h3>Send Me Email</h3>
        <form>
          <div>
            <label>Your Name</label>
            <input type="text" name="user_name" id="name" required />
          </div>

          <div>
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" name="email" required />
          </div>

          <div>
            <label>Message</label>
            <textarea id="message" name="message" required />

          </div>

          <div className="send ">
            <input type="submit"  className="submit" />
          </div>

        </form>

      </div>
    </>
  );
};

export default ContactForm;
