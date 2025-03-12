import axios from "axios";

const axiosInstance = axios.create({
  //* local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-dffee/us-central1/api"

  //*deployed version of amazon server renfer
  baseURL: "https://amazon-api-deploy-qp6m.onrender.com/",
});

export {axiosInstance};
