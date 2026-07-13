export interface ToolLinkDefinition {
  id: string
  href: string
  labelLocaleKey?: string
}

export interface ToolDefinition {
  id: string
  titleLocaleKey: string
  descriptionLocaleKey: string
  tags: readonly string[]
  links: readonly ToolLinkDefinition[]
}

export interface ToolCategoryDefinition {
  id: string
  titleLocaleKey: string
  descriptionLocaleKey: string
  tools: readonly ToolDefinition[]
}

export const toolCategories: readonly ToolCategoryDefinition[] = [
  {
    id: 'problem-frames-modeling',
    titleLocaleKey: 'problemFramesModeling',
    descriptionLocaleKey: 'problemFramesModeling',
    tools: [
      {
        id: 'text-based-problem-description',
        titleLocaleKey: 'textBasedProblemDescription',
        descriptionLocaleKey: 'textBasedProblemDescription',
        tags: ['xtext', 'problemFrames', 'textModeling', 'diagramGeneration'],
        links: [{ id: 'online', href: 'http://re4cps.org:3000' }],
      },
      {
        id: 'diagram-based-problem-description',
        titleLocaleKey: 'diagramBasedProblemDescription',
        descriptionLocaleKey: 'diagramBasedProblemDescription',
        tags: ['problemFrames', 'ontology', 'diagramModeling', 'environmentKnowledge'],
        links: [{ id: 'online', href: 'http://re4cps.org/PF2-web1' }],
      },
      {
        id: 'synchronization-based-problem-description',
        titleLocaleKey: 'synchronizationBasedProblemDescription',
        descriptionLocaleKey: 'synchronizationBasedProblemDescription',
        tags: [
          'collaborativeModeling',
          'synchronization',
          'problemFrames',
          'conflictResolution',
        ],
        links: [{ id: 'online', href: 'http://re4cps.org/syn' }],
      },
      {
        id: 'synchronization-based-istar-tool',
        titleLocaleKey: 'synchronizationBasedIStarTool',
        descriptionLocaleKey: 'synchronizationBasedIStarTool',
        tags: ['iStar', 'goalModeling', 'collaborativeModeling', 'requirementsAnalysis'],
        links: [{ id: 'online', href: 'http://www.re4cps.org:8080/tool/index.html' }],
      },
    ],
  },
  {
    id: 'problem-decomposition-progression',
    titleLocaleKey: 'problemDecompositionProgression',
    descriptionLocaleKey: 'problemDecompositionProgression',
    tools: [
      {
        id: 'problem-projection',
        titleLocaleKey: 'problemProjection',
        descriptionLocaleKey: 'problemProjection',
        tags: ['problemProjection', 'problemDecomposition', 'problemFrames', 'scenario'],
        links: [{ id: 'online', href: 'http://re4cps.org/PF2-web2' }],
      },
      {
        id: 'problem-progression',
        titleLocaleKey: 'problemProgression',
        descriptionLocaleKey: 'problemProgression',
        tags: [
          'problemProgression',
          'specificationGeneration',
          'domainAssumption',
          'requirementsAnalysis',
        ],
        links: [{ id: 'online', href: 'http://re4cps.org:8084/julyserver/' }],
      },
    ],
  },
  {
    id: 'timing-consistency-verification',
    titleLocaleKey: 'timingConsistencyVerification',
    descriptionLocaleKey: 'timingConsistencyVerification',
    tools: [
      {
        id: 'timing-requirements-consistency-analysis',
        titleLocaleKey: 'timingRequirementsConsistencyAnalysis',
        descriptionLocaleKey: 'timingRequirementsConsistencyAnalysis',
        tags: ['timingRequirements', 'patternLanguage', 'smt', 'consistencyVerification'],
        links: [{ id: 'online', href: 'http://re4cps.org/consistent/' }],
      },
      {
        id: 'sequence-diagram-consistency-analysis',
        titleLocaleKey: 'sequenceDiagramConsistencyAnalysis',
        descriptionLocaleKey: 'sequenceDiagramConsistencyAnalysis',
        tags: ['ccsl', 'sequenceDiagram', 'myCcsl', 'clockGraph', 'smt'],
        links: [{ id: 'online', href: 'http://re4cps.org/consistentSD/' }],
      },
      {
        id: 'environment-model-requirements-consistency-verification',
        titleLocaleKey: 'environmentModelConsistencyVerification',
        descriptionLocaleKey: 'environmentModelConsistencyVerification',
        tags: ['environmentModel', 'clockGraph', 'consistencyVerification', 'cps'],
        links: [{ id: 'online', href: 'http://re4cps.org/Env-Consistency' }],
      },
      {
        id: 'ec-check',
        titleLocaleKey: 'ecCheck',
        descriptionLocaleKey: 'ecCheck',
        tags: ['rtsp', 'ecGraph', 'smt', 'z3', 'realTimeRequirements'],
        links: [{ id: 'online', href: 'http://re4cps.org/EC-Check' }],
      },
      {
        id: 'timing-requirements-modeling-verification',
        titleLocaleKey: 'timingRequirementsModelingVerification',
        descriptionLocaleKey: 'timingRequirementsModelingVerification',
        tags: ['problemDiagram', 'scenarioGraph', 'ccsl', 'z3', 'cvc4'],
        links: [{ id: 'online', href: 'http://re4cps.org/PF2-web3' }],
      },
    ],
  },
  {
    id: 'security-privacy-analysis',
    titleLocaleKey: 'securityPrivacyAnalysis',
    descriptionLocaleKey: 'securityPrivacyAnalysis',
    tools: [
      {
        id: 'security-privacy-analysis-tools',
        titleLocaleKey: 'securityPrivacyAnalysisTools',
        descriptionLocaleKey: 'securityPrivacyAnalysisTools',
        tags: [
          'securityRequirements',
          'privacyRequirements',
          'riskAnalysis',
          'openArgue',
          'prism',
        ],
        links: [
          {
            id: 'open-argue',
            href: 'http://sead.open.ac.uk/risa',
            labelLocaleKey: 'openArgue',
          },
          {
            id: 'prism-demo',
            href: 'https://github.com/yijunyu/demo-riskexplore',
            labelLocaleKey: 'prismDemo',
          },
        ],
      },
    ],
  },
  {
    id: 'iot-smart-home-analysis',
    titleLocaleKey: 'iotSmartHomeAnalysis',
    descriptionLocaleKey: 'iotSmartHomeAnalysis',
    tools: [
      {
        id: 'device-scheduling-generator-simulator',
        titleLocaleKey: 'deviceSchedulingGeneratorSimulator',
        descriptionLocaleKey: 'deviceSchedulingGeneratorSimulator',
        tags: ['iot', 'deviceScheduling', 'requirementsGeneration', 'scenarioSimulation'],
        links: [{ id: 'online', href: 'http://re4cps.org:8008/' }],
      },
      {
        id: 'taps-simulator',
        titleLocaleKey: 'tapsSimulator',
        descriptionLocaleKey: 'tapsSimulator',
        tags: [
          'tapRules',
          'smartHome',
          'staticAnalysis',
          'dynamicSimulation',
          'conflictDetection',
        ],
        links: [{ id: 'online', href: 'http://re4cps.org:8066/' }],
      },
    ],
  },
]
