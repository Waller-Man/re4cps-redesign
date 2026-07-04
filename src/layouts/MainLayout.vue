<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

type SupportedLocale = 'zh-CN' | 'en-US'

const { locale, t } = useI18n()

const navigation = computed(() => [
  { key: 'home', label: t('nav.home'), to: '/' },
  { key: 'research', label: t('nav.research'), to: '/research' },
  { key: 'tools', label: t('nav.tools') },
  { key: 'publications', label: t('nav.publications') },
  { key: 'members', label: t('nav.members') },
  { key: 'documentation', label: t('nav.documentation') },
  { key: 'github', label: t('nav.github') },
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
            <span v-else class="nav-link nav-placeholder" aria-disabled="true">
              {{ item.label }}
            </span>
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
