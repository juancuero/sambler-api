const assert = require("assert");
const proxyquire = require("proxyquire");

const {
  publicationsMock,
  PublicationsServiceMock
} = require("../utils/mocks/publications.js");
const testServer = require("../utils/testServer");

describe("routes - publications", function() {
  const route = proxyquire("../routes/publications", {
    "../services/publications": PublicationsServiceMock
  });

  const request = testServer(route);
  describe("GET /publications", function() {
    it("should respond with status 200", function(done) {
      request.get("/api/publications").expect(200, done);
    });

    it("should respond with the list of publications", function(done) {
      request.get("/api/publications").end((err, res) => {
        assert.deepEqual(res.body, {
          data: publicationsMock,
          message: "publications listed"
        });

        done();
      });
    });
  });
});
