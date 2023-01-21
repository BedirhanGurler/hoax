import axios from "axios";

export const SignUpApi = (body) => {
    return axios.post("/api/1.0/users", body);
}
