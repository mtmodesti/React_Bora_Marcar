import axios from "axios";

const boraMarcarApi = axios.create({
  baseURL: "https://bora-marcar-api.herokuapp.com/",
});

export default boraMarcarApi;
