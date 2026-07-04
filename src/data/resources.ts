export type ResourceGroup = 'presentations' | 'tutorials' | 'datasets'
export type ResourceType =
  | 'invitedTalk'
  | 'presentation'
  | 'tutorial'
  | 'slides'
  | 'dataset'
export type ResourceStatus = 'archive' | 'toBeUpdated' | 'mockData'

export interface ResourceDefinition {
  id: string
  group: ResourceGroup
  localeKey: string
  typeKey: ResourceType
  statusKey: ResourceStatus
  href?: string
}

export const resourceGroupOrder: readonly ResourceGroup[] = [
  'presentations',
  'tutorials',
  'datasets',
]

export const resources: readonly ResourceDefinition[] = [
  {
    id: 'dmsviva-2018-invited-talk',
    group: 'presentations',
    localeKey: 'dmsviva2018',
    typeKey: 'invitedTalk',
    statusKey: 'archive',
  },
  {
    id: 'isqe-2019-invited-talk',
    group: 'presentations',
    localeKey: 'isqe2019',
    typeKey: 'invitedTalk',
    statusKey: 'archive',
  },
  {
    id: 're4cps-overview',
    group: 'presentations',
    localeKey: 're4cpsOverview',
    typeKey: 'presentation',
    statusKey: 'toBeUpdated',
  },
  {
    id: 're4cps-tutorial',
    group: 'tutorials',
    localeKey: 're4cpsTutorial',
    typeKey: 'tutorial',
    statusKey: 'archive',
  },
  {
    id: 're4cps-slides-part-1',
    group: 'tutorials',
    localeKey: 'slidesPartOne',
    typeKey: 'slides',
    statusKey: 'archive',
  },
  {
    id: 're4cps-slides-part-2',
    group: 'tutorials',
    localeKey: 'slidesPartTwo',
    typeKey: 'slides',
    statusKey: 'archive',
  },
  {
    id: 'cps-requirements-dataset',
    group: 'datasets',
    localeKey: 'cpsRequirementsDataset',
    typeKey: 'dataset',
    statusKey: 'mockData',
  },
  {
    id: 'smart-home-scenario-dataset',
    group: 'datasets',
    localeKey: 'smartHomeDataset',
    typeKey: 'dataset',
    statusKey: 'mockData',
  },
  {
    id: 'timing-requirements-benchmark',
    group: 'datasets',
    localeKey: 'timingRequirementsBenchmark',
    typeKey: 'dataset',
    statusKey: 'mockData',
  },
]
