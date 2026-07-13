<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { toolCategories } from '../data/tools'

const { t } = useI18n()
</script>

<template>
  <main class="tools-page">
    <header class="tools-heading">
      <h1>{{ t('tools.title') }}</h1>
      <p class="tools-subtitle">{{ t('tools.subtitle') }}</p>
      <p class="tools-description">{{ t('tools.description') }}</p>
    </header>

    <div class="tool-sections">
      <section
        v-for="category in toolCategories"
        :key="category.id"
        class="tool-section"
        :aria-labelledby="`tool-category-${category.id}`"
      >
        <header class="tool-section-heading">
          <h2 :id="`tool-category-${category.id}`">
            {{ t(`tools.categories.${category.titleLocaleKey}.title`) }}
          </h2>
          <p>{{ t(`tools.categories.${category.descriptionLocaleKey}.description`) }}</p>
        </header>

        <a-row :gutter="[24, 24]">
          <a-col v-for="tool in category.tools" :key="tool.id" :xs="24" :md="12">
            <a-card class="tool-card" :bordered="false" hoverable>
              <div class="tool-direction-label">
                {{ t(`tools.categories.${category.titleLocaleKey}.title`) }}
              </div>

              <h3>{{ t(`tools.items.${tool.titleLocaleKey}.title`) }}</h3>

              <p class="tool-card-description">
                {{ t(`tools.items.${tool.descriptionLocaleKey}.description`) }}
              </p>

              <div class="tool-card-tags">
                <a-tag v-for="tagKey in tool.tags" :key="tagKey" size="small">
                  {{ t(`tools.tags.${tagKey}`) }}
                </a-tag>
              </div>

              <div class="tool-card-actions">
                <a-button
                  v-for="link in tool.links"
                  :key="link.id"
                  type="primary"
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{
                    link.labelLocaleKey
                      ? t(`tools.linkLabels.${link.labelLocaleKey}`)
                      : t('tools.actions.useOnline')
                  }}
                </a-button>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </section>
    </div>
  </main>
</template>
