import baicLogo from '../assets/organizations/BAIC.svg'
import huaweiLogo from '../assets/organizations/huawei.svg'

export type ProjectType = 'program' | 'research' | 'industry'
export type ProjectStatus = 'ongoing' | 'completed'

export interface ProjectDefinition {
  id: string
  localeKey: string
  type: ProjectType
  status?: ProjectStatus
  startYear?: number
  endYear?: number
  projectNumber?: string
  roleKey?: string
  tagKeys?: readonly string[]
  logo?: string
}

export interface ProjectSection {
  id: string
  localeKey: string
  columns: 2 | 3
  projects: readonly ProjectDefinition[]
}

export interface ResearcherProjects {
  researcherId: string
  localeKey: string
  sections: readonly ProjectSection[]
}

export const researcherProjects: readonly ResearcherProjects[] = [
  {
    researcherId: 'zhi-jin',
    localeKey: 'zhiJin',
    sections: [
      {
        id: 'zhi-jin-major-programs',
        localeKey: 'majorPrograms',
        columns: 3,
        projects: [
          {
            id: 'national-973-program',
            localeKey: 'national973Program',
            type: 'program',
            roleKey: 'chiefScientist',
          },
          {
            id: 'new-generation-ai-major-project',
            localeKey: 'newGenerationAiMajorProject',
            type: 'program',
            roleKey: 'projectLeader',
          },
        ],
      },
    ],
  },
  {
    researcherId: 'xiaohong-chen',
    localeKey: 'xiaohongChen',
    sections: [
      {
        id: 'xiaohong-chen-ongoing-projects',
        localeKey: 'ongoingProjects',
        columns: 3,
        projects: [
          {
            id: 'domain-assets-requirements-driven-construction-evolution',
            localeKey: 'domainAssetsRequirementsDrivenConstructionEvolution',
            type: 'research',
            status: 'ongoing',
            startYear: 2026,
            endYear: 2029,
            projectNumber: '92582203',
            tagKeys: ['nsfc', 'keyProject', 'ongoing'],
          },
          {
            id: 'intelligent-synthesis-embedded-software',
            localeKey: 'intelligentSynthesisEmbeddedSoftware',
            type: 'research',
            status: 'ongoing',
            startYear: 2022,
            endYear: 2026,
            projectNumber: '62192731',
            roleKey: 'participant',
            tagKeys: ['nsfc', 'majorProject', 'participant', 'ongoing'],
          },
          {
            id: 'user-intent-iot-service-logic-generation',
            localeKey: 'userIntentIotServiceLogicGeneration',
            type: 'research',
            status: 'ongoing',
            startYear: 2022,
            endYear: 2026,
            projectNumber: '62272166',
            roleKey: 'principalInvestigator',
            tagKeys: ['nsfc', 'generalProgram', 'principalInvestigator', 'ongoing'],
          },
        ],
      },
      {
        id: 'xiaohong-chen-industry-collaboration',
        localeKey: 'industryCollaboration',
        columns: 2,
        projects: [
          {
            id: 'baic-group-collaboration',
            localeKey: 'baicGroupCollaboration',
            type: 'industry',
            tagKeys: ['industryCollaboration'],
            logo: baicLogo,
          },
          {
            id: 'huawei-collaboration',
            localeKey: 'huaweiCollaboration',
            type: 'industry',
            tagKeys: ['industryCollaboration'],
            logo: huaweiLogo,
          },
        ],
      },
      {
        id: 'xiaohong-chen-recent-projects',
        localeKey: 'recentProjects',
        columns: 3,
        projects: [
          {
            id: 'mobile-cps-spatiotemporal-requirements-satisfiability',
            localeKey: 'mobileCpsSpatiotemporalRequirementsSatisfiability',
            type: 'research',
            status: 'completed',
            startYear: 2021,
            endYear: 2023,
            projectNumber: '20ZR1416000',
            roleKey: 'principalInvestigator',
            tagKeys: ['shanghaiNaturalScienceFoundation', 'principalInvestigator', 'cps'],
          },
          {
            id: 'software-reliability-safety-analysis-verification',
            localeKey: 'softwareReliabilitySafetyAnalysisVerification',
            type: 'research',
            status: 'completed',
            startYear: 2021,
            endYear: 2023,
            projectNumber: 'JSZL2020601B003',
            roleKey: 'taskLeader',
            tagKeys: ['sastind', 'taskLeader', 'reliability', 'safety'],
          },
          {
            id: 'china-children-animation-creativity-platform',
            localeKey: 'chinaChildrenAnimationCreativityPlatform',
            type: 'research',
            status: 'completed',
            startYear: 2022,
            endYear: 2024,
            roleKey: 'principalInvestigator',
            tagKeys: ['scienceTechnologyProject', 'principalInvestigator', 'platformDevelopment'],
          },
        ],
      },
    ],
  },
]
