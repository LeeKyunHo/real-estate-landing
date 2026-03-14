import { useState } from "react";

/*
  방문예약 섹션
  폼 입력 데이터를 상태로 관리
*/

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    visitDate: "",
    visitTime: "",
    message: "",
  });

  /* 입력값 변경 처리 */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* 폼 제출 */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("예약 데이터:", formData);

    alert(
      `예약 접수\n\n이름: ${formData.name}\n연락처: ${formData.phone}\n방문일: ${formData.visitDate}\n시간: ${formData.visitTime}`
    );
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-section__inner">
        <p className="reservation-section__small-text">방문예약 / 상담신청</p>

        <h2 className="reservation-section__title">모델하우스 방문예약</h2>

        <p className="reservation-section__subtitle">
          방문을 원하시는 고객님께서는 아래 정보를 남겨주세요.
          <br />
          예약 접수 후 담당자가 순차적으로 연락드립니다.
        </p>

        <p className="reservation-section__contact-time">
          연락 가능 시간 : 연중무휴 10:00 ~ 18:00
        </p>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="이름"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="연락처 (예: 010-1234-5678)"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="date"
            name="visitDate"
            required
            value={formData.visitDate}
            onChange={handleChange}
          />

          <input
            type="time"
            name="visitTime"
            required
            value={formData.visitTime}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="문의사항 (선택)"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <label className="reservation-form__agree">
            <input type="checkbox" required />
            <span>개인정보 수집 및 이용에 동의합니다.</span>
          </label>

          <button type="submit">방문예약 신청하기</button>
        </form>

        <p className="reservation-section__notice">
          모델하우스 방문 시 담당자명을 확인해 주세요.
        </p>
      </div>
    </section>
  );
}