<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  resourceGroupOrder,
  resources,
  type ResourceGroup,
  type ResourceStatus,
} from '../data/resources'

const { t } = useI18n()

const resourceGroups = resourceGroupOrder.map((key: ResourceGroup) => ({
  key,
  items: resources.filter((resource) => resource.group === key),
}))

function statusColor(status: ResourceStatus) {
  if (status === 'archive') return 'gray'
  if (status === 'mockData') return 'purple'
  return 'orange'
}
</script>

<template>
  <main class="documentation-page">
    <header class="documentation-heading">
      <h1>{{ t('documentation.title') }}</h1>
      <p class="documentation-subtitle">{{ t('documentation.subtitle') }}</p>
      <p class="documentation-description">{{ t('documentation.description') }}</p>
    </header>

    <div class="resource-sections">
      <section
        v-for="group in resourceGroups"
        :key="group.key"
        :aria-labelledby="`resource-group-${group.key}`"
      >
        <div class="resource-section-heading">
          <h2 :id="`resource-group-${group.key}`">
            {{ t(`documentation.groups.${group.key}`) }}
          </h2>
        </div>

        <a-row :gutter="[24, 24]">
          <a-col
            v-for="resource in group.items"
            :key="resource.id"
            :xs="24"
            :md="12"
            :xl="8"
          >
            <a-card class="resource-card" :bordered="false" hoverable>
              <h3>{{ t(`documentation.items.${resource.localeKey}.title`) }}</h3>

              <div class="resource-tags">
                <a-tag color="arcoblue" size="small">
                  {{ t(`documentation.types.${resource.typeKey}`) }}
                </a-tag>
                <a-tag :color="statusColor(resource.statusKey)" size="small">
                  {{ t(`documentation.statuses.${resource.statusKey}`) }}
                </a-tag>
              </div>

              <p class="resource-description">
                {{ t(`documentation.items.${resource.localeKey}.description`) }}
              </p>

              <a-button
                type="primary"
                :disabled="!resource.href"
                :href="resource.href"
                :target="resource.href ? '_blank' : undefined"
                :rel="resource.href ? 'noopener noreferrer' : undefined"
              >
                {{
                  resource.href
                    ? t('documentation.actions.open')
                    : t('documentation.actions.comingSoon')
                }}
              </a-button>
            </a-card>
          </a-col>
        </a-row>
      </section>
    </div>
  </main>
</template>
