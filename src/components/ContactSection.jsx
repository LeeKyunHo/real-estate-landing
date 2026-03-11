import { contactData } from "../data/siteContent";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-section__inner">
        <p className="contact-section__subtitle">{contactData.subtitle}</p>
        <h2 className="contact-section__title">{contactData.title}</h2>

        <form className="contact-form">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="연락처" />
          <textarea placeholder="문의내용" rows="5"></textarea>
          <button type="submit">{contactData.buttonText}</button>
        </form>
      </div>
    </section>
  );
}