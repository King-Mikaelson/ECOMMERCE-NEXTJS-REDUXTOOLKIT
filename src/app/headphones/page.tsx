"use client";
import BodyCard from "../../../components/bodyCard/BodyCard";
import styles from "./page.module.scss";
import PageBody from "../../../components/pageBody/PageBody";
import { Product } from "../../../model";
import { ecommerceProducts } from "../../../lib/data";
import FooterCard from "../../../components/footerCard/FooterCard";

type Props = {
  product: Product[];
};

function Headphones() {
  const { product}:Props = ecommerceProducts("headphones");

  return (
    <div className={styles.home}>
      <PageBody product={product} name="headphones" />
      <BodyCard />
      <FooterCard />
    </div>
  );
}

export default Headphones;
