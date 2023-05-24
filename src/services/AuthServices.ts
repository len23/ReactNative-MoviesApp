import { ILogin } from '../types/ILogin';
import { IUser } from '../types/IUser';
import { getRequestOptions, makeAPICall } from './apiUtilities';

export const signUpUser = async (user: IUser): Promise<IUser> => {
  const options = getRequestOptions('POST', 'application/json', JSON.stringify(user));
  const apiResponse = await makeAPICall<IUser>('/signUp', options);
  return apiResponse;
};

export const logInUser = async (credentials: ILogin): Promise<IUser> => {
  const options = getRequestOptions('POST', 'application/json', JSON.stringify(credentials));
  const apiResponse = await makeAPICall<IUser>('/logInUser', options);
  return apiResponse;
};
