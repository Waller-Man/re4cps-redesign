export default {
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
}
