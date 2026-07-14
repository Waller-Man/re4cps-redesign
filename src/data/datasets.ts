export type DatasetGroup = 'datasets'
export type DatasetStatus = 'available' | 'comingSoon'

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
  {
    id: 'req-completer-bench',
    group: 'datasets',
    localeKey: 'reqCompleterBench',
    statusKey: 'available',
    href: 'https://github.com/ecnu-wzj/ICSE_Submission',
  },
]
