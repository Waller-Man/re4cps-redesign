<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  publicationGroupOrder,
  publications,
  type Publication,
  type PublicationGroup,
  type PublicationRankTag,
} from '../data/publications'

const { t } = useI18n()

const publicationImageModules = import.meta.glob<string>(
  '../assets/publications/*.png',
  {
    eager: true,
    import: 'default',
  },
)

const publicationImages = new Map(
  Object.entries(publicationImageModules).map(([path, imageUrl]) => {
    const filename = path.split('/').pop() ?? ''
    return [filename.replace(/\.png$/i, ''), imageUrl]
  }),
)

const getPublicationImage = (publication: Publication) => {
  const imageKeys =
    publication.group === 'book'
      ? [publication.title, publication.id]
      : [publication.id]

  return imageKeys
    .map((imageKey) => publicationImages.get(imageKey))
    .find((imageUrl): imageUrl is string => Boolean(imageUrl))
}

const containsChineseCharacters = (title: string) => /[\u3400-\u9fff]/u.test(title)

const publicationGroups = publicationGroupOrder.map((key: PublicationGroup) => {
  const items = publications
    .filter((publication) => publication.group === key)
    .map((publication) => ({
      ...publication,
      image: getPublicationImage(publication),
    }))

  if (key === 'book') {
    items.sort(
      (first, second) =>
        Number(containsChineseCharacters(first.title)) -
        Number(containsChineseCharacters(second.title)),
    )
  }

  return { key, items }
})

const getPublicationTitle = (publication: Publication) =>
  publication.titleLocaleKey
    ? t(`publications.titles.${publication.titleLocaleKey}`)
    : publication.title

const publicationRankTagColors: Record<PublicationRankTag, string> = {
  ccfa: 'red',
  ccfb: 'orange',
  ccfc: 'blue',
  ccfT1: 'red',
  sciQ1: 'green',
  aclFindings: 'cyan',
  icseCompanion: 'cyan',
  reWorkshop: 'cyan',
  textbook: 'purple',
  academicMonograph: 'purple',
}
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
        class="publication-group"
        :class="{ 'publication-group--book': group.key === 'book' }"
        :aria-labelledby="`publication-group-${group.key}`"
      >
        <header class="publication-group-heading">
          <h2 :id="`publication-group-${group.key}`">
            {{ t(`publications.groups.${group.key}`) }}
          </h2>
          <span>{{ t('publications.paperCount', { count: group.items.length }) }}</span>
        </header>

        <div v-if="group.key === 'book'" class="publication-book-grid">
          <article
            v-for="publication in group.items"
            :key="publication.id"
            class="publication-book-card"
          >
            <div v-if="publication.image" class="publication-book-cover">
              <img
                :src="publication.image"
                :alt="getPublicationTitle(publication)"
                loading="lazy"
              />
            </div>

            <div class="publication-book-content">
              <h3>{{ getPublicationTitle(publication) }}</h3>
              <p class="publication-authors">{{ publication.authors }}</p>

              <div class="publication-meta">
                <span class="publication-year">{{ publication.year }}</span>
                <span class="publication-venue">{{ publication.venue }}</span>
              </div>

              <div class="publication-types publication-book-types">
                <a-tag
                  v-for="rankTag in publication.rankTags"
                  :key="rankTag"
                  size="small"
                  :color="publicationRankTagColors[rankTag]"
                >
                  {{ t(`publications.rankTags.${rankTag}`) }}
                </a-tag>
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
            </div>
          </article>
        </div>

        <div v-else class="publication-media-list">
          <article
            v-for="publication in group.items"
            :key="publication.id"
            class="publication-media-entry"
          >
            <div v-if="publication.image" class="publication-image-frame">
              <img
                :src="publication.image"
                :alt="getPublicationTitle(publication)"
                loading="lazy"
              />
            </div>

            <div class="publication-entry-content">
              <div class="publication-entry-heading">
                <h3>{{ getPublicationTitle(publication) }}</h3>
                <div class="publication-types">
                  <a-tag
                    v-for="rankTag in publication.rankTags"
                    :key="rankTag"
                    size="small"
                    :color="publicationRankTagColors[rankTag]"
                  >
                    {{ t(`publications.rankTags.${rankTag}`) }}
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
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>
