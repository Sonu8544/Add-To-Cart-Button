import axios from "axios";

const url = "https://fakestoreapiserver.reactbd.com/products"
export async function getProductData() {
    const products = await axios.get(url)
    return products;
}
 