const assert = require("assert");
const proxyquire = require("proxyquire");

const { MongoLibMock, getAllStub } = require("../utils/mocks/mongoLib");

const { publicationsMock } = require("../utils/mocks/publications");

describe("services - publications", function() {
  const PublicationsServices = proxyquire("../services/publications", {
    "../lib/mongo": MongoLibMock
  });

  const publicationsService = new PublicationsServices();

  describe("when getPublications method is called", async function() {
    it("should call the getall MongoLib method", async function() {
      await publicationsService.getPublications();
      assert.strictEqual(getAllStub.called, true);
    });

    it("should return an array of publications", async function() {
      const result = await publicationsService.getPublications();
      const expected = publicationsMock;
      assert.deepEqual(result, expected);
    });
  });
});
