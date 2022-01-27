export enum StatusCode {
  NotFound = 404,
  Forbidden = 403,
  BadRequest = 400,
  ServerError = 500,
  Success = 200,
  Error = 'error',
}

export const API_TIMEOUT = 100000;

export const baseURL = import.meta.env.VITE_BASE_URL as string;
