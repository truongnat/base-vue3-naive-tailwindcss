import { AxiosInstance } from 'axios';

export class AuthService {
  constructor(private axiosInstance: AxiosInstance) {}

  async login() {
    const response = await this.axiosInstance.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    console.log('login : ', response);
  }
}
