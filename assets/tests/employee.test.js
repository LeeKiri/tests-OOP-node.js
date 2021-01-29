const { it } = require("@jest/globals");
const Employee = require("../lib/employee");

//Positive Test Employee

describe("Employee", () => {
  describe("Employee object", () => {
    it("should return an object with name, id, email", () => {
      const newEmployee = new Employee("Lee", 4, "lee@gmail.com");

      expect(newEmployee).toEqual({
        name: "Lee",
        id: 4,
        email: "lee@gmail.com",
      });
    });
  });

  //Negative Employee Test

  it("should return undefined if the object is not created", () => {
    let newEmployee = new Employee();
    expect(newEmployee).toBe("undefined");
  });
});

//Positive test Role

describe("Employee", () => {
  describe("Employee role", () => {
    it("Employee role should return a string 'Employee'", () => {
      let newEmployee = new Employee();
      let employeeRole = newEmployee.getRole();
      expect(employeeRole).toEqual("Employee");
    });
  });

  //Negative Role Test
  
  it("employee role should return undefined", () => {
    let newEmployee = new Employee();
    let employeeRole = newEmployee.getRole();
    expect(employeeRole).toBe("undefined");
  });
});
