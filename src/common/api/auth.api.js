import { request } from "../lib/api";

export default class AuthAPI {
  static userLogin = () =>
    request("http://localhost:8080/authenticate/login", "POST");
}
