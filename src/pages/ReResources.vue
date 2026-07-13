<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  reResourceGroupOrder,
  reResources,
  reResourceTagTones,
  type ReResourceGroup,
  type ReResourceStatus,
  type ReResourceTagKey,
  type ReResourceTagTone,
} from '../data/reResources'

const { t } = useI18n()

const resourceGroups = reResourceGroupOrder.map((key: ReResourceGroup) => ({
  key,
  items: reResources.filter((resource) => resource.group === key),
}))

function statusColor(status: ReResourceStatus) {
  if (status === 'archive') return 'gray'
  return 'orange'
}

const featuredTagColors: Record<ReResourceTagTone, string> = {
  resource: 'green',
  ai: 'purple',
  engineering: 'arcoblue',
  documentation: 'orange',
}

function featuredTagColor(tagKey: ReResourceTagKey) {
  return featuredTagColors[reResourceTagTones[tagKey]]
}
</script>

<template>
  <main class="re-resources-page">
    <header class="re-resources-heading">
      <h1>{{ t('reResources.title') }}</h1>
      <p class="re-resources-subtitle">{{ t('reResources.subtitle') }}</p>
      <p class="re-resources-description">{{ t('reResources.description') }}</p>
    </header>

    <div class="resource-sections">
      <section
        v-for="group in resourceGroups"
        :key="group.key"
        :aria-labelledby="`resource-group-${group.key}`"
      >
        <div class="resource-section-heading">
          <h2 :id="`resource-group-${group.key}`">
            {{ t(`reResources.groups.${group.key}`) }}
          </h2>
        </div>

        <a-row class="equal-height-card-grid" :gutter="[24, 24]">
          <a-col
            v-for="resource in group.items"
            :key="resource.id"
            :xs="24"
            :md="12"
            :xl="8"
          >
            <a-card
              v-if="resource.kind === 'featured'"
              class="resource-card equal-height-card"
              :bordered="false"
              hoverable
            >
              <h3>{{ t(`reResources.featuredItems.${resource.localeKey}.title`) }}</h3>

              <div class="resource-tags">
                <a-tag
                  v-for="tagKey in resource.tagKeys"
                  :key="tagKey"
                  :color="featuredTagColor(tagKey)"
                  size="small"
                >
                  {{ t(`reResources.tags.${tagKey}`) }}
                </a-tag>
              </div>

              <p class="resource-description">
                {{ t(`reResources.featuredItems.${resource.localeKey}.description`) }}
              </p>

              <template
                v-for="link in resource.links"
                :key="`${link.kind}-${resource.id}`"
              >
                <a-button
                  v-if="link.destination === 'external'"
                  type="primary"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ t(`reResources.actions.${link.kind}`) }}
                </a-button>

                <RouterLink v-else :to="link.to" custom v-slot="{ navigate }">
                  <a-button type="primary" @click="navigate">
                    {{ t(`reResources.actions.${link.kind}`) }}
                  </a-button>
                </RouterLink>
              </template>
            </a-card>

            <a-card
              v-else
              class="resource-card equal-height-card"
              :bordered="false"
              hoverable
            >
              <h3>{{ t(`reResources.items.${resource.localeKey}.title`) }}</h3>

              <div class="resource-tags">
                <a-tag color="arcoblue" size="small">
                  {{ t(`reResources.types.${resource.typeKey}`) }}
                </a-tag>
                <a-tag :color="statusColor(resource.statusKey)" size="small">
                  {{ t(`reResources.statuses.${resource.statusKey}`) }}
                </a-tag>
              </div>

              <p class="resource-description">
                {{ t(`reResources.items.${resource.localeKey}.description`) }}
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
                    ? t('reResources.actions.open')
                    : t('reResources.actions.comingSoon')
                }}
              </a-button>
            </a-card>
          </a-col>
        </a-row>
      </section>
    </div>
  </main>
</template>
