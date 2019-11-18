const MongoLib = require("../lib/mongo");

class PublicationsService {
  constructor() {
    this.collection = "publications";
    this.mongoDB = new MongoLib();
  }

  async getPublications() {
    const publications = await this.mongoDB.getAll(this.collection, {});
    return publications || [];
  }

  async getPublication({ publicationId }) {
    const publication = await this.mongoDB.get(this.collection, publicationId);
    return publication || {};
  }

  async createPublication({ publication }) {
    const createpublicationId = await this.mongoDB.create(
      this.collection,
      publication
    );
    return createpublicationId;
  }

  async updatePublication({ publicationId, publication } = {}) {
    const updatedpublicationId = await this.mongoDB.update(
      this.collection,
      publicationId,
      publication
    );
    return updatedpublicationId;
  }

  async deletePublication({ publicationId }) {
    const deletedpublicationId = await await this.mongoDB.delete(
      this.collection,
      publicationId
    );
    return deletedpublicationId;
  }
}

module.exports = PublicationsService;
