import { APIConstants, APILocalConstants } from '../constants/APIConstants';
import {
  FileSystemAcceptedUploadHttpMethod,
  FileSystemUploadResult,
  FileSystemUploadType,
  uploadAsync,
} from 'expo-file-system';

type RequestOptions = {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: any;
};

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
  if (response.status !== 200) {
    const message = await response.json();
    throw new Error(message.error);
  }
  return response.json() as Promise<T>;
}

export async function makeAPIFileCall(
  path: string,
  fileUri: string,
  uploadType: FileSystemUploadType,
  method: FileSystemAcceptedUploadHttpMethod,
): Promise<FileSystemUploadResult> {
  const response = await uploadAsync(createFullAPIPath(path), fileUri, {
    fieldName: 'file',
    httpMethod: method,
    uploadType: uploadType,
  });
  return response;
}

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
