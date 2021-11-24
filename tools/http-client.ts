import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'universal-cookie';
import { Picture } from '~/graphql/schema';

export class HttpClient {
  public static async uploadPicture(payload: File, config?: AxiosRequestConfig): Promise<number> {
    const cookies = new Cookies();
    const body = new FormData();
    body.append('file', payload);
    const response = await axios.post(process.env.API_HTTP + '/upload/image', body, {
      ...config,
      headers: {
        Authorization: `Bearer ${decodeURIComponent(cookies.get('token'))}`,
      },
    });
    const json: Picture = await response.data;
    if (!json) throw new Error('unable to upload image');
    return json.id;
  }
}
