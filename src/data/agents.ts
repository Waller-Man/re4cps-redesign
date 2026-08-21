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

const capabilityAgent = (
  id: string,
  localeKey: string,
  tagKeys: readonly string[],
): AgentDefinition => ({
  id,
  localeKey,
  tagKeys,
  links: [],
})

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
            agents: [
              capabilityAgent(
                'human-safety-requirements-completion-agent',
                'humanSafetyRequirementsCompletionAgent',
                ['humanSafety', 'hazardAnalysis', 'requirementsCompletion'],
              ),
            ],
          },
          {
            id: 'reliability-requirements-completion-recommendation',
            localeKey: 'reliabilityRequirementsCompletionRecommendation',
            agents: [
              capabilityAgent(
                'reliability-requirements-completion-agent',
                'reliabilityRequirementsCompletionAgent',
                ['reliability', 'faultAnalysis', 'requirementsCompletion'],
              ),
            ],
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
            agents: [
              capabilityAgent(
                'system-requirements-refinement-agent',
                'systemRequirementsRefinementAgent',
                ['systemRequirements', 'requirementsRefinement', 'requirementsGeneration'],
              ),
            ],
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
            agents: [
              capabilityAgent(
                'requirements-document-structure-planning-agent',
                'requirementsDocumentStructurePlanningAgent',
                ['documentStructure', 'documentGeneration'],
              ),
            ],
          },
          {
            id: 'requirements-document-content-generation',
            localeKey: 'requirementsDocumentContentGeneration',
            agents: [
              capabilityAgent(
                'requirements-document-content-generation-agent',
                'requirementsDocumentContentGenerationAgent',
                ['documentGeneration', 'requirementsGeneration'],
              ),
            ],
          },
          {
            id: 'requirements-document-structure-completion',
            localeKey: 'requirementsDocumentStructureCompletion',
            agents: [
              capabilityAgent(
                'requirements-document-structure-completion-agent',
                'requirementsDocumentStructureCompletionAgent',
                ['documentStructure', 'requirementsCompletion'],
              ),
            ],
          },
          {
            id: 'requirements-document-formatting-enhancement',
            localeKey: 'requirementsDocumentFormattingEnhancement',
            agents: [
              capabilityAgent(
                'requirements-document-formatting-agent',
                'requirementsDocumentFormattingAgent',
                ['documentFormatting', 'documentGeneration'],
              ),
            ],
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
                agents: [
                  capabilityAgent(
                    'semantic-conflict-detection-agent',
                    'semanticConflictDetectionAgent',
                    ['semanticAnalysis', 'conflictDetection'],
                  ),
                ],
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
                agents: [
                  capabilityAgent(
                    'functional-safety-coverage-agent',
                    'functionalSafetyCoverageAgent',
                    ['humanSafety', 'coverageAnalysis'],
                  ),
                ],
              },
              {
                id: 'requirements-document-information-security-coverage-completeness-check',
                localeKey: 'requirementsDocumentInformationSecurityCoverageCompletenessCheck',
                agents: [
                  capabilityAgent(
                    'information-security-coverage-agent',
                    'informationSecurityCoverageAgent',
                    ['informationSecurity', 'coverageAnalysis'],
                  ),
                ],
              },
              {
                id: 'requirements-document-reliability-coverage-completeness-check',
                localeKey: 'requirementsDocumentReliabilityCoverageCompletenessCheck',
                agents: [
                  capabilityAgent(
                    'reliability-coverage-agent',
                    'reliabilityCoverageAgent',
                    ['reliability', 'coverageAnalysis'],
                  ),
                ],
              },
              {
                id: 'requirements-document-performance-coverage-completeness-check',
                localeKey: 'requirementsDocumentPerformanceCoverageCompletenessCheck',
                agents: [
                  capabilityAgent(
                    'performance-coverage-agent',
                    'performanceCoverageAgent',
                    ['performanceRequirements', 'coverageAnalysis'],
                  ),
                ],
              },
            ],
          },
          {
            id: 'review-assistant-agent',
            localeKey: 'reviewAssistantAgent',
            agents: [
              capabilityAgent(
                'requirements-review-assistant',
                'requirementsReviewAssistant',
                ['qualityInspection', 'requirementsAnalysis'],
              ),
            ],
          },
          {
            id: 'compliance-review-agent',
            localeKey: 'complianceReviewAgent',
            agents: [
              capabilityAgent(
                'requirements-compliance-review-agent',
                'requirementsComplianceReviewAgent',
                ['complianceReview', 'qualityInspection'],
              ),
            ],
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
        agents: [
          capabilityAgent(
            'requirements-difference-analysis-agent',
            'requirementsDifferenceAnalysisAgent',
            ['differenceAnalysis', 'changeIdentification'],
          ),
        ],
      },
      {
        id: 'potential-change-source-identification-based-on-requirements-documents',
        localeKey: 'potentialChangeSourceIdentificationBasedOnRequirementsDocuments',
        agents: [
          capabilityAgent(
            'potential-change-source-identification-agent',
            'potentialChangeSourceIdentificationAgent',
            ['changeSource', 'requirementsAnalysis'],
          ),
        ],
      },
      {
        id: 'real-world-change-source-and-change-identification',
        localeKey: 'realWorldChangeSourceAndChangeIdentification',
        children: [
          {
            id: 'user-requirements-change-identification',
            localeKey: 'userRequirementsChangeIdentification',
            agents: [
              capabilityAgent(
                'user-requirements-change-identification-agent',
                'userRequirementsChangeIdentificationAgent',
                ['changeIdentification', 'requirementsAnalysis'],
              ),
            ],
          },
          {
            id: 'business-rule-change-identification',
            localeKey: 'businessRuleChangeIdentification',
            agents: [
              capabilityAgent(
                'business-rule-change-identification-agent',
                'businessRuleChangeIdentificationAgent',
                ['businessRules', 'changeIdentification'],
              ),
            ],
          },
          {
            id: 'external-environment-change-identification',
            localeKey: 'externalEnvironmentChangeIdentification',
            agents: [
              capabilityAgent(
                'external-environment-change-identification-agent',
                'externalEnvironmentChangeIdentificationAgent',
                ['environmentAnalysis', 'changeIdentification'],
              ),
            ],
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
            agents: [
              capabilityAgent(
                'business-rule-specification-evolution-agent',
                'businessRuleSpecificationEvolutionAgent',
                ['businessRules', 'specificationEvolution'],
              ),
            ],
          },
          {
            id: 'specification-evolution-based-on-user-requirements-changes',
            localeKey: 'specificationEvolutionBasedOnUserRequirementsChanges',
            agents: [
              capabilityAgent(
                'user-requirements-specification-evolution-agent',
                'userRequirementsSpecificationEvolutionAgent',
                ['changeIdentification', 'specificationEvolution'],
              ),
            ],
          },
          {
            id: 'specification-evolution-based-on-external-environment-changes',
            localeKey: 'specificationEvolutionBasedOnExternalEnvironmentChanges',
            agents: [
              capabilityAgent(
                'environment-specification-evolution-agent',
                'environmentSpecificationEvolutionAgent',
                ['environmentAnalysis', 'specificationEvolution'],
              ),
            ],
          },
        ],
      },
      {
        id: 'change-impact-analysis',
        localeKey: 'changeImpactAnalysis',
        agents: [
          capabilityAgent(
            'requirements-change-impact-analysis-agent',
            'requirementsChangeImpactAnalysisAgent',
            ['changeImpact', 'changeTraceability'],
          ),
        ],
      },
      {
        id: 'multi-source-requirements-specification-change-fusion',
        localeKey: 'multiSourceRequirementsSpecificationChangeFusion',
        agents: [
          capabilityAgent(
            'multi-source-change-fusion-agent',
            'multiSourceChangeFusionAgent',
            ['changeFusion', 'specificationEvolution'],
          ),
        ],
      },
      {
        id: 'baseline-management',
        localeKey: 'baselineManagement',
        agents: [
          capabilityAgent(
            'requirements-baseline-management-agent',
            'requirementsBaselineManagementAgent',
            ['baselineManagement', 'versionManagement'],
          ),
        ],
      },
      {
        id: 'change-traceability',
        localeKey: 'changeTraceability',
        agents: [
          capabilityAgent(
            'requirements-change-traceability-agent',
            'requirementsChangeTraceabilityAgent',
            ['changeTraceability', 'traceabilityNetwork'],
          ),
        ],
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
        agents: [
          capabilityAgent(
            'requirements-document-segmentation-agent',
            'requirementsDocumentSegmentationAgent',
            ['documentSegmentation', 'documentParsing'],
          ),
        ],
      },
      {
        id: 'document-parsing',
        localeKey: 'documentParsing',
        agents: [
          capabilityAgent(
            'historical-requirements-document-parsing-agent',
            'historicalRequirementsDocumentParsingAgent',
            ['documentParsing', 'requirementsExtraction'],
          ),
        ],
      },
      {
        id: 'terminology-unification',
        localeKey: 'terminologyUnification',
        agents: [terminologyConsistencyCheckingAgent],
      },
      {
        id: 'invalid-content-filtering',
        localeKey: 'invalidContentFiltering',
        agents: [
          capabilityAgent(
            'requirements-content-filtering-agent',
            'requirementsContentFilteringAgent',
            ['contentFiltering', 'documentParsing'],
          ),
        ],
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
                agents: [
                  capabilityAgent(
                    'use-case-modeling-agent',
                    'useCaseModelingAgent',
                    ['useCaseModeling', 'requirementsModeling'],
                  ),
                ],
              },
              {
                id: 'functional-modeling-based-on-data-flow-diagrams',
                localeKey: 'functionalModelingBasedOnDataFlowDiagrams',
                agents: [
                  capabilityAgent(
                    'data-flow-modeling-agent',
                    'dataFlowModelingAgent',
                    ['dataFlowModeling', 'requirementsModeling'],
                  ),
                ],
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
                agents: [
                  capabilityAgent(
                    'requirements-flowchart-generation-agent',
                    'requirementsFlowchartGenerationAgent',
                    ['flowchart', 'behaviorModeling'],
                  ),
                ],
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
                agents: [
                  capabilityAgent(
                    'er-data-modeling-agent',
                    'erDataModelingAgent',
                    ['dataModeling', 'erDiagram'],
                  ),
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'requirements-relationship-identification',
        localeKey: 'requirementsRelationshipIdentification',
        agents: [
          capabilityAgent(
            'requirements-relationship-identification-agent',
            'requirementsRelationshipIdentificationAgent',
            ['relationshipExtraction', 'requirementsAnalysis'],
          ),
        ],
      },
      {
        id: 'high-level-to-software-requirements-traceability-network-construction',
        localeKey: 'highLevelToSoftwareRequirementsTraceabilityNetworkConstruction',
        agents: [
          capabilityAgent(
            'requirements-traceability-network-agent',
            'requirementsTraceabilityNetworkAgent',
            ['traceabilityNetwork', 'relationshipExtraction'],
          ),
        ],
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
            agents: [
              capabilityAgent(
                'test-condition-derivation-agent',
                'testConditionDerivationAgent',
                ['testCondition', 'requirementsAnalysis'],
              ),
            ],
          },
          {
            id: 'normal-exceptional-scenario-generation',
            localeKey: 'normalExceptionalScenarioGeneration',
            agents: [
              capabilityAgent(
                'normal-exceptional-scenario-generation-agent',
                'normalExceptionalScenarioGenerationAgent',
                ['scenarioGeneration', 'exceptionalScenarios'],
              ),
            ],
          },
          {
            id: 'boundary-combinatorial-scenario-generation',
            localeKey: 'boundaryCombinatorialScenarioGeneration',
            agents: [
              capabilityAgent(
                'boundary-combinatorial-scenario-agent',
                'boundaryCombinatorialScenarioAgent',
                ['boundaryAnalysis', 'combinatorialTesting'],
              ),
            ],
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
            agents: [
              capabilityAgent(
                'functional-test-generation-agent',
                'functionalTestGenerationAgent',
                ['testGeneration', 'requirementsDevelopment'],
              ),
            ],
          },
          {
            id: 'api-test-case-generation',
            localeKey: 'apiTestCaseGeneration',
            agents: [
              capabilityAgent(
                'api-test-generation-agent',
                'apiTestGenerationAgent',
                ['apiTesting', 'testGeneration'],
              ),
            ],
          },
          {
            id: 'integration-test-case-generation',
            localeKey: 'integrationTestCaseGeneration',
            agents: [
              capabilityAgent(
                'integration-test-generation-agent',
                'integrationTestGenerationAgent',
                ['integrationTesting', 'testGeneration'],
              ),
            ],
          },
          {
            id: 'non-functional-test-case-generation',
            localeKey: 'nonFunctionalTestCaseGeneration',
            agents: [
              capabilityAgent(
                'non-functional-test-generation-agent',
                'nonFunctionalTestGenerationAgent',
                ['nonFunctionalTesting', 'testGeneration'],
              ),
            ],
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
            agents: [
              capabilityAgent(
                'test-completeness-checking-agent',
                'testCompletenessCheckingAgent',
                ['completenessChecking', 'coverageAnalysis'],
              ),
            ],
          },
          {
            id: 'test-case-executability-checking',
            localeKey: 'testCaseExecutabilityChecking',
            agents: [
              capabilityAgent(
                'test-executability-checking-agent',
                'testExecutabilityCheckingAgent',
                ['executabilityChecking', 'qualityInspection'],
              ),
            ],
          },
          {
            id: 'test-case-redundancy-obsolescence-detection',
            localeKey: 'testCaseRedundancyObsolescenceDetection',
            agents: [
              capabilityAgent(
                'test-redundancy-obsolescence-agent',
                'testRedundancyObsolescenceAgent',
                ['redundancyDetection', 'versionManagement'],
              ),
            ],
          },
          {
            id: 'requirements-scenario-coverage-analysis',
            localeKey: 'requirementsScenarioCoverageAnalysis',
            agents: [
              capabilityAgent(
                'requirements-scenario-coverage-agent',
                'requirementsScenarioCoverageAgent',
                ['coverageAnalysis', 'testTraceability'],
              ),
            ],
          },
          {
            id: 'test-blind-spot-risk-identification',
            localeKey: 'testBlindSpotRiskIdentification',
            agents: [
              capabilityAgent(
                'test-blind-spot-risk-agent',
                'testBlindSpotRiskAgent',
                ['riskIdentification', 'coverageAnalysis'],
              ),
            ],
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
            agents: [
              capabilityAgent(
                'test-impact-analysis-agent',
                'testImpactAnalysisAgent',
                ['testImpact', 'changeImpact'],
              ),
            ],
          },
          {
            id: 'test-case-reuse-modification',
            localeKey: 'testCaseReuseModification',
            agents: [
              capabilityAgent(
                'test-case-reuse-adaptation-agent',
                'testCaseReuseAdaptationAgent',
                ['testReuse', 'testEvolution'],
              ),
            ],
          },
          {
            id: 'incremental-test-case-generation',
            localeKey: 'incrementalTestCaseGeneration',
            agents: [
              capabilityAgent(
                'incremental-test-generation-agent',
                'incrementalTestGenerationAgent',
                ['testGeneration', 'testEvolution'],
              ),
            ],
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
            agents: [
              capabilityAgent(
                'requirements-test-traceability-agent',
                'requirementsTestTraceabilityAgent',
                ['testTraceability', 'traceabilityNetwork'],
              ),
            ],
          },
          {
            id: 'test-case-version-management-delivery',
            localeKey: 'testCaseVersionManagementDelivery',
            agents: [
              capabilityAgent(
                'test-version-delivery-agent',
                'testVersionDeliveryAgent',
                ['versionManagement', 'testAssetManagement'],
              ),
            ],
          },
        ],
      },
    ],
  },
]
