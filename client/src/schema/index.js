import * as Yup from "yup";
export const registerSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  fullname: Yup.string().min(6).max(25).required("enter your fullname"),
  username: Yup.string()
    .min(6)
    .max(25)
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscore"
    )
    .test("underscore", "Username cannot start with underscore", (value) => {
      return !/^_/.test(value);
    }),
  password: Yup.string().min(8).max(25).required("enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "password must match"),
});
