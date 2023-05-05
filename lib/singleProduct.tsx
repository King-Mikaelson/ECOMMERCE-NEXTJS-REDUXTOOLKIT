import { Product } from "../model";
import data from "./data.json";

export default function getProduct(id:string){
let product = data.find((item) => item.slug.trim() === id.trim())

    return product
}