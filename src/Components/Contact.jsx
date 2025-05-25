import { useState } from "react";
import {
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateWhatsAppLink = () => {
    const { name, email, project, message } = formData;
    return `https://wa.me/905360321379?text=${encodeURIComponent(
      `name: ${name}\nemail: ${email}\nproject: ${project}\nmessage: ${message}`
    )}`;
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <UilPhone
              size="32"
              color="var(--first-color)"
              className="contact__icon"
            />
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+90 (536) 032 13 79</span>
            </div>
          </div>

          <div className="contact__information">
            <UilEnvelope
              size="32"
              color="var(--first-color)"
              className="contact__icon"
            />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">Alsabaa0@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <UilMapMarker
              size="32"
              color="var(--first-color)"
              className="contact__icon"
            />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Turkey - Istanbul - Çekmeköy
              </span>
            </div>
          </div>
        </div>

        <form
          className="contact__form grid"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input
                type="text"
                name="name"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input
                type="email"
                name="email"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact__content">
            <label className="contact__label">Project</label>
            <input
              type="text"
              name="project"
              className="contact__input"
              value={formData.project}
              onChange={handleChange}
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              name="message"
              rows="7"
              className="contact__input"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <a
              href={generateWhatsAppLink()}
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send message{" "}
              <UilMessage size="20" color="#fff" className="button__icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
