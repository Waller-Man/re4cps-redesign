<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="placeholder-page">
    <header class="placeholder-heading">
      <h1>{{ t('agents.title') }}</h1>
      <p>{{ t('agents.placeholder') }}</p>
    </header>
  </main>
</template>
