"use client";
import BodyCard from "../../../components/bodyCard/BodyCard";
import styles from "./page.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ecommerceProducts } from "../../../lib/data";
import { Product } from "../../../model";
import Link from "next/link";
import FooterCard from "../../../components/footerCard/FooterCard";


type Props = {
  product: Product[];
};

function Earphones() {
  const { product }: Props = ecommerceProducts("earphones");
  const router = useRouter();

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1>EARPHONES</h1>
      </div>

      <div className={styles.content}>
        {product.map((data, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.card__image}>
              <Image
                src={data.image.desktop}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>

            <div className={styles.card__image__tablet}>
              <Image
                src={data.image.tablet}
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </div>

            <div className={styles.card__image__mobile}>
              <Image
                src={data.image.mobile}
                alt="Picture of the author"
                width={300}
                height={300}
              />
            </div>

            <div className={styles.card__text}>
              <h2>NEW PRODUCT</h2>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
              <button onClick={() => router.push(`earphones/${data.slug.trim()}`)}>
                <Link className={styles.link} href={`earphones/${data.slug.trim()}`}>SEE PRODUCT</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <BodyCard />
      <FooterCard />
    </div>
  );
}

export default Earphones;
