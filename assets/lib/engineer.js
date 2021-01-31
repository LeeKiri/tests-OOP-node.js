const Employee = require("./employee");
const axios = require("axios");

// creating a new instance of Employee => Engineer

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return axios.get("https://api.github.com/users/" + this.github);
  }
  generateCard() {
    return `<div class="col sm-10 lg-2">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <div class="cardHead">
                <h5 class="card-title text-white">${this.name}</h5>
                <h6 class="card-text text-white"><i class="bi bi-laptop-fill p-2"></i></i>${this.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item"><a href="#" class="card-link">Email: ${
                  this.email
                }</a></li>
                <li class="list-group-item"><a href="#" class="card-link">Github: ${this.getGithub()}</a></li>
            </ul>
        </div>
    </div>
</div>`;
  }
}

module.exports = Engineer;
