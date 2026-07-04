<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const keywordKeys = [
  'requirementsEngineering',
  'knowledgeEngineering',
  'formalMethods',
  'artificialIntelligence',
  'ontology',
  'agent',
] as const

const directions = [
  {
    key: 'ai4re',
    tags: ['artificialIntelligence', 'requirementsEngineering', 'knowledgeEngineering'],
  },
  {
    key: 're4ai',
    tags: ['requirementsEngineering', 'agent', 'formalMethods'],
  },
  {
    key: 'softwareGeneration',
    tags: ['artificialIntelligence', 'requirementsEngineering', 'formalMethods'],
  },
  {
    key: 'softwareEvolution',
    tags: ['agent', 'requirementsEngineering', 'artificialIntelligence'],
  },
  {
    key: 'domainOntology',
    tags: ['ontology', 'knowledgeEngineering', 'artificialIntelligence'],
  },
] as const
</script>

<template>
  <main class="research-page">
    <header class="research-heading">
      <h1>{{ t('research.title') }}</h1>
      <p>{{ t('research.subtitle') }}</p>
    </header>

    <section class="research-keywords" :aria-label="t('research.keywordsLabel')">
      <a-space wrap :size="[10, 10]">
        <a-tag
          v-for="keywordKey in keywordKeys"
          :key="keywordKey"
          class="research-keyword"
          color="arcoblue"
          bordered
        >
          {{ t(`research.keywords.${keywordKey}`) }}
        </a-tag>
      </a-space>
    </section>

    <section :aria-label="t('research.directionsLabel')">
      <a-row :gutter="[24, 24]">
        <a-col
          v-for="direction in directions"
          :key="direction.key"
          :xs="24"
          :sm="24"
          :md="12"
          :xl="8"
        >
          <a-card class="research-card" :bordered="false" hoverable>
            <template #title>
              <h2>{{ t(`research.directions.${direction.key}.title`) }}</h2>
            </template>

            <p class="research-card-description">
              {{ t(`research.directions.${direction.key}.description`) }}
            </p>

            <div class="research-card-tags">
              <a-tag v-for="tagKey in direction.tags" :key="tagKey" size="small">
                {{ t(`research.keywords.${tagKey}`) }}
              </a-tag>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </section>
  </main>
</template>
