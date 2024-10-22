import { _getUsers } from '../../_DATA';

export const checkLogin = async (username, password) => {
  const users = await _getUsers();
  const user = users[username];
  if (user && password === user.password) {
    return true;
  }

  return false;
};
