const { publicationsMock } = require("../utils/mocks/publications");

class PublicationsService {
  async getPublications() {
    const publications = await Promise.resolve(publicationsMock);
    return publications || [];
  }

  async getPublication() {
    const publication = await Promise.resolve(publicationsMock[0]);
    return publication || {};
  }

  async createPublication() {
    const createpublicationId = await Promise.resolve(publicationsMock[0].id);
    return createpublicationId;
  }

  async updatePublication() {
    const updatedpublicationId = await Promise.resolve(publicationsMock[0].id);
    return updatedpublicationId;
  }

  async deletePublication() {
    const deletedpublicationId = await Promise.resolve(publicationsMock[0].id);
    return deletedpublicationId;
  }
}

module.exports = PublicationsService;
