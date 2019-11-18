const express = require("express");

const UserPublicationsService = require("../services/userPublications");
const validationHandler = require("../utils/middleware/validationHandler");

const { publicationIdSchema } = require("../utils/schemas/publications");
const { userIdSchema } = require("../utils/schemas/users");
const {
  createUserPublicationSchema
} = require("../utils/schemas/userPublications");

function userPublicationsApi(app) {
  const router = express.Router();
  app.use("/api/user-publications", router);

  const userPublicationsService = new UserPublicationsService();

  router.get(
    "/",
    validationHandler({ userId: userIdSchema }, "query"),
    async function(req, res, next) {
      const { userId } = req.query;

      try {
        const userPublications = await userPublicationsService.getUserPublications(
          { userId }
        );

        res.status(200).json({
          data: userPublications,
          message: "user publications listed"
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    "/",
    validationHandler(createUserPublicationSchema),
    async function(req, res, next) {
      const { body: userPublication } = req;

      try {
        const createdUserPublicationId = await userPublicationsService.createUserPublication(
          {
            userPublication
          }
        );

        res.status(201).json({
          data: createdUserPublicationId,
          message: "user publication created"
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    "/:userPublicationId",
    validationHandler({ userPublicationId: publicationIdSchema }, "params"),
    async function(req, res, next) {
      const { userPublicationId } = req.params;

      try {
        const deletedUserMovieId = await userPublicationsService.deleteUserMovie(
          {
            userPublicationId
          }
        );

        res.status(200).json({
          data: deletedUserMovieId,
          message: "user publication deleted"
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = userPublicationsApi;
