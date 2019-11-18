const MongoLib = require("../lib/mongo");

class UserPublicationsService {
  constructor() {
    this.collection = "user-publications";
    this.mongoDB = new MongoLib();
  }

  async getUserPublications({ userId }) {
    const query = userId && { userId };
    const userPublications = await this.mongoDB.getAll(this.collection, query);

    return userPublications || [];
  }

  async createUserPublication({ userPublication }) {
    const createdUserPublicationId = await this.mongoDB.create(
      this.collection,
      userPublication
    );

    return createdUserPublicationId;
  }

  async deleteUserPublication({ userPublicationId }) {
    const deletedUserPublicationId = await this.mongoDB.delete(
      this.collection,
      userPublicationId
    );

    return deletedUserPublicationId;
  }
}

module.exports = UserPublicationsService;
