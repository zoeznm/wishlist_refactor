/* eslint-disable @next/next/no-img-element */
// src/pages/index.tsx
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // CSS 모듈

const Home: React.FC = () => {
  useEffect(() => {
    // 카드 클릭 처리 함수
    const handleCardClick = (card: HTMLElement, flippedClass: string, redirectTo: string) => {
      if (card.classList.contains(flippedClass)) {
        window.location.href = redirectTo;
      } else {
        card.classList.add(flippedClass);

        // 모든 카드의 z-index를 리셋
        document.querySelectorAll(`.${flippedClass.replace('flipped', 'card')}`).forEach((el) => {
          (el as HTMLElement).style.zIndex = '0';
        });

        // 클릭된 카드의 z-index를 최상위로 설정
        card.style.zIndex = '4';
      }
    };

    // 카드 설정
    const cards = [
      { selector: '.card', flippedClass: 'flipped', redirectTo: 'top.html' },
      { selector: '.card_2', flippedClass: 'flipped1', redirectTo: 'bottom.html' },
      { selector: '.card_3', flippedClass: 'flipped2', redirectTo: 'bag.html' },
      { selector: '.card_4', flippedClass: 'flipped3', redirectTo: 'shoes.html' },
      { selector: '.card_5', flippedClass: 'flipped4', redirectTo: 'hat.html' }
    ];

    // 카드 클릭 이벤트 리스너 등록
    cards.forEach(({ selector, flippedClass, redirectTo }) => {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        element.addEventListener('click', () => {
          handleCardClick(element, flippedClass, redirectTo);
        });
      }
    });

    // 컴포넌트 언마운트 시 클릭 이벤트 리스너 제거
    return () => {
      cards.forEach(({ selector, flippedClass }) => {
        const element = document.querySelector(selector) as HTMLElement;
        if (element) {
          element.removeEventListener('click', () => {
            handleCardClick(element, flippedClass, '');
          });
        }
      });
    };
  }, []);

  return (
    <div className={styles.section} id="about">
      <img src="../../client/public/img/eyes.png" alt="" className={styles.img} />
      <img src="../../client/public/img/eyes.png" alt="" className={styles.img1} />
      <img src="../../client/public/img/dream.png" alt="" className={styles.img2} />
      <img src="../../client/public/img/dream.png" alt="" className={styles.img3} />
      <img src="../../client/public/img/star.png" alt="" className={styles.img4} />
      <img src="../../client/public/img/star.png" alt="" className={styles.img5} />
      <img src="../../client/public/img/circle.png" alt="" className={styles.img6} />
      <img src="../../client/public/img/circle.png" alt="" className={styles.img7} />
      <hr className={styles['long-line1']} />
      <hr className={styles['long-line2']} />
      <hr className={styles['long-line3']} />
      <hr className={styles['long-line4']} />
      <hr className={styles['short-line1']} />
      <hr className={styles['short-line2']} />
      <hr className={styles['short-line3']} />
      <hr className={styles['short-line4']} />
      <div className={styles['card-container']}>
        <div className={styles.card}>
          <Image src="../../client/public/img/frontcard1.png" alt="Front Card" className={styles.card1} />
          <Image src="../../client/public/img/backcard1.png" alt="Back Card" className={styles.card2} />
        </div>
        <div className={styles.card_2}>
          <Image src="../../client/public/img/frontcard2.png" alt="Front Card" className={styles.card3} />
          <Image src="../../client/public/img/backcard2.png" alt="Back Card" className={styles.card4} />
        </div>
        <div className={styles.card_3}>
          <Image src="../../client/public/img/frontcard3.png" alt="Front Card" className={styles.card5} />
          <Image src="../../client/public/img/backcard3.png" alt="Back Card" className={styles.card6} />
        </div>
        <div className={styles.card_4}>
          <Image src="../../client/public/img/frontcard4.png" alt="Front Card" className={styles.card7} />
          <Image src="../../client/public/img/backcard4.png" alt="Back Card" className={styles.card8} />
        </div>
        <div className={styles.card_5}>
          <Image src="../../client/public/img/frontcard5.png" alt="Front Card" className={styles.card9} />
          <Image src="../../client/public/img/backcard5.png" alt="Back Card" className={styles.card10} />
        </div>
      </div>
      <div className={styles['flame-wrapper']}>
        <div className={styles.flame + ' ' + styles.red}></div>
        <div className={styles.flame + ' ' + styles.orange}></div>
        <div className={styles.flame + ' ' + styles.gold}></div>
        <div className={styles.flame + ' ' + styles.white}></div>
        <div className={styles.base + ' ' + styles.blue}></div>
        <div className={styles.base + ' ' + styles.black}></div>
      </div>
      <div className={styles['flame-wrapper1']}>
        <div className={styles.flame + ' ' + styles.red1}></div>
        <div className={styles.flame + ' ' + styles.orange1}></div>
        <div className={styles.flame + ' ' + styles.gold1}></div>
        <div className={styles.flame + ' ' + styles.white1}></div>
        <div className={styles.base + ' ' + styles.blue1}></div>
        <div className={styles.base + ' ' + styles.black1}></div>
      </div>
      <div className={styles.title4}>
        <h1 className={styles.mainword}></h1>
        <h1></h1>
      </div>
    </div>
  );
};

export default Home;
