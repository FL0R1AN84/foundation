<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form @submit.prevent="submitLogin">
          <v-card class="elevation-12">
            <v-toolbar dark color="var(--green)">
              <v-toolbar-title :style="{ color: 'var(--green-interactive)' }"
                >Anmeldung</v-toolbar-title
              >
            </v-toolbar>
            <v-card-text>
              <v-alert
                v-if="error === 'INVALID_CREDENTIALS'"
                type="error"
                bold
                :style="{ color: 'var(--green)' }"
              >
                <h3>Falsche Zugangsdaten!</h3>
              </v-alert>
              <v-text-field
                v-model="credentials.email"
                prepend-icon="mdi-shield-account"
                color="var(--green)"
                label="E-Mail"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="credentials.password"
                prepend-icon="mdi-lock"
                color="var(--green)"
                name="password"
                label="Passwort"
                type="password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                dark
                color="var(--green-interactive)"
                :style="{ color: 'var(--green)' }"
                type="submit"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Login extends Vue {
  error: string | null = null;
  $api: any;

  credentials = {
    email: '',
    password: '',
  };

  async submitLogin() {
    try {
      await this.$api.login(this.credentials.email, this.credentials.password);
      this.$router.push('/');
    } catch (e) {
      console.log(e);
      this.error = 'INVALID_CREDENTIALS';
    }
  }
}
</script>
