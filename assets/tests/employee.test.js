const Employee = require("../lib/employee");

//Test Employee

describe("Employee", () => {
  describe("Employee object", () => {
    it("should return an object with name, id, email and role", () => {
      const newEmployee = new Employee("Lee", 4, "lee@gmail.com");

      expect(newEmployee.getName()).toEqual("Lee");
      expect(newEmployee.getId()).toEqual(4);
      expect(newEmployee.getEmail()).toEqual("lee@gmail.com");
      expect(newEmployee.getRole()).toEqual("Employee");
    });
  });
});
