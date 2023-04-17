import { request } from "../lib/api";

export default class CommonAPI {
  static addUser = (payload) =>
    request("http://localhost:8080/user/add", "POST", payload);

  static getVideos = () => request("http://localhost:8080/user/seevideos", "GET");

  static postVideos = (payload) =>
    request("http://localhost:8080/user/upload", "POST", payload);

  static postFines = (payload) =>
    request("http://localhost:8080/addfine", "POST", payload);

  static postPayments = (payload) =>
    request("http://localhost:8080/addpayment", "POST", payload);

  static putUserDetails = (payload) =>
    request("http://localhost:8080/user/details", "PUT", payload);
}
