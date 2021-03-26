import Cookies from 'universal-cookie';
import { Picture } from '~/graphql/schema';

export class HttpClient {
  public static async uploadPicture(payload: File) {
    try {
      const cookies = new Cookies();
      const body = new FormData();
      body.append('file', payload);
      const response = await fetch(process.env.API_HTTP + '/upload/image', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${decodeURIComponent(cookies.get('token'))}`,
        },
        body,
      });
      const json: Picture = await response.json();
      if (!json) return;
      return json.id;
    } catch (e) {}
  }
}
