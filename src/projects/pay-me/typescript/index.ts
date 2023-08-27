import { login, register } from "./pages";
import { CardService, UserService } from "./service";

const cardService = new CardService();
const userService = new UserService();

function init() {
  // login(cardService, userService);
  register(cardService, userService);
}

init();
