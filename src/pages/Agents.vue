<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AgentTreeNode from '../components/agents/AgentTreeNode.vue'
import { agentCategories } from '../data/agents'
import {
  findFirstAgentPath,
  sortNodesByAgentAvailability,
} from '../utils/agentTree'

const { t } = useI18n()
const sortedAgentCategories = sortNodesByAgentAvailability(agentCategories)
const defaultExpandedKeys = new Set(findFirstAgentPath(agentCategories))
</script>

<template>
  <main class="agents-page">
    <header class="agents-heading">
      <h1>{{ t('agents.title') }}</h1>
      <p>{{ t('agents.description') }}</p>
    </header>

    <div class="agent-tree">
      <AgentTreeNode
        v-for="category in sortedAgentCategories"
        :key="category.id"
        :node="category"
        :default-expanded-keys="defaultExpandedKeys"
        root
      />
    </div>
  </main>
</template>
