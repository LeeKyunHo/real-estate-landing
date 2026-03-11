import { sectionData } from "../data/siteContent";

export default function ImageSection() {
  return (
    <section className="image-section">
      {sectionData.map((item) => (
        <div className="image-card" key={item.id}>
          <div className="image-card__image-wrap">
            <img src={item.image} alt={item.title} className="image-card__image" />
          </div>
          <div className="image-card__content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}