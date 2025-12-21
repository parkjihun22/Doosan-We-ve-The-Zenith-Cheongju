// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>두산위브더제니스 청주 센트럴파크</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>충청북도 청주시 흥덕구 신봉동 528번지 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 ~ 지상 31층, 총 18개동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 59㎡ · 74㎡ · 84㎡ · 114㎡</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 1,618세대 (일반분양 705세대)</span>
        </li>
      </ul>
    ),
  },

  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            청주 생활중심과 학세권을 누리는<br />
            두산위브더제니스청주센트럴파크 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "청주 원도심 개발 중심축",
      desc:
        "운천주공 재건축으로 새롭게 태어나는 원도심 랜드마크<br/>주변 재개발·재건축 사업으로 주거환경 개선 기대<br/>청주 도심 가치 상승의 핵심 입지",
    },
    {
      img: slide2,
      title: "의료·생활 인프라 접근성",
      desc:
        "청주의료원·대형 병원 등 의료 인프라 인접<br/>홈플러스 등 대형 생활편의시설 가까이<br/>일상에 여유를 더하는 안정적인 생활권",
    },
    {
      img: slide3,
      title: "사통팔달 광역 교통망",
      desc:
        "청주 1순환로·직지대로 등 핵심 도로망 인접<br/>중부·경부고속도로 접근 용이한 광역 이동성<br/>청주 도심 철도망 확충(계획) 기대",
    },
    {
      img: slide4,
      title: "교육·문화 인프라 밀집",
      desc:
        "초·중·고교 인접한 안정적인 교육 환경<br/>청주예술의전당·체육시설 등 문화 인프라<br/>도심 속 완성도 높은 생활 인프라",
    },
    {
      img: slide5,
      title: "총 1,618세대 대단지 스케일",
      desc:
        "지하 2층~지상 31층, 총 18개동 대단지 구성<br/>전용 59·74·84·114㎡ 다양한 주거 타입",
    },
    {
      img: slide6,
      title: "두산건설 하이엔드 브랜드",
      desc:
        "두산위브더제니스만의 고급 외관과 특화 설계<br/>대단지 커뮤니티와 공원형 단지 구성<br/>2029년 2월 입주 예정",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
