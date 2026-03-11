/* 
  랜딩페이지 전체 구조

  Header                상단 고정 네비게이션
  Hero                  메인 배너
  ImageSection          분양 포인트 소개 섹션
  ContactSection        상담 문의 폼
  Footer                하단 정보
  FloatingCallButton    우측 하단 전화 버튼
*/

import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ImageSection />
      <ContactSection />
      <Footer />

      {/* 항상 화면 우측 하단에 떠있는 전화 상담 버튼 */}
      <FloatingCallButton />
    </>
  );
}

export default App;