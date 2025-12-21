import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="두산위브더제니스 청주 센트럴파크-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '두산위브' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '두산위브더제니스청주센트럴파크'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          도심의 중심에서 누리는 하이엔드 라이프, 두산위브더제니스 청주 센트럴파크.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          운천근린공원(조성 예정)과 1순환로·직지대로 등 사통팔달 교통망을 가까이.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          두산건설의 하이엔드 브랜드 ‘We’ve THE ZENITH’로 완성하는 프리미엄 주거 가치.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청주 원도심 정비사업의 중심, 새로운 랜드마크가 시작됩니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지하 2층~지상 31층, 18개동 1,618세대 대단지로 완성되는 프리미엄 스케일.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          59·74·84·114㎡ 다양한 타입과 특화설계로 라이프스타일의 선택을 넓히다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          두산위브더제니스 청주 센트럴파크
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·생활·자연을 한 번에, 청주 중심 입지의 완성.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          홈플러스·의료원 등 생활 인프라와 학교, 공원까지 가까운 올인원 주거 환경을 누리세요.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          하이엔드 브랜드에 걸맞은 외관 디자인과 단지 설계로 품격을 더하다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          대단지 커뮤니티와 쾌적한 동선, 일상에 프리미엄을 채우는 생활 설계.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          두산위브더제니스 청주 센트럴파크, 청주 원도심의 중심에 들어섭니다.
        </div>
      </>
    );
  }
};

  
