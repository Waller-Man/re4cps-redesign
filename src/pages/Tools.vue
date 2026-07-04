<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { tools } from '../data/tools'

const { t } = useI18n()
</script>

<template>
  <main class="tools-page">
    <header class="tools-heading">
      <h1>{{ t('tools.title') }}</h1>
      <p>{{ t('tools.description') }}</p>
    </header>

    <section class="tools-grid" :aria-label="t('tools.cardsLabel')">
      <a-row :gutter="[24, 24]">
        <a-col
          v-for="tool in tools"
          :key="tool.id"
          :xs="24"
          :sm="24"
          :md="12"
        >
          <a-card class="tool-card" :bordered="false" hoverable>
            <h2>{{ t(`tools.items.${tool.localeKey}.title`) }}</h2>

            <p class="tool-card-description">
              {{ t(`tools.items.${tool.localeKey}.description`) }}
            </p>

            <div class="tool-card-tags">
              <a-tag v-for="tagKey in tool.tagKeys" :key="tagKey" size="small">
                {{ t(`tools.tags.${tagKey}`) }}
              </a-tag>
            </div>

            <div class="tool-card-actions">
              <template v-for="link in tool.links" :key="`${link.kind}-${tool.id}`">
                <a-button
                  v-if="link.destination === 'external'"
                  type="primary"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ t(`tools.actions.${link.kind}`) }}
                </a-button>

                <RouterLink v-else :to="link.to" custom v-slot="{ navigate }">
                  <a-button type="primary" @click="navigate">
                    {{ t(`tools.actions.${link.kind}`) }}
                  </a-button>
                </RouterLink>
              </template>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </section>
  </main>
</template>
