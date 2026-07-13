<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

type SupportedLocale = 'zh-CN' | 'en-US'

interface NavigationItem {
  key: string
  label: string
  to?: string
  href?: string
}

const { locale, t } = useI18n()

const navigation = computed<NavigationItem[]>(() => [
  { key: 'home', label: t('nav.home'), to: '/' },
  { key: 'research', label: t('nav.research'), to: '/research' },
  { key: 'publications', label: t('nav.publications'), to: '/publications' },
  { key: 'agents', label: t('nav.agents'), to: '/agents' },
  { key: 'tools', label: t('nav.tools'), to: '/tools' },
  { key: 'members', label: t('nav.members'), to: '/members' },
  { key: 'reResources', label: t('nav.reResources'), to: '/re-resources' },
  { key: 'datasets', label: t('nav.datasets'), to: '/datasets' },
  {
    key: 'github',
    label: t('nav.github'),
    href: 'https://github.com/Waller-Man/re4cps-redesign',
  },
])

function setLocale(nextLocale: SupportedLocale) {
  locale.value = nextLocale
  document.documentElement.lang = nextLocale
}
</script>

<template>
  <a-layout class="main-layout">
    <a-layout-header class="site-header">
      <div class="header-inner">
        <RouterLink class="brand" to="/" aria-label="RE4CPS Home">
          RE4CPS
        </RouterLink>

        <nav class="site-navigation" :aria-label="t('nav.primary')">
          <template v-for="item in navigation" :key="item.key">
            <RouterLink v-if="item.to" class="nav-link" :to="item.to">
              {{ item.label }}
            </RouterLink>
            <a
              v-else-if="item.href"
              class="nav-link"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.label }}
            </a>
          </template>
        </nav>

        <div class="language-switcher" :aria-label="t('language.label')">
          <a-button
            size="mini"
            :type="locale === 'zh-CN' ? 'primary' : 'text'"
            :aria-pressed="locale === 'zh-CN'"
            @click="setLocale('zh-CN')"
          >
            中文
          </a-button>
          <span class="language-divider" aria-hidden="true">/</span>
          <a-button
            size="mini"
            :type="locale === 'en-US' ? 'primary' : 'text'"
            :aria-pressed="locale === 'en-US'"
            @click="setLocale('en-US')"
          >
            English
          </a-button>
        </div>
      </div>
    </a-layout-header>

    <a-layout-content class="site-content">
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>
