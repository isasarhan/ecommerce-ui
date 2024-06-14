import axios from "axios";
const url = "https://ecommerceapi-xu9h.onrender.com/api/product";


export const getProducts = async () => {
    try {
        const data = (await axios.get(url)).data
       
        return data
    } catch (error) {
        console.error(error)
    }
}
