<template>
  <v-app>
    <v-banner color="primary">
      <nuxt-link to="/">
        <v-toolbar-title :style="{ color: 'white' }"
          >¯\_(ツ)_/¯ Foundation</v-toolbar-title
        >
      </nuxt-link>
    </v-banner>
    <v-main class="pa-4">
      <Nuxt />
    </v-main>
    <v-footer :style="{ position: 'relative' }" :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
