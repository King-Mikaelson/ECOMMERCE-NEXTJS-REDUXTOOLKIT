import data from "./data.json"
import { Product } from "../model";

export function ecommerceProducts(name:string) {
    let reversedProducts = data.reverse()
  let product:Product[] = reversedProducts.filter((item) => {
    if (item.category === name){
      return data
    }
  } )

  return{
    product
  }
}
