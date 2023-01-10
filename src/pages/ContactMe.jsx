import ColouredCircles from "../components/ColouredCircles.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import PhotoCircle from "../components/PhotoCircle/PhotoCircle";
import headShot from "../resources/images/Michael_300_3.jpg";

function ContactMe() {
  return (
    <div>
      <h1>
        <ColouredCircles />
        Contact Me
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="left">
          <PhotoCircle image={headShot} />
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
export default ContactMe;
