import "./ContactFormStyle.css";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
function ContactForm() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_pa6s76r", "template_clyems3", values, "OdtQZnUCvN_tpqIN7")
      .then(
        (response) => {
          console.log("SUCCESS!", response, values);
          setValues({
            fullName: "",
            email: "",
            company: "",
            message: "",
          });
          setStatus("Sucess");
        },
        (error) => {
          console.log("failed..", error);
        }
      );
  };

  useEffect(() => {
    if (status === "Success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="contactForm">
      <form onSubmit={handleEmail}>
        <label>
          <span className="required">*</span> Full Name:
          <input
            type="text"
            required
            placeholder="John Doe"
            name="fullName"
            onChange={handleChange}
            value={values.fullName}
          />
        </label>
        <label>
          Company Name:
          <input
            type="text"
            placeholder="ProgrammersRus PTY LTD"
            name="company"
            onChange={handleChange}
            value={values.company}
          />
        </label>
        <label>
          <span className="required">*</span> Email:
          <input
            type="email"
            required
            placeholder="email@example.com"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </label>
        <label>
          <span className="required">*</span> Message:
          <textarea
            required
            placeholder="Hi, I hope you are having a wonderful day"
            rows={5}
            name="message"
            onChange={handleChange}
            value={values.message}
          />
        </label>
        <button type="submit" className="button contactButton">
          Contact me
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
