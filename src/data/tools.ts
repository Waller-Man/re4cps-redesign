export type ToolLinkKind = 'github' | 'demo' | 'details'

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
  localeKey: string
  tagKeys: readonly string[]
  links: readonly ToolLink[]
}

export const tools: readonly ToolDefinition[] = [
  {
    id: 'iredev',
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
    id: 're-requirements-plugin',
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
