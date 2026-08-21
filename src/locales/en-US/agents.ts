export default {
  title: 'Requirements Engineering Agents',
  description:
    'Agents and tools for requirements development, requirements evolution, historical requirements document processing, and requirements-driven testing.',
  viewDirection: 'View Related Agents',
  backToOverview: 'Back to Agent Overview',
  capabilityNavigation: 'Capability Navigation',
  categories: {
    softwareRequirementsDevelopment: {
      title: 'Software Requirements Development',
      description:
        'Covers requirements extraction, clarification, completion, specification, document generation, and quality inspection across the development lifecycle from elicitation to delivery review.',
    },
    requirementsChangeEvolution: {
      title: 'Requirements Change and Evolution',
      description:
        'Addresses multi-source change identification, specification evolution, impact analysis, baseline management, and traceability to support the continuous evolution of requirements and related software artifacts.',
    },
    historicalRequirementsDocumentProcessing: {
      title: 'Historical Requirements Document Processing',
      description:
        'Covers document segmentation and parsing, terminology unification, information extraction, requirements modeling, and traceability construction to support the reuse of existing requirements knowledge.',
    },
    testCaseGeneration: {
      title: 'Requirements-Driven Test Case Generation',
      description:
        'Builds test conditions and scenarios from requirements and engineering knowledge, generates and evaluates test cases, and supports requirements-change-driven test evolution and asset management.',
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
  nodeDescriptions: {
    requirementsFunctionalLogicCompletion:
      'Identifies business-logic gaps across use cases, data entities, and operations, then completes missing functional requirements.',
    softwareRequirementsGenerationBasedOnUserRequirements:
      'Transforms user goals, interview findings, and scenario descriptions into structured and verifiable software requirements specifications.',
    requirementsExtraction:
      'Identifies requirement elements, constraints, and relationships from interviews, domain materials, and natural-language documents.',
    requirementsClarification:
      'Resolves ambiguity through contextual analysis and targeted questions, clarifying requirement intent, scope, and constraints.',
    requirementsCompletionRecommendation:
      'Detects requirement gaps using business logic, quality attributes, and domain knowledge, and provides traceable completion recommendations.',
    abnormalScenarioCompletion:
      'Systematically identifies exceptional branches in normal business flows and completes the corresponding detection, handling, and recovery requirements.',
    humanSafetyRequirementsCompletionRecommendation:
      'Analyzes potential risks to people and recommends requirements for prevention, protection, and failure response.',
    reliabilityRequirementsCompletionRecommendation:
      'Identifies missing reliability constraints related to faults, availability, and recovery, and provides completion recommendations.',
    informationSecurityRequirementsCompletionRecommendation:
      'Analyzes assets, threats, and access scenarios to identify security risks and complete actionable security requirements.',
    requirementsSpecification:
      'Organizes requirements knowledge into clear, consistent, and verifiable specifications for design, implementation, and testing.',
    softwareRequirementsGenerationBasedOnBusinessRules:
      'Parses conditions, actions, and constraints in business rules to generate concrete software requirements specifications.',
    fdirRequirementsGenerationBasedOnFeedforwardFeedbackControl:
      'Combines fault propagation, system deviations, and recovery strategies to generate fault detection, isolation, and recovery requirements.',
    softwareRequirementsGenerationBasedOnSystemRequirements:
      'Refines system-level goals, interfaces, and constraints into allocatable and traceable software requirements.',
    requirementsDocumentGeneration:
      'Generates complete requirements documents by coordinating document structure, content organization, and expression conventions.',
    requirementsDocumentStructurePlanning:
      'Plans chapter hierarchy, content scope, and organization according to the project type and delivery standard.',
    requirementsDocumentContentGeneration:
      'Generates section content from structured requirements information while preserving context and terminology consistency.',
    requirementsDocumentStructureCompletion:
      'Detects structural gaps and completes missing sections, entries, and necessary cross-references.',
    requirementsDocumentFormattingEnhancement:
      'Standardizes numbering, tables, diagrams, and layout to improve document conformity and readability.',
    requirementsDocumentQualityInspection:
      'Assesses requirements documents for consistency, completeness, compliance, and reviewability.',
    requirementsDocumentConsistencyCheck:
      'Identifies inconsistencies among requirements and across textual statements, models, and constraints.',
    requirementsDocumentSemanticConflictDetection:
      'Analyzes semantic relationships among terms, actors, actions, and constraints to detect contradictory meanings.',
    requirementsDocumentLogicalConflictDetection:
      'Transforms conditions, states, and temporal constraints into analyzable representations to detect logically unsatisfiable requirement combinations.',
    requirementsDocumentCompletenessCheck:
      'Identifies omissions in requirements documents from the perspectives of business-scenario and quality-attribute coverage.',
    requirementsDocumentFunctionalScenarioCoverageCompletenessCheck:
      'Checks whether functional scenarios, steps, and data flows fully cover the intended business behavior.',
    requirementsDocumentFunctionalSafetyCoverageCompletenessCheck:
      'Checks whether hazardous scenarios, safety constraints, and risk controls are adequately covered.',
    requirementsDocumentInformationSecurityCoverageCompletenessCheck:
      'Checks the completeness of requirements concerning assets, threats, permissions, and protective measures.',
    requirementsDocumentReliabilityCoverageCompletenessCheck:
      'Checks the completeness of fault-tolerance, availability, recovery, and degradation requirements.',
    requirementsDocumentPerformanceCoverageCompletenessCheck:
      'Checks whether response time, throughput, resource usage, and capacity boundaries are fully specified.',
    reviewAssistantAgent:
      'Assists reviewers in locating ambiguous, inconsistent, unverifiable, or insufficiently justified requirements statements.',
    complianceReviewAgent:
      'Checks requirements documents against standards, regulations, and organizational rules, including the coverage of supporting evidence.',
    differenceComparison:
      'Compares requirement versions or sources to identify additions, deletions, and modifications.',
    potentialChangeSourceIdentificationBasedOnRequirementsDocuments:
      'Identifies potential change sources from dependencies, assumptions, and unstable information in requirements documents.',
    realWorldChangeSourceAndChangeIdentification:
      'Analyzes evolving user, business, and environmental conditions to identify changes that may affect requirements.',
    userRequirementsChangeIdentification:
      'Identifies how changes in user goals, preferences, and usage scenarios affect existing requirements.',
    businessRuleChangeIdentification:
      'Analyzes updates to policies, processes, and business constraints to locate requirements that must change.',
    externalEnvironmentChangeIdentification:
      'Identifies requirements adjustments caused by changes in regulations, technologies, devices, and operating environments.',
    specificationEvolutionForMultiSourceRequirementsChanges:
      'Coordinates changes from multiple sources while evolving specifications with consistent content, clear boundaries, and traceable relationships.',
    specificationEvolutionBasedOnBusinessRuleChanges:
      'Maps business-rule changes to relevant specification entries and updates the corresponding conditions and constraints.',
    specificationEvolutionBasedOnUserRequirementsChanges:
      'Updates functional, interaction, and quality requirements in response to user changes while preserving specification consistency.',
    specificationEvolutionBasedOnExternalEnvironmentChanges:
      'Updates interfaces, constraints, assumptions, and adaptation requirements in response to environmental changes.',
    changeImpactAnalysis:
      'Uses dependencies and traceability links to analyze the effects of requirement changes on design, code, tests, and other requirements.',
    multiSourceRequirementsSpecificationChangeFusion:
      'Aligns, disambiguates, resolves conflicts among, and integrates changes from different stakeholders and documents.',
    baselineManagement:
      'Maintains requirements baselines, version states, and approval records so that changes remain controlled and auditable.',
    changeTraceability:
      'Establishes bidirectional traceability among change rationales, changed requirements, and affected artifacts.',
    activityDiagramBasedBehavioralModeling:
      'Extracts activities, branches, and concurrency from requirement scenarios to construct activity-diagram models.',
    sequenceDiagramBasedBehavioralModeling:
      'Identifies participants and message sequences to construct sequence diagrams of collaborative behavior.',
    stateDiagramBasedBehavioralModeling:
      'Extracts states, events, conditions, and transitions to construct state-based behavioral models.',
    documentSegmentation:
      'Segments long historical requirements documents using sections, semantic topics, and structural cues.',
    documentParsing:
      'Parses text, tables, numbering, and hierarchical structures into representations suitable for further processing.',
    terminologyUnification:
      'Builds a unified glossary of terms and abbreviations and identifies inconsistent domain expressions.',
    invalidContentFiltering:
      'Filters headers, footers, repeated content, and non-requirement information to reduce downstream processing noise.',
    requirementsInformationExtractionAndFusion:
      'Extracts requirement elements from multiple documents, aligns their semantics, and fuses them into structured requirements information.',
    requirementsModeling:
      'Transforms textual requirements into functional, behavioral, and data models for analysis and verification.',
    functionalModeling:
      'Organizes system functions, actors, and information flows into a structured representation of functional scope.',
    functionalModelingBasedOnUseCaseModels:
      'Identifies actors, use cases, and their relationships to build use-case models covering primary business goals.',
    functionalModelingBasedOnDataFlowDiagrams:
      'Extracts processes, data stores, and external entities to build data-flow-based functional models.',
    behavioralModeling:
      'Represents activities, interactions, states, and control flows found in requirement scenarios.',
    flowchartGeneration:
      'Generates flowcharts from step and condition relationships to communicate business processing paths.',
    dataModeling:
      'Identifies business entities, attributes, and relationships to form data models for requirements analysis.',
    dataModelingBasedOnErDiagrams:
      'Extracts entities, attributes, and relationships from requirements text to construct E-R data models.',
    requirementsRelationshipIdentification:
      'Identifies dependencies, refinements, conflicts, duplication, and associations among requirements.',
    highLevelToSoftwareRequirementsTraceabilityNetworkConstruction:
      'Connects high-level goals, system requirements, and software requirements in a navigable traceability network.',
    testConditionScenarioConstruction:
      'Constructs testable conditions and scenarios from requirement constraints and business processes.',
    testConditionDerivation:
      'Derives preconditions, triggers, input constraints, and expected outcomes as explicit test conditions.',
    normalExceptionalScenarioGeneration:
      'Generates normal and exceptional test scenarios around primary, alternative, and exception-handling flows.',
    boundaryCombinatorialScenarioGeneration:
      'Combines boundary values and key parameter interactions to construct high-risk test scenarios.',
    testCaseGenerationMethods:
      'Transforms test conditions and scenarios into test cases with steps, data, and expected results.',
    functionalTestCaseGeneration:
      'Generates test cases from functional requirements and business flows to verify expected behavior.',
    apiTestCaseGeneration:
      'Generates API test cases from interface contracts, parameter constraints, and error responses.',
    integrationTestCaseGeneration:
      'Generates integration test cases around component collaboration, interface dependencies, and end-to-end flows.',
    nonFunctionalTestCaseGeneration:
      'Generates tests for quality requirements such as performance, reliability, security, and usability.',
    testQualityCoverageAnalysis:
      'Assesses test-case completeness, executability, effectiveness, and requirements coverage.',
    testCaseCompletenessChecking:
      'Checks whether test cases cover requirements, scenarios, boundaries, and critical exception paths.',
    testCaseExecutabilityChecking:
      'Checks whether test preconditions, data, steps, and expected outcomes are explicit and executable.',
    testCaseRedundancyObsolescenceDetection:
      'Identifies duplicate, obsolete, or version-inconsistent test cases.',
    requirementsScenarioCoverageAnalysis:
      'Establishes coverage links among requirements, business scenarios, and test cases to identify gaps.',
    testBlindSpotRiskIdentification:
      'Uses coverage and risk information to locate critical behaviors and weak areas that remain untested.',
    changeDrivenTestEvolution:
      'Adapts test assets to requirement changes so that tests remain aligned with the latest specification.',
    testImpactScopeAnalysis:
      'Analyzes how requirement changes affect test scenarios, cases, data, and environments.',
    testCaseReuseModification:
      'Identifies reusable test cases and modifies them selectively according to requirement changes.',
    incrementalTestCaseGeneration:
      'Generates incremental tests for new or changed requirements without rebuilding the entire test suite.',
    testAssetManagement:
      'Organizes test cases, data, traceability links, and version information for continuous maintenance and delivery.',
    requirementsTestCaseTraceabilityEstablishment:
      'Establishes bidirectional links between requirements and test cases to support coverage and impact analysis.',
    testCaseVersionManagementDelivery:
      'Manages test-case versions, change records, and delivery baselines to preserve asset traceability.',
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
    humanSafety: 'Human Safety',
    hazardAnalysis: 'Hazard Analysis',
    reliability: 'Reliability',
    systemRequirements: 'System Requirements',
    requirementsRefinement: 'Requirements Refinement',
    documentStructure: 'Document Structure',
    documentGeneration: 'Document Generation',
    documentFormatting: 'Document Formatting',
    semanticAnalysis: 'Semantic Analysis',
    coverageAnalysis: 'Coverage Analysis',
    performanceRequirements: 'Performance Requirements',
    qualityInspection: 'Quality Inspection',
    complianceReview: 'Compliance Review',
    differenceAnalysis: 'Difference Analysis',
    changeIdentification: 'Change Identification',
    changeSource: 'Change Source',
    environmentAnalysis: 'Environment Analysis',
    specificationEvolution: 'Specification Evolution',
    changeImpact: 'Change Impact',
    changeTraceability: 'Change Traceability',
    changeFusion: 'Change Fusion',
    baselineManagement: 'Baseline Management',
    versionManagement: 'Version Management',
    traceabilityNetwork: 'Traceability Network',
    documentSegmentation: 'Document Segmentation',
    documentParsing: 'Document Parsing',
    contentFiltering: 'Content Filtering',
    useCaseModeling: 'Use Case Modeling',
    requirementsModeling: 'Requirements Modeling',
    dataFlowModeling: 'Data Flow Modeling',
    flowchart: 'Flowchart',
    dataModeling: 'Data Modeling',
    relationshipExtraction: 'Relationship Identification',
    testCondition: 'Test Conditions',
    scenarioGeneration: 'Scenario Generation',
    boundaryAnalysis: 'Boundary Analysis',
    combinatorialTesting: 'Combinatorial Testing',
    testGeneration: 'Test Generation',
    apiTesting: 'API Testing',
    integrationTesting: 'Integration Testing',
    nonFunctionalTesting: 'Non-Functional Testing',
    completenessChecking: 'Completeness Checking',
    executabilityChecking: 'Executability Checking',
    redundancyDetection: 'Redundancy Detection',
    testTraceability: 'Test Traceability',
    riskIdentification: 'Risk Identification',
    testImpact: 'Test Impact',
    testReuse: 'Test Reuse',
    testEvolution: 'Test Evolution',
    testAssetManagement: 'Test Asset Management',
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
    humanSafetyRequirementsCompletionAgent: {
      title: 'Human Safety Requirements Completion Agent',
      description:
        'Analyzes system behaviors that may cause personal injury, identifies gaps using hazardous scenarios and safety constraints, and generates safety-requirement completion recommendations.',
    },
    reliabilityRequirementsCompletionAgent: {
      title: 'Reliability Requirements Completion Agent',
      description:
        'Analyzes fault, exception, degradation, and recovery scenarios to identify reliability-requirement gaps and provide traceable completion recommendations.',
    },
    systemRequirementsRefinementAgent: {
      title: 'System-Requirements-Driven Software Requirements Refinement Agent',
      description:
        'Refines system-level goals, interfaces, and constraints into allocatable and verifiable software requirements with links to their upstream sources.',
    },
    requirementsDocumentStructurePlanningAgent: {
      title: 'Requirements Document Structure Planning Agent',
      description:
        'Plans chapter hierarchy, content scope, and organization according to the project type, delivery template, and specification rules.',
    },
    requirementsDocumentContentGenerationAgent: {
      title: 'Requirements Document Content Generation Agent',
      description:
        'Generates section content from structured requirements information while maintaining contextual continuity, consistent terminology, and precise constraints.',
    },
    requirementsDocumentStructureCompletionAgent: {
      title: 'Requirements Document Structure Completion Agent',
      description:
        'Compares document structure with template requirements and completes missing sections, requirement entries, and necessary references.',
    },
    requirementsDocumentFormattingAgent: {
      title: 'Requirements Document Standardization and Formatting Agent',
      description:
        'Standardizes requirement numbering, tables, diagrams, and layout so that documents remain compliant, clear, and readable.',
    },
    semanticConflictDetectionAgent: {
      title: 'Semantic-Analysis-Based Requirements Conflict Detection Agent',
      description:
        'Analyzes terms, actors, actions, and constraint relationships to identify contradictory meanings, ambiguity, and semantic conflicts.',
    },
    functionalSafetyCoverageAgent: {
      title: 'Functional Safety Requirements Coverage Inspection Agent',
      description:
        'Checks requirements against hazardous scenarios, safety goals, and risk controls to identify gaps in functional-safety coverage.',
    },
    informationSecurityCoverageAgent: {
      title: 'Information Security Requirements Coverage Analysis Agent',
      description:
        'Builds coverage relationships across assets, threats, permissions, and safeguards to identify missing security requirements.',
    },
    reliabilityCoverageAgent: {
      title: 'Reliability Requirements Coverage Analysis Agent',
      description:
        'Checks coverage of fault tolerance, availability, recovery, and degradation scenarios to locate unspecified reliability constraints.',
    },
    performanceCoverageAgent: {
      title: 'Performance Requirements Coverage Inspection Agent',
      description:
        'Checks whether response time, throughput, resource usage, and capacity boundaries are fully covered by performance requirements.',
    },
    requirementsReviewAssistant: {
      title: 'Requirements Document Review Assistant Agent',
      description:
        'Helps reviewers locate ambiguous, inconsistent, unverifiable, or unsupported requirements and organizes findings for confirmation.',
    },
    requirementsComplianceReviewAgent: {
      title: 'Requirements Specification Compliance Review Agent',
      description:
        'Checks requirements documents against standards, regulations, and organizational rules to identify nonconformities and missing evidence.',
    },
    requirementsDifferenceAnalysisAgent: {
      title: 'Requirements Version Difference Analysis Agent',
      description:
        'Aligns requirements from different versions or sources, identifies additions, deletions, and modifications, and produces structured differences.',
    },
    potentialChangeSourceIdentificationAgent: {
      title: 'Requirements-Document-Based Potential Change Source Identification Agent',
      description:
        'Analyzes dependencies, assumptions, and unstable information in requirements documents to identify likely sources of future change.',
    },
    userRequirementsChangeIdentificationAgent: {
      title: 'User Requirements Change Identification Agent',
      description:
        'Analyzes changes in user goals, preferences, and usage scenarios to locate affected requirements and items requiring confirmation.',
    },
    businessRuleChangeIdentificationAgent: {
      title: 'Business Rule Change Identification Agent',
      description:
        'Compares changes in policies, processes, and business constraints to identify software requirements that must be updated.',
    },
    externalEnvironmentChangeIdentificationAgent: {
      title: 'External Environment Change Identification Agent',
      description:
        'Monitors changes in regulations, technologies, devices, and operating environments and analyzes their effects on requirement scope and constraints.',
    },
    businessRuleSpecificationEvolutionAgent: {
      title: 'Business-Rule-Driven Requirements Specification Evolution Agent',
      description:
        'Maps business-rule changes to relevant specification entries and updates conditions, actions, and constraints while preserving consistency.',
    },
    userRequirementsSpecificationEvolutionAgent: {
      title: 'User-Requirements-Change-Driven Specification Evolution Agent',
      description:
        'Adjusts functional, interaction, and quality requirements as user goals and scenarios evolve while maintaining cross-version consistency.',
    },
    environmentSpecificationEvolutionAgent: {
      title: 'Environment-Change-Driven Requirements Specification Evolution Agent',
      description:
        'Updates interfaces, constraints, assumptions, and adaptation requirements in response to environmental changes and records the rationale.',
    },
    requirementsChangeImpactAnalysisAgent: {
      title: 'Traceability-Based Requirements Change Impact Analysis Agent',
      description:
        'Uses requirement dependencies and traceability networks to assess change effects on other requirements, design, code, and tests.',
    },
    multiSourceChangeFusionAgent: {
      title: 'Multi-Source Requirements Change Fusion Agent',
      description:
        'Semantically aligns changes from different stakeholders and documents, identifies conflicts, and integrates them consistently.',
    },
    requirementsBaselineManagementAgent: {
      title: 'Requirements Baseline Management Agent',
      description:
        'Maintains requirements baselines, version states, approval records, and change associations for controlled and auditable evolution.',
    },
    requirementsChangeTraceabilityAgent: {
      title: 'Requirements Change Traceability Agent',
      description:
        'Establishes bidirectional links among change rationales, changed requirements, and affected artifacts, and checks trace completeness.',
    },
    requirementsDocumentSegmentationAgent: {
      title: 'Historical Requirements Document Semantic Segmentation Agent',
      description:
        'Segments long historical documents using chapter structure and semantic topics while preserving hierarchy and contextual links.',
    },
    historicalRequirementsDocumentParsingAgent: {
      title: 'Historical Requirements Document Structure Parsing Agent',
      description:
        'Parses text, tables, numbering, and chapter hierarchies to transform heterogeneous historical documents into structured representations.',
    },
    requirementsContentFilteringAgent: {
      title: 'Requirements Document Valid Content Filtering Agent',
      description:
        'Detects headers, footers, repeated passages, and non-requirement information while retaining content relevant to requirements analysis.',
    },
    useCaseModelingAgent: {
      title: 'Use-Case-Based Functional Modeling Agent',
      description:
        'Identifies actors, use cases, and their relationships in requirements documents to build models covering primary business goals.',
    },
    dataFlowModelingAgent: {
      title: 'Data-Flow-Based Functional Modeling Agent',
      description:
        'Extracts processes, data stores, external entities, and data flows to generate data-flow-based functional models.',
    },
    requirementsFlowchartGenerationAgent: {
      title: 'Requirements Flowchart Generation Agent',
      description:
        'Parses business steps, decisions, and loops to generate verifiable flowcharts from requirements descriptions.',
    },
    erDataModelingAgent: {
      title: 'E-R-Diagram-Based Requirements Data Modeling Agent',
      description:
        'Extracts entities, attributes, and relationships from requirements text to construct E-R data models for business analysis.',
    },
    requirementsRelationshipIdentificationAgent: {
      title: 'Requirements Relationship Identification Agent',
      description:
        'Analyzes requirement semantics and context to identify dependencies, refinements, conflicts, duplication, and associations.',
    },
    requirementsTraceabilityNetworkAgent: {
      title: 'High-Level-to-Software Requirements Traceability Network Agent',
      description:
        'Connects high-level goals, system requirements, and software requirements in a queryable and explainable bidirectional traceability network.',
    },
    testConditionDerivationAgent: {
      title: 'Requirements-Constraint-Driven Test Condition Derivation Agent',
      description:
        'Extracts preconditions, triggers, input constraints, and expected outcomes from requirements to produce explicit test conditions.',
    },
    normalExceptionalScenarioGenerationAgent: {
      title: 'Normal and Exceptional Test Scenario Generation Agent',
      description:
        'Generates connected normal and exceptional test scenarios around primary flows, alternative flows, and exception-handling requirements.',
    },
    boundaryCombinatorialScenarioAgent: {
      title: 'Boundary and Combinatorial Test Scenario Design Agent',
      description:
        'Analyzes parameter boundaries and critical interactions to construct test scenarios covering high-risk input combinations.',
    },
    functionalTestGenerationAgent: {
      title: 'Functional-Requirements-Driven Test Case Generation Agent',
      description:
        'Generates functional test cases with steps, data, and expected results from functional requirements and business flows.',
    },
    apiTestGenerationAgent: {
      title: 'Interface-Contract-Driven API Test Generation Agent',
      description:
        'Parses interface contracts, parameter constraints, and error responses to generate normal, boundary, and exceptional API tests.',
    },
    integrationTestGenerationAgent: {
      title: 'Component-Collaboration-Driven Integration Test Generation Agent',
      description:
        'Generates integration test steps and verification points around component interactions, interface dependencies, and end-to-end flows.',
    },
    nonFunctionalTestGenerationAgent: {
      title: 'Quality-Requirements-Driven Non-Functional Test Generation Agent',
      description:
        'Transforms performance, reliability, security, usability, and other quality requirements into executable non-functional tests.',
    },
    testCompletenessCheckingAgent: {
      title: 'Test Case Completeness Checking Agent',
      description:
        'Checks whether test cases fully cover requirements, business scenarios, boundary conditions, and critical exception paths.',
    },
    testExecutabilityCheckingAgent: {
      title: 'Test Case Executability Checking Agent',
      description:
        'Analyzes test preconditions, data, steps, and expected results to identify omissions or ambiguity that prevent execution.',
    },
    testRedundancyObsolescenceAgent: {
      title: 'Test Case Redundancy and Obsolescence Detection Agent',
      description:
        'Identifies duplicate, obsolete, or version-inconsistent test cases and provides recommendations for consolidation.',
    },
    requirementsScenarioCoverageAgent: {
      title: 'Requirements-to-Scenario Coverage Analysis Agent',
      description:
        'Builds coverage relationships among requirements, business scenarios, and test cases to locate unverified or under-covered requirements.',
    },
    testBlindSpotRiskAgent: {
      title: 'Test Blind-Spot and Risk Identification Agent',
      description:
        'Combines coverage results, requirement criticality, and failure risk to identify important areas that remain insufficiently tested.',
    },
    testImpactAnalysisAgent: {
      title: 'Requirements-Change-Driven Test Impact Analysis Agent',
      description:
        'Analyzes the effects of requirement changes on test scenarios, cases, data, and environments to determine the necessary update scope.',
    },
    testCaseReuseAdaptationAgent: {
      title: 'Test Case Reuse and Adaptation Agent',
      description:
        'Identifies reusable test assets and adapts their steps, data, and expected results according to requirement differences.',
    },
    incrementalTestGenerationAgent: {
      title: 'Change-Incremental Test Generation Agent',
      description:
        'Generates incremental tests for new or changed requirements without indiscriminately rebuilding the existing test suite.',
    },
    requirementsTestTraceabilityAgent: {
      title: 'Requirements-to-Test-Case Traceability Construction Agent',
      description:
        'Establishes bidirectional links between requirements and test cases and checks the completeness and consistency of coverage paths.',
    },
    testVersionDeliveryAgent: {
      title: 'Test Case Version and Delivery Management Agent',
      description:
        'Maintains test-case versions, change records, and delivery baselines so that test assets remain traceable and aligned with requirements.',
    },
  },
}
