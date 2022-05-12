import axiosInstance from "./_axios";

class Products {
  async getAllProducts() {
    return await axiosInstance.get("/products");
  }
}

export default new Products();
