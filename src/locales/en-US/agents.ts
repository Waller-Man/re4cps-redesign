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
  nodes: {
    requirementsFunctionalLogicCompletion: 'Requirements Functional Logic Completion',
    softwareRequirementsGenerationBasedOnUserRequirements:
      'Software Requirements Generation Based on User Requirements',
    requirementsExtraction: 'Requirements Extraction',
    requirementsClarification: 'Requirements Clarification',
    requirementsCompletionRecommendation: 'Requirements Completion Recommendation',
    abnormalScenarioCompletion: 'Abnormal Scenario Completion',
    humanSafetyRequirementsCompletionRecommendation:
      'Human Safety Requirements Completion Recommendation',
    reliabilityRequirementsCompletionRecommendation:
      'Reliability Requirements Completion Recommendation',
    informationSecurityRequirementsCompletionRecommendation:
      'Information Security Requirements Completion Recommendation',
    requirementsSpecification: 'Requirements Specification',
    softwareRequirementsGenerationBasedOnBusinessRules:
      'Software Requirements Generation Based on Business Rules',
    fdirRequirementsGenerationBasedOnFeedforwardFeedbackControl:
      'FDIR Requirements Generation Based on Feedforward-Feedback Control',
    softwareRequirementsGenerationBasedOnSystemRequirements:
      'Software Requirements Generation Based on System Requirements',
    requirementsDocumentGeneration: 'Requirements Document Generation',
    requirementsDocumentStructurePlanning:
      'Requirements Document Generation Based on Structure Planning',
    requirementsDocumentContentGeneration:
      'Requirements Document Generation Based on Content Generation',
    requirementsDocumentStructureCompletion:
      'Requirements Document Generation Based on Structure Completion',
    requirementsDocumentFormattingEnhancement:
      'Requirements Document Generation Based on Formatting Enhancement',
    requirementsDocumentQualityInspection: 'Requirements Document Quality Inspection',
    requirementsDocumentConsistencyCheck: 'Requirements Document Consistency Check',
    requirementsDocumentSemanticConflictDetection:
      'Semantic Conflict Detection for Requirements Documents',
    requirementsDocumentLogicalConflictDetection:
      'Logical Conflict Detection for Requirements Documents',
    requirementsDocumentCompletenessCheck: 'Requirements Document Completeness Check',
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
    realWorldChangeSourceAndChangeIdentification:
      'Real-World Change Source and Change Identification',
    userRequirementsChangeIdentification: 'User Requirements Change Identification',
    businessRuleChangeIdentification: 'Business Rule Change Identification',
    externalEnvironmentChangeIdentification: 'External Environment Change Identification',
    specificationEvolutionForMultiSourceRequirementsChanges:
      'Specification Evolution for Multi-Source Requirements Changes',
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
    requirementsModeling: 'Requirements Modeling',
    functionalModeling: 'Functional Modeling',
    functionalModelingBasedOnUseCaseModels:
      'Functional Modeling Based on Use Case Models',
    functionalModelingBasedOnDataFlowDiagrams:
      'Functional Modeling Based on Data Flow Diagrams',
    behavioralModeling: 'Behavioral Modeling',
    flowchartGeneration: 'Flowchart Generation',
    dataModeling: 'Data Modeling',
    dataModelingBasedOnErDiagrams: 'Data Modeling Based on E-R Diagrams',
    requirementsRelationshipIdentification: 'Requirements Relationship Identification',
    highLevelToSoftwareRequirementsTraceabilityNetworkConstruction:
      'High-Level-to-Software Requirements Traceability Network Construction',
    testConditionScenarioConstruction: 'Test Condition and Scenario Construction',
    testConditionDerivation: 'Test Condition Derivation',
    normalExceptionalScenarioGeneration: 'Normal and Exceptional Scenario Generation',
    boundaryCombinatorialScenarioGeneration:
      'Boundary and Combinatorial Scenario Generation',
    testCaseGenerationMethods: 'Test Case Generation',
    functionalTestCaseGeneration: 'Functional Test Case Generation',
    apiTestCaseGeneration: 'API Test Case Generation',
    integrationTestCaseGeneration: 'Integration Test Case Generation',
    nonFunctionalTestCaseGeneration: 'Non-Functional Test Case Generation',
    testQualityCoverageAnalysis: 'Test Quality and Coverage Analysis',
    testCaseCompletenessChecking: 'Test Case Completeness Checking',
    testCaseExecutabilityChecking: 'Test Case Executability Checking',
    testCaseRedundancyObsolescenceDetection:
      'Test Case Redundancy and Obsolescence Detection',
    requirementsScenarioCoverageAnalysis: 'Requirements and Scenario Coverage Analysis',
    testBlindSpotRiskIdentification: 'Test Blind Spot and Risk Identification',
    changeDrivenTestEvolution: 'Change-Driven Test Evolution',
    testImpactScopeAnalysis: 'Test Impact Scope Analysis',
    testCaseReuseModification: 'Test Case Reuse and Modification',
    incrementalTestCaseGeneration: 'Incremental Test Case Generation',
    testAssetManagement: 'Test Asset Management',
    requirementsTestCaseTraceabilityEstablishment:
      'Requirements–Test Case Traceability Establishment',
    testCaseVersionManagementDelivery: 'Test Case Version Management and Delivery',
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
    requirementsUnderstanding: 'Requirements Understanding',
    knowledgeGraph: 'Knowledge Graph',
    requirementsInterview: 'Requirements Interview',
    ontologyDriven: 'Ontology-Driven',
    multiTurnDialogue: 'Multi-turn Dialogue',
    exceptionalScenarios: 'Exceptional Scenarios',
    useCaseAnalysis: 'Use Case Analysis',
    exceptionRemediation: 'Exception Remediation',
    informationSecurity: 'Information Security',
    threatModeling: 'Threat Modeling',
    businessRules: 'Business Rules',
    requirementsGeneration: 'Requirements Generation',
    formalSpecification: 'Formal Specification',
    fdir: 'FDIR',
    faultAnalysis: 'Fault Analysis',
    conflictDetection: 'Conflict Detection',
    constraintSolving: 'Constraint Solving',
    temporalAnalysis: 'Temporal Analysis',
    scenarioModeling: 'Scenario Modeling',
    coverageChecking: 'Coverage Checking',
    terminologyUnification: 'Terminology Unification',
    consistencyChecking: 'Consistency Checking',
    abbreviationStandardization: 'Abbreviation Standardization',
    requirementsExtraction: 'Requirements Extraction',
    informationFusion: 'Information Fusion',
    requirementsMetamodel: 'Requirements Metamodel',
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
        'ReqCompleter builds a closed business-logic loop from use case models, E-R diagrams, and CRUD matrices. It automatically identifies functional-logic gaps, supplements missing use cases and data operations, and improves requirements completeness through iterative checking and hallucination filtering.',
    },
    reqUnderstander: {
      title:
        'ReqUnderstander: Embedded Requirements Semantic Understanding and Knowledge Network Construction Tool',
      description:
        'Centered on a Function–Device–Data–Logic quadruple, ReqUnderstander semantically parses embedded-system requirements documents, extracts key elements, constructs relationships, and performs consistency checks, transforming natural-language requirements into a computable and traceable requirements knowledge network.',
    },
    requirementsInterviewAgent: {
      title: 'Requirements Interview Agent',
      description:
        'Driven by an experience ontology, the agent conducts multi-turn requirements interviews. It prioritizes requirement slots, asks targeted follow-up questions, parses user responses, and applies hierarchical pruning to continuously uncover and clarify implicit requirements, ultimately producing a user-confirmed requirements set.',
    },
    reqExceptionHunter: {
      title:
        'ReqExceptionHunter: Exceptional Scenario Completeness Detection and Remediation Tool',
      description:
        'Starting from the main flow of normal use cases, ReqExceptionHunter identifies exceptional scenarios using actor categories and multidimensional concerns, builds a traceable exception tree, and generates exception-handling requirements such as timeouts, retries, rate limiting, and state validation.',
    },
    informationSecurityRequirementsCompletionAgent: {
      title: 'Information Security Requirements Completion Agent',
      description:
        'The agent identifies system assets and sensitive data from use cases and E-R diagrams, enumerates potential threats using STRIDE, and maps them to actionable security requirements such as authentication, access control, encrypted transmission, and audit logging.',
    },
    businessRuleRequirementsGenerationAgent: {
      title: 'Business-Rule-Based Software Requirements Generation Agent',
      description:
        'The agent classifies and filters business rules, simplifies their semantics, extracts requirements elements, and completes contextual constraints. It identifies implicit dependencies among requirements and ultimately generates complete, concrete, and executable software requirements specifications.',
    },
    fdirRequirementsGenerationAgent: {
      title: 'Feedforward–Feedback-Control-Based FDIR Requirements Generation Agent',
      description:
        'Based on system–environment deviation analysis, a unified functional fault metamodel, and a recovery strategy repository, the agent identifies fault propagation paths, automatically generates fault detection, isolation, and recovery requirements, and establishes complete traceability.',
    },
    constraintSolvingConflictDetectionAgent: {
      title:
        'Constraint-Solving-Based Fine-Grained Requirements Conflict Detection Agent',
      description:
        'The agent automatically extracts modes, transition conditions, variable dependencies, and temporal constraints; constructs mode transition graphs and requirements dependency graphs; encodes requirements scenarios as constraint equations; and uses a solver to identify unsatisfiable conflict scenarios.',
    },
    sceneOpt: {
      title: 'SceneOpt: Functional Scenario Coverage Completeness Checking and Completion Tool',
      description:
        'SceneOpt decomposes use cases into business scenarios and builds a scenario–step–data-flow model. It detects missing steps, broken data flows, and uncovered functional requirements, then improves scenario coverage through targeted completion and iterative review.',
    },
    terminologyConsistencyCheckingAgent: {
      title: 'Terminology Consistency Checking Agent',
      description:
        'The agent automatically extracts domain terms and abbreviations from requirements documents, builds a project terminology dictionary, detects inconsistent synonyms, ambiguous terms, and nonstandard abbreviations, and provides unified correction suggestions.',
    },
    requirementsInformationExtractionFusionAgent: {
      title:
        'Multidimensional Requirements Metamodel-Based Requirements Information Extraction and Fusion Agent',
      description:
        'Using a multidimensional requirements metamodel as a unified semantic backbone, the agent extracts mission, system, and software design information from unstructured development documents and produces a structured requirements model through completeness, correctness, and cross-dimensional consistency checks.',
    },
  },
}
