export default {
  nav: {
    primary: 'Primary navigation',
    home: 'Home',
    research: 'Research',
    tools: 'Tools',
    publications: 'Publications',
    members: 'Members',
    documentation: 'Documentation',
    github: 'GitHub',
  },
  language: {
    label: 'Switch language',
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
    title: 'AI-based Requirements Engineering Tools',
    description:
      'This page highlights recent tools related to large language models, agents, requirements modeling and document generation. GitHub buttons currently link to repositories and can later be replaced by internal tool pages or online demos.',
    cardsLabel: 'Recent requirements engineering tools',
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
      reSkills: 'RE Skills',
      knowledgeReuse: 'Knowledge Reuse',
      methodology: 'Methodology',
      openClaw: 'OpenClaw',
      requirementsModeling: 'Requirements Modeling',
      erModel: 'ER Model',
      curd: 'CURD',
      documentGeneration: 'Document Generation',
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
      plato: {
        title: 'PLATO: Natural Language Requirements to PlantUML Behavior Diagrams',
        description:
          'An LLM-driven system that transforms natural language requirements into PlantUML behavior diagrams with syntax checking, rendering and export.',
      },
    },
  },
}
