import axios from "axios";

class Customer {
  async addCustomer({ name, surname, phone, email }) {
    const url = new URL("https://api.chec.io/v1/customers");
    const checAPIKey = process.env.VUE_APP_SECRET_KEY;
    const id = new Date().getTime();
    let headers = {
      "X-Authorization": checAPIKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    let body = {
      firstname: name,
      lastname: surname,
      email: email,
      phone: phone,
      external_id: `MY_CRM_USER_${id}`,
    };
    try {
      let customer = await axios.post(url, body, {
        headers: headers,
      });
      if (customer) {
        return customer;
      }
    } catch (error) {
      return error;
    }
  }
}

export default new Customer();
