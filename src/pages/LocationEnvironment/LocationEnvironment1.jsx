import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "청주 원도심 개발 중심축<br />미래가치가 기대되는 핵심 입지",
    contentText:
      "운천주공 재건축을 통한 원도심 주거환경 개선<br />주변 정비사업 연계로 생활 인프라 확장 기대",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 접근성<br />안심 생활 케어 환경",
    contentText:
      "청주의료원 등 의료시설 인접<br />일상·응급 상황 대응이 편리한 의료 환경",
  },
  {
    img: section2Image3,
    titleText: "사통팔달 교통 여건<br />청주 전역 연결 중심",
    contentText:
      "청주 1순환로·직지대로 등 주요 도로망 인접<br />중부·경부고속도로 접근 용이한 광역 이동성",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 밀집<br />도심 원스톱 라이프",
    contentText:
      "홈플러스·전통시장·상업시설 인접<br />행정·금융·문화 인프라를 가까이 누리는 생활권",
  },
  {
    img: section2Image5,
    titleText: "하이엔드 대단지 스케일<br />총 1,618세대 두산위브더제니스",
    contentText:
      "지하 2층~지상 31층, 18개동 대단지 구성<br />다채로운 커뮤니티로 완성하는 프리미엄 일상",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />도심 속 쾌적한 여유",
    contentText:
      "운천근린공원(조성 예정) 인접한 녹지 환경<br />산책과 휴식을 즐기는 쾌적한 주거 라이프",
  },
];





const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>두산위브더제니스 청주 센트럴파크 - 입지환경</title>
  <meta
    name="description"
    content="청주 원도심 핵심 입지, 두산위브더제니스 청주 센트럴파크의 입지환경을 확인하세요. 청주 1순환로·직지대로 등 교통 여건과 홈플러스·의료시설 등 생활 인프라, 운천근린공원(조성 예정) 인접 녹지 환경까지."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://sinbiapt.co.kr/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="두산위브더제니스 청주 센트럴파크" />
  <meta property="og:title" content="두산위브더제니스 청주 센트럴파크 - 입지환경" />
  <meta
    property="og:description"
    content="청주 원도심 중심 입지: 주요 도로망과 생활 인프라, 녹지 환경을 모두 갖춘 두산위브더제니스 청주 센트럴파크."
  />
  <meta property="og:url" content="https://sinbiapt.co.kr/LocationEnvironment/intro" />
  <meta property="og:image" content="https://sinbiapt.co.kr/img/og/location.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="두산위브더제니스 청주 센트럴파크 - 입지환경" />
  <meta
    name="twitter:description"
    content="청주 1순환로·직지대로 접근성, 도심 생활 인프라와 녹지 환경을 함께 누리는 입지."
  />
  <meta name="twitter:image" content="https://sinbiapt.co.kr/img/og/location.jpg" />
  <meta name="twitter:url" content="https://sinbiapt.co.kr/LocationEnvironment/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "두산위브더제니스 청주 센트럴파크 - 입지환경",
      "url": "https://sinbiapt.co.kr/LocationEnvironment/intro",
      "description":
        "청주 원도심 핵심 입지, 주요 도로망과 생활 인프라, 운천근린공원(조성 예정) 인접 녹지 환경을 갖춘 두산위브더제니스 청주 센트럴파크의 입지환경.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://sinbiapt.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://sinbiapt.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://sinbiapt.co.kr/LocationEnvironment/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

{/* SEO 최적화 */}
<h1 className={styles.screenReaderOnly}>
  두산위브더제니스 청주 센트럴파크 - 입지안내
</h1>
<p className={styles.screenReaderOnly}>
  두산위브더제니스 청주 센트럴파크의 입지 정보를 확인하세요.
  청주 1순환로·직지대로 등 주요 도로망을 통한 접근성과
  홈플러스·의료시설 등 생활 인프라, 운천근린공원(조성 예정) 인접 녹지 환경을
  두루 갖춘 청주 원도심 중심 입지입니다.
</p>

<div className={styles.textBox}>
  <div>갈수록 완성되는 청주 원도심</div>
  <div>살수록 높아지는 하이엔드 가치</div>
  <div>도시의 기준이 되는 주거, 두산위브더제니스 청주 센트럴파크</div>
</div>



      <img
        src={page1}
        className={styles.image2}
        alt="두산위브더제니스청주센트럴파크입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 두산위브더제니스청주센트럴파크사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
