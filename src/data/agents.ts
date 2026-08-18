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

export type ResearchDirectionKey =
  | 'ai4re'
  | 're4ai'
  | 'softwareGeneration'
  | 'domainOntology'

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

const reqExceptionHunter: AgentDefinition = {
  id: 'reqexceptionhunter',
  localeKey: 'reqExceptionHunter',
  tagKeys: ['exceptionalScenarios', 'useCaseAnalysis', 'exceptionRemediation'],
  links: [],
}

const sceneOpt: AgentDefinition = {
  id: 'sceneopt',
  localeKey: 'sceneOpt',
  tagKeys: ['scenarioModeling', 'coverageChecking', 'requirementsCompletion'],
  links: [],
}

const constraintSolvingConflictDetectionAgent: AgentDefinition = {
  id: 'constraint-solving-conflict-detection-agent',
  localeKey: 'constraintSolvingConflictDetectionAgent',
  tagKeys: ['conflictDetection', 'constraintSolving', 'temporalAnalysis'],
  links: [],
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

const reqUnderstander: AgentDefinition = {
  id: 'requnderstander',
  localeKey: 'reqUnderstander',
  tagKeys: ['llm', 'requirementsUnderstanding', 'knowledgeGraph'],
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

const requirementsInterviewAgent: AgentDefinition = {
  id: 'requirements-interview-agent',
  localeKey: 'requirementsInterviewAgent',
  tagKeys: ['requirementsInterview', 'ontologyDriven', 'multiTurnDialogue'],
  links: [],
}

export const researchAgents: Readonly<
  Record<ResearchDirectionKey, readonly AgentDefinition[]>
> = {
  ai4re: [
    iReDev,
    reqCompleter,
    reqExceptionHunter,
    sceneOpt,
    constraintSolvingConflictDetectionAgent,
  ],
  re4ai: [],
  softwareGeneration: [
    plato,
    businessRuleRequirementsGenerationAgent,
    fdirRequirementsGenerationAgent,
  ],
  domainOntology: [
    reqUnderstander,
    requirementsInformationExtractionFusionAgent,
    terminologyConsistencyCheckingAgent,
    requirementsInterviewAgent,
  ],
}
