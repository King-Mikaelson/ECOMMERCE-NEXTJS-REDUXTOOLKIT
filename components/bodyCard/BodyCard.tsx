"use client";
import Image from "next/image";
import {AiOutlineRight} from "react-icons/ai";
import photo1 from "../../public/imageheadphones.png";
import photo2 from "../../public/imagespeakers.png";
import photo3 from "../../public/imageearphones.png";
import styles from "../bodyCard/BodyCard.module.scss";
import { useRouter } from 'next/navigation';


function BodyCard() {
  const router = useRouter();

  return (
    <div className={styles.body__first}>

<div className={styles.wrapper}>
<Image className={styles.wrapper__image} src={photo1} alt="headphones"/>
  <div className={styles.wrapper__parent}>
  <p>Headphones</p>
  <div onClick={() => router.push('/headphones')} className={styles.wrapper__child}>
    <p>SHOP</p>
    <AiOutlineRight className={styles.arrow}/>
  </div>
  </div>
  </div>

<div className={styles.wrapper}>
  <Image className={styles.wrapper__image} src={photo2} alt="speakers"/>

  <div className={styles.wrapper__parent}>
  <p>Speakers</p>
  <div onClick={() => router.push('/speakers')} className={styles.wrapper__child}>
    <p>SHOP</p>
    <AiOutlineRight className={styles.arrow}/>
  </div>
  </div>
</div>

<div className={styles.wrapper}>
  <Image className={styles.wrapper__image} src={photo3} alt="speakers"/>

  <div onClick={() => router.push('/earphones')} className={styles.wrapper__parent}>
  <p>Earphones</p>
  <div className={styles.wrapper__child}>
    <p>SHOP</p>
    <AiOutlineRight className={styles.arrow}/>
  </div>
  </div>
</div>


</div>
  )
}

export default BodyCard