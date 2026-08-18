export default {
  title: 'Research Directions',
  subtitle:
    'Intelligent Requirements Engineering and Software Engineering in the LLM Era',
  keywordsLabel: 'Research keywords',
  directionsLabel: 'Research directions',
  representativeAgents: 'Representative Agents & Tools',
  keywords: {
    requirementsEngineering: 'Requirements Engineering',
    knowledgeEngineering: 'Knowledge Engineering',
    formalMethods: 'Formal Methods',
    artificialIntelligence: 'Artificial Intelligence',
    ontology: 'Ontology',
    agent: 'Agent',
  },
  agentActions: {
    github: 'Use Online',
    demo: 'Online Demo',
    details: 'View Details',
  },
  agentTags: {
    llm: 'LLM',
    multiAgent: 'Multi-Agent',
    requirementsDevelopment: 'Requirements Development',
    requirementsCompletion: 'Requirements Completion',
    businessLogic: 'Business Logic',
    exceptionalScenarios: 'Exceptional Scenarios',
    useCaseAnalysis: 'Use Case Analysis',
    exceptionRemediation: 'Exception Remediation',
    scenarioModeling: 'Scenario Modeling',
    coverageChecking: 'Coverage Checking',
    conflictDetection: 'Conflict Detection',
    constraintSolving: 'Constraint Solving',
    temporalAnalysis: 'Temporal Analysis',
    behaviorModeling: 'Behavior Modeling',
    plantUml: 'PlantUML',
    businessRules: 'Business Rules',
    requirementsGeneration: 'Requirements Generation',
    formalSpecification: 'Formal Specification',
    fdir: 'FDIR',
    faultAnalysis: 'Fault Analysis',
    requirementsUnderstanding: 'Requirements Understanding',
    knowledgeGraph: 'Knowledge Graph',
    requirementsExtraction: 'Requirements Extraction',
    informationFusion: 'Information Fusion',
    requirementsMetamodel: 'Requirements Metamodel',
    terminologyUnification: 'Terminology Unification',
    consistencyChecking: 'Consistency Checking',
    abbreviationStandardization: 'Abbreviation Standardization',
    requirementsInterview: 'Requirements Interview',
    ontologyDriven: 'Ontology-Driven',
    multiTurnDialogue: 'Multi-Turn Dialogue',
  },
  agents: {
    iredev: {
      title: 'iReDev: Multi-Agent Requirements Development Platform',
      description:
        'A multi-agent requirements development platform that simulates requirements engineering roles and supports an end-to-end workflow from customer interviews and requirements analysis to SRS generation.',
    },
    reqCompleter: {
      title: 'ReqCompleter: Business-Logic-Driven Requirements Completion Tool',
      description:
        'Builds business-logic loops from use case models, E-R diagrams, and CRUD relations to identify functional gaps and iteratively complete missing requirements.',
    },
    reqExceptionHunter: {
      title: 'ReqExceptionHunter: Exceptional Scenario Detection and Remediation Tool',
      description:
        'Identifies exceptional scenarios from normal use-case flows, builds traceable exception trees, and generates exception-handling requirements such as timeouts, retries, rate limiting, and state validation.',
    },
    sceneOpt: {
      title: 'SceneOpt: Functional Scenario Coverage Checking and Completion Tool',
      description:
        'Builds scenario–step–data-flow models to detect missing steps, broken data flows, and uncovered functional requirements, improving scenario coverage through targeted completion.',
    },
    constraintSolvingConflictDetectionAgent: {
      title: 'Constraint-Solving-Based Requirements Conflict Detection Agent',
      description:
        'Extracts modes, transition conditions, variable dependencies, and temporal constraints, encoding requirement scenarios as constraints to identify conflicts through automated solving.',
    },
    plato: {
      title: 'PLATO: Natural Language Requirements to PlantUML Behavior Diagrams',
      description:
        'Uses large language models to transform natural-language requirements into PlantUML behavioral models with syntax checking, rendering, and export support.',
    },
    businessRuleRequirementsGenerationAgent: {
      title: 'Business-Rule-Based Software Requirements Generation Agent',
      description:
        'Processes business rules, extracts requirement elements, completes contextual constraints, and identifies implicit dependencies to generate concrete software requirements specifications.',
    },
    fdirRequirementsGenerationAgent: {
      title: 'Feedforward–Feedback-Based FDIR Requirements Generation Agent',
      description:
        'Uses system–environment deviations, functional fault models, and recovery strategies to identify fault propagation paths and generate fault detection, isolation, and recovery requirements.',
    },
    reqUnderstander: {
      title: 'ReqUnderstander: Requirements Understanding and Knowledge Network Construction Tool',
      description:
        'Structures embedded-system requirements around Function–Device–Data–Logic semantics, transforming natural-language requirements into computable and traceable knowledge networks.',
    },
    requirementsInformationExtractionFusionAgent: {
      title: 'Requirements Information Extraction and Fusion Agent',
      description:
        'Uses a multidimensional requirements metamodel as a semantic backbone to extract and fuse mission, system, and software information into structured requirements models.',
    },
    terminologyConsistencyCheckingAgent: {
      title: 'Terminology Consistency Checking Agent',
      description:
        'Extracts domain terms and abbreviations, builds project terminology dictionaries, and detects inconsistent synonyms, ambiguous terminology, and nonstandard abbreviations.',
    },
    requirementsInterviewAgent: {
      title: 'Requirements Interview Agent',
      description:
        'Conducts ontology-driven multi-turn requirements interviews using requirement slots, targeted follow-up questions, and response analysis to uncover and clarify implicit requirements.',
    },
  },
  directions: {
    ai4re: {
      title: 'AI4RE: AI for Requirements Engineering',
      description:
        'Using large language models, knowledge graphs and requirements engineering methodologies to automate and enhance requirements elicitation, analysis, modeling and documentation.',
    },
    re4ai: {
      title: 'RE4AI: Requirements Engineering for AI Systems',
      description:
        'Applying requirements engineering knowledge to AI systems and multi-agent systems for requirements analysis, goal modeling, architecture design and behavioral constraints.',
    },
    softwareGeneration: {
      title: 'AI-based Software Generation',
      description:
        'Using large language models and AI techniques to generate design models, executable code and test cases from requirements specifications, targeting project-level code generation.',
    },
    domainOntology: {
      title: 'Automatic Construction of Domain Knowledge Ontologies',
      description:
        'Automatically constructing and evolving domain ontologies across requirements, design, code and testing to support knowledge-driven software engineering and intelligent toolchains.',
    },
  },
}
