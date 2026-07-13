export type AgentLinkKind = 'github' | 'demo' | 'details'

export type AgentLink =
  | {
      destination: 'external'
      kind: Exclude<AgentLinkKind, 'details'>
      href: string
    }
  | {
      destination: 'internal'
      kind: Extract<AgentLinkKind, 'details'>
      to: string
    }

export interface AgentDefinition {
  id: string
  localeKey: string
  tagKeys: readonly string[]
  links: readonly AgentLink[]
}

export interface AgentSubcategoryDefinition {
  id: string
  localeKey: string
  agents: readonly AgentDefinition[]
}

export interface AgentCategoryDefinition {
  id: string
  localeKey: string
  subcategories: readonly AgentSubcategoryDefinition[]
}

const iReDev: AgentDefinition = {
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
}

const plato: AgentDefinition = {
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
}

const reqCompleter: AgentDefinition = {
  id: 'reqcompleter',
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
}

export const agentCategories: readonly AgentCategoryDefinition[] = [
  {
    id: 'software-requirements-development',
    localeKey: 'softwareRequirementsDevelopment',
    subcategories: [
      {
        id: 'end-to-end-requirements-development',
        localeKey: 'endToEndRequirementsDevelopment',
        agents: [iReDev],
      },
      {
        id: 'requirements-modeling-behavioral-model-generation',
        localeKey: 'requirementsModelingBehavioralModelGeneration',
        agents: [plato],
      },
      {
        id: 'requirements-elicitation-user-interviews',
        localeKey: 'requirementsElicitationUserInterviews',
        agents: [],
      },
      {
        id: 'requirements-clarification-analysis',
        localeKey: 'requirementsClarificationAnalysis',
        agents: [],
      },
      {
        id: 'requirements-specification-documentation-generation',
        localeKey: 'requirementsSpecificationDocumentationGeneration',
        agents: [],
      },
      {
        id: 'requirements-validation-review',
        localeKey: 'requirementsValidationReview',
        agents: [],
      },
    ],
  },
  {
    id: 'requirements-change-evolution',
    localeKey: 'requirementsChangeEvolution',
    subcategories: [
      {
        id: 'requirements-clarification-completion',
        localeKey: 'requirementsClarificationCompletion',
        agents: [reqCompleter],
      },
      {
        id: 'requirements-negotiation',
        localeKey: 'requirementsNegotiation',
        agents: [],
      },
      {
        id: 'requirements-change-analysis',
        localeKey: 'requirementsChangeAnalysis',
        agents: [],
      },
      {
        id: 'requirement-change-driven-design-evolution',
        localeKey: 'requirementChangeDrivenDesignEvolution',
        agents: [],
      },
      {
        id: 'requirement-change-driven-code-generation',
        localeKey: 'requirementChangeDrivenCodeGeneration',
        agents: [],
      },
      {
        id: 'requirement-change-driven-test-case-evolution',
        localeKey: 'requirementChangeDrivenTestCaseEvolution',
        agents: [],
      },
    ],
  },
  {
    id: 'historical-requirements-document-processing',
    localeKey: 'historicalRequirementsDocumentProcessing',
    subcategories: [
      {
        id: 'document-parsing-structuring',
        localeKey: 'documentParsingStructuring',
        agents: [],
      },
      {
        id: 'requirement-element-relation-extraction',
        localeKey: 'requirementElementRelationExtraction',
        agents: [],
      },
      {
        id: 'semantic-retrieval-similar-requirement-matching',
        localeKey: 'semanticRetrievalSimilarRequirementMatching',
        agents: [],
      },
      {
        id: 'historical-requirement-reuse-recommendation',
        localeKey: 'historicalRequirementReuseRecommendation',
        agents: [],
      },
      {
        id: 'requirements-traceability-recovery',
        localeKey: 'requirementsTraceabilityRecovery',
        agents: [],
      },
      {
        id: 'conflict-duplication-consistency-analysis',
        localeKey: 'conflictDuplicationConsistencyAnalysis',
        agents: [],
      },
    ],
  },
  {
    id: 'test-case-generation',
    localeKey: 'testCaseGeneration',
    subcategories: [],
  },
]
