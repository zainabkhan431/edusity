import "./Contact.css";
import mail from "../assets/mail-icon.png";
import message from "../assets/msg-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";
import whitearrow from "../assets/white-arrow.png";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fee458a7-57bd-4ed6-9a9c-7a8561e97d0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={message} />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail} />
            <p>Contact@GreatStack.dev</p>
          </li>
          <li>
            <img src={phone} />
            <p>+1 123-456-7890</p>
          </li>
          <li>
            <img src={location} />
            <p>77 Massachusetts Ave, Cambridge MA 02139, United States</p>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder="Enter Your Name" required />
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your mobile number" required />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email id" required />
          <label>Write your messages here</label>
          <textarea
            type="text"
            rows="6"
            placeholder="Write your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now
            <img src={whitearrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
