import axios from 'axios';
import authUser from '../utils/authUser.util';
import config from '../config';

export const authUserHeader = () => {
  const user = authUser();
  if (user && user.token) {
    return {
      Authorization: user.token,
    };
  }
  return {};
};

export const client = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...authUserHeader(),
  },
});

export default ({ method, url, data }) => client({
  url,
  method,
  data,
});
