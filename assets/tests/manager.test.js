const Manager = require("../lib/manager");

// positive Manager test

describe("Manager", () => {
  describe("Manager Object", () => {
    it("should return an object with name, id, email, officeNumber", () => {
      let newManager = new Manager("John Smith", 1, "johnsmith@company", 10);

      expect(newManager).toEqual({
        name: "John Smith",
        id: 1,
        email: "johnsmith@company",
        officeNumber: 10,
      });
    });
  });

  describe("Manager Role", () => {
    it("Manager role should return a string 'Manager'", () => {
      let newManager = new Manager();
      let managerRole = newManager.getRole();
      expect(managerRole).toEqual("Manager");
    });
  });

  describe("Manager Card", () => {
      it("html for the managers card is generated", () => {
          let newManager = new Manager();
          let managerCard = newManager.generateCard();
          expect(typeof managerCard).toBe('string');
      }) 
  });

  //Negative Manager test

//   it("should return undefined if the manager object is not created", () => {
//     let newManagerRole = new Manager("undefined");
//     expect(newManagerRole).toBe("undefined");
//   });
});
