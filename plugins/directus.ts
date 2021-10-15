import { Directus } from '@directus/sdk';
import { Context } from '@nuxt/types';
import { Inject } from '@nuxt/types/app';

export default function (context: Context, inject: Inject) {
  inject('api', new DirectusApi(context));
}

type FoundationCollections = {
  // [collection_name]: typescript_type

  // You can also extend Directus collection. The naming has
  // to match a Directus system collection and it will be merged
  // into the system spec.
  directus_users: {
    bio: string;
  };
};
export class DirectusApi {
  sdk: Directus<FoundationCollections>;
  me: any;
  constructor(private context: Context) {
    this.sdk = new Directus<FoundationCollections>(context.$config.baseURL);
  }

  async login(email: string, password: string) {
    try {
      await this.sdk.auth.login({
        email,
        password,
      });
      await this.fetchMe();
    } catch (e) {
      console.log(e);
      throw new Error('login');
    }
  }

  async fetchMe() {
    try {
      this.me = await this.sdk.users.me.read();

      return this.me;
    } catch (e) {
      return null;
    }
  }

  async upload(item: any) {
    try {
      const response = await this.sdk.transport.post('/files', item);
      return response.data.id;
    } catch (e) {}
  }
}
