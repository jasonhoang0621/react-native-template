import {axiosClient} from '.';
import {useQuery, useMutation} from 'react-query';

export type LoginRequest = {
  email: string;
  password: string;
};
export type LoginResponse = {
  errorCode: boolean;
  data: any;
};
export type RegisterRequest = {
  email: string;
  password: string;
  name: string;
};
export type RegisterResponse = {
  errorCode: boolean;
  data: any;
};
export type ProfileResponse = {
  errorCode: boolean;
  data: any;
};

const useLogin = () => {
  return useMutation(
    (payload: LoginRequest): Promise<LoginResponse> =>
      axiosClient.post('/login', payload),
  );
};

const useRegister = () => {
  return useMutation(
    (payload: RegisterRequest): Promise<RegisterResponse> =>
      axiosClient.post('/register', payload),
  );
};

const useProfile = () => {
  return useQuery(
    'profile',
    (): Promise<ProfileResponse> => axiosClient.get('/profile'),
  );
};

export {useLogin, useRegister, useProfile};
