import { AuthService } from '../../services';

import { ApiClient } from './ApiClient';

export class ApiService {
  public auth: AuthService;

  constructor() {
    this.auth = new AuthService(ApiClient);
  }
}

export const api = new ApiService();
