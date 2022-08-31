import joi from "joi";

const fightersSchema = joi.object({
  firstUser: joi.string().trim().required(),
  secondUse: joi.string().trim().required()
});

export {fightersSchema};