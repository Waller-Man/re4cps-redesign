<script setup lang="ts">
import type { Component } from 'vue'
import {
  IconArrowRight,
  IconEdit,
  IconExperiment,
  IconFile,
  IconSync,
} from '@arco-design/web-vue/es/icon'
import { useI18n } from 'vue-i18n'
import { agentCategories } from '../data/agents'

const { t } = useI18n()

const categoryIcons: Record<string, Component> = {
  'software-requirements-development': IconEdit,
  'requirements-change-evolution': IconSync,
  'historical-requirements-document-processing': IconFile,
  'test-case-generation': IconExperiment,
}

const getCapabilityKeywords = (categoryId: string) =>
  agentCategories
    .find((category) => category.id === categoryId)
    ?.children?.slice(0, 5) ?? []
</script>

<template>
  <main class="agents-page agents-overview-page">
    <header class="agents-heading">
      <h1>{{ t('agents.title') }}</h1>
      <p>{{ t('agents.description') }}</p>
    </header>

    <div class="agent-direction-grid">
      <RouterLink
        v-for="(category, index) in agentCategories"
        :key="category.id"
        :to="`/agents/${category.id}`"
        class="agent-direction-link"
      >
        <a-card class="agent-direction-card" :bordered="false" hoverable>
          <div class="agent-direction-card-topline">
            <span class="agent-direction-icon" aria-hidden="true">
              <component :is="categoryIcons[category.id]" />
            </span>
            <span class="agent-direction-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>

          <h2>{{ t(`agents.categories.${category.localeKey}.title`) }}</h2>
          <p>{{ t(`agents.categories.${category.localeKey}.description`) }}</p>

          <div class="agent-direction-keywords">
            <a-tag
              v-for="keyword in getCapabilityKeywords(category.id)"
              :key="keyword.id"
              size="small"
            >
              {{ t(`agents.nodes.${keyword.localeKey}`) }}
            </a-tag>
          </div>

          <span class="agent-direction-action">
            {{ t('agents.viewDirection') }}
            <IconArrowRight />
          </span>
        </a-card>
      </RouterLink>
    </div>
  </main>
</template>
