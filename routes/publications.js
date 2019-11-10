const express = require("express");
const PublicationsService = require("../services/publications");

function publicationsApi(app) {
  const router = express.Router();
  app.use("/api/publications", router);

  const publicationsService = new PublicationsService();

  router.get("/", async function(req, res, next) {
    try {
      const publications = await publicationsService.getPublications();

      res.status(200).json({
        data: publications,
        message: "publications listed"
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:publicationId", async function(req, res, next) {
    const { publicationId } = req.params;

    try {
      const publications = await publicationsService.getPublication({
        publicationId
      });

      res.status(200).json({
        data: publications,
        message: "publication retrieved"
      });
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async function(req, res, next) {
    const { body: publication } = req;
    try {
      const createdpublicationId = await publicationsService.createPublication({
        publication
      });

      res.status(201).json({
        data: createdpublicationId,
        message: "publication created"
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/:publicationId", async function(req, res, next) {
    const { publicationId } = req.params;
    const { body: publication } = req;

    try {
      const updatedpublicationId = await publicationsService.updatePublication({
        publicationId,
        publication
      });

      res.status(200).json({
        data: updatedpublicationId,
        message: "publication updated"
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:publicationId", async function(req, res, next) {
    const { publicationId } = req.params;

    try {
      const deletedpublicationId = await publicationsService.deletePublication({
        publicationId
      });

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
