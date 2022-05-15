import { required, email, min } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("password", {
  message: "En azi 1 reqem daxil edin",
  validate: (v) => {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!v.split("").find((smyb) => numbers.includes(Number(smyb)))) {
      return false;
    } else {
      return true;
    }
  },
});

extend("confirmPassword", {
  params: ["otherValue"],
  validate: (value, { otherValue }) => {
    if (value === otherValue) {
      return true;
    }
    return false;
  },
  message: "Sifre eyni deyil",
});
extend("required", {
  ...required,
  message: "Zehmet olmasa {_field_} qeyd edin",
});

extend("min", {
  ...min,
  message: "{length} simvoldan az ola bilmez",
});

extend("email", {
  ...email,
  message: "Yalnis email formati",
});
