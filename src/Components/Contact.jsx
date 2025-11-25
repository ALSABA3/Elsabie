import { useState } from "react";
import {
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";

const WHATSAPP_PHONE = "905360321379";
const ICON_SIZE = 32;
const MESSAGE_ICON_SIZE = 20;

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
    const messageText = `name: ${name}\nemail: ${email}\nproject: ${project}\nmessage: ${message}`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      messageText
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
              size={String(ICON_SIZE)}
              color="var(--first-color)"
              className="contact__icon"
            />
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+90 (534) 517 33 75</span>
            </div>
          </div>

          <div className="contact__information">
            <UilEnvelope
              size={String(ICON_SIZE)}
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
              size={String(ICON_SIZE)}
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
              <label className="contact__label">
                Name
                <input
                  type="text"
                  name="name"
                  autoComplete="on"
                  className="contact__input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="contact__content">
              <label className="contact__label">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="on"
                  className="contact__input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="contact__content">
            <label className="contact__label">
              Project
              <input
                type="text"
                name="project"
                className="contact__input"
                value={formData.project}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="contact__content">
            <label className="contact__label">
              Message
              <textarea
                name="message"
                rows="7"
                className="contact__input"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>

          <div>
            <a
              href={generateWhatsAppLink()}
              className="button button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send message{" "}
              <UilMessage
                size={String(MESSAGE_ICON_SIZE)}
                color="#fff"
                className="button__icon"
              />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
