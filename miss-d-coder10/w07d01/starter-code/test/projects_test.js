//test database
process.env.NODE_ENV = "test";

const should = require("chai").should(); //downloaded / installed chain on terminal
const expect = require("chai").expect;
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app); //downloaded / installed supertest
const Project = require("../models/project");

//////////////////////////////////////////////////////////////////////////
//project index (GET)
// /project is the URL
describe("GET /projects", () => {
  before(done =>{
    //called Project model
    Project.collection.drop();
    Project.create({
      title: "Jelly Beans",
      url: "jelly.beans@gmail.com",
      github: "https://github.com/miss-d-coder10",
      users: ["5820ae22477a7f1c36cb7fd1"] //passing on any id.
    }, done);
  });
  //test 1
  it("should return a 200 response", (done) =>{
    api.get("/projects")
      .set("accept", "application/json")
      .expect(200, done);
  });
  //test 2
  it("should return an array", (done) =>{
    api.get("/projects")
    .set("accept", "application/json")
    .end((err, res) =>{
      expect(res.body).to.be.an("array");
      done();
    });
  });
});

///////////////////////////////////////////////////////////////////////////

//Project create (POST)

describe("post /projects", () =>{
  beforeEach(done => {
    Project.collection.drop();
    done();
  });
  it("should return a 201 response", (done) => {
    api.post("/projects")
    .set("Accept", "application/json")
    .send({
      title: "Jelly Beans",
      url: "jelly.beans@gmail.com",
      github: "https://github.com/miss-d-coder10",
      users: ["5820ae22477a7f1c36cb7fd1"]
    })
    .expect(201, done);
  });
///////////////////////returning object - need to understand
  it("should return an object", (done) =>{
    api.post("/projects")
    .set("Accept", "application/json")
    .send({
      title: "Jelly Beans",
      url: "jelly.beans@gmail.com",
      github: "https://github.com/miss-d-coder10",
      users: ["5820ae22477a7f1c36cb7fd1"]
    })
    .end((err, res) =>{
      expect(res.body).to.be.an("object"); //send 1 object
      done();
    });
  });
});

////////////////////////////////////////////////////////////////////////
// GET PROJECT ID

describe("GET /projects/:id", () =>{

  let projectId= null;

  before(done => {
    Project.collection.drop();
    Project.create({
      title: "Jelly Beans",
      url: "jelly.beans@gmail.com",
      github: "https://github.com/miss-d-coder10",
      users: ["5820ae22477a7f1c36cb7fd1"]
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });

  it("should return a 200 response", (done) =>{
    api.get(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .expect(200, done);
  });
///////////////////////returning object - need to understand
  it("should return an object containing fields title, github, url, and users", (done) =>{
    api.get(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .send({
      title: "Jelly Beans",
      url: "jelly.beans@gmail.com",
      github: "https://github.com/miss-d-coder10",
      users: ["5820ae22477a7f1c36cb7fd1"]
    })
    .end((err, res) =>{
      expect(res.body).to.be.an("object"); ///????
      done();
      // expect(res.body[0]).to.have.property("title");
      // expect(res.body[0]).to.have.property("github");
      // expect(res.body[0]).to.have.property("url");
      // expect(res.body[0]).to.have.property("users");
      // done();
    });
  });
});

///////////////////////////////////////////////////////////////////
//Project update by ID

describe("PUT /projects/:id", () =>{
  let projectsId = null;

  beforeEach(done =>{
    Project.collection.drop();
    Project.create({
      title: "Jelly Beans",
      url: "jelly.beans@gmail.com",
      github: "https://github.com/miss-d-coder10",
      users: ["5820ae22477a7f1c36cb7fd1"]
    }, (err, project) => {
      projectId = project._id;
      done();
    });
  });

  it("should return a 200 response", (done) =>{
  api.put(`/projects/${projectId}`)
  .set("Accept", "application/json")
  .send({
    title: "Jelly Beans",
    url: "jelly.beans@gmail.com",
    github: "https://github.com/miss-d-coder10",
    users: ["5820ae22477a7f1c36cb7fd1"]
  })
  .expect(200, done);
});

it("should return an object", (done) =>{
  api.put(`/project/${projectId}`)
  .set("Accept", "application/json")
  .send({
    title: "Jelly Beans",
    url: "jelly.beans@gmail.com",
    github: "https://github.com/miss-d-coder10",
    users: ["5820ae22477a7f1c36cb7fd1"]
  })
.end((err, res) =>{
    expect(res.body).to.be.an("object");
    done();
    });
  });
});

///////////////////////////////////////////////////////////////
// DELETE PROJECTS BY ID

describe("DELETE /projects/:id", () =>{
  let projectId = null;

  beforeEach(done =>{
    Project.collection.drop();
    Project.create({
      title: "Jelly Beans",
      url: "jelly.beans@gmail.com",
      github: "https://github.com/miss-d-coder10",
      users: ["5820ae22477a7f1c36cb7fd1"]
    }, (err, project) =>{
      projectId = project._id;
      done();
    });
  });

  it("should return a 204 response", (done) =>{
    api.delete(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .expect(204, done);
  });

  it("should have actually deleted the project", (done) =>{
    api.delete(`/projects/${projectId}`)
    .set("Accept", "application/json")
    .end((err, res) =>{
      Project.find((err,project) =>{
        expect(project.length).to.equal(0);
        done();
      });
    });
  });
});
