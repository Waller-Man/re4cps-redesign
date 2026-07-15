export type JoinUsGroupKind = 'whu' | 'ecnu'

export interface JoinUsGroupDefinition {
  id: string
  kind: JoinUsGroupKind
  localeKey: string
  leaderMemberId: string
  directionKeys: readonly string[]
  applicationScenarioKeys?: readonly string[]
  advantageGroupKeys?: readonly string[]
  requirementKeys?: readonly string[]
  postdocResponsibilityKeys?: readonly string[]
  postdocRequirementKeys?: readonly string[]
  postdocQualityKeys?: readonly string[]
  trainingKeys?: readonly string[]
  expectationKeys?: readonly string[]
  strengthKeys?: readonly string[]
  applicationEmail?: string
}

export const joinUsGroups: readonly JoinUsGroupDefinition[] = [
  {
    id: 'zhi-jin-whu',
    kind: 'whu',
    localeKey: 'zhiJinWhu',
    leaderMemberId: 'zhi-jin',
    directionKeys: ['ai4se', 'intelligentRe', 'codeGeneration', 'llmSecurity'],
    advantageGroupKeys: ['studentGuidance', 'researchResources', 'developmentSupport'],
    requirementKeys: ['selfMotivated', 'diligent', 'activeThinking', 'researchInterest'],
    applicationEmail: 'jia.li@whu.edu.cn',
  },
  {
    id: 'xiaohong-chen-ecnu',
    kind: 'ecnu',
    localeKey: 'xiaohongChenEcnu',
    leaderMemberId: 'xiaohong-chen',
    directionKeys: [
      'ai4re',
      're4ai',
      'aiSoftwareGeneration',
      'changeDrivenEvolution',
      'domainOntologyConstruction',
    ],
    applicationScenarioKeys: ['aerospace', 'railTransit', 'safetyCritical', 'aiot'],
    postdocResponsibilityKeys: [
      'independentResearch',
      'systemArchitecture',
      'projectDelivery',
      'teamCollaboration',
    ],
    postdocRequirementKeys: [
      'doctoralDegree',
      'programming',
      'llmOrRobotics',
      'academicWriting',
      'publications',
      'frameworkExperience',
      'eligibility',
    ],
    postdocQualityKeys: ['researchPassion', 'selfDriven', 'collaborative'],
    trainingKeys: [
      'frontierResearch',
      'systematicTraining',
      'engineeringGrowth',
      'publicationSupport',
      'realWorldProjects',
      'collaborationNetwork',
    ],
    expectationKeys: ['softwareInterest', 'learningAbility', 'longTermGoals', 'professionalQualities'],
    strengthKeys: ['frontierTopics', 'richProjects', 'completeTraining', 'openCulture'],
  },
]
