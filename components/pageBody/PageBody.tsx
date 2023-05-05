"use client";
import styles from "./PageBody.module.scss";
import { useState } from "react";
import Image from "next/image";
import products from "../../lib/data.json";
import { useRouter } from 'next/navigation';
import {Product} from "../../model";
import Link from "next/link";


type Props = {
    product: Product[],
    name:string
}

function PageBody({product, name}: Props) {
  
    const router = useRouter();

  return (
    <main className={styles.main}>
     <div className={styles.header}>
    <h1>{name}</h1>
   </div>

   <div className={styles.content}>
  {
  product.map((data, index) => (
    <div key={index} className={styles.card}>
    {
    index % 2 == 0 ? (
    <>
    <div  className={styles.card__image}>
        <Image src={data.image.desktop} alt="Picture of the author" width={500} height={500} />
</div>

<div  className={styles.card__image__tablet}>
        <Image src={data.image.tablet} alt="Picture of the author" width={400} height={400} />
</div>

<div  className={styles.card__image__mobile}>
        <Image src={data.image.mobile} alt="Picture of the author" width={300} height={300} />
</div>

  <div className={styles.card__text}>
  <h2>NEW PRODUCT</h2>
  <h3>{data.name}</h3>
  <p>{data.description}</p>
  <button onClick={() => router.push(`${data.category}/${data.slug.trim()}`)}>
  <Link className={styles.link} href={`${data.category}/${data.slug.trim()}`}>SEE PRODUCT</Link>
    </button>
  </div>
    </>



      ) : (
      <>
      <div className={styles.card__text}>
    <h2>NEW PRODUCT</h2>
    <h3>{data.name}</h3>
    <p>{data.description}</p>
    <button onClick={() => router.push(`${data.category}/${data.slug.trim()}`)}>
    <Link className={styles.link} href={`${data.category}/${data.slug.trim()}`}>SEE PRODUCT</Link>
    </button>
    </div> 
    
    <div  className={styles.card__image}>
        <Image src={data.image.desktop} alt="Picture of the author" width={500} height={500} />
</div>

<div  className={styles.card__image__tablet}>
        <Image src={data.image.tablet} alt="Picture of the author" width={400} height={400} />
</div>

<div  className={styles.card__image__mobile}>
        <Image src={data.image.mobile} alt="Picture of the author" width={300} height={300} />
</div>
  
      </>
      )
    }
    </div>
  ))
}

  </div>


  <div className={styles.content__mobile}>
  {
  product.map((data, index) => (
    <div key={index} className={styles.card}>

<div  className={styles.card__image__tablet}>
        <Image src={data.image.tablet} alt="Picture of the author" width={400} height={400} />
</div>

<div  className={styles.card__image__mobile}>
        <Image src={data.image.mobile} alt="Picture of the author" width={300} height={300} />
</div>

  <div className={styles.card__text}>
  <h2>NEW PRODUCT</h2>
  <h3>{data.name}</h3>
  <p>{data.description}</p>
  <button onClick={() => router.push(`${data.category}/${data.slug.trim()}`)}>
  <Link className={styles.link} href={`${data.category}/${data.slug.trim()}`}>SEE PRODUCT</Link>
    </button>
  </div>

    </div>
  ))
}

</div>
    </main>
  )
}

export default PageBody