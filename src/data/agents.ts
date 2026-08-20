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

export interface AgentNode {
  id: string
  localeKey: string
  children?: readonly AgentNode[]
  agents?: readonly AgentDefinition[]
}

const iReDev: AgentDefinition = {
  id: 'iredev',
  localeKey: 'iredev',
  tagKeys: ['llm', 'multiAgent', 'requirementsDevelopment'],
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
  tagKeys: ['llm', 'behaviorModeling', 'plantUml'],
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
  tagKeys: ['llm', 'requirementsCompletion', 'businessLogic'],
  links: [
    {
      destination: 'external',
      kind: 'github',
      href: 'https://github.com/ecnu-wzj/ICSE_Submission',
    },
  ],
}

const reqUnderstander: AgentDefinition = {
  id: 'requnderstander',
  localeKey: 'reqUnderstander',
  tagKeys: ['llm', 'requirementsUnderstanding', 'knowledgeGraph'],
  links: [],
}

const requirementsInterviewAgent: AgentDefinition = {
  id: 'requirements-interview-agent',
  localeKey: 'requirementsInterviewAgent',
  tagKeys: ['requirementsInterview', 'ontologyDriven', 'multiTurnDialogue'],
  links: [],
}

const reqExceptionHunter: AgentDefinition = {
  id: 'reqexceptionhunter',
  localeKey: 'reqExceptionHunter',
  tagKeys: ['exceptionalScenarios', 'useCaseAnalysis', 'exceptionRemediation'],
  links: [],
}

const informationSecurityRequirementsCompletionAgent: AgentDefinition = {
  id: 'information-security-requirements-completion-agent',
  localeKey: 'informationSecurityRequirementsCompletionAgent',
  tagKeys: ['informationSecurity', 'threatModeling', 'requirementsCompletion'],
  links: [],
}

const businessRuleRequirementsGenerationAgent: AgentDefinition = {
  id: 'business-rule-requirements-generation-agent',
  localeKey: 'businessRuleRequirementsGenerationAgent',
  tagKeys: ['businessRules', 'requirementsGeneration', 'formalSpecification'],
  links: [],
}

const fdirRequirementsGenerationAgent: AgentDefinition = {
  id: 'fdir-requirements-generation-agent',
  localeKey: 'fdirRequirementsGenerationAgent',
  tagKeys: ['fdir', 'faultAnalysis', 'requirementsGeneration'],
  links: [],
}

const constraintSolvingConflictDetectionAgent: AgentDefinition = {
  id: 'constraint-solving-conflict-detection-agent',
  localeKey: 'constraintSolvingConflictDetectionAgent',
  tagKeys: ['conflictDetection', 'constraintSolving', 'temporalAnalysis'],
  links: [],
}

const sceneOpt: AgentDefinition = {
  id: 'sceneopt',
  localeKey: 'sceneOpt',
  tagKeys: ['scenarioModeling', 'coverageChecking', 'requirementsCompletion'],
  links: [],
}

const terminologyConsistencyCheckingAgent: AgentDefinition = {
  id: 'terminology-consistency-checking-agent',
  localeKey: 'terminologyConsistencyCheckingAgent',
  tagKeys: [
    'terminologyUnification',
    'consistencyChecking',
    'abbreviationStandardization',
  ],
  links: [],
}

const requirementsInformationExtractionFusionAgent: AgentDefinition = {
  id: 'requirements-information-extraction-fusion-agent',
  localeKey: 'requirementsInformationExtractionFusionAgent',
  tagKeys: [
    'requirementsExtraction',
    'informationFusion',
    'requirementsMetamodel',
  ],
  links: [],
}

export const agentCategories: readonly AgentNode[] = [
  {
    id: 'software-requirements-development',
    localeKey: 'softwareRequirementsDevelopment',
    children: [
      {
        id: 'requirements-extraction',
        localeKey: 'requirementsExtraction',
        agents: [reqUnderstander],
      },
      {
        id: 'requirements-clarification',
        localeKey: 'requirementsClarification',
        agents: [requirementsInterviewAgent],
      },
      {
        id: 'requirements-completion-recommendation',
        localeKey: 'requirementsCompletionRecommendation',
        children: [
          {
            id: 'requirements-functional-logic-completion',
            localeKey: 'requirementsFunctionalLogicCompletion',
            agents: [reqCompleter],
          },
          {
            id: 'abnormal-scenario-completion',
            localeKey: 'abnormalScenarioCompletion',
            agents: [reqExceptionHunter],
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
            agents: [informationSecurityRequirementsCompletionAgent],
          },
        ],
      },
      {
        id: 'requirements-specification',
        localeKey: 'requirementsSpecification',
        children: [
          {
            id: 'software-requirements-generation-based-on-user-requirements',
            localeKey: 'softwareRequirementsGenerationBasedOnUserRequirements',
            agents: [iReDev],
          },
          {
            id: 'software-requirements-generation-based-on-business-rules',
            localeKey: 'softwareRequirementsGenerationBasedOnBusinessRules',
            agents: [businessRuleRequirementsGenerationAgent],
          },
          {
            id: 'fdir-requirements-generation-based-on-feedforward-feedback-control',
            localeKey: 'fdirRequirementsGenerationBasedOnFeedforwardFeedbackControl',
            agents: [fdirRequirementsGenerationAgent],
          },
          {
            id: 'software-requirements-generation-based-on-system-requirements',
            localeKey: 'softwareRequirementsGenerationBasedOnSystemRequirements',
            agents: [],
          },
        ],
      },
      {
        id: 'requirements-document-generation',
        localeKey: 'requirementsDocumentGeneration',
        children: [
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
        ],
      },
      {
        id: 'requirements-document-quality-inspection',
        localeKey: 'requirementsDocumentQualityInspection',
        children: [
          {
            id: 'requirements-document-consistency-check',
            localeKey: 'requirementsDocumentConsistencyCheck',
            children: [
              {
                id: 'requirements-document-semantic-conflict-detection',
                localeKey: 'requirementsDocumentSemanticConflictDetection',
                agents: [],
              },
              {
                id: 'requirements-document-logical-conflict-detection',
                localeKey: 'requirementsDocumentLogicalConflictDetection',
                agents: [constraintSolvingConflictDetectionAgent],
              },
            ],
          },
          {
            id: 'requirements-document-completeness-check',
            localeKey: 'requirementsDocumentCompletenessCheck',
            children: [
              {
                id: 'requirements-document-functional-scenario-coverage-completeness-check',
                localeKey: 'requirementsDocumentFunctionalScenarioCoverageCompletenessCheck',
                agents: [sceneOpt],
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
            ],
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
    ],
  },
  {
    id: 'requirements-change-evolution',
    localeKey: 'requirementsChangeEvolution',
    children: [
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
        id: 'real-world-change-source-and-change-identification',
        localeKey: 'realWorldChangeSourceAndChangeIdentification',
        children: [
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
        ],
      },
      {
        id: 'specification-evolution-for-multi-source-requirements-changes',
        localeKey: 'specificationEvolutionForMultiSourceRequirementsChanges',
        children: [
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
        ],
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
    children: [
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
        agents: [terminologyConsistencyCheckingAgent],
      },
      {
        id: 'invalid-content-filtering',
        localeKey: 'invalidContentFiltering',
        agents: [],
      },
      {
        id: 'requirements-information-extraction-and-fusion',
        localeKey: 'requirementsInformationExtractionAndFusion',
        agents: [requirementsInformationExtractionFusionAgent],
      },
      {
        id: 'requirements-modeling',
        localeKey: 'requirementsModeling',
        children: [
          {
            id: 'functional-modeling',
            localeKey: 'functionalModeling',
            children: [
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
            ],
          },
          {
            id: 'behavioral-modeling',
            localeKey: 'behavioralModeling',
            children: [
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
                id: 'flowchart-generation',
                localeKey: 'flowchartGeneration',
                agents: [],
              },
            ],
          },
          {
            id: 'data-modeling',
            localeKey: 'dataModeling',
            children: [
              {
                id: 'data-modeling-based-on-er-diagrams',
                localeKey: 'dataModelingBasedOnErDiagrams',
                agents: [],
              },
            ],
          },
        ],
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
    children: [
      {
        id: 'test-condition-scenario-construction',
        localeKey: 'testConditionScenarioConstruction',
        children: [
          {
            id: 'test-condition-derivation',
            localeKey: 'testConditionDerivation',
            agents: [],
          },
          {
            id: 'normal-exceptional-scenario-generation',
            localeKey: 'normalExceptionalScenarioGeneration',
            agents: [],
          },
          {
            id: 'boundary-combinatorial-scenario-generation',
            localeKey: 'boundaryCombinatorialScenarioGeneration',
            agents: [],
          },
        ],
      },
      {
        id: 'test-case-generation-methods',
        localeKey: 'testCaseGenerationMethods',
        children: [
          {
            id: 'functional-test-case-generation',
            localeKey: 'functionalTestCaseGeneration',
            agents: [],
          },
          {
            id: 'api-test-case-generation',
            localeKey: 'apiTestCaseGeneration',
            agents: [],
          },
          {
            id: 'integration-test-case-generation',
            localeKey: 'integrationTestCaseGeneration',
            agents: [],
          },
          {
            id: 'non-functional-test-case-generation',
            localeKey: 'nonFunctionalTestCaseGeneration',
            agents: [],
          },
        ],
      },
      {
        id: 'test-quality-coverage-analysis',
        localeKey: 'testQualityCoverageAnalysis',
        children: [
          {
            id: 'test-case-completeness-checking',
            localeKey: 'testCaseCompletenessChecking',
            agents: [],
          },
          {
            id: 'test-case-executability-checking',
            localeKey: 'testCaseExecutabilityChecking',
            agents: [],
          },
          {
            id: 'test-case-redundancy-obsolescence-detection',
            localeKey: 'testCaseRedundancyObsolescenceDetection',
            agents: [],
          },
          {
            id: 'requirements-scenario-coverage-analysis',
            localeKey: 'requirementsScenarioCoverageAnalysis',
            agents: [],
          },
          {
            id: 'test-blind-spot-risk-identification',
            localeKey: 'testBlindSpotRiskIdentification',
            agents: [],
          },
        ],
      },
      {
        id: 'change-driven-test-evolution',
        localeKey: 'changeDrivenTestEvolution',
        children: [
          {
            id: 'test-impact-scope-analysis',
            localeKey: 'testImpactScopeAnalysis',
            agents: [],
          },
          {
            id: 'test-case-reuse-modification',
            localeKey: 'testCaseReuseModification',
            agents: [],
          },
          {
            id: 'incremental-test-case-generation',
            localeKey: 'incrementalTestCaseGeneration',
            agents: [],
          },
        ],
      },
      {
        id: 'test-asset-management',
        localeKey: 'testAssetManagement',
        children: [
          {
            id: 'requirements-test-case-traceability-establishment',
            localeKey: 'requirementsTestCaseTraceabilityEstablishment',
            agents: [],
          },
          {
            id: 'test-case-version-management-delivery',
            localeKey: 'testCaseVersionManagementDelivery',
            agents: [],
          },
        ],
      },
    ],
  },
]
