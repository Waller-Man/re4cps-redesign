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
    subtitle: 'RE4CPS 历史需求工程工具',
    description:
      '本页面整理 RE4CPS.org 已有的需求建模、问题分解、一致性验证、安全隐私分析和 IoT 场景分析工具。部分工具开发时间较早，当前可能只保留前端页面或暂时无法正常运行。',
    actions: {
      useOnline: '在线使用',
    },
    linkLabels: {
      openArgue: 'OpenArgue',
      prismDemo: 'PRISM Demo',
    },
    categories: {
      problemFramesModeling: {
        title: 'Problem Frames 建模与协同建模',
        description:
          '围绕 Problem Frames、Problem Diagram 和 iStar，支持文本建模、图形建模与协同编辑。',
      },
      problemDecompositionProgression: {
        title: '问题分解与需求推进',
        description: '面向复杂问题分解，以及从利益相关者需求逐步推导软件规格说明。',
      },
      timingConsistencyVerification: {
        title: '时序需求与一致性验证',
        description:
          '面向实时需求、序列图、环境模型和时钟约束的一致性建模与形式化验证。',
      },
      securityPrivacyAnalysis: {
        title: '安全与隐私分析',
        description:
          '面向 CPS 和 Cyber-Physical Social Systems 的安全、隐私、风险与收益权衡分析。',
      },
      iotSmartHomeAnalysis: {
        title: 'IoT 与智能家居场景分析',
        description: '面向 IoT 用户需求、设备调度、TAP 规则验证和智能家居场景仿真。',
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
        title: '基于文本的问题描述',
        description:
          '使用由 Xtext 定义的文本描述语言建模 Problem Diagram，并根据结构化文本自动生成问题图。',
      },
      diagramBasedProblemDescription: {
        title: '基于图形的问题描述',
        description:
          '利用 Problem Description Ontology 引导用户逐步完成问题图建模，检查中间结果，并结合 Environment Ontology 提供领域知识。',
      },
      synchronizationBasedProblemDescription: {
        title: '基于同步的问题描述',
        description:
          '整合文本和图形编辑器，实现 Problem Frames 协同建模、项目同步和冲突自动处理。',
      },
      synchronizationBasedIStarTool: {
        title: '基于同步的 iStar 建模工具',
        description:
          '使用文本和图形方式协同建模 iStar，支持意图、社会关系和策略维度的需求分析。',
      },
      problemProjection: {
        title: '问题投影',
        description:
          '将子问题视为主问题在相关现象上的投影，并结合关系代数、Problem Frames 和场景方法进行问题分解。',
      },
      problemProgression: {
        title: '问题推进',
        description:
          '从利益相关者需求端到端推导软件规格说明，并生成用于功能需求和质量需求分析的领域假设与关注点。',
      },
      timingRequirementsConsistencyAnalysis: {
        title: '时序需求一致性分析工具',
        description:
          '基于模式语言建模时序需求，并通过静态分析和 SMT 方法验证实时需求的一致性。',
      },
      sequenceDiagramConsistencyAnalysis: {
        title: '序列图一致性分析工具',
        description:
          '基于 CCSL 建模安全关键系统中的时钟约束，并使用 MyCCSL、SMT 或 Clock Graph 方法分析序列图一致性。',
      },
      environmentModelConsistencyVerification: {
        title: '基于环境模型的需求一致性验证',
        description:
          '从环境实体的交互场景和状态转换中提取环境属性约束，并转换为 Clock Graph 进行一致性验证。',
      },
      ecCheck: {
        title: 'EC-Check：实时需求一致性验证工具',
        description:
          '将 RTSP 实时需求转换为 EC Graph 和 SMT 公式，通过 Z3 求解并定位最小不一致需求集合。',
      },
      timingRequirementsModelingVerification: {
        title: '时序需求建模与验证工具',
        description:
          '基于 Problem Diagram 和 Scenario Graph 建模时序信息，将其转换为 CCSL 时钟关系，并使用 MyCCSL、Z3 和 CVC4 验证一致性。',
      },
      securityPrivacyAnalysisTools: {
        title: '安全与隐私分析工具',
        description:
          '基于安全漏洞和隐私知识识别风险因素，在系统行为模型上量化可能性与影响，并通过搜索优化算法权衡风险和系统收益。',
      },
      deviceSchedulingGeneratorSimulator: {
        title: '设备调度指令生成器与模拟器',
        description:
          '根据用户输入的 IoT 需求，自动补全和转换设备相关需求，推理系统行为，并生成设备调度指令与场景图。',
      },
      tapsSimulator: {
        title: 'TAPs-Simulator：TAP 规则仿真与验证工具',
        description:
          '基于环境模型对 TAP 规则进行静态和动态分析，可检查冗余、循环、不完整性、冲突、抖动、安全、隐私、能耗和舒适度。',
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
    enrollmentYear: '{year}年入学',
    graduationClass: '{year}届',
    careerDestination: '毕业去向',
    careerPath: '职业经历',
    current: '现',
    groups: {
      faculty: '教师',
      phd: '博士生',
      master: '硕士生',
      alumni: '已毕业学生',
    },
    organizations: {
      meituan: '美团',
      hithink: '同花顺',
      axera: '爱芯元智半导体股份有限公司',
      neteaseGames: '网易互娱',
      agriculturalBankOfChina: '中国农业银行',
      didi: '滴滴出行',
      poizon: '得物',
    },
    careerSteps: {
      startupExploration: '创业探索',
      futureStartupPlan: '未来创业计划',
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
        bio: '主要研究需求工程智能体，尤其关注用于需求获取的访谈智能体。',
      },
      yueFang: {
        name: '房越',
        role: '博士生',
        school: '北京大学，中国',
        bio: '主要研究面向软件工程的人工智能和形式化方法。',
      },
      zhengZhou: {
        name: '周钲',
        role: '博士生',
        school: '华东师范大学，中国',
        bio: '软件工程博士在读，主要研究智能化需求工程。',
      },
      xingkunPei: {
        name: '裴星坤',
        role: '博士生',
        school: '华东师范大学，中国',
        bio: '软件工程博士生，研究方向包括安全需求工程、安全攸关系统的自适应与运行保障，致力于提升复杂系统的安全可信性。',
      },
      bowenLuo: {
        name: '罗博文',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究大模型与需求工程，用需求与本体化的思路解决ComfyUI平台的工作流生成问题',
      },
      haotianLi: {
        name: '李浩天',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究物联网领域需求工程与Agent形态软件架构',
      },
      zihanChen: {
        name: '陈子涵',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究大模型与需求工程',
      },
      jingkaiLin: {
        name: '林靖凯',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究航天嵌入式软件与需求工程',
      },
      kailiangYang: {
        name: '杨凯亮',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究需求补全和异常场景识别，基于uppaal的时间自动机形式化验证',
      },
      zhujunWu: {
        name: '吴祝骏',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究大模型与需求工程',
      },
      haoranZhang: {
        name: '张浩然',
        role: '硕士生',
        school: '华东师范大学，中国',
      },
      yuxuanJi: {
        name: '季雨宣',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究需求自动化生成',
      },
      keyiMou: {
        name: '牟可翊',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究需求工程',
      },
      weihaoXia: {
        name: '夏伟豪',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究面向嵌入式系统的需求工程',
      },
      haoxiangYan: {
        name: '闫皓翔',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，主要研究需求工程与大模型主导的知识图谱构建，目前在研究项目有物联网领域异构设备能力建模与大模型辅助生成课题。',
      },
      boyiYe: {
        name: '叶博一',
        role: '硕士生',
        school: '华东师范大学，中国',
        bio: '软件工程硕士，聚焦智能需求工程与大模型驱动的软件工程。',
      },
      liuJiacheng: {
        name: '刘家诚',
        role: '硕士',
        school: '华东师范大学，中国',
        bio: '人一定要有梦想，而很巧的是，陈小红老师可以帮助你实现梦想。',
      },
      xiaoqiWang: {
        name: '王小齐',
        role: '硕士',
        school: '华东师范大学，中国',
      },
      weihaoZeng: {
        name: '曾惟昊',
        role: '硕士',
        school: '华东师范大学，中国',
      },
      liangguoLi: {
        name: '李靓果',
        role: '硕士',
        school: '华东师范大学，中国',
      },
      kunRuan: {
        name: '阮锟',
        role: '硕士',
        school: '华东师范大学，中国',
      },
      yuanGao: {
        name: '高远',
        role: '硕士',
        school: '华东师范大学，中国',
      },
      yikeHuang: {
        name: '黄益柯',
        role: '硕士',
        school: '华东师范大学，中国',
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
