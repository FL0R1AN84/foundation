<template>
  <v-app>
    <v-banner color="var(--green)">
      <nuxt-link to="/">
        <v-toolbar-title :style="{ color: 'white' }"
          >¯\_(ツ)_/¯ Your Editor</v-toolbar-title
        >
      </nuxt-link>
    </v-banner>
    <v-main class="pa-4">
      <Nuxt />
    </v-main>
    <v-footer
      :style="{ position: 'relative' }"
      color="var(--pastellgruen)"
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
