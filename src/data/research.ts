import research1Image from '../assets/home-assets/research1.png'
import research2Image from '../assets/home-assets/research2.png'
import research3Image from '../assets/home-assets/research3.png'
import research4Image from '../assets/home-assets/research4.png'

export const researchKeywordKeys = [
  'requirementsEngineering',
  'knowledgeEngineering',
  'formalMethods',
  'artificialIntelligence',
  'ontology',
  'agent',
] as const

export const researchDirections = [
  {
    key: 'ai4re',
    image: research1Image,
    tags: ['artificialIntelligence', 'requirementsEngineering', 'knowledgeEngineering'],
  },
  {
    key: 're4ai',
    image: research2Image,
    tags: ['requirementsEngineering', 'agent', 'formalMethods'],
  },
  {
    key: 'softwareGeneration',
    image: research3Image,
    tags: ['artificialIntelligence', 'requirementsEngineering', 'formalMethods'],
  },
  {
    key: 'domainOntology',
    image: research4Image,
    tags: ['ontology', 'knowledgeEngineering', 'artificialIntelligence'],
  },
] as const
