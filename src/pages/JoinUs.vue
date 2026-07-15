<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { joinUsGroups, type JoinUsGroupDefinition } from '../data/joinUs'
import { members } from '../data/members'

const { t, tm } = useI18n()

const membersById = new Map(members.map((member) => [member.id, member]))

function getLeader(memberId: string) {
  return membersById.get(memberId)
}

function getTranslatedList(key: string) {
  const value = tm(key)
  return Array.isArray(value) ? (value as string[]) : []
}

function getApplicationHref(group: JoinUsGroupDefinition) {
  if (!group.applicationEmail) return undefined

  const subject = t(`joinUs.groups.${group.localeKey}.application.subject`)
  return `mailto:${group.applicationEmail}?subject=${encodeURIComponent(subject)}`
}
</script>

<template>
  <main class="join-us-page">
    <header class="join-us-heading">
      <h1>{{ t('joinUs.title') }}</h1>
      <p>{{ t('joinUs.introduction') }}</p>
    </header>

    <div class="join-us-groups">
      <section
        v-for="group in joinUsGroups"
        :key="group.id"
        class="join-us-group"
        :aria-labelledby="`join-us-group-${group.id}`"
      >
        <a-card class="join-us-group-card" :bordered="false">
          <header class="join-us-profile">
            <a-avatar :size="112" class="join-us-avatar">
              <img
                v-if="getLeader(group.leaderMemberId)"
                :src="getLeader(group.leaderMemberId)?.photo"
                :alt="t(`joinUs.groups.${group.localeKey}.leaderName`)"
              />
            </a-avatar>

            <div class="join-us-profile-copy">
              <h2 :id="`join-us-group-${group.id}`">
                {{ t(`joinUs.groups.${group.localeKey}.title`) }}
              </h2>
              <p class="join-us-affiliation">
                {{ t(`joinUs.groups.${group.localeKey}.leaderAffiliation`) }}
              </p>
              <p class="join-us-group-introduction">
                {{ t(`joinUs.groups.${group.localeKey}.introduction`) }}
              </p>
            </div>
          </header>

          <p class="join-us-leader-bio">
            {{ t(`joinUs.groups.${group.localeKey}.leaderBio`) }}
          </p>

          <section class="join-us-content-section">
            <h3>{{ t('joinUs.labels.researchDirections') }}</h3>

            <div v-if="group.kind === 'whu'" class="join-us-tag-list">
              <a-tag
                v-for="directionKey in group.directionKeys"
                :key="directionKey"
                color="arcoblue"
              >
                {{ t(`joinUs.groups.${group.localeKey}.directions.${directionKey}`) }}
              </a-tag>
            </div>

            <div v-else class="join-us-detail-grid">
              <article
                v-for="directionKey in group.directionKeys"
                :key="directionKey"
                class="join-us-detail-card"
              >
                <h4>
                  {{ t(`joinUs.groups.${group.localeKey}.directions.${directionKey}.title`) }}
                </h4>
                <p>
                  {{
                    t(
                      `joinUs.groups.${group.localeKey}.directions.${directionKey}.description`,
                    )
                  }}
                </p>
              </article>
            </div>
          </section>

          <template v-if="group.kind === 'whu'">
            <section class="join-us-content-section">
              <h3>{{ t('joinUs.labels.groupAdvantages') }}</h3>
              <div class="join-us-detail-grid">
                <article
                  v-for="advantageKey in group.advantageGroupKeys"
                  :key="advantageKey"
                  class="join-us-detail-card"
                >
                  <h4>
                    {{ t(`joinUs.groups.${group.localeKey}.advantages.${advantageKey}.title`) }}
                  </h4>
                  <ul>
                    <li
                      v-for="item in getTranslatedList(
                        `joinUs.groups.${group.localeKey}.advantages.${advantageKey}.items`,
                      )"
                      :key="item"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </article>
              </div>
            </section>

            <section class="join-us-content-section">
              <h3>{{ t('joinUs.labels.admissionRequirements') }}</h3>
              <ul class="join-us-check-list">
                <li v-for="requirementKey in group.requirementKeys" :key="requirementKey">
                  {{
                    t(
                      `joinUs.groups.${group.localeKey}.admissionRequirements.${requirementKey}`,
                    )
                  }}
                </li>
              </ul>
            </section>

            <aside class="join-us-cta">
              <div>
                <h3>{{ t(`joinUs.groups.${group.localeKey}.application.title`) }}</h3>
                <p>
                  {{
                    t(`joinUs.groups.${group.localeKey}.application.description`, {
                      email: group.applicationEmail,
                    })
                  }}
                </p>
                <p class="join-us-cta-note">
                  {{ t(`joinUs.groups.${group.localeKey}.application.subjectLabel`) }}:
                  <strong>{{ t(`joinUs.groups.${group.localeKey}.application.subject`) }}</strong>
                </p>
              </div>
              <a-button
                type="primary"
                size="large"
                :href="getApplicationHref(group)"
              >
                {{ t('joinUs.actions.sendEmail') }}
              </a-button>
            </aside>
          </template>

          <template v-else>
            <section class="join-us-content-section">
              <h3>{{ t('joinUs.labels.applicationScenarios') }}</h3>
              <div class="join-us-tag-list">
                <a-tag
                  v-for="scenarioKey in group.applicationScenarioKeys"
                  :key="scenarioKey"
                  color="arcoblue"
                >
                  {{ t(`joinUs.groups.${group.localeKey}.applicationScenarios.${scenarioKey}`) }}
                </a-tag>
              </div>
            </section>

            <section class="join-us-content-section join-us-welcome">
              <h3>{{ t('joinUs.labels.welcomeStudents') }}</h3>
              <p>{{ t(`joinUs.groups.${group.localeKey}.welcomeStudents`) }}</p>
            </section>

            <section class="join-us-postdoc">
              <div class="join-us-postdoc-heading">
                <span>{{ t(`joinUs.groups.${group.localeKey}.postdoc.subtitle`) }}</span>
                <h3>{{ t(`joinUs.groups.${group.localeKey}.postdoc.title`) }}</h3>
                <p>{{ t(`joinUs.groups.${group.localeKey}.postdoc.focus`) }}</p>
              </div>

              <div class="join-us-postdoc-grid">
                <article>
                  <h4>{{ t('joinUs.labels.responsibilities') }}</h4>
                  <ul>
                    <li v-for="itemKey in group.postdocResponsibilityKeys" :key="itemKey">
                      {{
                        t(`joinUs.groups.${group.localeKey}.postdoc.responsibilities.${itemKey}`)
                      }}
                    </li>
                  </ul>
                </article>
                <article>
                  <h4>{{ t('joinUs.labels.requirements') }}</h4>
                  <ul>
                    <li v-for="itemKey in group.postdocRequirementKeys" :key="itemKey">
                      {{ t(`joinUs.groups.${group.localeKey}.postdoc.requirements.${itemKey}`) }}
                    </li>
                  </ul>
                </article>
              </div>

              <div class="join-us-postdoc-qualities">
                <h4>{{ t('joinUs.labels.qualities') }}</h4>
                <ul class="join-us-check-list">
                  <li v-for="itemKey in group.postdocQualityKeys" :key="itemKey">
                    {{ t(`joinUs.groups.${group.localeKey}.postdoc.qualities.${itemKey}`) }}
                  </li>
                </ul>
              </div>

              <p class="join-us-postdoc-note">
                {{ t(`joinUs.groups.${group.localeKey}.postdoc.note`) }}
              </p>
            </section>

            <section class="join-us-content-section">
              <h3>{{ t(`joinUs.groups.${group.localeKey}.training.title`) }}</h3>
              <div class="join-us-detail-grid join-us-training-grid">
                <article
                  v-for="trainingKey in group.trainingKeys"
                  :key="trainingKey"
                  class="join-us-detail-card"
                >
                  <h4>
                    {{ t(`joinUs.groups.${group.localeKey}.training.items.${trainingKey}.title`) }}
                  </h4>
                  <p>
                    {{
                      t(
                        `joinUs.groups.${group.localeKey}.training.items.${trainingKey}.description`,
                      )
                    }}
                  </p>
                </article>
              </div>
            </section>

            <div class="join-us-two-column">
              <section class="join-us-content-section">
                <h3>{{ t('joinUs.labels.studentExpectations') }}</h3>
                <ul>
                  <li v-for="itemKey in group.expectationKeys" :key="itemKey">
                    {{ t(`joinUs.groups.${group.localeKey}.expectations.${itemKey}`) }}
                  </li>
                </ul>
              </section>

              <section class="join-us-content-section">
                <h3>{{ t('joinUs.labels.whyUs') }}</h3>
                <div class="join-us-strengths">
                  <div v-for="itemKey in group.strengthKeys" :key="itemKey">
                    {{ t(`joinUs.groups.${group.localeKey}.strengths.${itemKey}`) }}
                  </div>
                </div>
              </section>
            </div>

            <aside class="join-us-cta">
              <p>{{ t(`joinUs.groups.${group.localeKey}.closing`) }}</p>
              <div
                v-if="getLeader(group.leaderMemberId)?.email"
                class="join-us-cta-contact"
              >
                <a
                  class="join-us-cta-email"
                  :href="`mailto:${getLeader(group.leaderMemberId)?.email}`"
                >
                  {{ getLeader(group.leaderMemberId)?.email }}
                </a>
                <a-button
                  type="primary"
                  size="large"
                  :href="`mailto:${getLeader(group.leaderMemberId)?.email}`"
                >
                  {{ t('joinUs.actions.contact') }}
                </a-button>
              </div>
            </aside>
          </template>
        </a-card>
      </section>
    </div>
  </main>
</template>
