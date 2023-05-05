import BodyCard  from "../../../components/bodyCard/BodyCard";
import styles from "./page.module.scss";
import products from "../../../lib/data.json";
import PageBody from "../../../components/pageBody/PageBody";
import { ecommerceProducts } from "../../../lib/data";
import {Product} from "../../../model"
import FooterCard from "../../../components/footerCard/FooterCard";

type Props = {
    product: Product[]
}


function Speakers() {

  const {product}:Props = ecommerceProducts("speakers")

  return (
    <div className={styles.home}>
    <PageBody product={product} name="speakers"/>
    <BodyCard/>
    <FooterCard/>
    </div>

  )
}

export default Speakers