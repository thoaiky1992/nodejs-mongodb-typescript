const yup = require("yup");

export const UserUpdateDtoShema = yup.object({
  body: yup.object({
    name: yup.string(),
    phone: yup.string(),
  }),
  params: yup.object({
    id: yup.string().required(),
  }),
});
