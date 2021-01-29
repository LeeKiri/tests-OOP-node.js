let Employee = require("./employee");
const axios = require("axios");

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
  }

  getRole() {
  "Engineer";
  }

  getGithub = () => {
    axios
      .get("https://api.github.com/users/" + data.github)
      .then((response) => {
        data.profileLink = response.data.html_url;
      })
      .catch((err) => console.log(err));
  };

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
          <li class="list-group-item"><a href="#" class="card-link">Github: ${this.getGithub()}</a></li>
      </ul>
  </div>`;
  };
}

module.exports = Engineer;
