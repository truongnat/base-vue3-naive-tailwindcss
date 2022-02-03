import { AxiosInstance } from 'axios';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export class AuthService {
  constructor(private axiosInstance: AxiosInstance) {}

  private readonly auth = getAuth();

  async login() {
    const response = await this.axiosInstance.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    console.log('login : ', response);
  }

  async _firebaseRegisterUser(email: string, pass: string) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, pass);
    } catch (e: any) {
      console.log(`logging _firebaseRegisterUser: ${e.message} `);
      return e;
    }
  }

  async _firebaseLogin(email: string, pass: string) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, pass);
    } catch (e: any) {
      console.log(`logging _firebaseLogin: ${e.message} `);
      return e;
    }
  }
}
