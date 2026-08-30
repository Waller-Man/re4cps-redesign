<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import campusImage from '../assets/home-assets/campus.png'
import { conferenceHighlights } from '../data/home'
import { researchDirections } from '../data/research'

const { t } = useI18n()

const scrollToResearch = () => {
  document
    .getElementById('research')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main class="home-page">
    <section class="home-hero" aria-labelledby="hero-title">
      <div class="home-hero-content">
        <h1 id="hero-title">{{ t('home.title') }}</h1>
        <h2>{{ t('home.subtitle') }}</h2>
        <p>{{ t('home.description') }}</p>

        <div class="home-hero-actions">
          <a-button type="primary" size="large" @click="scrollToResearch">
            {{ t('home.actions.exploreResearch') }}
          </a-button>
          <RouterLink to="/publications" custom v-slot="{ navigate }">
            <a-button size="large" @click="navigate">
              {{ t('home.actions.viewPublications') }}
            </a-button>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="home-section home-conferences" aria-labelledby="conference-heading">
      <header class="home-section-heading">
        <span>{{ t('home.conferences.eyebrow') }}</span>
        <h2 id="conference-heading">{{ t('home.conferences.title') }}</h2>
      </header>

      <div class="conference-grid equal-height-card-grid">
        <article
          v-for="conference in conferenceHighlights"
          :key="conference.id"
          class="conference-card equal-height-card"
        >
          <img
            :src="conference.image"
            :alt="t(`home.conferences.items.${conference.localeKey}.title`)"
          />
          <div class="conference-card-content">
            <h3>{{ t(`home.conferences.items.${conference.localeKey}.title`) }}</h3>
            <p>{{ t(`home.conferences.items.${conference.localeKey}.description`) }}</p>
          </div>
        </article>
      </div>
    </section>

    <section
      id="research"
      class="home-section home-research"
      aria-labelledby="home-research-heading"
    >
      <img
        class="home-research-campus"
        :src="campusImage"
        alt=""
        aria-hidden="true"
      />

      <header class="home-section-heading">
        <span>{{ t('home.research.eyebrow') }}</span>
        <h2 id="home-research-heading">{{ t('research.title') }}</h2>
        <p>{{ t('research.subtitle') }}</p>
      </header>

      <div class="home-research-grid equal-height-card-grid">
        <a-card
          v-for="(direction, index) in researchDirections"
          :key="direction.key"
          class="home-research-card equal-height-card"
          :bordered="false"
          hoverable
        >
          <span class="home-research-number">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <div class="home-research-card-layout">
            <div class="home-research-visual">
              <img
                :src="direction.image"
                :alt="t(`research.directions.${direction.key}.title`)"
              />
            </div>

            <div class="home-research-card-content">
              <h3>{{ t(`research.directions.${direction.key}.title`) }}</h3>
              <p>{{ t(`research.directions.${direction.key}.description`) }}</p>
              <div class="home-research-tags">
                <a-tag
                  v-for="tagKey in direction.tags.slice(0, 3)"
                  :key="tagKey"
                  size="small"
                >
                  {{ t(`research.keywords.${tagKey}`) }}
                </a-tag>
              </div>
            </div>
          </div>
        </a-card>
      </div>
    </section>

    <footer class="home-footer">
      <strong>RE4CPS</strong>
      <span>{{ t('home.subtitle') }}</span>
    </footer>
  </main>
</template>
