function ContactSection() {
  const contactLinks = [
    {
      type: "email",
      label: "Email",
      detail: "sayuj21@gmail.com",
      href: "mailto:sayuj21@gmail.com",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      detail: "linkedin.com/in/sayujs/",
      href: "https://www.linkedin.com/in/sayujs/",
    },
    {
      type: "github",
      label: "GitHub",
      detail: "github.com/sayuj0",
      href: "https://github.com/sayuj0",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="contentSection contactSection">
      <div className="contentSection__inner contactSection__inner">
        <h2 className="contentSection__title contactSection__title">Get In Touch</h2>
        <p className="contentSection__text contactSection__lead">
          Great things start with a simple hello.
        </p>

        <div className="contactLayout">
          <article className="contactPanel contactPanel--form">
            <h2 className="contactPanel__title">Send me a message</h2>
            <p className="contactPanel__subtitle">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>

            <form className="contactForm" onSubmit={handleSubmit}>
              <label className="contactForm__label" htmlFor="contact-name">
                Name *
              </label>
              <input
                id="contact-name"
                className="contactForm__input"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />

              <label className="contactForm__label" htmlFor="contact-email">
                Email *
              </label>
              <input
                id="contact-email"
                className="contactForm__input"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />

              <label className="contactForm__label" htmlFor="contact-subject">
                Subject
              </label>
              <input
                id="contact-subject"
                className="contactForm__input"
                type="text"
                name="subject"
                placeholder="What's this about?"
              />

              <label className="contactForm__label" htmlFor="contact-message">
                Message *
              </label>
              <textarea
                id="contact-message"
                className="contactForm__textarea"
                name="message"
                placeholder="Your message..."
                rows="6"
                required
              />

              <button type="submit" className="contactForm__submit">
                Send Message
                <svg
                  className="contactForm__submitIcon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M22 2 11 13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2 15 22l-4-9-9-4 20-7z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </article>

          <aside className="contactPanel contactPanel--links" aria-label="Direct contact links">
            <h3 className="contactPanel__title">Connect with me</h3>
            <p className="contactPanel__subtitle">You can also reach out to me directly</p>

            <div className="contactLinks">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  className="contactLinkCard"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contactLinkCard__iconWrap" aria-hidden="true">
                    {item.type === "github" && (
                      <svg className="contactLinkCard__icon contactLinkCard__icon--brand" viewBox="0 0 24 24">
                        <path d="M12 2c-5.52 0-10 4.6-10 10.26 0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.39-3.37-1.39-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.12 10.12 0 0 0 22 12.26C22 6.6 17.52 2 12 2z" />
                      </svg>
                    )}

                    {item.type === "linkedin" && (
                      <svg className="contactLinkCard__icon contactLinkCard__icon--brand" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C3.88 3.5 3 4.4 3 5.5S3.88 7.5 4.98 7.5c1.09 0 1.98-.9 1.98-2s-.89-2-1.98-2zM3.5 21h3V9h-3v12zM9.5 9h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56C18.5 9.08 20 10.7 20 14.06V21h-3v-6.15c0-1.47-.03-3.35-2.04-3.35-2.04 0-2.35 1.6-2.35 3.25V21h-3V9z" />
                      </svg>
                    )}

                    {item.type === "email" && (
                      <svg className="contactLinkCard__icon contactLinkCard__icon--brand" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                      </svg>
                    )}
                  </span>
                  <div className="contactLinkCard__text">
                    <p className="contactLinkCard__label">{item.label}</p>
                    <p className="contactLinkCard__detail">{item.detail}</p>
                  </div>
                  <svg className="contactLinkCard__arrow" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
