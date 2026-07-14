export default {
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
}
