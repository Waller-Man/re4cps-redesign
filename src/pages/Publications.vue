<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  publicationGroupOrder,
  publications,
  type PublicationGroup,
} from '../data/publications'

const { t } = useI18n()

const publicationGroups = publicationGroupOrder.map((key: PublicationGroup) => ({
  key,
  items: publications.filter((publication) => publication.group === key),
}))
</script>

<template>
  <main class="publications-page">
    <header class="publications-heading">
      <h1>{{ t('publications.title') }}</h1>
      <p class="publications-subtitle">{{ t('publications.subtitle') }}</p>
      <p class="publications-description">{{ t('publications.description') }}</p>
    </header>

    <div class="publication-groups">
      <section
        v-for="group in publicationGroups"
        :key="group.key"
        :aria-labelledby="`publication-group-${group.key}`"
      >
        <a-card class="publication-group-card" :bordered="false">
          <div class="publication-group-heading">
            <h2 :id="`publication-group-${group.key}`">
              {{ t(`publications.groups.${group.key}`) }}
            </h2>
            <span>{{ t('publications.paperCount', { count: group.items.length }) }}</span>
          </div>

          <a-list class="publication-list" :bordered="false">
            <a-list-item v-for="publication in group.items" :key="publication.id">
              <article class="publication-entry">
                <div class="publication-entry-heading">
                  <h3>{{ publication.title }}</h3>
                  <div class="publication-types">
                    <a-tag
                      v-for="type in publication.types"
                      :key="type"
                      size="small"
                      :color="type === 'accepted' ? 'green' : 'arcoblue'"
                    >
                      {{ t(`publications.types.${type}`) }}
                    </a-tag>
                  </div>
                </div>

                <p class="publication-authors">{{ publication.authors }}</p>

                <div class="publication-meta">
                  <span class="publication-year">{{ publication.year }}</span>
                  <span class="publication-venue">{{ publication.venue }}</span>
                </div>

                <div v-if="publication.links?.length" class="publication-links">
                  <a-button
                    v-for="link in publication.links"
                    :key="`${publication.id}-${link.kind}`"
                    type="outline"
                    size="small"
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ t(`publications.links.${link.kind}`) }}
                  </a-button>
                </div>
              </article>
            </a-list-item>
          </a-list>
        </a-card>
      </section>
    </div>
  </main>
</template>
