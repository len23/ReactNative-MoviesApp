import { ILogin } from '../types/ILogin';
import { IUser } from '../types/IUser';
import { getRequestOptions, makeAPICall } from './apiUtilities';

type ErrorService = {
  error: string;
};

export const signUpUser = async (user: IUser): Promise<IUser | undefined> => {
  const options = getRequestOptions('POST', 'application/json', JSON.stringify(user));
  const apiResponse = await makeAPICall<IUser>('/signUp', options);
  return apiResponse;
};

export const logInUser = async (credentials: ILogin): Promise<IUser> => {
  const options = getRequestOptions('POST', 'application/json', JSON.stringify(credentials));
  const apiResponse = await makeAPICall<IUser>('/logInUser', options);
  return apiResponse;
};

export const getUserData = async (userName: string): Promise<IUser> => {
  const options = getRequestOptions('POST', 'application/json', JSON.stringify(userName));
  const apiResponse = await makeAPICall<IUser>(`/userInfo/${userName}`, options);
  return apiResponse;
};
