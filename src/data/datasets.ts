export type DatasetGroup = 'datasets'
export type DatasetStatus = 'comingSoon'

export interface DatasetDefinition {
  id: string
  group: DatasetGroup
  localeKey: string
  statusKey: DatasetStatus
  href?: string
}

export const datasetGroupOrder: readonly DatasetGroup[] = ['datasets']

export const datasets: readonly DatasetDefinition[] = [
  {
    id: 'iot-req-completion-bench',
    group: 'datasets',
    localeKey: 'iotReqCompletionBench',
    statusKey: 'comingSoon',
  },
]
