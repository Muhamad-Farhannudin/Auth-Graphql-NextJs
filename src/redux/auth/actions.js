import { USER_LOGIN } from './constants';

export function userLogin(token, email, password) {
  return {
    type: USER_LOGIN,
    token,
    password,
    email,
  };
}
