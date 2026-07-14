<script setup lang="ts">
import { IconRobot } from '@arco-design/web-vue/es/icon'
import { useI18n } from 'vue-i18n'
import {
  agentCategories,
  type AgentSubcategoryDefinition,
} from '../data/agents'

const { t } = useI18n()

const getSortedSubcategories = (
  subcategories: readonly AgentSubcategoryDefinition[],
) =>
  subcategories
    .map((subcategory, index) => ({ subcategory, index }))
    .sort((left, right) => {
      const leftHasAgents = left.subcategory.agents.length > 0
      const rightHasAgents = right.subcategory.agents.length > 0

      if (leftHasAgents !== rightHasAgents) {
        return leftHasAgents ? -1 : 1
      }

      return left.index - right.index
    })
    .map(({ subcategory }) => subcategory)

const defaultActiveCategoryKeys = [agentCategories[0].id]
</script>

<template>
  <main class="agents-page">
    <header class="agents-heading">
      <h1>{{ t('agents.title') }}</h1>
      <p>{{ t('agents.description') }}</p>
    </header>

    <a-collapse
      class="agent-category-collapse"
      :default-active-key="defaultActiveCategoryKeys"
    >
      <a-collapse-item
        v-for="category in agentCategories"
        :key="category.id"
      >
        <template #header>
          <div class="agent-category-collapse-header">
            <h2 :id="`agent-category-${category.id}`">
              {{ t(`agents.categories.${category.localeKey}.title`) }}
            </h2>
            <p>{{ t(`agents.categories.${category.localeKey}.description`) }}</p>
          </div>
        </template>

        <a-row
          v-if="category.subcategories.length"
          class="equal-height-card-grid agent-subcategory-grid"
          :gutter="[24, 24]"
        >
          <a-col
            v-for="subcategory in getSortedSubcategories(category.subcategories)"
            :key="subcategory.id"
            :xs="24"
            :md="12"
          >
            <article class="agent-subcategory">
              <div v-if="subcategory.agents.length" class="agent-card-stack">
                <a-card
                  v-for="agent in subcategory.agents"
                  :key="`${subcategory.id}-${agent.id}`"
                  class="tool-card agent-card equal-height-card"
                  :bordered="false"
                  hoverable
                >
                  <div class="agent-subcategory-label">
                    {{ t(`agents.subcategories.${subcategory.localeKey}`) }}
                  </div>

                  <h4>{{ t(`agents.items.${agent.localeKey}.title`) }}</h4>

                  <p class="tool-card-description">
                    {{ t(`agents.items.${agent.localeKey}.description`) }}
                  </p>

                  <div class="tool-card-tags">
                    <a-tag
                      v-for="tagKey in agent.tagKeys"
                      :key="tagKey"
                      size="small"
                    >
                      {{ t(`agents.tags.${tagKey}`) }}
                    </a-tag>
                  </div>

                  <div class="tool-card-actions">
                    <template
                      v-for="link in agent.links"
                      :key="`${subcategory.id}-${agent.id}-${link.kind}`"
                    >
                      <a-button
                        v-if="link.destination === 'external'"
                        type="primary"
                        :href="link.href"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ t(`agents.actions.${link.kind}`) }}
                      </a-button>

                      <RouterLink
                        v-else
                        :to="link.to"
                        custom
                        v-slot="{ navigate }"
                      >
                        <a-button type="primary" @click="navigate">
                          {{ t(`agents.actions.${link.kind}`) }}
                        </a-button>
                      </RouterLink>
                    </template>
                  </div>
                </a-card>
              </div>

              <a-card
                v-else
                class="agent-placeholder-card equal-height-card"
                :bordered="false"
              >
                <div class="agent-placeholder-header">
                  <div class="agent-placeholder-identity">
                    <span class="agent-placeholder-icon" aria-hidden="true">
                      <IconRobot />
                    </span>
                    <div class="agent-subcategory-label">
                      {{ t(`agents.subcategories.${subcategory.localeKey}`) }}
                    </div>
                  </div>
                  <a-tag color="arcoblue" size="small">
                    {{ t('agents.planned') }}
                  </a-tag>
                </div>
                <p>{{ t('agents.placeholderDescription') }}</p>
                <div class="agent-placeholder-footer">
                  {{ t('agents.placeholderFooter') }}
                </div>
              </a-card>
            </article>
          </a-col>
        </a-row>

        <a-card v-else class="agent-placeholder-card agent-category-placeholder" :bordered="false">
          <div class="agent-placeholder-header">
            <div class="agent-placeholder-identity">
              <span class="agent-placeholder-icon" aria-hidden="true">
                <IconRobot />
              </span>
              <div class="agent-subcategory-label">
                {{ t(`agents.categories.${category.localeKey}.title`) }}
              </div>
            </div>
            <a-tag color="arcoblue" size="small">
              {{ t('agents.planned') }}
            </a-tag>
          </div>
          <p>{{ t('agents.categoryPlaceholderDescription') }}</p>
          <div class="agent-placeholder-footer">
            {{ t('agents.placeholderFooter') }}
          </div>
        </a-card>
      </a-collapse-item>
    </a-collapse>
  </main>
</template>
