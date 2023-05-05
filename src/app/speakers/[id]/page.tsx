import getProduct from "../../../../lib/singleProduct";
import { Product, shopProduct } from "../../../../model";
import styles from "./page.module.scss";
import DynamicPage from "../../../../components/dynamicPage/DynamicPage";

type Params = {
  params: {
    id: string;
  };
};

function SpeakerPage({ params: { id } }: Params) {
  const product: any = getProduct(id);

  return (
    <div className={styles.dynamic}>
      <DynamicPage product={product} />
    </div>
  );
}

export default SpeakerPage;
