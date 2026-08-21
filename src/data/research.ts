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
    tags: ['artificialIntelligence', 'requirementsEngineering', 'knowledgeEngineering'],
  },
  {
    key: 're4ai',
    tags: ['requirementsEngineering', 'agent', 'formalMethods'],
  },
  {
    key: 'softwareGeneration',
    tags: ['artificialIntelligence', 'requirementsEngineering', 'formalMethods'],
  },
  {
    key: 'domainOntology',
    tags: ['ontology', 'knowledgeEngineering', 'artificialIntelligence'],
  },
] as const
