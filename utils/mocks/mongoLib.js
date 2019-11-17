const sinon = require("sinon");

const { publicationsMock } = require("./publications");

const getAllStub = sinon.stub();
getAllStub.withArgs("publications").resolves(publicationsMock);

const createStub = sinon.stub().resolves(publicationsMock[0].id);

class MongoLibMock {
  getAll(collection) {
    return getAllStub(collection);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};
