import baicLogo from '../assets/organizations/BAIC.svg'
import huaweiLogo from '../assets/organizations/huawei.svg'
import nsfcLogo from '../assets/organizations/NSFC.png'

export type ProjectType = 'research' | 'industry'

export interface ProjectDefinition {
  id: string
  localeKey: string
  type: ProjectType
  startYear?: number
  endYear?: number
  projectNumber?: string
  statusKey?: string
  tagKeys: readonly string[]
  logo?: string
  organizationKey?: 'nsfc' | 'huawei' | 'baic'
  compact?: boolean
  placeholder?: boolean
}

export const researchProjects: readonly ProjectDefinition[] = [
  {
    id: 'domain-assets-requirements-driven-construction-evolution',
    localeKey: 'domainAssetsRequirementsDrivenConstructionEvolution',
    type: 'research',
    startYear: 2026,
    endYear: 2029,
    projectNumber: '92582203',
    tagKeys: ['nsfc', 'keyProject', 'requirementsDriven', 'trustworthySoftware'],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
  },
  {
    id: 'intelligent-synthesis-embedded-software-ip',
    localeKey: 'intelligentSynthesisEmbeddedSoftwareIp',
    type: 'research',
    startYear: 2022,
    endYear: 2026,
    projectNumber: '62192731',
    tagKeys: ['nsfc', 'majorProject', 'embeddedSoftware', 'intelligentSynthesis'],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
  },
  {
    id: 'user-intent-iot-service-logic-generation',
    localeKey: 'userIntentIotServiceLogicGeneration',
    type: 'research',
    startYear: 2022,
    endYear: 2026,
    projectNumber: '62272166',
    tagKeys: ['nsfc', 'iot', 'userIntent', 'automaticGeneration'],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
  },
  {
    id: 'mobile-cps-spatiotemporal-requirements-satisfiability',
    localeKey: 'mobileCpsSpatiotemporalRequirementsSatisfiability',
    type: 'research',
    startYear: 2021,
    endYear: 2023,
    projectNumber: '20ZR1416000',
    tagKeys: ['shanghaiNaturalScienceFoundation', 'cps', 'spatiotemporalRequirements', 'formalVerification'],
  },
  {
    id: 'software-reliability-safety-analysis-verification',
    localeKey: 'softwareReliabilitySafetyAnalysisVerification',
    type: 'research',
    startYear: 2021,
    endYear: 2023,
    projectNumber: 'JSZL2020601B003',
    tagKeys: ['sastind', 'reliability', 'safety', 'analysisVerification'],
  },
  {
    id: 'open-source-ecosystem-internetware',
    localeKey: 'openSourceEcosystemInternetware',
    type: 'research',
    projectNumber: '2015CB352200',
    statusKey: 'accepted2019',
    tagKeys: ['program973', 'internetware', 'openSourceEcosystem'],
  },
  {
    id: 'environment-knowledge-trustworthy-requirements-engineering',
    localeKey: 'environmentKnowledgeTrustworthyRequirementsEngineering',
    type: 'research',
    tagKeys: ['nsfc', 'majorResearchPlan', 'requirementsEngineering', 'softwareTrustworthiness'],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
  },
  {
    id: 'internetware-requirements-driven-knowledge-services',
    localeKey: 'internetwareRequirementsDrivenKnowledgeServices',
    type: 'research',
    tagKeys: ['nsfc', 'keyProject', 'requirementsDriven', 'knowledgeServices'],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
  },
  {
    id: 'nsfc-distinguished-young-scholars-placeholder',
    localeKey: 'nsfcDistinguishedYoungScholarsPlaceholder',
    type: 'research',
    tagKeys: [],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
    compact: true,
    placeholder: true,
  },
  {
    id: 'knowledge-based-internetware-requirements-modeling',
    localeKey: 'knowledgeBasedInternetwareRequirementsModeling',
    type: 'research',
    startYear: 2003,
    endYear: 2007,
    projectNumber: '2002CB312004',
    tagKeys: ['program973', 'requirementsModeling', 'internetware', 'knowledgeDriven'],
    compact: true,
  },
  {
    id: 'software-feature-interaction-interoperability',
    localeKey: 'softwareFeatureInteractionInteroperability',
    type: 'research',
    startYear: 2003,
    endYear: 2006,
    projectNumber: '60233010',
    tagKeys: ['nsfc', 'majorProject', 'featureInteraction', 'interoperability'],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
    compact: true,
  },
  {
    id: 'information-knowledge-sharing-system-theory',
    localeKey: 'informationKnowledgeSharingSystemTheory',
    type: 'research',
    startYear: 2002,
    endYear: 2004,
    projectNumber: '2001CCA03000',
    tagKeys: ['knowledgeSharing', 'systemTheory'],
    compact: true,
  },
  {
    id: 'domain-modeling-requirements-engineering',
    localeKey: 'domainModelingRequirementsEngineering',
    type: 'research',
    startYear: 2001,
    endYear: 2003,
    projectNumber: '2001AA113130',
    tagKeys: ['program863', 'domainModeling', 'requirementsEngineering'],
    compact: true,
  },
  {
    id: 'formal-knowledge-based-requirements-elicitation',
    localeKey: 'formalKnowledgeBasedRequirementsElicitation',
    type: 'research',
    startYear: 2000,
    endYear: 2002,
    projectNumber: '69983010',
    tagKeys: ['nsfc', 'formalMethods', 'requirementsElicitation', 'knowledgeDriven'],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
    compact: true,
  },
  {
    id: 'ontology-based-requirements-elicitation',
    localeKey: 'ontologyBasedRequirementsElicitation',
    type: 'research',
    startYear: 2000,
    endYear: 2002,
    tagKeys: ['ontology', 'requirementsElicitation', 'domainKnowledge'],
    compact: true,
  },
  {
    id: 'knowledge-based-automatic-requirements-acquisition',
    localeKey: 'knowledgeBasedAutomaticRequirementsAcquisition',
    type: 'research',
    startYear: 1999,
    endYear: 2000,
    projectNumber: 'J9907',
    tagKeys: ['knowledgeDriven', 'requirementsElicitation', 'automaticAcquisition'],
    compact: true,
  },
  {
    id: 'practical-commonsense-knowledge',
    localeKey: 'practicalCommonsenseKnowledge',
    type: 'research',
    startYear: 1998,
    endYear: 2001,
    projectNumber: '69733020',
    tagKeys: ['nsfc', 'commonsenseKnowledge', 'knowledgeRepresentation'],
    logo: nsfcLogo,
    organizationKey: 'nsfc',
    compact: true,
  },
  {
    id: 'domain-analysis-software-development',
    localeKey: 'domainAnalysisSoftwareDevelopment',
    type: 'research',
    startYear: 1998,
    endYear: 2000,
    projectNumber: '98-780-01-07-09',
    tagKeys: ['domainAnalysis', 'softwareReuse', 'softwareDevelopment'],
    compact: true,
  },
  {
    id: 'ontology-domain-analysis-modeling',
    localeKey: 'ontologyDomainAnalysisModeling',
    type: 'research',
    startYear: 1998,
    endYear: 2000,
    projectNumber: '863-306-ZT02-01-2',
    tagKeys: ['program863', 'ontology', 'domainModeling'],
    compact: true,
  },
]

export const industryProjects: readonly ProjectDefinition[] = [
  {
    id: 'huawei-spec-quality-clarification-optimization',
    localeKey: 'huaweiSpecQualityClarificationOptimization',
    type: 'industry',
    tagKeys: ['huawei', 'spec', 'qualityInspection', 'requirementsClarification', 'requirementsOptimization'],
    logo: huaweiLogo,
    organizationKey: 'huawei',
  },
  {
    id: 'baic-in-vehicle-requirements-modeling-analysis',
    localeKey: 'baicInVehicleRequirementsModelingAnalysis',
    type: 'industry',
    tagKeys: ['baic', 'inVehicleSoftware', 'requirementsModeling', 'intelligentAnalysis'],
    logo: baicLogo,
    organizationKey: 'baic',
  },
]
