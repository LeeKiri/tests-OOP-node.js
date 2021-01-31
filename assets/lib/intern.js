const Employee = require("./employee");

//creates new instance of Employee => Intern

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
  generateCard() {
    return `<div class="col sm-10 lg-2">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <div class="cardHead">
                            <h5 class="card-title text-white">${this.name}</h5>
                            <h6 class="card-text text-white"><i class="bi bi-book-fill p-2"></i>${this.getRole()}</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${this.email}" class="card-link"> ${
                              this.email
                            }</a></li>
                            <li class="list-group-item">School: ${this.getSchool()}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
  }
}

module.exports = Intern;
