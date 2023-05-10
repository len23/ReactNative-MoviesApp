type fetchParams = {
  API_URL: string;
  API_KEY: string;
};

type RequestOptions = {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: any;
};

export const APIConstants: fetchParams = {
  API_URL: 'https://imdbmovieservice.onrender.com',
  API_KEY: 'null',
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
