<script setup lang="ts">
import { computed } from 'vue'
import { IconRobot } from '@arco-design/web-vue/es/icon'
import { useI18n } from 'vue-i18n'
import type { AgentNode } from '../../data/agents'
import {
  isAgentBranch,
  sortNodesByAgentAvailability,
} from '../../utils/agentTree'

const props = withDefaults(
  defineProps<{
    node: AgentNode
    defaultExpandedKeys: ReadonlySet<string>
    depth?: number
    root?: boolean
    parentPath?: string
  }>(),
  {
    depth: 0,
    root: false,
    parentPath: '',
  },
)

const { t } = useI18n()

const isBranch = computed(() => isAgentBranch(props.node))
const agents = computed(() => props.node.agents ?? [])
const nodePath = computed(() =>
  props.parentPath ? `${props.parentPath}/${props.node.id}` : props.node.id,
)
const defaultActiveKeys = computed(() =>
  props.defaultExpandedKeys.has(nodePath.value) ? [nodePath.value] : [],
)
const sortedChildren = computed(() =>
  sortNodesByAgentAvailability(props.node.children ?? []),
)
const branchChildren = computed(() =>
  sortedChildren.value.filter(isAgentBranch),
)
const leafChildren = computed(() =>
  sortedChildren.value.filter((node) => !isAgentBranch(node)),
)

const getNodeTitle = (node: AgentNode) =>
  t(
    props.root
      ? `agents.categories.${node.localeKey}.title`
      : `agents.nodes.${node.localeKey}`,
  )
</script>

<template>
  <a-collapse
    v-if="isBranch"
    class="agent-tree-node agent-tree-branch"
    :class="{ 'agent-tree-root': root }"
    :default-active-key="defaultActiveKeys"
    :data-depth="depth"
  >
    <a-collapse-item :key="nodePath">
      <template #header>
        <div class="agent-tree-branch-header">
          <h2 v-if="root" :id="`agent-category-${node.id}`">
            {{ getNodeTitle(node) }}
          </h2>
          <h3 v-else>{{ getNodeTitle(node) }}</h3>
          <p v-if="root">
            {{ t(`agents.categories.${node.localeKey}.description`) }}
          </p>
        </div>
      </template>

      <div v-if="node.children?.length" class="agent-tree-children">
        <div v-if="branchChildren.length" class="agent-tree-branches">
          <AgentTreeNode
            v-for="child in branchChildren"
            :key="`${nodePath}/${child.id}`"
            :node="child"
            :default-expanded-keys="defaultExpandedKeys"
            :depth="depth + 1"
            :parent-path="nodePath"
          />
        </div>

        <div v-if="leafChildren.length" class="agent-tree-leaf-grid">
          <AgentTreeNode
            v-for="child in leafChildren"
            :key="`${nodePath}/${child.id}`"
            :node="child"
            :default-expanded-keys="defaultExpandedKeys"
            :depth="depth + 1"
            :parent-path="nodePath"
          />
        </div>
      </div>

      <a-card
        v-else
        class="agent-placeholder-card agent-category-placeholder"
        :bordered="false"
      >
        <div class="agent-placeholder-header">
          <div class="agent-placeholder-identity">
            <span class="agent-placeholder-icon" aria-hidden="true">
              <IconRobot />
            </span>
            <div class="agent-subcategory-label">
              {{ getNodeTitle(node) }}
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

  <article v-else class="agent-tree-node agent-tree-leaf equal-height-card">
    <div v-if="agents.length" class="agent-card-stack">
      <a-card
        v-for="agent in agents"
        :key="`${nodePath}-${agent.id}`"
        class="tool-card agent-card equal-height-card"
        :bordered="false"
        hoverable
      >
        <div class="agent-subcategory-label">
          {{ getNodeTitle(node) }}
        </div>

        <h4>{{ t(`agents.items.${agent.localeKey}.title`) }}</h4>

        <p class="tool-card-description">
          {{ t(`agents.items.${agent.localeKey}.description`) }}
        </p>

        <div class="tool-card-tags">
          <a-tag v-for="tagKey in agent.tagKeys" :key="tagKey" size="small">
            {{ t(`agents.tags.${tagKey}`) }}
          </a-tag>
        </div>

        <div class="tool-card-actions">
          <template
            v-for="link in agent.links"
            :key="`${nodePath}-${agent.id}-${link.kind}`"
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

    <a-card v-else class="agent-placeholder-card equal-height-card" :bordered="false">
      <div class="agent-placeholder-header">
        <div class="agent-placeholder-identity">
          <span class="agent-placeholder-icon" aria-hidden="true">
            <IconRobot />
          </span>
          <div class="agent-subcategory-label">
            {{ getNodeTitle(node) }}
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
</template>
