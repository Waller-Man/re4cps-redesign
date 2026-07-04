export default {
  nav: {
    primary: '主导航',
    home: '首页',
    research: '研究方向',
    tools: '工具',
    publications: '论文',
    members: '成员',
    documentation: '文档',
    github: 'GitHub',
  },
  language: {
    label: '切换语言',
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
      book: 'Book',
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
}
