import api from "./_axios";
import Commerce from "@chec/commerce.js";
class Customer {
  async addCustomer({ name, surname, phone, email }) {
    const id = new Date().getTime();
    let body = {
      firstname: name,
      lastname: surname,
      email: email,
      phone: phone,
      external_id: `MY_CRM_USER_${id}`,
    };

    try {
      let customer = await api.post("/customers", body);
      return customer;
    } catch (error) {
      return false;
    }
  }

  async loginCustomer(email) {
    const commerce = new Commerce(process.env.VUE_APP_PUBLIC_KEY);
    let response = await commerce.customer.login(email, "http://localhost:8080/#/account");
    return response;
  }
}

export default new Customer();
