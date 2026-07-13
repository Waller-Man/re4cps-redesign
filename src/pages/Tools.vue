<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="tools-page">
    <header class="tools-heading">
      <h1>{{ t('tools.title') }}</h1>
      <p>{{ t('tools.description') }}</p>
    </header>

    <div class="tools-empty-state" role="status">
      {{ t('tools.placeholder') }}
    </div>
  </main>
</template>
