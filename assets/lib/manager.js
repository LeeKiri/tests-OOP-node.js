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
    return `<div class="col sm-10 md- lg-2">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div class="cardHead">
                <h5 class="card-title text-white">${this.name}</h5>
                <h6 class="card-text text-white"><i class="bi bi-briefcase-fill p-2"></i></i>${this.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}" class="card-link"> ${
                  this.email
                }</a></li>
                <li class="list-group-item">Office: ${this.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>`;
  }
}

module.exports = Manager;
