const Engineer = require("../lib/engineer");
const axios = require("axios");

//Positive Engineer Object Test

describe("Engineer", () => {
  describe("Engineer Object", () => {
    it("should return an object with name, id, email, role, github url and generate a card as string", () => {
      let newEngineer = new Engineer(
        "Bob Barker",
        3,
        "bobbarker@company",
        "LeeKiri"
      );

      expect(newEngineer.getName()).toEqual("Bob Barker");
      expect(newEngineer.getId()).toEqual(3);
      expect(newEngineer.getEmail()).toEqual("bobbarker@company");
      expect(newEngineer.getRole()).toEqual("Engineer");

      //gets axios promise and returns the data to test github url
      newEngineer
        .getGithub()
        .then((response) => {
          console.log(response.data);
          expect(response.data.html_url).toEqual("https://github.com/LeeKiri");
          return response.data.html_url;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });

      expect(typeof newEngineer.generateCard()).toEqual("string");
    });
  });
});
