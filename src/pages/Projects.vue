<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { researcherProjects } from '../data/projects'

const { t } = useI18n()
</script>

<template>
  <main class="projects-page">
    <header class="projects-heading">
      <h1>{{ t('projects.title') }}</h1>
      <p>{{ t('projects.description') }}</p>
    </header>

    <div class="project-researchers">
      <section
        v-for="researcher in researcherProjects"
        :key="researcher.researcherId"
        class="project-researcher"
        :aria-labelledby="`project-researcher-${researcher.researcherId}`"
      >
        <header class="project-researcher-heading">
          <h2 :id="`project-researcher-${researcher.researcherId}`">
            {{ t(`projects.researchers.${researcher.localeKey}.name`) }}
          </h2>
          <p>{{ t(`projects.researchers.${researcher.localeKey}.description`) }}</p>
        </header>

        <div class="project-sections">
          <section
            v-for="section in researcher.sections"
            :key="section.id"
            class="project-section"
            :aria-labelledby="`project-section-${section.id}`"
          >
            <div class="project-section-heading">
              <h3 :id="`project-section-${section.id}`">
                {{ t(`projects.sections.${section.localeKey}`) }}
              </h3>
            </div>

            <a-row class="equal-height-card-grid" :gutter="[20, 20]">
              <a-col
                v-for="project in section.projects"
                :key="project.id"
                :xs="24"
                :sm="24"
                :md="12"
                :lg="24 / section.columns"
              >
                <a-card
                  class="project-card equal-height-card"
                  :class="`project-card-${project.type}`"
                  :bordered="false"
                  hoverable
                >
                  <div class="project-card-tags">
                    <a-tag v-if="project.type === 'program'" color="arcoblue" size="small">
                      {{ t('projects.types.program') }}
                    </a-tag>
                    <a-tag
                      v-for="tagKey in project.tagKeys"
                      :key="tagKey"
                      :color="tagKey === 'ongoing' ? 'green' : undefined"
                      size="small"
                    >
                      {{ t(`projects.tags.${tagKey}`) }}
                    </a-tag>
                  </div>

                  <div v-if="project.type === 'industry'" class="project-industry-brand">
                    <img
                      v-if="project.logo"
                      :src="project.logo"
                      :alt="t(`projects.items.${project.localeKey}.brand`)"
                    />
                    <strong>{{ t(`projects.items.${project.localeKey}.brand`) }}</strong>
                  </div>

                  <h4>{{ t(`projects.items.${project.localeKey}.title`) }}</h4>

                  <p v-if="project.type === 'research'" class="project-funding-type">
                    {{ t(`projects.items.${project.localeKey}.fundingType`) }}
                  </p>

                  <p v-if="project.projectNumber" class="project-number">
                    {{ t('projects.labels.projectNumber', { number: project.projectNumber }) }}
                  </p>

                  <div class="project-card-spacer" aria-hidden="true"></div>

                  <footer
                    v-if="
                      (project.startYear && project.endYear) || project.roleKey
                    "
                    class="project-card-footer"
                  >
                    <span v-if="project.startYear && project.endYear" class="project-period">
                      {{
                        t('projects.labels.period', {
                          start: project.startYear,
                          end: project.endYear,
                        })
                      }}
                    </span>
                    <a-tag v-if="project.roleKey" size="small" class="project-role-tag">
                      {{ t(`projects.roles.${project.roleKey}`) }}
                    </a-tag>
                  </footer>
                </a-card>
              </a-col>
            </a-row>
          </section>
        </div>
      </section>
    </div>
  </main>
</template>
