import DynamicPage from "../../../../components/dynamicPage/DynamicPage";
import  getProduct  from "../../../../lib/singleProduct";
import { Product } from "../../../../model";
import styles from "./page.module.scss";

type Params = {
  params:{
    id:string
  }
}

function EarphonePage({params : {id}}: Params) {
  const  product:any  = getProduct(id)


 return (
  <div className={styles.dynamic}>
  <DynamicPage product={product}/>
  </div>
  );
}

export default EarphonePage