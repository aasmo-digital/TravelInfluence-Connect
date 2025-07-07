import axios, {Method} from 'axios';

type ApiRequestProps = {
  baseUrl: string;
  method: Method; // 'GET' | 'POST' | 'PUT' | 'DELETE' etc.
  req?: object; // Optional request body
  isForm?: boolean; // If true, send as 'multipart/form-data'
};

const ApiRequest = async ({
  baseUrl,
  method,
  req = {},
  isForm = false,
}: ApiRequestProps) => {
  try {
    const headers: any = {
      'Content-Type': isForm ? 'multipart/form-data' : 'application/json',
    };

    const response = await axios({
      url: baseUrl,
      method,
      headers,
      data: req, // for POST, PUT, etc.
    });

    return response; // return the actual data
  } catch (error: any) {
    console.error('API Request Error:', error?.response || error?.message);
    throw error?.response || error; // you can handle it in the calling component
  }
};

export default ApiRequest;
