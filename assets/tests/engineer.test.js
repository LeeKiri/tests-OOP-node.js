const Engineer = require("../lib/engineer");
const axios = require("axios");

//Positive Engineer Object Test

describe("Engineer", () => {
  describe("Engineer Object", () => {
    it("should return an object with name, id, email, role, github username, github url and generate a card as string", () => {
      let newEngineer = new Engineer(
        "Bob Barker",
        3,
        "bobbarker@company",
        "LeeKiri"
      );

      expect(newEngineer.getName()).toEqual("Bob Barker");
      expect(newEngineer.getId()).toEqual(3);
      expect(newEngineer.getEmail()).toEqual("bobbarker@company");
      expect(newEngineer.getUserName()).toEqual("LeeKiri");
      expect(newEngineer.getRole()).toEqual("Engineer");
      expect(newEngineer.getGithubUrl()).toEqual("https://github.com/LeeKiri")
     
      expect(typeof newEngineer.generateCard()).toEqual("string");
    });
  });
});
