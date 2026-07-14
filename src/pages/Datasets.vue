<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  datasetGroupOrder,
  datasets,
  type DatasetGroup,
  type DatasetStatus,
} from '../data/datasets'

const { t } = useI18n()

const datasetGroups = datasetGroupOrder.map((key: DatasetGroup) => ({
  key,
  items: datasets.filter((dataset) => dataset.group === key),
}))

function statusColor(status: DatasetStatus) {
  if (status === 'available') return 'green'
  if (status === 'comingSoon') return 'orange'
  return 'gray'
}
</script>

<template>
  <main class="datasets-page">
    <header class="datasets-heading">
      <h1>{{ t('datasets.title') }}</h1>
      <p class="datasets-subtitle">{{ t('datasets.subtitle') }}</p>
      <p class="datasets-description">{{ t('datasets.description') }}</p>
    </header>

    <div class="resource-sections">
      <section
        v-for="group in datasetGroups"
        :key="group.key"
        :aria-labelledby="`dataset-group-${group.key}`"
      >
        <div class="resource-section-heading">
          <h2 :id="`dataset-group-${group.key}`">
            {{ t(`datasets.groups.${group.key}`) }}
          </h2>
        </div>

        <a-row class="equal-height-card-grid" :gutter="[24, 24]">
          <a-col
            v-for="dataset in group.items"
            :key="dataset.id"
            :xs="24"
            :md="12"
            :xl="8"
          >
            <a-card class="resource-card equal-height-card" :bordered="false" hoverable>
              <h3>{{ t(`datasets.items.${dataset.localeKey}.title`) }}</h3>

              <div class="resource-tags">
                <a-tag color="arcoblue" size="small">
                  {{ t('datasets.types.dataset') }}
                </a-tag>
                <a-tag :color="statusColor(dataset.statusKey)" size="small">
                  {{ t(`datasets.statuses.${dataset.statusKey}`) }}
                </a-tag>
              </div>

              <p class="resource-description">
                {{ t(`datasets.items.${dataset.localeKey}.description`) }}
              </p>

              <a-button
                type="primary"
                :disabled="!dataset.href"
                :href="dataset.href"
                :target="dataset.href ? '_blank' : undefined"
                :rel="dataset.href ? 'noopener noreferrer' : undefined"
              >
                {{
                  dataset.href
                    ? t('datasets.actions.open')
                    : t('datasets.actions.comingSoon')
                }}
              </a-button>
            </a-card>
          </a-col>
        </a-row>
      </section>
    </div>
  </main>
</template>
