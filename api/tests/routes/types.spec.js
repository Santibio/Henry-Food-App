/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Diet, conn } = require("../../src/db.js");

const agent = session(app);
const diet = {
  name: "Carnivoro",

};

describe("Types routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Diet.sync({ force: true }).then(() => Diet.create(diet))
  );
  describe("GET /types", () => {
    it("should get 200", () => agent.get("/api/types").expect(200));
  });
});
