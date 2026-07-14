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
        id: 'requirements-functional-logic-completion',
        localeKey: 'requirementsFunctionalLogicCompletion',
        agents: [reqCompleter],
      },
      {
        id: 'software-requirements-generation-based-on-user-requirements',
        localeKey: 'softwareRequirementsGenerationBasedOnUserRequirements',
        agents: [iReDev],
      },
      {
        id: 'requirements-extraction',
        localeKey: 'requirementsExtraction',
        agents: [],
      },
      {
        id: 'requirements-clarification',
        localeKey: 'requirementsClarification',
        agents: [],
      },
      {
        id: 'abnormal-scenario-completion',
        localeKey: 'abnormalScenarioCompletion',
        agents: [],
      },
      {
        id: 'human-safety-requirements-completion-recommendation',
        localeKey: 'humanSafetyRequirementsCompletionRecommendation',
        agents: [],
      },
      {
        id: 'reliability-requirements-completion-recommendation',
        localeKey: 'reliabilityRequirementsCompletionRecommendation',
        agents: [],
      },
      {
        id: 'information-security-requirements-completion-recommendation',
        localeKey: 'informationSecurityRequirementsCompletionRecommendation',
        agents: [],
      },
      {
        id: 'software-requirements-generation-based-on-business-rules',
        localeKey: 'softwareRequirementsGenerationBasedOnBusinessRules',
        agents: [],
      },
      {
        id: 'fdir-requirements-generation-based-on-feedforward-feedback-control',
        localeKey: 'fdirRequirementsGenerationBasedOnFeedforwardFeedbackControl',
        agents: [],
      },
      {
        id: 'software-requirements-generation-based-on-system-requirements',
        localeKey: 'softwareRequirementsGenerationBasedOnSystemRequirements',
        agents: [],
      },
      {
        id: 'requirements-document-structure-planning',
        localeKey: 'requirementsDocumentStructurePlanning',
        agents: [],
      },
      {
        id: 'requirements-document-content-generation',
        localeKey: 'requirementsDocumentContentGeneration',
        agents: [],
      },
      {
        id: 'requirements-document-structure-completion',
        localeKey: 'requirementsDocumentStructureCompletion',
        agents: [],
      },
      {
        id: 'requirements-document-formatting-enhancement',
        localeKey: 'requirementsDocumentFormattingEnhancement',
        agents: [],
      },
      {
        id: 'requirements-document-semantic-conflict-detection',
        localeKey: 'requirementsDocumentSemanticConflictDetection',
        agents: [],
      },
      {
        id: 'requirements-document-logical-conflict-detection',
        localeKey: 'requirementsDocumentLogicalConflictDetection',
        agents: [],
      },
      {
        id: 'requirements-document-functional-scenario-coverage-completeness-check',
        localeKey: 'requirementsDocumentFunctionalScenarioCoverageCompletenessCheck',
        agents: [],
      },
      {
        id: 'requirements-document-functional-safety-coverage-completeness-check',
        localeKey: 'requirementsDocumentFunctionalSafetyCoverageCompletenessCheck',
        agents: [],
      },
      {
        id: 'requirements-document-information-security-coverage-completeness-check',
        localeKey: 'requirementsDocumentInformationSecurityCoverageCompletenessCheck',
        agents: [],
      },
      {
        id: 'requirements-document-reliability-coverage-completeness-check',
        localeKey: 'requirementsDocumentReliabilityCoverageCompletenessCheck',
        agents: [],
      },
      {
        id: 'requirements-document-performance-coverage-completeness-check',
        localeKey: 'requirementsDocumentPerformanceCoverageCompletenessCheck',
        agents: [],
      },
      {
        id: 'review-assistant-agent',
        localeKey: 'reviewAssistantAgent',
        agents: [],
      },
      {
        id: 'compliance-review-agent',
        localeKey: 'complianceReviewAgent',
        agents: [],
      },
    ],
  },
  {
    id: 'requirements-change-evolution',
    localeKey: 'requirementsChangeEvolution',
    subcategories: [
      {
        id: 'difference-comparison',
        localeKey: 'differenceComparison',
        agents: [],
      },
      {
        id: 'potential-change-source-identification-based-on-requirements-documents',
        localeKey: 'potentialChangeSourceIdentificationBasedOnRequirementsDocuments',
        agents: [],
      },
      {
        id: 'user-requirements-change-identification',
        localeKey: 'userRequirementsChangeIdentification',
        agents: [],
      },
      {
        id: 'business-rule-change-identification',
        localeKey: 'businessRuleChangeIdentification',
        agents: [],
      },
      {
        id: 'external-environment-change-identification',
        localeKey: 'externalEnvironmentChangeIdentification',
        agents: [],
      },
      {
        id: 'specification-evolution-based-on-business-rule-changes',
        localeKey: 'specificationEvolutionBasedOnBusinessRuleChanges',
        agents: [],
      },
      {
        id: 'specification-evolution-based-on-user-requirements-changes',
        localeKey: 'specificationEvolutionBasedOnUserRequirementsChanges',
        agents: [],
      },
      {
        id: 'specification-evolution-based-on-external-environment-changes',
        localeKey: 'specificationEvolutionBasedOnExternalEnvironmentChanges',
        agents: [],
      },
      {
        id: 'change-impact-analysis',
        localeKey: 'changeImpactAnalysis',
        agents: [],
      },
      {
        id: 'multi-source-requirements-specification-change-fusion',
        localeKey: 'multiSourceRequirementsSpecificationChangeFusion',
        agents: [],
      },
      {
        id: 'baseline-management',
        localeKey: 'baselineManagement',
        agents: [],
      },
      {
        id: 'change-traceability',
        localeKey: 'changeTraceability',
        agents: [],
      },
    ],
  },
  {
    id: 'historical-requirements-document-processing',
    localeKey: 'historicalRequirementsDocumentProcessing',
    subcategories: [
      {
        id: 'activity-diagram-based-behavioral-modeling',
        localeKey: 'activityDiagramBasedBehavioralModeling',
        agents: [plato],
      },
      {
        id: 'sequence-diagram-based-behavioral-modeling',
        localeKey: 'sequenceDiagramBasedBehavioralModeling',
        agents: [plato],
      },
      {
        id: 'state-diagram-based-behavioral-modeling',
        localeKey: 'stateDiagramBasedBehavioralModeling',
        agents: [plato],
      },
      {
        id: 'document-segmentation',
        localeKey: 'documentSegmentation',
        agents: [],
      },
      {
        id: 'document-parsing',
        localeKey: 'documentParsing',
        agents: [],
      },
      {
        id: 'terminology-unification',
        localeKey: 'terminologyUnification',
        agents: [],
      },
      {
        id: 'invalid-content-filtering',
        localeKey: 'invalidContentFiltering',
        agents: [],
      },
      {
        id: 'requirements-information-extraction-and-fusion',
        localeKey: 'requirementsInformationExtractionAndFusion',
        agents: [],
      },
      {
        id: 'functional-modeling-based-on-use-case-models',
        localeKey: 'functionalModelingBasedOnUseCaseModels',
        agents: [],
      },
      {
        id: 'functional-modeling-based-on-data-flow-diagrams',
        localeKey: 'functionalModelingBasedOnDataFlowDiagrams',
        agents: [],
      },
      {
        id: 'flowchart-generation',
        localeKey: 'flowchartGeneration',
        agents: [],
      },
      {
        id: 'data-modeling-based-on-er-diagrams',
        localeKey: 'dataModelingBasedOnErDiagrams',
        agents: [],
      },
      {
        id: 'requirements-relationship-identification',
        localeKey: 'requirementsRelationshipIdentification',
        agents: [],
      },
      {
        id: 'high-level-to-software-requirements-traceability-network-construction',
        localeKey: 'highLevelToSoftwareRequirementsTraceabilityNetworkConstruction',
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
