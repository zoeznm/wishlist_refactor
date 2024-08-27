// src/pages/index.tsx
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'; // CSS 모듈

const Home: React.FC = () => {
  return (
    <div className={styles.section2} id="about">
      <div className={styles.pattern}>
        <div id="canvas"></div>
        <Image src="/img/eyes.png" alt="" className={styles.img} width={100} height={100} />
        <Image src="/img/eyes.png" alt="" className={styles.img1} width={100} height={100} />
        <Image src="/img/dream.png" alt="" className={styles.img2} width={100} height={100} />
        <Image src="/img/dream.png" alt="" className={styles.img3} width={100} height={100} />
        <Image src="/img/star.png" alt="" className={styles.img4} width={100} height={100} />
        <Image src="/img/star.png" alt="" className={styles.img5} width={100} height={100} />
        <Image src="/img/circle.png" alt="" className={styles.img6} width={100} height={100} />
        <Image src="/img/circle.png" alt="" className={styles.img7} width={100} height={100} />
        <hr className={styles['long-line1']} />
        <hr className={styles['long-line2']} />
        <hr className={styles['long-line3']} />
        <hr className={styles['long-line4']} />
        <hr className={styles['short-line1']} />
        <hr className={styles['short-line2']} />
        <hr className={styles['short-line3']} />
        <hr className={styles['short-line4']} />
      </div>
      <div className={styles['card-container']}>
        <div className={styles.card}>
          <Image src="/img/frontcard1.png" alt="Front Card" className={styles.card1}/>
          <Image src="/img/backcard1.png" alt="Back Card" className={styles.card2}/>
        </div>
        <div className={styles.card_2}>
          <Image src="/img/frontcard2.png" alt="Front Card" className={styles.card3}/>
          <Image src="/img/backcard2.png" alt="Back Card" className={styles.card4}/>
        </div>
        <div className={styles.card_3}>
          <Image src="/img/frontcard3.png" alt="Front Card" className={styles.card5}/>
          <Image src="/img/backcard3.png" alt="Back Card" className={styles.card6}/>
        </div>
        <div className={styles.card_4}>
          <Image src="/img/frontcard4.png" alt="Front Card" className={styles.card7}/>
          <Image src="/img/backcard4.png" alt="Back Card" className={styles.card8}/>
        </div>
        <div className={styles.card_5}>
          <Image src="/img/frontcard5.png" alt="Front Card" className={styles.card9}/>
          <Image src="/img/backcard5.png" alt="Back Card" className={styles.card10}/>
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
