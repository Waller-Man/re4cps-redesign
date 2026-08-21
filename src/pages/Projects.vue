<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { industryProjects, researchProjects } from '../data/projects'

const { t } = useI18n()
</script>

<template>
  <main class="projects-page">
    <header class="projects-heading">
      <h1>{{ t('projects.title') }}</h1>
      <p>{{ t('projects.description') }}</p>
    </header>

    <div class="project-groups">
      <section class="project-group" aria-labelledby="research-projects-heading">
        <header class="project-group-heading">
          <h2 id="research-projects-heading">
            {{ t('projects.sections.research') }}
          </h2>
          <p>{{ t('projects.sections.researchDescription') }}</p>
        </header>

        <div class="project-research-grid equal-height-card-grid">
          <article
            v-for="project in researchProjects"
            :key="project.id"
            class="project-grid-item"
            :class="{
              'project-grid-item-compact': project.compact,
              'project-grid-item-placeholder': project.placeholder,
            }"
          >
            <a-card
              class="project-card project-card-research"
              :class="{
                'equal-height-card': !project.placeholder,
                'project-card-compact': project.compact,
                'project-card-placeholder': project.placeholder,
              }"
              :bordered="false"
              hoverable
            >
              <div v-if="project.placeholder" class="project-placeholder-content">
                <img
                  v-if="project.logo && project.organizationKey"
                  class="project-organization-logo"
                  :src="project.logo"
                  :alt="t(`projects.organizations.${project.organizationKey}`)"
                />
                <h3>{{ t(`projects.items.${project.localeKey}.title`) }}</h3>
                <p>{{ t(`projects.items.${project.localeKey}.summary`) }}</p>
              </div>

              <template v-else>
                <div class="project-card-header">
                <a-tag color="arcoblue" size="small">
                  {{ t(`projects.items.${project.localeKey}.category`) }}
                </a-tag>
                <img
                  v-if="project.logo && project.organizationKey"
                  class="project-organization-logo"
                  :src="project.logo"
                  :alt="t(`projects.organizations.${project.organizationKey}`)"
                />
                </div>

                <h3>{{ t(`projects.items.${project.localeKey}.title`) }}</h3>
                <p class="project-summary">
                  {{ t(`projects.items.${project.localeKey}.summary`) }}
                </p>

                <dl
                  v-if="
                    project.projectNumber ||
                    (project.startYear && project.endYear) ||
                    project.statusKey
                  "
                  class="project-meta"
                >
                  <div v-if="project.projectNumber">
                    <dt>{{ t('projects.labels.projectNumber') }}</dt>
                    <dd>{{ project.projectNumber }}</dd>
                  </div>
                  <div v-if="project.startYear && project.endYear">
                    <dt>{{ t('projects.labels.period') }}</dt>
                    <dd>{{ project.startYear }}—{{ project.endYear }}</dd>
                  </div>
                  <div v-if="project.statusKey">
                    <dt>{{ t('projects.labels.status') }}</dt>
                    <dd>{{ t(`projects.statuses.${project.statusKey}`) }}</dd>
                  </div>
                </dl>

                <div class="project-card-tags">
                  <a-tag v-for="tagKey in project.tagKeys" :key="tagKey" size="small">
                    {{ t(`projects.tags.${tagKey}`) }}
                  </a-tag>
                </div>
              </template>
            </a-card>
          </article>
        </div>
      </section>

      <section
        class="project-group project-group-industry"
        aria-labelledby="industry-projects-heading"
      >
        <header class="project-group-heading">
          <h2 id="industry-projects-heading">
            {{ t('projects.sections.industry') }}
          </h2>
          <p>{{ t('projects.sections.industryDescription') }}</p>
        </header>

        <div class="project-industry-grid equal-height-card-grid">
          <a-card
            v-for="project in industryProjects"
            :key="project.id"
            class="project-card project-card-industry equal-height-card"
            :bordered="false"
            hoverable
          >
            <div class="project-industry-brand">
              <div class="project-industry-logo">
                <img
                  v-if="project.logo && project.organizationKey"
                  :src="project.logo"
                  :alt="t(`projects.organizations.${project.organizationKey}`)"
                />
              </div>
              <span>{{ t(`projects.items.${project.localeKey}.brand`) }}</span>
              <a-tag size="small">
                {{ t(`projects.items.${project.localeKey}.category`) }}
              </a-tag>
            </div>

            <h3>{{ t(`projects.items.${project.localeKey}.title`) }}</h3>
            <p class="project-summary">
              {{ t(`projects.items.${project.localeKey}.summary`) }}
            </p>

            <div class="project-card-tags">
              <a-tag v-for="tagKey in project.tagKeys" :key="tagKey" size="small">
                {{ t(`projects.tags.${tagKey}`) }}
              </a-tag>
            </div>
          </a-card>
        </div>
      </section>
    </div>
  </main>
</template>
