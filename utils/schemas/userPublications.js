const joi = require("@hapi/joi");

const { publicationIdSchema } = require("./publications");
const { userIdSchema } = require("./users");

const userPublicationIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserPublicationSchema = {
  userId: userIdSchema,
  publicationId: publicationIdSchema
};

module.exports = {
  userPublicationIdSchema,
  createUserPublicationSchema
};
