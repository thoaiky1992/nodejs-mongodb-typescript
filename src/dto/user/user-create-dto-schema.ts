const yup = require("yup");

export const UserCreateDtoShema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
  }),
});
