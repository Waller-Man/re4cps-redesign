export default {
  nav: {
    primary: '主导航',
    home: '首页',
    research: '研究方向',
    publications: '论文',
    agents: '智能体',
    tools: '工具',
    members: '成员',
    reResources: 'RE资源',
    datasets: '数据集',
    github: 'GitHub',
  },
  language: {
    label: '切换语言',
  },
  home: {
    title: 'RE4CPS',
    subtitle: '面向信息物理系统的需求工程',
    description: '面向 CPS 需求建模、验证与人工智能辅助需求工程的学术工具门户。',
  },
  research: {
    title: '研究方向',
    subtitle: '大模型时代的智能化需求工程与软件工程',
    keywordsLabel: '研究关键词',
    directionsLabel: '研究方向列表',
    keywords: {
      requirementsEngineering: '需求工程',
      knowledgeEngineering: '知识工程',
      formalMethods: '形式化方法',
      artificialIntelligence: '人工智能',
      ontology: '本体',
      agent: '智能体',
    },
    directions: {
      ai4re: {
        title: 'AI4RE：面向需求工程的人工智能',
        description:
          '利用大模型、知识图谱和需求工程方法论赋能需求工程，实现需求获取、需求分析、需求建模和需求文档生成的自动化与智能化。',
      },
      re4ai: {
        title: 'RE4AI：面向 AI 系统的需求工程',
        description:
          '利用需求工程知识为 AI 系统和多智能体系统进行需求分析、目标建模、架构设计与行为约束，是当前较前沿的研究方向。',
      },
      softwareGeneration: {
        title: '基于 AI 的软件自动生成',
        description:
          '利用大语言模型及其他人工智能技术，实现从需求规约到设计模型、代码实现和测试用例的端到端自动生成，面向项目级代码生成。',
      },
      softwareEvolution: {
        title: '需求变更驱动的软件演化智能体',
        description:
          '研究需求协商、需求澄清与补全、需求变更分析，以及由需求变更驱动的设计演化、代码变更生成和测试用例演化智能体。',
      },
      domainOntology: {
        title: '领域知识本体自动构建',
        description:
          '面向需求、设计、代码和测试全链路，自动构建和演化领域知识本体，支撑知识驱动的软件工程与智能化工具链。',
      },
    },
  },
  tools: {
    title: '工具',
    description:
      '本页面后续用于展示 RE4CPS 历史工具，工具数据将在后续版本中逐步补充。',
    placeholder: '历史工具内容待更新。',
  },
  publications: {
    title: '论文与出版物',
    subtitle: 'Recent Publications',
    description:
      '本页面展示课题组近年的代表性论文、会议论文、期刊论文和专著。后续可继续补充 PDF、DOI、BibTeX、代码仓库和在线工具链接。',
    paperCount: '{count} 项',
    groups: {
      '2026': '2026',
      '2025': '2025',
      '2024': '2024',
      book: '专著与教材',
    },
    titles: {
      softwareRequirementsEngineeringPractice: '教材：软件需求工程与实践',
    },
    rankTags: {
      textbook: '教材',
    },
    types: {
      conference: '会议论文',
      journal: '期刊论文',
      workshop: '研讨会论文',
      chineseJournal: '中文期刊',
      book: '专著',
      accepted: '已接收',
    },
    links: {
      pdf: 'PDF',
      doi: 'DOI',
      bibtex: 'BibTeX',
      code: '代码',
      tool: '在线工具',
    },
  },
  members: {
    title: '成员',
    subtitle: '教师、学生与已毕业成员',
    email: '邮箱',
    homepage: '个人主页',
    groups: {
      faculty: '教师',
      phd: '博士生',
      master: '硕士生',
      alumni: '已毕业学生',
    },
    people: {
      zhiJin: {
        name: '金芝',
        role: '教授',
        school: '北京大学，中国',
        bio: '主要从事需求工程和知识驱动的软件工程研究。',
      },
      xiaohongChen: {
        name: '陈小红',
        role: '教授',
        school: '华东师范大学，中国',
        bio: '主要从事需求工程、形式化方法及其在信息物理系统中的应用研究。',
      },
      dongmingJin: {
        name: '靳东明',
        role: '博士生',
        school: '北京大学，中国',
        bio: '暂无',
      },
      zhujunWu: {
        name: '吴祝骏',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '暂无',
      },
      huangyike: {
        name: 'huangyike',
        role: '已毕业学生',
        school: '华东师范大学，中国',
        bio: '暂无',
      },
    },
  },
  reResources: {
    title: '需求工程知识与资源',
    subtitle: '报告、教程与工程资源',
    description:
      '本页面用于整理需求工程 Skill、工程插件、报告材料、教程文档、实验数据集和历史资源。',
    groups: {
      engineeringPlugins: 'RE Skills 与工程插件',
      presentations: '报告材料',
      tutorials: '教程材料',
      datasets: '数据集',
    },
    types: {
      invitedTalk: '邀请报告',
      presentation: '报告',
      tutorial: '教程',
      slides: '幻灯片',
      dataset: '数据集',
    },
    statuses: {
      archive: '归档',
      toBeUpdated: '待更新',
      mockData: '示例数据',
    },
    actions: {
      github: '在线使用',
      demo: '在线 Demo',
      details: '查看详情',
      open: '查看资源',
      comingSoon: '待补充',
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
        title: 'RE-Skills：需求工程 Skill 集合',
        description:
          '面向需求工程任务的 skill 集合，用于沉淀需求工程中的方法、流程和可复用能力，为大模型或智能体执行需求工程任务提供支持。',
      },
      requirementsPlugin: {
        title: 'RE Requirements Plugin：OpenClaw 需求工程插件',
        description:
          '面向需求工程建模与文档导出的 OpenClaw 插件，支持实体抽取、用例建模、ER/CURD 检查、功能需求生成和文档导出。',
      },
    },
    items: {
      dmsviva2018: {
        title: 'DMSVIVA2018 Invited Talk',
        description: 'DMSVIVA2018 邀请报告的归档条目，相关材料链接待补充。',
      },
      isqe2019: {
        title: 'iSQE2019 Invited Talk',
        description: 'iSQE2019 邀请报告的归档条目，相关材料链接待补充。',
      },
      re4cpsOverview: {
        title: 'RE4CPS Overview Presentation',
        description: 'RE4CPS 研究方向与工具概览报告的示例条目。',
      },
      re4cpsTutorial: {
        title: 'RE4CPS: Requirements Engineering for Cyber-Physical Systems',
        description: 'RE4CPS 信息物理系统需求工程教程的归档条目。',
      },
      slidesPartOne: {
        title: 'Slides for RE4CPS - Part I',
        description: 'RE4CPS 教程第一部分幻灯片的归档条目。',
      },
      slidesPartTwo: {
        title: 'Slides for RE4CPS - Part II',
        description: 'RE4CPS 教程第二部分幻灯片的归档条目。',
      },
      cpsRequirementsDataset: {
        title: 'CPS Requirements Dataset',
        description: '用于信息物理系统需求建模和验证实验的占位数据集。',
      },
      smartHomeDataset: {
        title: 'Smart Home Scenario Dataset',
        description: '用于智能家居需求、TAP 规则和场景仿真的占位数据集。',
      },
      timingRequirementsBenchmark: {
        title: 'Timing Requirements Benchmark',
        description: '用于时序需求一致性检查的占位基准数据集。',
      },
    },
  },
  agents: {
    title: '智能体',
    description: '面向需求开发、需求演化、历史文档处理和测试生成的需求工程智能体。',
    planned: '规划中',
    placeholderDescription: '该子方向的智能体能力正在规划与整理中。',
    categoryPlaceholderDescription: '该类别的智能体能力正在规划与整理中。',
    placeholderFooter: '相关智能体与工具将在后续补充',
    categories: {
      softwareRequirementsDevelopment: {
        title: '软件需求开发',
        description: '覆盖需求获取、建模、分析、规格生成以及验证评审等需求开发活动。',
      },
      requirementsChangeEvolution: {
        title: '需求变更与演化',
        description: '面向需求补全、协商、变更分析及其驱动的软件制品演化。',
      },
      historicalRequirementsDocumentProcessing: {
        title: '历史需求文档处理',
        description: '面向历史需求文档的解析、抽取、检索、复用和一致性分析。',
      },
      testCaseGeneration: {
        title: '测试用例生成',
        description: '从需求及相关工程知识出发生成和演化测试用例。',
      },
    },
    subcategories: {
      endToEndRequirementsDevelopment: '端到端需求开发',
      requirementsModelingBehavioralModelGeneration: '需求建模与行为模型生成',
      requirementsElicitationUserInterviews: '需求获取与用户访谈',
      requirementsClarificationAnalysis: '需求澄清与分析',
      requirementsSpecificationDocumentationGeneration: '需求规格与文档生成',
      requirementsValidationReview: '需求验证与评审',
      requirementsClarificationCompletion: '需求澄清与补全',
      requirementsNegotiation: '需求协商',
      requirementsChangeAnalysis: '需求变更分析',
      requirementChangeDrivenDesignEvolution: '需求变更驱动的设计演化',
      requirementChangeDrivenCodeGeneration: '需求变更驱动的代码变更生成',
      requirementChangeDrivenTestCaseEvolution: '需求变更驱动的测试用例演化',
      documentParsingStructuring: '历史需求文档解析与结构化',
      requirementElementRelationExtraction: '需求要素与关系抽取',
      semanticRetrievalSimilarRequirementMatching: '需求语义检索与相似需求匹配',
      historicalRequirementReuseRecommendation: '历史需求复用与推荐',
      requirementsTraceabilityRecovery: '需求追踪关系恢复',
      conflictDuplicationConsistencyAnalysis: '需求冲突、重复与一致性分析',
    },
    actions: {
      github: '在线使用',
      demo: '在线 Demo',
      details: '查看详情',
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
        title: 'iReDev：多智能体需求开发平台',
        description:
          'AI 驱动的多智能体需求开发平台，模拟真实需求工程团队，从客户访谈、需求分析到 SRS 文档生成，形成完整的需求开发流水线。',
      },
      plato: {
        title: 'PLATO：自然语言需求到 PlantUML 行为图生成系统',
        description:
          '面向需求工程与行为建模的 LLM 驱动系统，可将自然语言需求转换为 PlantUML 行为图，并支持语法校验、图像渲染与结果导出。',
      },
      reqCompleter: {
        title: 'ReqCompleter：业务逻辑驱动的迭代式需求自动补全工具',
        description:
          'ReqCompleter 是一个面向需求自动补全的工具，基于用例模型、E-R 图和 CRUD 矩阵构建业务逻辑闭环，通过 CRUD 缺口检测触发迭代式补全过程，从而提升需求完整性并减少大模型幻觉。',
      },
    },
  },
  datasets: {
    title: '数据集',
    placeholder: '数据集页面正在建设中，相关内容将在后续版本中补充。',
  },
}
