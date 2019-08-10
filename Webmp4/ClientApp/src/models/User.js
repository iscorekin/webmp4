import Response from "./Response";

export default class User extends Response {
  constructor(response) {
    super(response);

    if (!this.hasErrors()) {
      this.id = response.data.id;
      this.name = response.data.name;
      this.role = response.data.role;

      this.payload = {
        id: this.id,
        name: this.name,
        role: this.role,
      }
    }
  }
}