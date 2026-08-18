<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  researchAgents,
  type ResearchDirectionKey,
} from '../data/agents'

const { t } = useI18n()

const keywordKeys = [
  'requirementsEngineering',
  'knowledgeEngineering',
  'formalMethods',
  'artificialIntelligence',
  'ontology',
  'agent',
] as const

const directions: readonly {
  key: ResearchDirectionKey
  tags: readonly (typeof keywordKeys)[number][]
}[] = [
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
    key: 'domainOntology',
    tags: ['ontology', 'knowledgeEngineering', 'artificialIntelligence'],
  },
]
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
      <a-row class="equal-height-card-grid" :gutter="[24, 24]">
        <a-col
          v-for="direction in directions"
          :key="direction.key"
          :span="24"
        >
          <a-card class="research-card equal-height-card" :bordered="false" hoverable>
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

            <section
              v-if="researchAgents[direction.key].length"
              class="research-agents"
              :aria-label="t('research.representativeAgents')"
            >
              <h3>{{ t('research.representativeAgents') }}</h3>

              <a-row class="research-agent-grid equal-height-card-grid" :gutter="[16, 16]">
                <a-col
                  v-for="agent in researchAgents[direction.key]"
                  :key="agent.id"
                  :xs="24"
                  :sm="24"
                  :md="12"
                  :xl="8"
                >
                  <a-card
                    class="research-agent-card equal-height-card"
                    :bordered="false"
                    hoverable
                  >
                    <h4>{{ t(`research.agents.${agent.localeKey}.title`) }}</h4>

                    <p class="research-agent-description">
                      {{ t(`research.agents.${agent.localeKey}.description`) }}
                    </p>

                    <div class="research-agent-tags">
                      <a-tag v-for="tagKey in agent.tagKeys" :key="tagKey" size="small">
                        {{ t(`research.agentTags.${tagKey}`) }}
                      </a-tag>
                    </div>

                    <div
                      v-if="agent.links.length"
                      class="tool-card-actions research-agent-actions"
                    >
                      <template v-for="link in agent.links" :key="`${agent.id}-${link.kind}`">
                        <a-button
                          v-if="link.destination === 'external'"
                          type="primary"
                          :href="link.href"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {{ t(`research.agentActions.${link.kind}`) }}
                        </a-button>

                        <RouterLink v-else :to="link.to" custom v-slot="{ navigate }">
                          <a-button type="primary" @click="navigate">
                            {{ t(`research.agentActions.${link.kind}`) }}
                          </a-button>
                        </RouterLink>
                      </template>
                    </div>
                  </a-card>
                </a-col>
              </a-row>
            </section>
          </a-card>
        </a-col>
      </a-row>
    </section>
  </main>
</template>
