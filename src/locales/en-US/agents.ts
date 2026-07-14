export default {
  title: 'Agents',
  description:
    'Requirements engineering agents for requirements development, evolution, historical document processing and test generation.',
  planned: 'Planned',
  placeholderDescription:
    'Agent capabilities for this direction are being planned and organized.',
  categoryPlaceholderDescription:
    'Agent capabilities for this category are being planned and organized.',
  placeholderFooter: 'Related agents and tools will be added later',
  categories: {
    softwareRequirementsDevelopment: {
      title: 'Software Requirements Development',
      description:
        'Requirements development activities spanning elicitation, modeling, analysis, specification, validation and review.',
    },
    requirementsChangeEvolution: {
      title: 'Requirements Change and Evolution',
      description:
        'Requirements completion, negotiation and change analysis, together with requirements-driven software artifact evolution.',
    },
    historicalRequirementsDocumentProcessing: {
      title: 'Historical Requirements Document Processing',
      description:
        'Parsing, extraction, retrieval, reuse and consistency analysis for historical requirements documents.',
    },
    testCaseGeneration: {
      title: 'Test Case Generation',
      description:
        'Generating and evolving test cases from requirements and related engineering knowledge.',
    },
  },
  subcategories: {
    endToEndRequirementsDevelopment: 'End-to-End Requirements Development',
    requirementsModelingBehavioralModelGeneration:
      'Requirements Modeling and Behavioral Model Generation',
    requirementsElicitationUserInterviews:
      'Requirements Elicitation and User Interviews',
    requirementsClarificationAnalysis: 'Requirements Clarification and Analysis',
    requirementsSpecificationDocumentationGeneration:
      'Requirements Specification and Documentation Generation',
    requirementsValidationReview: 'Requirements Validation and Review',
    requirementsClarificationCompletion:
      'Requirements Clarification and Completion',
    requirementsNegotiation: 'Requirements Negotiation',
    requirementsChangeAnalysis: 'Requirements Change Analysis',
    requirementChangeDrivenDesignEvolution:
      'Requirement-Change-Driven Design Evolution',
    requirementChangeDrivenCodeGeneration:
      'Requirement-Change-Driven Code Generation',
    requirementChangeDrivenTestCaseEvolution:
      'Requirement-Change-Driven Test Case Evolution',
    documentParsingStructuring: 'Document Parsing and Structuring',
    requirementElementRelationExtraction:
      'Requirement Element and Relation Extraction',
    semanticRetrievalSimilarRequirementMatching:
      'Semantic Retrieval and Similar Requirement Matching',
    historicalRequirementReuseRecommendation:
      'Historical Requirement Reuse and Recommendation',
    requirementsTraceabilityRecovery: 'Requirements Traceability Recovery',
    conflictDuplicationConsistencyAnalysis:
      'Conflict, Duplication and Consistency Analysis',
  },
  actions: {
    github: 'Use Online',
    demo: 'Online Demo',
    details: 'View Details',
  },
  tags: {
    llm: 'LLM',
    multiAgent: 'Multi-Agent',
    requirementsDevelopment: 'Requirements Development',
    srs: 'SRS',
    requirementsCompletion: 'Requirements Completion',
    businessLogic: 'Business Logic',
    useCase: 'Use Case',
    erDiagram: 'E-R Diagram',
    crud: 'CRUD',
    plantUml: 'PlantUML',
    behaviorModeling: 'Behavior Modeling',
    requirementsAnalysis: 'Requirements Analysis',
  },
  items: {
    iredev: {
      title: 'iReDev: Multi-Agent Requirements Development Platform',
      description:
        'An AI-driven multi-agent requirements development platform that simulates requirements engineering roles and supports an end-to-end workflow from customer interviews to SRS generation.',
    },
    plato: {
      title: 'PLATO: Natural Language Requirements to PlantUML Behavior Diagrams',
      description:
        'An LLM-driven system that transforms natural language requirements into PlantUML behavior diagrams with syntax checking, rendering and export.',
    },
    reqCompleter: {
      title:
        'ReqCompleter: Business-Logic-Driven Iterative Requirements Auto-completion Tool',
      description:
        'ReqCompleter is a requirements auto-completion tool based on use case models, E-R diagrams and CRUD matrices. It detects CRUD gaps and iteratively completes missing requirements to improve completeness and reduce LLM hallucinations.',
    },
  },
}
