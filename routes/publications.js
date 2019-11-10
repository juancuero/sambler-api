const express = require("express");
const { publicationsMock } = require("../utils/mocks/publications");

function publicationsApi(app) {
  const router = express.Router();
  app.use("/api/publications", router);

  router.get("/", async function(req, res, next) {
    try {
      const publications = await Promise.resolve(publicationsMock);

      res.status(200).json({
        data: publications,
        message: "publications listed"
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:publicationId", async function(req, res, next) {
    try {
      const publications = await Promise.resolve(publicationsMock[0]);

      res.status(200).json({
        data: publications,
        message: "publication retrieved"
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function(req, res, next) {
    try {
      const createdpublicationId = await Promise.resolve(
        publicationsMock[0].id
      );

      res.status(201).json({
        data: createdpublicationId,
        message: "publication created"
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:publicationId", async function(req, res, next) {
    try {
      const updatedpublicationId = await Promise.resolve(
        publicationsMock[0].id
      );

      res.status(200).json({
        data: updatedpublicationId,
        message: "publication updated"
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:publicationId", async function(req, res, next) {
    try {
      const deletedpublicationId = await Promise.resolve(
        publicationsMock[0].id
      );

      res.status(200).json({
        data: deletedpublicationId,
        message: "publication deleted"
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = publicationsApi;
