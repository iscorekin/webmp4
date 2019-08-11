import Response from "./Response";

export default class User extends Response {
  constructor(response) {
    super(response);
    
    if (!this.hasErrors()) {
      this.payload = {
        id: response.data.id,
        name: response.data.name,
        role: response.data.role,
      }
    }
  }
}