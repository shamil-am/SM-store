import api from "./_axios";
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
  async login(email, password) {
    return new Promise((resolve, reject) => {
      if (email === "test@gmail.com" && password === "test") {
        resolve({ email, password });
      } else {
        reject("Mail adresi vəya şifrə səhfdir");
      }
    });
  }
}

export default new Customer();
