<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  memberGroupOrder,
  members,
  type MemberGroup,
} from '../data/members'

const { t } = useI18n()

const memberGroups = memberGroupOrder.map((key: MemberGroup) => {
  const groupMembers = members.filter((member) => member.group === key)
  const items = groupMembers.slice()

  if (key === 'master') {
    items.sort((left, right) => {
      const yearDifference =
        (left.admissionYear ?? Number.MAX_SAFE_INTEGER) -
        (right.admissionYear ?? Number.MAX_SAFE_INTEGER)

      return yearDifference || (left.order ?? 0) - (right.order ?? 0)
    })
  } else if (key === 'alumni') {
    items.sort((left, right) => {
      const yearDifference =
        (left.graduationYear ?? Number.MAX_SAFE_INTEGER) -
        (right.graduationYear ?? Number.MAX_SAFE_INTEGER)

      return yearDifference || (left.order ?? 0) - (right.order ?? 0)
    })
  }

  return { key, items }
})
</script>

<template>
  <main class="members-page">
    <header class="members-heading">
      <h1>{{ t('members.title') }}</h1>
      <p>{{ t('members.subtitle') }}</p>
    </header>

    <div class="member-sections">
      <section
        v-for="group in memberGroups"
        :key="group.key"
        :aria-labelledby="`member-group-${group.key}`"
      >
        <div class="member-section-heading">
          <h2 :id="`member-group-${group.key}`">
            {{ t(`members.groups.${group.key}`) }}
          </h2>
        </div>

        <a-row :gutter="[24, 24]">
          <a-col
            v-for="member in group.items"
            :key="member.id"
            :xs="24"
            :sm="12"
            :lg="8"
          >
            <a-card
              class="member-card"
              :class="{
                'member-card-master': member.group === 'master',
                'member-card-alumni': member.group === 'alumni',
              }"
              :bordered="false"
              hoverable
            >
              <div class="member-card-header">
                <a-avatar :size="82" class="member-avatar">
                  <img
                    :src="member.photo"
                    :alt="t(`members.people.${member.localeKey}.name`)"
                  />
                </a-avatar>

                <div class="member-identity">
                  <h3>{{ t(`members.people.${member.localeKey}.name`) }}</h3>
                  <div class="member-tags">
                    <a-tag color="arcoblue" size="small">
                      {{ t(`members.people.${member.localeKey}.role`) }}
                    </a-tag>
                    <a-tag
                      v-if="member.group === 'alumni' && member.graduationYear"
                      color="green"
                      size="small"
                    >
                      {{
                        t('members.graduationClass', {
                          year: member.graduationYear,
                        })
                      }}
                    </a-tag>
                    <a-tag
                      v-else-if="member.group !== 'alumni' && member.admissionYear"
                      color="green"
                      size="small"
                    >
                      {{ t('members.enrollmentYear', { year: member.admissionYear }) }}
                    </a-tag>
                  </div>
                </div>
              </div>

              <p class="member-school">
                {{ t(`members.people.${member.localeKey}.school`) }}
              </p>

              <p
                v-if="
                  member.group === 'faculty' ||
                  member.group === 'phd' ||
                  member.hasBio
                "
                class="member-bio"
              >
                {{ t(`members.people.${member.localeKey}.bio`) }}
              </p>

              <div v-if="member.email || member.homepage" class="member-contact">
                <a v-if="member.email" class="member-email" :href="`mailto:${member.email}`">
                  <span>{{ t('members.email') }}</span>
                  {{ member.email }}
                </a>

                <a-button
                  v-if="member.homepage"
                  type="outline"
                  size="small"
                  :href="member.homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ t('members.homepage') }}
                </a-button>
              </div>

              <section v-if="member.careerPath?.length" class="alumni-career">
                <h4>{{ t('members.careerPath') }}</h4>
                <div class="career-path">
                  <template v-for="(step, index) in member.careerPath" :key="step.id">
                    <div class="career-path-node">
                      <img
                        v-if="step.logo"
                        :src="step.logo"
                        :alt="t(`members.${step.labelLocaleKey}`)"
                      />
                      <span>{{ t(`members.${step.labelLocaleKey}`) }}</span>
                      <a-tag v-if="step.current" color="green" size="small">
                        {{ t('members.current') }}
                      </a-tag>
                    </div>
                    <span
                      v-if="index < member.careerPath.length - 1"
                      class="career-path-arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </template>
                </div>
              </section>

              <section v-else-if="member.organization" class="alumni-career">
                <h4>{{ t('members.careerDestination') }}</h4>
                <div class="alumni-organization">
                  <img
                    v-if="member.organization.logo"
                    :src="member.organization.logo"
                    :alt="t(`members.organizations.${member.organization.nameLocaleKey}`)"
                  />
                  <span>
                    {{ t(`members.organizations.${member.organization.nameLocaleKey}`) }}
                  </span>
                </div>
              </section>
            </a-card>
          </a-col>
        </a-row>
      </section>
    </div>
  </main>
</template>
