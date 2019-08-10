import { userApi } from './index';
import User from '../models/User';

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

  return new User(response);
};
