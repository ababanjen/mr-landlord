import axios from "axios";

type AxiosTypes = {
  method: string;
  url: string;
  data?: any;
  params?: any;
};
// TODO:BE endpoints
// Credentials
const axiosRequest = ({ method = "GET", url, ...restProps }: AxiosTypes) =>
  axios({
    method,
    url: `/api/${url}`,
    headers: {
      "Content-Type": "application/json",
    },
    ...restProps,
  })
    .then(res => res.data)
    .catch(err => err);

export default axiosRequest;
