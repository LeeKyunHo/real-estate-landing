import { heroData } from "../data/siteContent";

export default function FloatingCallButton() {
  const phoneNumber = heroData.phone.replace(/-/g, "");

  return (
    <a href={`tel:${phoneNumber}`} className="call-button">
      전화 상담
    </a>
  );
}