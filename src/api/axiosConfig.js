import axios from "axios";

export default axios.create({
  baseURL: "https://6m0cwcrr-8080.inc1.devtunnels.ms/",
  headers: { "ngrok-skip-browser-": "true" },
});
