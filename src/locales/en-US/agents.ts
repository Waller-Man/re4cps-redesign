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
    requirementsFunctionalLogicCompletion: 'Requirements Functional Logic Completion',
    softwareRequirementsGenerationBasedOnUserRequirements:
      'Software Requirements Generation Based on User Requirements',
    requirementsExtraction: 'Requirements Extraction',
    requirementsClarification: 'Requirements Clarification',
    abnormalScenarioCompletion: 'Abnormal Scenario Completion',
    humanSafetyRequirementsCompletionRecommendation:
      'Human Safety Requirements Completion Recommendation',
    reliabilityRequirementsCompletionRecommendation:
      'Reliability Requirements Completion Recommendation',
    informationSecurityRequirementsCompletionRecommendation:
      'Information Security Requirements Completion Recommendation',
    softwareRequirementsGenerationBasedOnBusinessRules:
      'Software Requirements Generation Based on Business Rules',
    fdirRequirementsGenerationBasedOnFeedforwardFeedbackControl:
      'FDIR Requirements Generation Based on Feedforward-Feedback Control',
    softwareRequirementsGenerationBasedOnSystemRequirements:
      'Software Requirements Generation Based on System Requirements',
    requirementsDocumentStructurePlanning: 'Requirements Document Structure Planning',
    requirementsDocumentContentGeneration: 'Requirements Document Content Generation',
    requirementsDocumentStructureCompletion: 'Requirements Document Structure Completion',
    requirementsDocumentFormattingEnhancement:
      'Requirements Document Formatting Enhancement',
    requirementsDocumentSemanticConflictDetection:
      'Semantic Conflict Detection for Requirements Documents',
    requirementsDocumentLogicalConflictDetection:
      'Logical Conflict Detection for Requirements Documents',
    requirementsDocumentFunctionalScenarioCoverageCompletenessCheck:
      'Functional Scenario Coverage Completeness Check',
    requirementsDocumentFunctionalSafetyCoverageCompletenessCheck:
      'Functional Safety Coverage Completeness Check',
    requirementsDocumentInformationSecurityCoverageCompletenessCheck:
      'Information Security Coverage Completeness Check',
    requirementsDocumentReliabilityCoverageCompletenessCheck:
      'Reliability Coverage Completeness Check',
    requirementsDocumentPerformanceCoverageCompletenessCheck:
      'Performance Coverage Completeness Check',
    reviewAssistantAgent: 'Review Assistant Agent',
    complianceReviewAgent: 'Compliance Review Agent',
    differenceComparison: 'Difference Comparison',
    potentialChangeSourceIdentificationBasedOnRequirementsDocuments:
      'Potential Change Source Identification Based on Requirements Documents',
    userRequirementsChangeIdentification: 'User Requirements Change Identification',
    businessRuleChangeIdentification: 'Business Rule Change Identification',
    externalEnvironmentChangeIdentification: 'External Environment Change Identification',
    specificationEvolutionBasedOnBusinessRuleChanges:
      'Specification Evolution Based on Business Rule Changes',
    specificationEvolutionBasedOnUserRequirementsChanges:
      'Specification Evolution Based on User Requirements Changes',
    specificationEvolutionBasedOnExternalEnvironmentChanges:
      'Specification Evolution Based on External Environment Changes',
    changeImpactAnalysis: 'Change Impact Analysis',
    multiSourceRequirementsSpecificationChangeFusion:
      'Multi-Source Requirements Specification Change Fusion',
    baselineManagement: 'Baseline Management',
    changeTraceability: 'Change Traceability',
    activityDiagramBasedBehavioralModeling:
      'Behavioral Modeling Based on Activity Diagrams',
    sequenceDiagramBasedBehavioralModeling:
      'Behavioral Modeling Based on Sequence Diagrams',
    stateDiagramBasedBehavioralModeling:
      'Behavioral Modeling Based on State Diagrams',
    documentSegmentation: 'Document Segmentation',
    documentParsing: 'Document Parsing',
    terminologyUnification: 'Terminology Unification',
    invalidContentFiltering: 'Invalid Content Filtering',
    requirementsInformationExtractionAndFusion:
      'Requirements Information Extraction and Fusion',
    functionalModelingBasedOnUseCaseModels:
      'Functional Modeling Based on Use Case Models',
    functionalModelingBasedOnDataFlowDiagrams:
      'Functional Modeling Based on Data Flow Diagrams',
    flowchartGeneration: 'Flowchart Generation',
    dataModelingBasedOnErDiagrams: 'Data Modeling Based on E-R Diagrams',
    requirementsRelationshipIdentification: 'Requirements Relationship Identification',
    highLevelToSoftwareRequirementsTraceabilityNetworkConstruction:
      'High-Level-to-Software Requirements Traceability Network Construction',
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
