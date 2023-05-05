"use client";
import  styles from "./FooterCard.module.scss";

function FooterCard() {
  return (
    <div  className={styles.body__fifth}>
    <div className = {styles.content}>
    <div className={styles.text}>
    <h3>BRINGING YOU THE <span className={styles.orange}>BEST</span> AUDIO GEAR</h3>
      <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>

    <div className={styles.image}>
    </div>

    </div>


 </div>
  )
}

export default FooterCard