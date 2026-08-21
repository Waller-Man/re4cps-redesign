<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { AgentNode } from '../../data/agents'

defineOptions({ name: 'AgentCapabilitySection' })

const props = withDefaults(
  defineProps<{
    node: AgentNode
    depth?: number
    sectionNumber?: number
  }>(),
  {
    depth: 1,
  },
)

const { t } = useI18n()
const headingTag = computed(() => `h${Math.min(props.depth + 1, 6)}`)
const displayNumber = computed(() =>
  props.sectionNumber ? String(props.sectionNumber).padStart(2, '0') : '',
)
</script>

<template>
  <section
    class="agent-capability-section"
    :class="{
      'agent-capability-branch': node.children?.length,
      'agent-capability-leaf': !node.children?.length,
    }"
    :data-depth="depth"
    :id="depth === 1 ? `agent-capability-${node.id}` : undefined"
  >
    <header class="agent-capability-heading">
      <span v-if="depth === 1" class="agent-capability-number">
        {{ displayNumber }}
      </span>
      <component :is="headingTag">
        {{ t(`agents.nodes.${node.localeKey}`) }}
      </component>
      <p>{{ t(`agents.nodeDescriptions.${node.localeKey}`) }}</p>
    </header>

    <div v-if="node.agents?.length" class="agent-capability-results">
      <div class="agent-result-grid equal-height-card-grid">
        <a-card
          v-for="agent in node.agents"
          :key="`${node.id}-${agent.id}`"
          class="tool-card agent-card agent-result-card equal-height-card"
          :bordered="false"
          hoverable
        >
          <h4>{{ t(`agents.items.${agent.localeKey}.title`) }}</h4>

          <p class="tool-card-description">
            {{ t(`agents.items.${agent.localeKey}.description`) }}
          </p>

          <div class="tool-card-tags">
            <a-tag v-for="tagKey in agent.tagKeys" :key="tagKey" size="small">
              {{ t(`agents.tags.${tagKey}`) }}
            </a-tag>
          </div>

          <div v-if="agent.links.length" class="tool-card-actions">
            <template
              v-for="link in agent.links"
              :key="`${node.id}-${agent.id}-${link.kind}`"
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

              <RouterLink v-else :to="link.to" custom v-slot="{ navigate }">
                <a-button type="primary" @click="navigate">
                  {{ t(`agents.actions.${link.kind}`) }}
                </a-button>
              </RouterLink>
            </template>
          </div>
        </a-card>
      </div>
    </div>

    <div v-if="node.children?.length" class="agent-capability-children">
      <AgentCapabilitySection
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :depth="depth + 1"
      />
    </div>
  </section>
</template>
