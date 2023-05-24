import { APIConstants, APILocalConstants } from '../constants/APIConstants';

export const createFullAPIPath: (path: string) => string = (path) => {
  return (
    APILocalConstants.API_URL +
    path +
    (path.includes('?') ? '&' : '?') +
    'api_key=' +
    APIConstants.API_KEY
  );
};

export async function makeAPICall<T>(path: string, options?: any): Promise<T> {
  console.log(createFullAPIPath(path));
  const response = await fetch(createFullAPIPath(path), options);
  return response.json() as Promise<T>;
}

type RequestOptions = {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: any;
};

export const getRequestOptions = (
  method: string,
  contentType: string,
  body?: any,
): RequestOptions => {
  return {
    method,
    headers: {
      'Content-Type': contentType,
    },
    body,
  };
};
