import Response from "./Response";
import { setCookie } from "../helpers/routing";

export default class User extends Response {
  constructor(response) {
    super(response);

    if (!this.hasErrors()) {
      this.id = response.id;
      this.name = response.name;
      this.role = response.role;

      if (response.token) 
        setCookie('JWT', response.token);
    }
  }
}