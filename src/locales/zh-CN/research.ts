export default {
  title: '研究方向',
  subtitle: '大模型时代的智能化需求工程与软件工程',
  keywordsLabel: '研究关键词',
  directionsLabel: '研究方向列表',
  representativeAgents: '代表性智能体与工具',
  keywords: {
    requirementsEngineering: '需求工程',
    knowledgeEngineering: '知识工程',
    formalMethods: '形式化方法',
    artificialIntelligence: '人工智能',
    ontology: '本体',
    agent: '智能体',
  },
  agentActions: {
    github: '在线使用',
    demo: '在线 Demo',
    details: '查看详情',
  },
  agentTags: {
    llm: 'LLM',
    multiAgent: '多智能体',
    requirementsDevelopment: '需求开发',
    requirementsCompletion: '需求补全',
    businessLogic: '业务逻辑',
    exceptionalScenarios: '异常场景',
    useCaseAnalysis: '用例分析',
    exceptionRemediation: '异常修复',
    scenarioModeling: '场景建模',
    coverageChecking: '覆盖检查',
    conflictDetection: '冲突检测',
    constraintSolving: '约束求解',
    temporalAnalysis: '时序分析',
    behaviorModeling: '行为建模',
    plantUml: 'PlantUML',
    businessRules: '业务规则',
    requirementsGeneration: '需求生成',
    formalSpecification: '形式化规约',
    fdir: 'FDIR',
    faultAnalysis: '故障分析',
    requirementsUnderstanding: '需求理解',
    knowledgeGraph: '知识图谱',
    requirementsExtraction: '需求抽取',
    informationFusion: '信息融合',
    requirementsMetamodel: '需求元模型',
    terminologyUnification: '术语统一',
    consistencyChecking: '一致性检查',
    abbreviationStandardization: '缩写规范',
    requirementsInterview: '需求访谈',
    ontologyDriven: '本体驱动',
    multiTurnDialogue: '多轮对话',
  },
  agents: {
    iredev: {
      title: 'iReDev：多智能体需求开发平台',
      description:
        '多智能体需求开发平台，通过模拟不同需求工程角色，支持从客户访谈、需求分析到 SRS 生成的端到端需求开发流程。',
    },
    reqCompleter: {
      title: 'ReqCompleter：业务逻辑驱动的需求自动补全工具',
      description:
        '基于用例模型、E-R 图和 CRUD 关系构建业务逻辑闭环，自动识别功能逻辑缺口并迭代补全缺失需求。',
    },
    reqExceptionHunter: {
      title: 'ReqExceptionHunter：异常场景完备性检测与修复工具',
      description:
        '从正常用例流程中识别潜在异常场景，构建可追溯异常树，并生成超时、重试、限流和状态校验等异常处理需求。',
    },
    sceneOpt: {
      title: 'SceneOpt：功能场景覆盖完整性检查与补全工具',
      description:
        '构建场景—步骤—数据流模型，识别步骤遗漏、数据流中断和功能需求未覆盖问题，并通过定向补全提升需求场景覆盖率。',
    },
    constraintSolvingConflictDetectionAgent: {
      title: '基于约束求解的细粒度需求冲突检测智能体',
      description:
        '抽取模式、转换条件、变量依赖和时间约束，将需求场景编码为约束并通过求解器识别不可满足的需求冲突。',
    },
    plato: {
      title: 'PLATO：自然语言需求到 PlantUML 行为图生成系统',
      description:
        '利用大语言模型将自然语言需求转换为 PlantUML 行为模型，并支持语法校验、图像渲染与结果导出。',
    },
    businessRuleRequirementsGenerationAgent: {
      title: '基于业务规则的软件需求生成智能体',
      description:
        '对业务规则进行语义处理、需求要素抽取和上下文补全，识别隐式依赖并自动生成具体的软件需求规约。',
    },
    fdirRequirementsGenerationAgent: {
      title: '基于前馈—反馈控制的 FDIR 需求生成智能体',
      description:
        '基于系统—环境偏差、功能故障模型和恢复策略识别故障传播路径，自动生成故障检测、隔离与恢复需求。',
    },
    reqUnderstander: {
      title: 'ReqUnderstander：嵌入式需求语义理解与知识网络构建工具',
      description:
        '围绕“功能—设备—数据—逻辑”对嵌入式需求进行语义解析与关系构建，将自然语言需求转化为可计算、可追溯的需求知识网络。',
    },
    requirementsInformationExtractionFusionAgent: {
      title: '基于多维需求元模型的需求信息提取与融合智能体',
      description:
        '以多维需求元模型为统一语义骨架，从非结构化研制文档中提取并融合任务、系统和软件信息，形成结构化需求模型。',
    },
    terminologyConsistencyCheckingAgent: {
      title: '术语一致性检查智能体',
      description:
        '从需求文档中提取专业术语和缩写，构建项目术语词典，检测同义异词、同词异义和缩写不规范等语义一致性问题。',
    },
    requirementsInterviewAgent: {
      title: '需求访谈智能体',
      description:
        '基于经验本体开展多轮需求访谈，通过需求槽位组织、针对性追问和用户回答解析，持续发现并澄清隐含需求。',
    },
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
    domainOntology: {
      title: '领域知识本体自动构建',
      description:
        '面向需求、设计、代码和测试全链路，自动构建和演化领域知识本体，支撑知识驱动的软件工程与智能化工具链。',
    },
  },
}
