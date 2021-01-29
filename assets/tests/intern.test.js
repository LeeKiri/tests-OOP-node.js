const Intern = require("../lib/intern");

// Intern test

describe("Intern", () => {
  describe("Intern Object", () => {
    it("should return an object with name, id, email, school and generate a card as string", () => {
      let newIntern = new Intern("Betty Boo", 7, "bettyboo@company", "Monash");

      expect(newIntern.getName()).toEqual("Betty Boo");
      expect(newIntern.getId()).toEqual(7);
      expect(newIntern.getEmail()).toEqual("bettyboo@company");
      expect(newIntern.getSchool()).toEqual("Monash");
      expect(newIntern.getRole()).toEqual("Intern");
      expect(typeof newIntern.generateCard()).toEqual("string");
    });
  });
});
