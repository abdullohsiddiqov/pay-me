import { User } from "./../entities/user";
import { CardService, UserService } from "../service";
import { faker } from "@faker-js/faker";
import { CardRepository } from "../repository";

export const dashboard = (
  user: User,
  cardService: CardService,
  userService: UserService
) => {
  const secondUser =
    (document.body.innerHTML = ` <nav class="navbar navbar-light bg-light justify-content-between p-5">
		<h4 class="navbar-brand">${user.firstName} ${user.lastName}</h4>
		<form class="form-inline d-flex gap-2">
				<select class="form-select" id="inputGroupSelect01">
				<option class="all-option">All</option>
				</select>
				<input
						class="form-control mr-sm-2 searchInput"
						type="search"
						placeholder="Search"
						aria-label="Search"
				/>
				<button class="btn btn-outline-success my-2 my-sm-0 submit" type="submit">
						Search
				</button>
		</form>
</nav>
<div class="cards"></div>


`);
  const selOptions: HTMLSelectElement = document.querySelector(
    "#inputGroupSelect01"
  );
  for (let i = 0; i < userService.getUserList().length; i++) {
    const options = document.createElement("option");
    options.className = "option";
    options.innerText = userService.getUserList()[i].firstName;
    options.value = `${userService.getUserList()[i].firstName}`;
    selOptions.appendChild(options);
  }

  function sorted() {
    const cards: HTMLDivElement = document.querySelector(".cards");
    for (let i = 0; i < 10; i++) {
      let cardNumbers = faker.finance.creditCardNumber();
      console.log(cardNumbers);
      const table = document.createElement("table");
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      tr.appendChild(td);
      table.append(td)
      // td.className = "span";
      td.innerText = `${cardNumbers} `;
      cards.append(table);
    }
  }

  sorted();
};
