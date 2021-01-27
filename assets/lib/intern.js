let Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
  }
  getRole = () => (this.role = "Intern");

  getSchool = () => this.school;

  generateCard = () => {
    `<div class="card" style="width: 18rem;">
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
          <li class="list-group-item"><a href="#" class="card-link">School: ${this.getSchool()}</a></li>
      </ul>
  </div>`;
  };
}

module.exports = Intern;
