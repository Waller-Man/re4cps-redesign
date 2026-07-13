export type ReResourceGroup =
  | 'engineeringPlugins'
  | 'presentations'
  | 'tutorials'
export type ReResourceType =
  | 'invitedTalk'
  | 'presentation'
  | 'tutorial'
  | 'slides'
export type ReResourceStatus = 'archive' | 'toBeUpdated'
export type ReResourceLinkKind = 'github' | 'demo' | 'details'

export type ReResourceLink =
  | {
      destination: 'external'
      kind: Exclude<ReResourceLinkKind, 'details'>
      href: string
    }
  | {
      destination: 'internal'
      kind: Extract<ReResourceLinkKind, 'details'>
      to: string
    }

export interface FeaturedReResourceDefinition {
  kind: 'featured'
  id: string
  group: Extract<ReResourceGroup, 'engineeringPlugins'>
  localeKey: string
  tagKeys: readonly string[]
  links: readonly ReResourceLink[]
}

export interface CatalogReResourceDefinition {
  kind: 'catalog'
  id: string
  group: Exclude<ReResourceGroup, 'engineeringPlugins'>
  localeKey: string
  typeKey: ReResourceType
  statusKey: ReResourceStatus
  href?: string
}

export type ReResourceDefinition =
  | FeaturedReResourceDefinition
  | CatalogReResourceDefinition

export const reResourceGroupOrder: readonly ReResourceGroup[] = [
  'engineeringPlugins',
  'presentations',
  'tutorials',
]

export const reResources: readonly ReResourceDefinition[] = [
  {
    kind: 'featured',
    id: 're-skills',
    group: 'engineeringPlugins',
    localeKey: 'reSkills',
    tagKeys: ['reSkills', 'llm', 'knowledgeReuse', 'methodology'],
    links: [
      {
        destination: 'external',
        kind: 'github',
        href: 'https://github.com/jdm4pku/RE-Skills',
      },
    ],
  },
  {
    kind: 'featured',
    id: 're-requirements-plugin',
    group: 'engineeringPlugins',
    localeKey: 'requirementsPlugin',
    tagKeys: [
      'openClaw',
      'requirementsModeling',
      'erModel',
      'curd',
      'documentGeneration',
    ],
    links: [
      {
        destination: 'external',
        kind: 'github',
        href: 'https://github.com/Waller-Man/re-requirements-plugin',
      },
    ],
  },
  {
    kind: 'catalog',
    id: 'dmsviva-2018-invited-talk',
    group: 'presentations',
    localeKey: 'dmsviva2018',
    typeKey: 'invitedTalk',
    statusKey: 'archive',
  },
  {
    kind: 'catalog',
    id: 'isqe-2019-invited-talk',
    group: 'presentations',
    localeKey: 'isqe2019',
    typeKey: 'invitedTalk',
    statusKey: 'archive',
  },
  {
    kind: 'catalog',
    id: 're4cps-overview',
    group: 'presentations',
    localeKey: 're4cpsOverview',
    typeKey: 'presentation',
    statusKey: 'toBeUpdated',
  },
  {
    kind: 'catalog',
    id: 're4cps-tutorial',
    group: 'tutorials',
    localeKey: 're4cpsTutorial',
    typeKey: 'tutorial',
    statusKey: 'archive',
  },
  {
    kind: 'catalog',
    id: 're4cps-slides-part-1',
    group: 'tutorials',
    localeKey: 'slidesPartOne',
    typeKey: 'slides',
    statusKey: 'archive',
  },
  {
    kind: 'catalog',
    id: 're4cps-slides-part-2',
    group: 'tutorials',
    localeKey: 'slidesPartTwo',
    typeKey: 'slides',
    statusKey: 'archive',
  },
]
