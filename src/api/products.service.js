import axios from "axios";

class Products {
  constructor() {
    this.url = new URL("https://api.chec.io/v1/products");
    this.checAPIKey = process.env.VUE_APP_SECRET_KEY;
    this.headers = {
      "X-Authorization": this.checAPIKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }
  async getNewProducts() {

    let params = {
      category_slug: "new",
    };
    Object.keys(params).forEach((key) => this.url.searchParams.append(key, params[key]));

    let response = await axios.get(this.url, {
      headers: this.headers,
    });
    if (response.status === 200) return response.data.data;
  }
  async getMostSoldProducts() {
    let params = {
      category_slug: "most-sold",
    };
    Object.keys(params).forEach((key) => this.url.searchParams.append(key, params[key]));

    let response = await axios.get(this.url, {
      headers: this.headers,
    });
    if (response.status === 200) return response.data.data;
  }
  async getMostLikedProducts() {
    let params = {
      category_slug: "most-liked",
    };
    Object.keys(params).forEach((key) => this.url.searchParams.append(key, params[key]));

    let response = await axios.get(this.url, {
      headers: this.headers,
    });
    if (response.status === 200) return response.data.data;
  }
}

export default new Products();
