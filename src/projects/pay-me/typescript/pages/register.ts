import { CardService, UserService } from "../service";
import { login } from "./login";

const registerHTML = `<div style="height: 100vh" class="container d-flex justify-content-center align-items-center">
<form class="w-50" id="register-form">
 <h2>Register Form</h2>
 <div class="mb-3">
  <label for="firstName" class="form-label">First Name</label>
  <input placeholder="Enter first name" class="form-control" id="firstName" />
 </div>
 <div class="mb-3">
  <label for="lastName" class="form-label">Last Name</label>
  <input placeholder="Enter last name" class="form-control" id="lastName" />
 </div>
 <div class="mb-3">
  <label for="phone" class="form-label">Phone number</label>
  <input type="tel" placeholder="Enter phone number" class="form-control" id="phone" />
 </div>
 <div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input type="password" placeholder="Enter password" class="form-control" id="password" />
 </div>
 <div style="cursor: pointer" class="mb-3 text-secondary" id="navigate-login">
  Do you have an account ?
 </div>
 <button type="submit" class="btn btn-primary">Register</button>
</form>
</div>`;

export const register = (
  cardService: CardService,
  userService: UserService
) => {
  document.body.innerHTML = registerHTML;

  const form = document.querySelector("form") as HTMLFormElement;

  const navigateRegister = form.querySelector(
    "#navigate-login"
  ) as HTMLDivElement;
  navigateRegister.onclick = () => login(cardService, userService);

  form.onsubmit = (e) => {
    e.preventDefault();
    let firstName: HTMLInputElement = document.querySelector("#firstName")!;
    let lastName: HTMLInputElement = document.querySelector("#lastName")!;
    let phoneNumber: HTMLInputElement = document.querySelector("#phone")!;
    let password: HTMLInputElement = document.querySelector("#password")!;
    userService.register(
      firstName.value,
      lastName.value,
      phoneNumber.value,
      password.value
    );

    console.log(
      `${firstName.value}, ${lastName.value}, ${phoneNumber.value}, ${password.value} `
    );
  };
};
`<table>
<td>Alfreds Futterkiste</td>
</tr>
<tr>
<td>Centro comercial Moctezuma</td>
</tr>
<tr>
<td>Ernst Handel</td>
</tr>
<tr>
<td>Island Trading</td>
</tr>
<tr>
<td>Laughing Bacchus Winecellars</td>
</tr>
<tr>
<td>Magazzini Alimentari Riuniti</td>
</tr>
</table>
`