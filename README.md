Real Estate Landing Page

부동산 모델하우스 방문예약 및 분양 안내를 위한 랜딩 페이지 프로젝트입니다.
React + Vite 기반으로 제작되었으며 모바일 환경에서도 사용 가능한 반응형 구조로 구성되어 있습니다.

현재 프로젝트의 목적은 다음과 같습니다.

모델하우스 방문예약 유도 랜딩페이지 제작

분양 정보 및 이미지를 쉽게 교체할 수 있는 구조 설계

React 기반 프론트엔드 개발 및 실제 배포 경험 축적

현재 사이트는 Vercel을 통해 배포되어 실제 접속 가능한 상태입니다.

주요 기능
랜딩 페이지 구조

Hero 메인 배너

스크롤 유도 애니메이션

섹션 기반 랜딩 구조

정보 섹션

입지환경 안내

단지 안내

평면 안내 (다중 이미지 지원)

방문예약 기능

방문 예약 입력 폼

입력 정보 확인 모달

방문 예약일 선택

방문 예약시간 선택 (30분 단위 드롭다운)

UI 기능

상단 메뉴 스크롤 이동

우측 하단 방문예약 버튼

반응형 UI (모바일 지원)

기타

커스텀 예약 완료 모달

favicon 및 사이트 탭 제목 적용

프로젝트 구조
real-estate-landing

public/
 ├ images/
 │   ├ hero/
 │   ├ location/
 │   ├ complex/
 │   └ floorplan/
 └ favicon.png

src/
 ├ components/
 │   ├ Header.jsx
 │   ├ HeroSection.jsx
 │   ├ ImageSection.jsx
 │   ├ FloorplanSection.jsx
 │   ├ ContactSection.jsx
 │   ├ FloatingCallButton.jsx
 │   └ Footer.jsx
 │
 ├ data/
 │   └ siteContent.js
 │
 ├ App.jsx
 └ App.css
실행 방법

프로젝트 실행

npm install
npm run dev
배포

현재 프로젝트는 Vercel을 통해 자동 배포되고 있습니다.

배포 방식

GitHub Push
↓
Vercel 자동 빌드
↓
사이트 자동 업데이트
사용 기술

React

Vite

JavaScript

CSS

Vercel (Deployment)

현재 구현 상태

완료된 기능

랜딩페이지 전체 구조 구현

반응형 UI 적용

방문예약 폼 UI 구현

방문 예약일 선택

방문 예약시간 드롭다운 선택

예약 완료 모달 UI

평면 안내 다중 이미지 구조

favicon 및 사이트 제목 적용

향후 개선 예정

방문예약 데이터 메일 전송 기능

문자(SMS) 알림 기능

관리자 확인 시스템

문의 데이터 저장 기능

CMS 연동

상담 관리 기능

English Summary

This project is a real estate model house reservation landing page built with React and Vite.

Purpose of the project:

Build a marketing landing page for real estate consultation

Structure the project so images and content can be easily updated

Gain frontend development and deployment experience

Main features:

Hero banner section

Section-based landing page layout

Location / Complex / Floorplan information

Reservation form with date & time selection

Reservation confirmation modal

Floating call button

Responsive UI

The project is currently deployed using Vercel.
