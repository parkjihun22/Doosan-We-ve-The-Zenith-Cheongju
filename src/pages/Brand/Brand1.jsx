import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>두산위브더제니스 청주 센트럴파크 - 브랜드 소개</title>
  <meta
    name="description"
    content="두산건설 하이엔드 브랜드 위브 더 제니스(WE’VE THE ZENITH)의 철학과 가치를 소개합니다. 품질 기준과 프리미엄 설계, 차별화된 커뮤니티로 완성되는 두산위브더제니스 청주 센트럴파크."
  />
  <link rel="canonical" href="https://sinbiapt.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="두산위브더제니스 청주 센트럴파크" />
  <meta property="og:title" content="두산위브더제니스 청주 센트럴파크 - 브랜드 소개" />
  <meta
    property="og:description"
    content="두산건설 하이엔드 브랜드 위브 더 제니스 소개. 고객 중심 설계와 신뢰의 품질, 프리미엄 주거 문화를 제시하는 두산위브더제니스 청주 센트럴파크."
  />
  <meta property="og:url" content="https://sinbiapt.co.kr/Brand/intro" />
  <meta property="og:image" content="https://sinbiapt.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />

<MenuBar contents={menuContents} />

{/* SEO용 H1 */}
<h1 className={styles.screenReaderOnly}>
  두산위브더제니스 청주 센트럴파크 - 브랜드 소개
</h1>

<p className={styles.screenReaderOnly}>
  두산위브더제니스 청주 센트럴파크는 두산건설의 하이엔드 주거 브랜드
  위브 더 제니스(WE’VE THE ZENITH)를 적용한 프리미엄 주거 단지입니다.
  고객 중심의 공간 설계와 고급 마감, 첨단 시스템을 통해 청주 원도심의
  새로운 주거 기준을 제시하며, 신뢰와 품격을 바탕으로 미래 가치를 완성합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>도심 위에 완성되는 하이엔드 라이프</div>
  <div>두산위브더제니스, 청주의 기준이 되다</div>
</div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="두산위브더제니스청주센트럴파크brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
