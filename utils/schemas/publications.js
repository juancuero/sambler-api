const joi = require("@hapi/joi");

const publicationIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const publicationTitleSchema = joi.string().max(80);
const publicationDescriptionSchema = joi.string().max(300);
const pulicationLikesSchema = joi
  .number()
  .integer()
  .min(0)
  .default(0);
const pulicationSharesSchema = joi
  .number()
  .integer()
  .min(0)
  .default(0);

const createPublicationchema = joi.object({
  title: publicationTitleSchema.required(),
  description: publicationDescriptionSchema.required(),
  likes: pulicationLikesSchema.required(),
  shares: pulicationSharesSchema.required()
});

module.exports = {
  publicationIdSchema,
  createPublicationchema
};
