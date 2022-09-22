import APIRequest from "./config/axios.config";

export default function getRandomJoke(){
    return APIRequest.get('./', {
        validateStatus:  (status) => {
          return status < 500; // Resolve only if the status code is less than 500
        }})
}