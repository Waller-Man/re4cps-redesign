<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { memberGroupOrder, members, type MemberGroup } from '../data/members'

const { t } = useI18n()

const memberGroups = memberGroupOrder.map((key: MemberGroup) => ({
  key,
  items: members.filter((member) => member.group === key),
}))

function resolveMemberPhoto(photo: string) {
  return `${import.meta.env.BASE_URL}${photo}`
}
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
            <a-card class="member-card" :bordered="false" hoverable>
              <div class="member-card-header">
                <a-avatar :size="82" class="member-avatar">
                  <img
                    :src="resolveMemberPhoto(member.photo)"
                    :alt="t(`members.people.${member.localeKey}.name`)"
                  />
                </a-avatar>

                <div class="member-identity">
                  <h3>{{ t(`members.people.${member.localeKey}.name`) }}</h3>
                  <a-tag color="arcoblue" size="small">
                    {{ t(`members.people.${member.localeKey}.role`) }}
                  </a-tag>
                </div>
              </div>

              <p class="member-school">
                {{ t(`members.people.${member.localeKey}.school`) }}
              </p>

              <p class="member-bio">
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
            </a-card>
          </a-col>
        </a-row>
      </section>
    </div>
  </main>
</template>
