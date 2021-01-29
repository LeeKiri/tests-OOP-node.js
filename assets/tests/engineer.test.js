const Engineer = require("../lib/engineer");
const axios = require("axios");

describe("Engineer", () => {
  describe("Engineer Object", () => {
    it("should return an object with name, id, email", () => {
      let newEngineer = new Engineer("Bob Barker", 3, "bobbarker@company");

      expect(newEngineer).toEqual({
        name: "Bob Barker",
        id: 3,
        email: "bobbarker@company",
      });
    });
  });

  describe("Engineer Role", () => {
    it("Engineer role should return a string 'Engineer'", () => {
      let newEngineer = new Engineer();
      let engineerRole = newEngineer.getRole();
      expect(engineerRole).toEqual("Engineer");
    });
  });

  describe("Engineer Github", () => {
      it("Github function should return a url link", () => {
          let userName = leeKiri;
         let data = userName;
         expect(data).toBe(data.html_url);
      });
  });

  describe("Engineer Card", () => {
    it("html for the engineer card is generated", () => {
      let newEngineer = new Engineer();
      let engineerCard = newEngineer.generateCard();
      expect(typeof engineerCard).toBe("string");
    });
  });
});
