import { heroData } from "../data/siteContent";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroData.image})`,
      }}
    >
      <div className="hero__overlay">
        <p className="hero__subtitle">{heroData.subtitle}</p>
        <h1 className="hero__title">{heroData.title}</h1>
        <p className="hero__phone">{heroData.phone}</p>
        <button className="hero__button">{heroData.buttonText}</button>

{/* 아래로 스크롤 유도 화살표 */}
<div className="scroll-indicator">
  <span>⌄</span>
</div>
      </div>
    </section>
  );
}