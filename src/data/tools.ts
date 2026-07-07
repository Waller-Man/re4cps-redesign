export type ToolLinkKind = 'github' | 'demo' | 'details'
export type ToolCategory =
  | 'aiRequirementsDevelopment'
  | 'businessLogicCompletion'
  | 'behaviorModeling'

export type ToolLink =
  | {
      destination: 'external'
      kind: Exclude<ToolLinkKind, 'details'>
      href: string
    }
  | {
      destination: 'internal'
      kind: Extract<ToolLinkKind, 'details'>
      to: string
    }

export interface ToolDefinition {
  id: string
  category: ToolCategory
  localeKey: string
  tagKeys: readonly string[]
  links: readonly ToolLink[]
}

export const toolCategories: readonly ToolCategory[] = [
  'aiRequirementsDevelopment',
  'businessLogicCompletion',
  'behaviorModeling',
]

export const tools: readonly ToolDefinition[] = [
  {
    id: 'iredev',
    category: 'aiRequirementsDevelopment',
    localeKey: 'iredev',
    tagKeys: ['llm', 'multiAgent', 'requirementsDevelopment', 'srs'],
    links: [
      {
        destination: 'external',
        kind: 'github',
        href: 'https://github.com/jdm4pku/iReDev',
      },
    ],
  },
  {
    id: 're-skills',
    category: 'aiRequirementsDevelopment',
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
    id: 'reqcompleter',
    category: 'businessLogicCompletion',
    localeKey: 'reqCompleter',
    tagKeys: [
      'llm',
      'requirementsCompletion',
      'businessLogic',
      'useCase',
      'erDiagram',
      'crud',
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
    id: 're-requirements-plugin',
    category: 'businessLogicCompletion',
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
    id: 'plato',
    category: 'behaviorModeling',
    localeKey: 'plato',
    tagKeys: ['llm', 'plantUml', 'behaviorModeling', 'requirementsAnalysis'],
    links: [
      {
        destination: 'external',
        kind: 'github',
        href: 'https://github.com/Ekay47/PLATO',
      },
    ],
  },
]
