export default {
  nav: {
    primary: 'Primary navigation',
    home: 'Home',
    research: 'Research',
    publications: 'Publications',
    agents: 'Agents',
    tools: 'Tools',
    members: 'Members',
    reResources: 'RE Resources',
    datasets: 'Datasets',
    github: 'GitHub',
  },
  language: {
    label: 'Switch language',
  },
  home: {
    title: 'RE4CPS',
    subtitle: 'Requirements Engineering for Cyber-Physical Systems',
    description:
      'A research tool portal for CPS requirements modeling, verification, and AI-assisted requirements engineering.',
  },
  research: {
    title: 'Research Directions',
    subtitle:
      'Intelligent Requirements Engineering and Software Engineering in the LLM Era',
    keywordsLabel: 'Research keywords',
    directionsLabel: 'Research directions',
    keywords: {
      requirementsEngineering: 'Requirements Engineering',
      knowledgeEngineering: 'Knowledge Engineering',
      formalMethods: 'Formal Methods',
      artificialIntelligence: 'Artificial Intelligence',
      ontology: 'Ontology',
      agent: 'Agent',
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
      softwareEvolution: {
        title: 'Requirement-change-driven Software Evolution Agents',
        description:
          'Studying agents for requirement negotiation, clarification, completion and change analysis, as well as design evolution, code change generation and test case evolution driven by requirement changes.',
      },
      domainOntology: {
        title: 'Automatic Construction of Domain Knowledge Ontologies',
        description:
          'Automatically constructing and evolving domain ontologies across requirements, design, code and testing to support knowledge-driven software engineering and intelligent toolchains.',
      },
    },
  },
  tools: {
    title: 'Tools',
    subtitle: 'Historical Requirements Engineering Tools of RE4CPS',
    description:
      'This page presents historical RE4CPS tools for requirements modeling, problem decomposition, consistency verification, security and privacy analysis, and IoT scenario analysis. Some tools were developed years ago and may currently provide only frontend demonstrations or be temporarily unavailable.',
    actions: {
      useOnline: 'Use Online',
    },
    linkLabels: {
      openArgue: 'OpenArgue',
      prismDemo: 'PRISM Demo',
    },
    categories: {
      problemFramesModeling: {
        title: 'Problem Frames Modeling and Collaborative Modeling',
        description:
          'Tools for text-based, diagram-based and collaborative modeling using Problem Frames, Problem Diagrams and iStar.',
      },
      problemDecompositionProgression: {
        title: 'Problem Decomposition and Requirements Progression',
        description:
          'Tools for decomposing complex problems and progressively deriving software specifications from stakeholder requirements.',
      },
      timingConsistencyVerification: {
        title: 'Timing Requirements and Consistency Verification',
        description:
          'Tools for modeling and formally verifying timing requirements, sequence diagrams, environment models and clock constraints.',
      },
      securityPrivacyAnalysis: {
        title: 'Security and Privacy Analysis',
        description:
          'Tools for security, privacy, risk and benefit analysis in cyber-physical and cyber-physical-social systems.',
      },
      iotSmartHomeAnalysis: {
        title: 'IoT and Smart Home Scenario Analysis',
        description:
          'Tools for IoT user requirements, device scheduling, TAP rule verification and smart-home scenario simulation.',
      },
    },
    tags: {
      xtext: 'Xtext',
      problemFrames: 'Problem Frames',
      textModeling: 'Text Modeling',
      diagramGeneration: 'Diagram Generation',
      ontology: 'Ontology',
      diagramModeling: 'Diagram Modeling',
      environmentKnowledge: 'Environment Knowledge',
      collaborativeModeling: 'Collaborative Modeling',
      synchronization: 'Synchronization',
      conflictResolution: 'Conflict Resolution',
      iStar: 'iStar',
      goalModeling: 'Goal Modeling',
      requirementsAnalysis: 'Requirements Analysis',
      problemProjection: 'Problem Projection',
      problemDecomposition: 'Problem Decomposition',
      scenario: 'Scenario',
      problemProgression: 'Problem Progression',
      specificationGeneration: 'Specification Generation',
      domainAssumption: 'Domain Assumption',
      timingRequirements: 'Timing Requirements',
      patternLanguage: 'Pattern Language',
      smt: 'SMT',
      consistencyVerification: 'Consistency Verification',
      ccsl: 'CCSL',
      sequenceDiagram: 'Sequence Diagram',
      myCcsl: 'MyCCSL',
      clockGraph: 'Clock Graph',
      environmentModel: 'Environment Model',
      cps: 'CPS',
      rtsp: 'RTSP',
      ecGraph: 'EC Graph',
      z3: 'Z3',
      realTimeRequirements: 'Real-time Requirements',
      problemDiagram: 'Problem Diagram',
      scenarioGraph: 'Scenario Graph',
      cvc4: 'CVC4',
      securityRequirements: 'Security Requirements',
      privacyRequirements: 'Privacy Requirements',
      riskAnalysis: 'Risk Analysis',
      openArgue: 'OpenArgue',
      prism: 'PRISM',
      iot: 'IoT',
      deviceScheduling: 'Device Scheduling',
      requirementsGeneration: 'Requirements Generation',
      scenarioSimulation: 'Scenario Simulation',
      tapRules: 'TAP Rules',
      smartHome: 'Smart Home',
      staticAnalysis: 'Static Analysis',
      dynamicSimulation: 'Dynamic Simulation',
      conflictDetection: 'Conflict Detection',
    },
    items: {
      textBasedProblemDescription: {
        title: 'Text-based Problem Description',
        description:
          'Uses an Xtext-defined textual language to describe Problem Diagrams and automatically generate diagrams from structured specifications.',
      },
      diagramBasedProblemDescription: {
        title: 'Diagram-based Problem Description',
        description:
          'Uses a Problem Description Ontology to guide step-by-step Problem Diagram modeling, validate intermediate results and provide domain knowledge through an Environment Ontology.',
      },
      synchronizationBasedProblemDescription: {
        title: 'Synchronization-based Problem Description',
        description:
          'Integrates textual and graphical editors for collaborative Problem Frames modeling, project synchronization and automatic conflict resolution.',
      },
      synchronizationBasedIStarTool: {
        title: 'Synchronization-based iStar Modeling Tool',
        description:
          'Supports collaborative textual and graphical iStar modeling for intentional, social and strategic requirements analysis.',
      },
      problemProjection: {
        title: 'Problem Projection',
        description:
          'Treats each subproblem as a projection of the main problem over relevant phenomena, combining relational algebra, Problem Frames and scenario-based approaches.',
      },
      problemProgression: {
        title: 'Problem Progression',
        description:
          'Progresses stakeholder requirements toward software specifications and generates domain assumptions and concerns for functional and quality requirements analysis.',
      },
      timingRequirementsConsistencyAnalysis: {
        title: 'Timing Requirements Consistency Analysis Tool',
        description:
          'Models timing requirements using a pattern language and verifies consistency through static analysis and SMT-based methods.',
      },
      sequenceDiagramConsistencyAnalysis: {
        title: 'Sequence Diagram Consistency Analysis Tool',
        description:
          'Models clock constraints for safety-critical systems using CCSL and analyzes sequence diagram consistency with MyCCSL, SMT or clock-graph methods.',
      },
      environmentModelConsistencyVerification: {
        title: 'Environment-Model-based Requirements Consistency Verification',
        description:
          'Extracts environmental constraints from interaction scenarios and state transitions, then transforms them into clock graphs for consistency verification.',
      },
      ecCheck: {
        title: 'EC-Check: Real-time Requirements Consistency Verification',
        description:
          'Transforms RTSP requirements into EC graphs and SMT formulas, uses Z3 for solving and identifies minimal inconsistent requirement sets.',
      },
      timingRequirementsModelingVerification: {
        title: 'Timing Requirements Modeling and Verification Tool',
        description:
          'Models timing information from Problem Diagrams and Scenario Graphs, transforms it into CCSL clock relations and verifies consistency using MyCCSL, Z3 and CVC4.',
      },
      securityPrivacyAnalysisTools: {
        title: 'Security and Privacy Analysis Tools',
        description:
          'Identifies risk factors using shared security and privacy knowledge, quantifies likelihood and impact on behavioral models, and optimizes trade-offs between risks and system benefits.',
      },
      deviceSchedulingGeneratorSimulator: {
        title: 'Device Scheduling Instructions Generator and Simulator',
        description:
          'Completes and transforms user-provided IoT requirements, reasons about system behaviors, and generates device scheduling instructions and scenario graphs.',
      },
      tapsSimulator: {
        title: 'TAPs-Simulator: TAP Rule Simulation and Verification Tool',
        description:
          'Performs static and dynamic analysis of TAP rules using environment models, covering redundancy, loops, incompleteness, conflicts, jitter, safety, privacy, energy consumption and comfort.',
      },
    },
  },
  publications: {
    title: 'Publications',
    subtitle: 'Recent Publications',
    description:
      'This page presents recent representative publications, including conference papers, journal articles and books. PDF, DOI, BibTeX, code and tool links can be added later.',
    paperCount: '{count} entries',
    groups: {
      '2026': '2026',
      '2025': '2025',
      '2024': '2024',
      book: 'Book',
    },
    titles: {
      softwareRequirementsEngineeringPractice:
        '教材：软件需求工程与实践',
    },
    rankTags: {
      textbook: 'Textbook',
    },
    types: {
      conference: 'Conference',
      journal: 'Journal',
      workshop: 'Workshop',
      chineseJournal: 'Chinese Journal',
      book: 'Book',
      accepted: 'Accepted',
    },
    links: {
      pdf: 'PDF',
      doi: 'DOI',
      bibtex: 'BibTeX',
      code: 'Code',
      tool: 'Tool',
    },
  },
  members: {
    title: 'Members',
    subtitle: 'Faculty, Students and Alumni',
    email: 'Email',
    homepage: 'Homepage',
    groups: {
      faculty: 'Faculty',
      phd: 'PhD Students',
      master: 'Master Students',
      alumni: 'Alumni',
    },
    people: {
      zhiJin: {
        name: 'Dr. Zhi Jin',
        role: 'Professor',
        school: 'Peking University, China',
        bio: 'Her research focuses on requirements engineering and knowledge-based software engineering.',
      },
      xiaohongChen: {
        name: 'Dr. Xiaohong Chen',
        role: 'Professor',
        school: 'East China Normal University, China',
        bio: 'Her research focuses on requirements engineering, formal methods, and their applications in cyber-physical systems.',
      },
      dongmingJin: {
        name: 'Dongming Jin',
        role: 'PhD Student',
        school: 'Peking University, China',
        bio: 'To be updated.',
      },
      zhujunWu: {
        name: 'Zhujun Wu',
        role: 'Master Student',
        school: 'East China Normal University, China',
        bio: 'To be updated.',
      },
      huangyike: {
        name: 'huangyike',
        role: 'Alumni',
        school: 'East China Normal University, China',
        bio: 'To be updated.',
      },
    },
  },
  reResources: {
    title: 'Requirements Engineering Knowledge & Resources',
    subtitle: 'Presentations, Tutorials and Engineering Resources',
    description:
      'This page organizes requirements engineering skills, engineering plugins, presentations, tutorials, datasets and historical resources.',
    groups: {
      engineeringPlugins: 'RE Skills and Engineering Plugins',
      presentations: 'Presentations',
      tutorials: 'Tutorials',
      datasets: 'Datasets',
    },
    types: {
      invitedTalk: 'Invited Talk',
      presentation: 'Presentation',
      tutorial: 'Tutorial',
      slides: 'Slides',
      dataset: 'Dataset',
    },
    statuses: {
      archive: 'Archive',
      toBeUpdated: 'To be updated',
      mockData: 'Mock Data',
    },
    actions: {
      github: 'Use Online',
      demo: 'Online Demo',
      details: 'View Details',
      open: 'Open Resource',
      comingSoon: 'Coming Soon',
    },
    tags: {
      reSkills: 'RE Skills',
      llm: 'LLM',
      knowledgeReuse: 'Knowledge Reuse',
      methodology: 'Methodology',
      openClaw: 'OpenClaw',
      requirementsModeling: 'Requirements Modeling',
      erModel: 'ER Model',
      curd: 'CURD',
      documentGeneration: 'Document Generation',
    },
    featuredItems: {
      reSkills: {
        title: 'RE-Skills: Skill Collection for Requirements Engineering',
        description:
          'A collection of reusable skills for requirements engineering tasks, organizing methods, workflows and capabilities for LLMs or agents.',
      },
      requirementsPlugin: {
        title:
          'RE Requirements Plugin: OpenClaw Plugin for Requirements Engineering',
        description:
          'An OpenClaw plugin for requirements modeling and document generation, supporting entity extraction, use case modeling, ER/CURD checking and document export.',
      },
    },
    items: {
      dmsviva2018: {
        title: 'DMSVIVA2018 Invited Talk',
        description:
          'An archived entry for the DMSVIVA2018 invited talk; materials will be added later.',
      },
      isqe2019: {
        title: 'iSQE2019 Invited Talk',
        description:
          'An archived entry for the iSQE2019 invited talk; materials will be added later.',
      },
      re4cpsOverview: {
        title: 'RE4CPS Overview Presentation',
        description:
          'A mock entry for an overview presentation of RE4CPS research and tools.',
      },
      re4cpsTutorial: {
        title: 'RE4CPS: Requirements Engineering for Cyber-Physical Systems',
        description:
          'An archived entry for the RE4CPS tutorial on cyber-physical systems requirements engineering.',
      },
      slidesPartOne: {
        title: 'Slides for RE4CPS - Part I',
        description: 'An archived entry for the first part of the RE4CPS tutorial slides.',
      },
      slidesPartTwo: {
        title: 'Slides for RE4CPS - Part II',
        description: 'An archived entry for the second part of the RE4CPS tutorial slides.',
      },
      cpsRequirementsDataset: {
        title: 'CPS Requirements Dataset',
        description:
          'A placeholder dataset for CPS requirements modeling and verification experiments.',
      },
      smartHomeDataset: {
        title: 'Smart Home Scenario Dataset',
        description:
          'A placeholder dataset for smart home requirements, TAP rules and scenario simulation.',
      },
      timingRequirementsBenchmark: {
        title: 'Timing Requirements Benchmark',
        description:
          'A placeholder benchmark for timing requirements consistency checking.',
      },
    },
  },
  agents: {
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
  },
  datasets: {
    title: 'Datasets',
    placeholder: 'The Datasets page is under construction. More content will be added later.',
  },
}
