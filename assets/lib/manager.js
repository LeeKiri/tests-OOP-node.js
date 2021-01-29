const Employee = require("./employee");

// creating a new instance of Employee => Manager

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  generateCard() {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="cardHead">
            <h5 class="card-title text-white">${this.name}</h5>
            <h6 class="card-text text-white">${this.getRole()}</h6>
        </div>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item"><a href="#" class="card-link">Email: ${
          this.email
        }</a></li>
        <li class="list-group-item"><a href="#" class="card-link">Office: ${
          this.officeNumber
        }</a></li>
    </ul>
    </div>`;
  }
}

module.exports = Manager;
