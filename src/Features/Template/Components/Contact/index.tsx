import "./index.css";
function Contact() {
  return (
    <div className="contact-card">
      <img src="/src/Features/Template/images/mr-whiskerson.png" />
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img src="/src/Features/Template/images/phone-icon.png" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src="/src/Features/Template/images/mail-icon.png" />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </div>
  );
}

export default Contact;
