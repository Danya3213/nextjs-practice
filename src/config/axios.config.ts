import axios from "axios";

axios.defaults = {
    ...axios.defaults,
    withCredentials: true,
    timeout: 2000
}