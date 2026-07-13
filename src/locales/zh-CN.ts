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
    title: '近期工具',
    description:
      '本页面优先展示近期与大模型、智能体、需求建模和文档生成相关的工具。当前 GitHub 按钮暂时跳转到对应仓库，后续可替换为站内工具详情页或在线 Demo 页面。',
    cardsLabel: '近期需求工程工具',
    categories: {
      aiRequirementsDevelopment: {
        title: 'AI-based Requirements Development',
        description:
          '面向需求获取、需求分析、需求开发流程和可复用需求工程能力的智能化工具。',
      },
      businessLogicCompletion: {
        title: 'Business-Logic-driven Requirements Completion',
        description:
          '围绕业务逻辑闭环、需求建模、CRUD 检查和需求补全的工具原型。',
      },
      behaviorModeling: {
        title: 'Behavior Modeling and Diagram Generation',
        description:
          '面向自然语言需求到行为模型、图形化表示和建模结果导出的工具。',
      },
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
      reSkills: 'RE Skills',
      knowledgeReuse: 'Knowledge Reuse',
      methodology: 'Methodology',
      requirementsCompletion: 'Requirements Completion',
      businessLogic: 'Business Logic',
      useCase: 'Use Case',
      erDiagram: 'E-R Diagram',
      crud: 'CRUD',
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
        title: 'iReDev：多智能体需求开发平台',
        description:
          'AI 驱动的多智能体需求开发平台，模拟真实需求工程团队，从客户访谈、需求分析到 SRS 文档生成，形成完整的需求开发流水线。',
      },
      reSkills: {
        title: 'RE-Skills：需求工程 Skill 集合',
        description:
          '面向需求工程任务的 skill 集合，用于沉淀需求工程中的方法、流程和可复用能力，为大模型或智能体执行需求工程任务提供支持。',
      },
      reqCompleter: {
        title: 'ReqCompleter：业务逻辑驱动的迭代式需求自动补全工具',
        description:
          'ReqCompleter 是一个面向需求自动补全的工具，基于用例模型、E-R 图和 CRUD 矩阵构建业务逻辑闭环，通过 CRUD 缺口检测触发迭代式补全过程，从而提升需求完整性并减少大模型幻觉。',
      },
      requirementsPlugin: {
        title: 'RE Requirements Plugin：OpenClaw 需求工程插件',
        description:
          '面向需求工程建模与文档导出的 OpenClaw 插件，支持实体抽取、用例建模、ER/CURD 检查、功能需求生成和文档导出。',
      },
      plato: {
        title: 'PLATO：自然语言需求到 PlantUML 行为图生成系统',
        description:
          '面向需求工程与行为建模的 LLM 驱动系统，可将自然语言需求转换为 PlantUML 行为图，并支持语法校验、图像渲染与结果导出。',
      },
    },
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
    subtitle: '报告、教程与数据集',
    description:
      '本页面用于整理课题组的报告材料、教程文档、实验数据集和历史资源。当前先使用示例数据展示页面结构，后续可继续补充真实文件和链接。',
    groups: {
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
      open: '查看资源',
      comingSoon: '待补充',
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
    placeholder: '智能体页面正在建设中，相关内容将在后续版本中补充。',
  },
  datasets: {
    title: '数据集',
    placeholder: '数据集页面正在建设中，相关内容将在后续版本中补充。',
  },
}
