import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages(
      { "string.empty": "Email is Required" },
      { "any.required": "Email is Required" }
    ),
  password: Joi.string()
    .pattern(/^[0-9]{6,}$/)
    .required()
    .messages(
      { "string.empty": "Password is Required" },
      { "any.required": "Password is Required" }
    ),
});

const registerSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages(
      { "string.empty": "Email is Required" },
      { "any.required": "Email is Required" }
    ),
  password: Joi.string()
    .pattern(/^[0-9]{6,}$/)
    .required()
    .messages(
      { "string.empty": "Password is Required" },
      { "string.pattern.base": "password must be at least 6 characters" }
    ),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "confirm password is required",
    "any.only": "password and confirm password must be match",
  }),
  firstName: Joi.string().required().messages({
    "string.empty": "FirstName is Required",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "LastName is Required",
  }),
  phoneNumber: Joi.string()
  .pattern(/^[0-9]{10}$/)
  .required()
  .messages(
    { "string.empty": "PhoneNumber is Required" },
    { "string.pattern.base": "PhoneNumber must be a Number and 10 characters" }
  ),
});

const updateSchema = Joi.object({
  firstName : Joi.string().optional(),
  lastName : Joi.string().optional(),
  phoneNumber: Joi.string()
  .pattern(/^[0-9]{10}$/)
  .optional().messages({"string.pattern.base": "PhoneNumber must be a Number and 10 characters" }),
  profileImage : Joi.string().optional()
})



export { loginSchema, registerSchema , updateSchema };
