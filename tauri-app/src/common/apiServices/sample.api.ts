import { api } from '../../axios';

export const SampleApi = {
  async get() {
    const response = await api.get<number[]>(
      'http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1'
    );

    return response.data;
  }
};
