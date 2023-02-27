const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();
const server = require("../index");

const API = "http://localhost:3000";
chai.use(chaiHttp);

describe("/POST signup ", () => {
  it("create a user", (done) => {
    chai.request(API).post("/signup").send({
      email: "noman@gmail.com",
      username: "noman321",
      password: "noman321",
      passwordConf: "noman321",
    });
  }).end((err, res) => {
    res.should.have.status(201);
    res.body.should.be.a("object");
    res.body.should.have.property("message");
    res.body.message.should.contain("You are regestered,You can login now.");
    done();
  });
});
