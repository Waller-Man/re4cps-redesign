<script setup lang="ts">
import { computed } from 'vue'
import { IconArrowLeft } from '@arco-design/web-vue/es/icon'
import { useI18n } from 'vue-i18n'
import AgentCapabilitySection from '../components/agents/AgentCapabilitySection.vue'
import { agentCategories } from '../data/agents'

const props = defineProps<{
  directionId: string
}>()

const { t } = useI18n()
const category = computed(() =>
  agentCategories.find((item) => item.id === props.directionId),
)

const scrollToCapability = (capabilityId: string) => {
  document
    .getElementById(`agent-capability-${capabilityId}`)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main v-if="category" class="agents-page agent-direction-page">
    <RouterLink to="/agents" class="agent-direction-back">
      <IconArrowLeft />
      {{ t('agents.backToOverview') }}
    </RouterLink>

    <header class="agents-heading agent-direction-heading">
      <h1>{{ t(`agents.categories.${category.localeKey}.title`) }}</h1>
      <p>{{ t(`agents.categories.${category.localeKey}.description`) }}</p>
    </header>

    <nav
      v-if="category.children?.length"
      class="agent-capability-navigation"
      :aria-label="t('agents.capabilityNavigation')"
    >
      <span>{{ t('agents.capabilityNavigation') }}</span>
      <div>
        <button
          v-for="capability in category.children"
          :key="capability.id"
          type="button"
          @click="scrollToCapability(capability.id)"
        >
          {{ t(`agents.nodes.${capability.localeKey}`) }}
        </button>
      </div>
    </nav>

    <div class="agent-capability-sections">
      <AgentCapabilitySection
        v-for="(capability, index) in category.children"
        :key="capability.id"
        :node="capability"
        :depth="1"
        :section-number="index + 1"
      />
    </div>
  </main>
</template>
