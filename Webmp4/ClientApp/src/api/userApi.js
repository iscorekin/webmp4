import { userApi } from './index';
import User from '../models/User';
import { setJWT } from '../helpers/routing';

export const getUserInfo = async () => {
  const response = await userApi.get(`/info`);

  return new User(response);
};

export const login = async (name, password) => {
  const formData = new FormData();
  formData.set('login', name);
  formData.set('password', password);

  const response = await userApi.post(
    `/authenticate`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );

  setJWT(response.data.token);
  return new User(response);
};

export const register = async (name, password) => {
  const formData = new FormData();
  formData.set('login', name);
  formData.set('password', password);

  const response = await userApi.post(
    `/register`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );

  setJWT(response.data.token);
  return new User(response);
};
