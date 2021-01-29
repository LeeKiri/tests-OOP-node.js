const Manager = require("../lib/manager");

// Manager test

describe("Manager", () => {
  describe("Manager Object", () => {
    it("should return an object with name, id, email, officeNumber, role and generate a card as string", () => {
      let newManager = new Manager("John Smith", 1, "johnsmith@company", 10);

      expect(newManager.getName()).toEqual("John Smith");
      expect(newManager.getId()).toEqual(1);
      expect(newManager.getEmail()).toEqual("johnsmith@company");
      expect(newManager.getOfficeNumber()).toEqual(10);
      expect(newManager.getRole()).toEqual("Manager");
      expect(typeof newManager.generateCard()).toEqual("string");
    });
  });
});
