export default {
  title: 'Admissions & Training',
  introduction:
    'We welcome students interested in intelligent software engineering, requirements engineering, large language models and agents.',
  labels: {
    researchDirections: 'Research Directions',
    groupAdvantages: 'Group Advantages',
    admissionRequirements: 'What We Look For',
    applicationScenarios: 'Application Domains',
    welcomeStudents: 'Who Can Join',
    responsibilities: 'Responsibilities',
    requirements: 'Requirements',
    qualities: 'Personal Qualities',
    studentExpectations: 'What We Expect from Students',
    whyUs: 'Why Join Us',
  },
  actions: {
    sendEmail: 'Email Your Application',
    contact: 'Contact the Supervisor',
  },
  groups: {
    zhiJinWhu: {
      title: "Prof. Zhi Jin's Research Group, Wuhan University",
      introduction:
        'The group recruits doctoral and master’s students in intelligent software engineering and welcomes undergraduates for long-term research training.',
      leaderName: 'Prof. Zhi Jin',
      leaderAffiliation: 'Specialized Demonstration School of Software, Wuhan University',
      leaderBio:
        'Prof. Zhi Jin is Dean of the Specialized Demonstration School of Software at Wuhan University, an IEEE, CCF and AAIA Fellow, a recipient of the National Science Fund for Distinguished Young Scholars of China, a former Chief Scientist of a national 973 project, and Chair of the CCF Board of Supervisors. She has published more than 300 papers at leading venues including ASE, FSE, ICSE, ACL, NIPS and TOSEM, authored five books and holds over 30 invention patents. Her work has supported major aerospace programs and human-cyber-physical systems, and she has received honors including the IEEE TCSVC Distinguished Leadership Award and the CCF Xia-Peisu Award.',
      directions: {
        ai4se: 'Code LLMs / Software Development Agents / AI4SE',
        intelligentRe: 'Intelligent Requirements Engineering',
        codeGeneration: 'Automated Code Generation',
        llmSecurity: 'Large Language Model Security',
      },
      advantages: {
        studentGuidance: {
          title: 'Student Guidance',
          items: [
            'Experienced supervision that helps students identify meaningful research questions.',
            'Frequent support for ideas, experiments and academic writing.',
            'Training plans tailored to each student’s background and academic or career goals.',
          ],
        },
        researchResources: {
          title: 'Research Resources',
          items: ['Ample computing capacity.', 'Support such as API access for large language model research.'],
        },
        developmentSupport: {
          title: 'Career Development',
          items: [
            'Recommendation letters for outstanding students.',
            'Referrals for industry internships and universities in China and abroad.',
            'Priority consideration for graduate recommendation and direct PhD opportunities in the group.',
          ],
        },
      },
      admissionRequirements: {
        selfMotivated: 'Strong self-motivation',
        diligent: 'Diligence and reliability',
        activeThinking: 'Independent and proactive thinking',
        researchInterest: 'A genuine interest in research and intelligent software engineering',
      },
      application: {
        title: 'How to Apply',
        description: 'Please send your CV to {email}',
        subjectLabel: 'Email subject',
        subject: 'Your Name + CV',
      },
    },
    xiaohongChenEcnu: {
      title: "Prof. Xiaohong Chen's Research Group, East China Normal University",
      introduction:
        'The group focuses on intelligent requirements engineering and explores new forms of software development in the era of large language models, with applications in aerospace, rail transit, safety-critical systems and the intelligent Internet of Things.',
      leaderName: 'Prof. Xiaohong Chen',
      leaderAffiliation: 'School of Software Engineering, East China Normal University',
      leaderBio:
        'The group conducts interdisciplinary research spanning requirements engineering, knowledge engineering, formal methods and artificial intelligence. Driven by complex real-world software systems, it advances automation and intelligence from requirements understanding and system design to software evolution.',
      directions: {
        ai4re: {
          title: 'AI4RE',
          description: 'Empowering requirements engineering with LLMs, knowledge graphs and systematic methods to improve automation and intelligence.',
        },
        re4ai: {
          title: 'RE4AI',
          description: 'Applying requirements engineering knowledge to requirements analysis and architecture design for AI systems, especially multi-agent systems.',
        },
        aiSoftwareGeneration: {
          title: 'AI-Based Automated Software Generation',
          description: 'End-to-end, project-level generation from requirements specifications to executable code.',
        },
        changeDrivenEvolution: {
          title: 'Requirements-Change-Driven Software Evolution Agents',
          description: 'Requirements negotiation, clarification, completion and change management, together with change-driven evolution of design, code and tests.',
        },
        domainOntologyConstruction: {
          title: 'Automated Domain Ontology Construction',
          description: 'Dynamic ontologies connecting requirements, design, code and testing throughout the software lifecycle.',
        },
      },
      applicationScenarios: {
        aerospace: 'Aerospace',
        railTransit: 'Rail Transit',
        safetyCritical: 'Safety-Critical Systems',
        aiot: 'Intelligent IoT',
      },
      welcomeStudents:
        'We welcome students at every stage: undergraduates, prospective and current master’s students, and doctoral students including direct PhD candidates. Students with a solid software foundation or strong willingness to learn can find a suitable path when they have a clear area of interest.',
      postdoc: {
        title: 'Postdoctoral Positions',
        subtitle: 'Next-Generation Intelligent Unmanned Systems and Software Automation',
        focus: 'Focus: Software Factories / Algorithm Factories / Agent Factories / UAV Swarms',
        responsibilities: {
          independentResearch: 'Independent research: pursue frontier topics and publish at leading venues such as ICSE, FSE, ASE, ISSTA, ACL and EMNLP.',
          systemArchitecture: 'System architecture: lead architecture design and prototyping for key components of software, algorithm and agent factories.',
          projectDelivery: 'Project delivery: contribute to government, industry and research projects, translating results into aerospace and safety-critical applications.',
          teamCollaboration: 'Team collaboration: co-supervise graduate students and contribute to laboratory development and academic exchange.',
        },
        requirements: {
          doctoralDegree: 'A PhD in software engineering, automation, control science, artificial intelligence, computer science or a related field.',
          programming: 'Strong programming ability.',
          llmOrRobotics: 'Experience with LLM fine-tuning such as LoRA or RLHF, or with UAVs, robotics or embodied intelligence, is preferred.',
          academicWriting: 'Strong academic writing ability.',
          publications: 'Publications at venues such as ICSE, TSE, RE, FSE, ASE, ICRA, ACL or EMNLP are preferred.',
          frameworkExperience: 'Experience developing multi-agent frameworks or knowledge graph tools is preferred.',
          eligibility: 'Normally within three years of receiving the PhD and no older than 35.',
        },
        qualities: {
          researchPassion: 'A strong interest in how large language models are reshaping software engineering.',
          selfDriven: 'Self-motivation and the ability to discover, define and solve problems independently.',
          collaborative: 'Clear communication and a collaborative mindset.',
        },
        note: 'Applications are accepted on an ongoing basis. We look forward to exploring new forms of software development with you.',
      },
      training: {
        title: 'Student Training',
        items: {
          frontierResearch: {
            title: 'Frontier Research',
            description: 'Work at the intersection of requirements engineering, knowledge engineering, formal methods, AI and large language models.',
          },
          systematicTraining: {
            title: 'Systematic Research Training',
            description: 'A complete path from problem discovery and theoretical modeling to implementation and academic writing.',
          },
          engineeringGrowth: {
            title: 'Rapid Engineering Growth',
            description: 'Build skills in requirements analysis, solution design, technology selection, implementation and debugging through real projects.',
          },
          publicationSupport: {
            title: 'High-Quality Research Outcomes',
            description: 'Learn the full publication process, including topic selection, experimental design, writing, submission and revision.',
          },
          realWorldProjects: {
            title: 'Deep Project Support',
            description: 'Engage with real applications in aviation, aerospace, rail transit and AIoT.',
          },
          collaborationNetwork: {
            title: 'Supervision and Collaboration',
            description: 'Receive continuous supervision and opportunities to collaborate with researchers in China and abroad.',
          },
        },
      },
      expectations: {
        softwareInterest: 'Strong interest in software systems and intelligent methods.',
        learningAbility: 'Strong independent learning, research and hands-on abilities.',
        longTermGoals: 'Clear goals and willingness to pursue long-term work at the intersection of requirements engineering and AI.',
        professionalQualities: 'Reliability, self-motivation, communication skills and sound engineering and logical thinking.',
      },
      strengths: {
        frontierTopics: 'Frontier and Interdisciplinary Topics',
        richProjects: 'Rich Project Resources',
        completeTraining: 'Complete Training System',
        openCulture: 'Open Team Culture',
      },
      closing:
        'If you are excited about intelligent requirements engineering and the future of software development, join us to explore new possibilities in the era of large language models.',
    },
  },
}
