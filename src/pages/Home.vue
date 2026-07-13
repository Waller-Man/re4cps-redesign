<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="home-page">
    <section class="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">{{ t('home.title') }}</h1>
      <h2>{{ t('home.subtitle') }}</h2>
      <p>{{ t('home.description') }}</p>
    </section>
  </main>
</template>
