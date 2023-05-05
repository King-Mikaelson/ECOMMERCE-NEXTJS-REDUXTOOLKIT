"use client";
import styles from "./Main.module.scss";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import photo1 from "../../public/imageheadphones.png";
import photo2 from "../../public/imagespeakers.png";
import photo3 from "../../public/imageearphones.png";
import photo4 from "../../public/speakerzx.png";
import photo5 from "../../public/tabspeaker.png";
import photo6 from "../../public/image-speaker-zx9.png";
import BodyCard from "../bodyCard/BodyCard";
import { useRouter } from "next/navigation";
import FooterCard from "../footerCard/FooterCard";

function Main() {
  const router = useRouter();

  return (
    <main className={styles.body}>
      {/* <div className={styles.body__first}>

<div className={styles.wrapper}>
<Image className={styles.wrapper__image} src={photo1} alt="headphones"/>
  <div className={styles.wrapper__parent}>
  <p>Headphones</p>
  <div className={styles.wrapper__child}>
    <p>SHOP</p>
    <AiOutlineRight className={styles.arrow}/>
  </div>
  </div>
  </div>

<div className={styles.wrapper}>
  <Image className={styles.wrapper__image} src={photo2} alt="speakers"/>

  <div className={styles.wrapper__parent}>
  <p>Speakers</p>
  <div className={styles.wrapper__child}>
    <p>SHOP</p>
    <AiOutlineRight className={styles.arrow}/>
  </div>
  </div>
</div>

<div className={styles.wrapper}>
  <Image className={styles.wrapper__image} src={photo3} alt="speakers"/>

  <div className={styles.wrapper__parent}>
  <p>Earphones</p>
  <div className={styles.wrapper__child}>
    <p>SHOP</p>
    <AiOutlineRight className={styles.arrow}/>
  </div>
  </div>
</div>


</div> */}

      <BodyCard />

      <div className={styles.body__second}>
        <div className={styles.content}>
          <Image
            className={styles.wrapper__image}
            src={photo4}
            alt="speakers"
          />
          <Image
            className={styles.wrapper__image1}
            src={photo5}
            alt="speakers"
          />
          <Image
            className={styles.wrapper__image2}
            src={photo6}
            alt="speakers"
          />

          <div className={styles.parent}>
            <h3>ZX9 SPEAKER</h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button
              onClick={() => {
                router.push("/speakers/zx9-speaker");
              }}
            >
              <p>SEE PRODUCT</p>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.body__third}>
        <div className={styles.parent}>
          <h3>ZX7 SPEAKER</h3>
          <button
            onClick={() => {
              router.push("/speakers/zx7-speaker");
            }}
          >
            <p>SEE PRODUCT</p>
          </button>
        </div>
      </div>

      <div className={styles.body__fourth}>
        <div className={styles.container}>
          <div className={styles.image}></div>

          <div className={styles.content}>
            <h3>YX1 EARPHONES</h3>
            <button
              onClick={() => {
                router.push("/earphones/yx1-earphones");
              }}
            >
              <p>SEE PRODUCT</p>
            </button>
          </div>
        </div>
      </div>
      <FooterCard />
    </main>
  );
}

export default Main;
