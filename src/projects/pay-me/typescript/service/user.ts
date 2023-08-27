import { faker } from "@faker-js/faker";
import { User } from "../entities";
import { UserRepository } from "../repository";

export class UserService extends UserRepository {
  login(phoneNumber: string, password: string) {
    const user = this.getUserByPhoneNumber(phoneNumber);

    const isCorrect = password === user.getPassword();

    if (!isCorrect) throw new Error("Invalid phone number or password");

    return user;
  }

  register(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string
  ) {
    const user = new User(firstName, lastName, phoneNumber, password);
    this.create(user);
  }

  searchUser(firstName: string, lastName: string) {
    const userSearch = this.getByUserName(firstName, lastName);

    if (!userSearch) {
      throw new Error("User not found");
    }
    return userSearch;
  }

  getUserList() {
    return this.getList();
  }
}
