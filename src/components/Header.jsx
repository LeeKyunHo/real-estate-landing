import { headerData } from "../data/siteContent";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">{headerData.logoText}</div>

      <nav className="header__nav">
        {headerData.menu.map((item) => (
          <a key={item} href="#">
            {item}
          </a>
        ))}
      </nav>

      <div className="header__phone">{headerData.phone}</div>
    </header>
  );
}