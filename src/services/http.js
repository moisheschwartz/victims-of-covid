import axios from "axios";

axios.defaults.withCredentials = true;

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedError) {

        console.log(`An unexpected error occurred ${error.response.request.responseURL}`);

    } else {

        console.log("Error 1:", JSON.stringify(error.response));

    }

    return Promise.reject(error);
});
//axios.defaults.withCredentials = false;
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};
