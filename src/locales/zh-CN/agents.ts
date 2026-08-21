export default {
  title: '需求工程智能体',
  description: '面向需求开发、需求演化、历史需求文档处理与需求驱动测试的智能体与工具。',
  viewDirection: '查看相关智能体',
  backToOverview: '返回智能体概览',
  capabilityNavigation: '能力导航',
  categories: {
    softwareRequirementsDevelopment: {
      title: '软件需求开发',
      description: '覆盖需求抽取、澄清、补全、规约、文档生成和质量检查，连接从需求获取到交付评审的完整开发活动。',
    },
    requirementsChangeEvolution: {
      title: '需求变更与演化',
      description: '面向多源变更识别、规约演化、影响分析、基线管理与追踪，支撑需求及其关联软件制品的持续演化。',
    },
    historicalRequirementsDocumentProcessing: {
      title: '历史需求文档处理',
      description: '面向历史需求文档的拆分解析、术语统一、信息提取、需求建模和追踪关系构建，促进已有需求知识复用。',
    },
    testCaseGeneration: {
      title: '需求驱动的测试用例生成',
      description: '从需求和工程知识出发构建测试条件与场景，生成并评估测试用例，并支持需求变更驱动的测试演化和资产管理。',
    },
  },
  nodes: {
    requirementsFunctionalLogicCompletion: '需求功能逻辑补全',
    softwareRequirementsGenerationBasedOnUserRequirements: '基于用户需求的软件需求生成',
    requirementsExtraction: '需求抽取',
    requirementsClarification: '需求澄清',
    requirementsCompletionRecommendation: '需求补全推荐',
    abnormalScenarioCompletion: '异常场景补全',
    humanSafetyRequirementsCompletionRecommendation: '人身安全需求补全推荐',
    reliabilityRequirementsCompletionRecommendation: '可靠性需求补全推荐',
    informationSecurityRequirementsCompletionRecommendation: '信息安全需求补全推荐',
    requirementsSpecification: '需求规约',
    softwareRequirementsGenerationBasedOnBusinessRules: '基于业务规则的软件需求生成',
    fdirRequirementsGenerationBasedOnFeedforwardFeedbackControl:
      '基于前馈—反馈控制的 FDIR 需求生成',
    softwareRequirementsGenerationBasedOnSystemRequirements: '基于系统需求的软件需求生成',
    requirementsDocumentGeneration: '需求文档生成',
    requirementsDocumentStructurePlanning: '基于结构规划的需求文档生成',
    requirementsDocumentContentGeneration: '基于内容生成的需求文档生成',
    requirementsDocumentStructureCompletion: '基于结构补全的需求文档生成',
    requirementsDocumentFormattingEnhancement: '基于格式美化的需求文档生成',
    requirementsDocumentQualityInspection: '需求文档质量检查',
    requirementsDocumentConsistencyCheck: '需求文档的一致性检查',
    requirementsDocumentSemanticConflictDetection: '需求文档的语义冲突检测',
    requirementsDocumentLogicalConflictDetection: '需求文档的逻辑冲突检测',
    requirementsDocumentCompletenessCheck: '需求文档的完整性检查',
    requirementsDocumentFunctionalScenarioCoverageCompletenessCheck:
      '需求文档的功能场景覆盖完整性检查',
    requirementsDocumentFunctionalSafetyCoverageCompletenessCheck:
      '需求文档的功能安全覆盖完整性检查',
    requirementsDocumentInformationSecurityCoverageCompletenessCheck:
      '需求文档的信息安全覆盖完整性检查',
    requirementsDocumentReliabilityCoverageCompletenessCheck:
      '需求文档的可靠性覆盖完整性检查',
    requirementsDocumentPerformanceCoverageCompletenessCheck:
      '需求文档的性能覆盖完整性检查',
    reviewAssistantAgent: '评审助手智能体',
    complianceReviewAgent: '合规审查智能体',
    differenceComparison: '差异对比',
    potentialChangeSourceIdentificationBasedOnRequirementsDocuments:
      '基于需求文档的可能变更源识别',
    realWorldChangeSourceAndChangeIdentification: '现实变更源及变更识别',
    userRequirementsChangeIdentification: '用户需求变更识别',
    businessRuleChangeIdentification: '业务规则变更识别',
    externalEnvironmentChangeIdentification: '外部环境变化识别',
    specificationEvolutionForMultiSourceRequirementsChanges: '面向多源需求变更的规约演化',
    specificationEvolutionBasedOnBusinessRuleChanges: '基于业务规则变更的规约演化',
    specificationEvolutionBasedOnUserRequirementsChanges: '基于用户需求变更的规约演化',
    specificationEvolutionBasedOnExternalEnvironmentChanges: '基于外部环境变化的规约演化',
    changeImpactAnalysis: '变更影响分析',
    multiSourceRequirementsSpecificationChangeFusion: '多源需求规约变更融合',
    baselineManagement: '基线管理',
    changeTraceability: '变更追踪',
    activityDiagramBasedBehavioralModeling: '基于活动图的行为建模',
    sequenceDiagramBasedBehavioralModeling: '基于顺序图的行为建模',
    stateDiagramBasedBehavioralModeling: '基于状态图的行为建模',
    documentSegmentation: '文档拆分',
    documentParsing: '文档解析',
    terminologyUnification: '术语统一',
    invalidContentFiltering: '无效过滤',
    requirementsInformationExtractionAndFusion: '需求信息提取与融合',
    requirementsModeling: '需求建模',
    functionalModeling: '功能建模',
    functionalModelingBasedOnUseCaseModels: '基于用例模型的功能建模',
    functionalModelingBasedOnDataFlowDiagrams: '基于数据流图的功能建模',
    behavioralModeling: '行为建模',
    flowchartGeneration: '流程图生成',
    dataModeling: '数据建模',
    dataModelingBasedOnErDiagrams: '基于 E-R 图的数据建模',
    requirementsRelationshipIdentification: '需求关系识别',
    highLevelToSoftwareRequirementsTraceabilityNetworkConstruction:
      '高层需求—软件需求追溯关系网络建立',
    testConditionScenarioConstruction: '测试条件与场景构建',
    testConditionDerivation: '测试条件推导',
    normalExceptionalScenarioGeneration: '正常与异常场景生成',
    boundaryCombinatorialScenarioGeneration: '边界与组合场景生成',
    testCaseGenerationMethods: '测试用例生成',
    functionalTestCaseGeneration: '功能测试用例生成',
    apiTestCaseGeneration: '接口测试用例生成',
    integrationTestCaseGeneration: '集成测试用例生成',
    nonFunctionalTestCaseGeneration: '非功能测试用例生成',
    testQualityCoverageAnalysis: '测试质量与覆盖分析',
    testCaseCompletenessChecking: '测试用例完整性检查',
    testCaseExecutabilityChecking: '测试用例可执行性检查',
    testCaseRedundancyObsolescenceDetection: '测试用例冗余与过时检测',
    requirementsScenarioCoverageAnalysis: '需求与场景覆盖分析',
    testBlindSpotRiskIdentification: '测试盲区与风险识别',
    changeDrivenTestEvolution: '变更驱动的测试演化',
    testImpactScopeAnalysis: '测试影响范围分析',
    testCaseReuseModification: '测试用例复用与修改',
    incrementalTestCaseGeneration: '增量测试用例生成',
    testAssetManagement: '测试资产管理',
    requirementsTestCaseTraceabilityEstablishment: '需求—测试用例追溯关系建立',
    testCaseVersionManagementDelivery: '测试用例版本管理与交付',
  },
  nodeDescriptions: {
    requirementsFunctionalLogicCompletion:
      '围绕用例、数据实体及其操作关系识别业务逻辑缺口，并补全缺失的功能需求。',
    softwareRequirementsGenerationBasedOnUserRequirements:
      '将用户目标、访谈信息和场景描述转化为结构化、可验证的软件需求规约。',
    requirementsExtraction:
      '从访谈记录、领域材料和自然语言文档中识别需求要素、约束及其关系。',
    requirementsClarification:
      '通过上下文分析和针对性追问消解歧义，确认需求边界、意图与约束。',
    requirementsCompletionRecommendation:
      '结合业务逻辑、质量属性和领域知识发现需求缺口，并给出可追溯的补全建议。',
    abnormalScenarioCompletion:
      '从正常业务流程中系统识别异常分支，并补充相应的检测、处理与恢复需求。',
    humanSafetyRequirementsCompletionRecommendation:
      '分析系统行为可能造成的人身风险，补充预防、保护和失效处置相关需求。',
    reliabilityRequirementsCompletionRecommendation:
      '围绕故障、可用性和恢复能力识别可靠性约束缺口，并形成补全建议。',
    informationSecurityRequirementsCompletionRecommendation:
      '结合资产、威胁与访问场景分析信息安全风险，补充可执行的安全需求。',
    requirementsSpecification:
      '将需求知识组织为清晰、一致且可验证的规约，支撑后续设计、实现与测试。',
    softwareRequirementsGenerationBasedOnBusinessRules:
      '解析业务规则中的条件、动作和约束关系，生成具体的软件需求规约。',
    fdirRequirementsGenerationBasedOnFeedforwardFeedbackControl:
      '结合故障传播、系统偏差和恢复策略，生成故障检测、隔离与恢复需求。',
    softwareRequirementsGenerationBasedOnSystemRequirements:
      '细化系统级目标、接口和约束，形成可分配、可追踪的软件需求。',
    requirementsDocumentGeneration:
      '围绕文档结构、内容组织和表达规范生成完整的需求文档。',
    requirementsDocumentStructurePlanning:
      '依据项目类型和交付规范规划章节层级、内容范围及组织顺序。',
    requirementsDocumentContentGeneration:
      '基于结构化需求信息生成章节内容，并保持上下文一致和术语统一。',
    requirementsDocumentStructureCompletion:
      '检查文档结构缺口，补齐缺失章节、条目和必要的关联信息。',
    requirementsDocumentFormattingEnhancement:
      '统一编号、表格、图示和版式表达，提升需求文档的规范性与可读性。',
    requirementsDocumentQualityInspection:
      '从一致性、完整性、合规性和可评审性等维度检查需求文档质量。',
    requirementsDocumentConsistencyCheck:
      '识别需求之间以及文本、模型和约束之间的不一致问题。',
    requirementsDocumentSemanticConflictDetection:
      '分析术语、主体、动作和约束的语义关系，发现含义矛盾或表述冲突。',
    requirementsDocumentLogicalConflictDetection:
      '将条件、状态和时序约束转化为可分析表示，检测逻辑不可满足的需求组合。',
    requirementsDocumentCompletenessCheck:
      '从业务场景和质量属性覆盖角度识别需求文档中的遗漏。',
    requirementsDocumentFunctionalScenarioCoverageCompletenessCheck:
      '检查功能场景、步骤和数据流是否完整覆盖目标业务行为。',
    requirementsDocumentFunctionalSafetyCoverageCompletenessCheck:
      '检查危险场景、安全约束和风险控制措施是否得到充分覆盖。',
    requirementsDocumentInformationSecurityCoverageCompletenessCheck:
      '检查资产、威胁、权限和防护措施相关需求是否覆盖完整。',
    requirementsDocumentReliabilityCoverageCompletenessCheck:
      '检查故障容错、可用性、恢复和降级相关需求是否覆盖完整。',
    requirementsDocumentPerformanceCoverageCompletenessCheck:
      '检查响应时间、吞吐量、资源使用和容量边界等性能需求是否完整。',
    reviewAssistantAgent:
      '辅助评审人员定位模糊、不一致、不可验证和缺少依据的需求表述。',
    complianceReviewAgent:
      '对照标准、规范和组织规则检查需求文档的符合性与证据覆盖。',
    differenceComparison:
      '对比不同版本或来源的需求内容，识别新增、删除和修改项。',
    potentialChangeSourceIdentificationBasedOnRequirementsDocuments:
      '从需求文档中的依赖、假设和不稳定信息识别潜在变更来源。',
    realWorldChangeSourceAndChangeIdentification:
      '持续分析用户、业务和环境变化，识别其可能触发的需求变更。',
    userRequirementsChangeIdentification:
      '识别用户目标、偏好和使用场景变化对现有需求产生的影响。',
    businessRuleChangeIdentification:
      '分析政策、流程和业务约束更新，定位需要同步调整的需求。',
    externalEnvironmentChangeIdentification:
      '识别法规、技术、设备和运行环境变化带来的需求调整。',
    specificationEvolutionForMultiSourceRequirementsChanges:
      '协调多来源变更并演化需求规约，保持内容一致、边界清晰和关系可追踪。',
    specificationEvolutionBasedOnBusinessRuleChanges:
      '将业务规则变化映射到相关规约条目，并更新对应条件与约束。',
    specificationEvolutionBasedOnUserRequirementsChanges:
      '依据用户需求变化调整功能、交互和质量要求，维护规约一致性。',
    specificationEvolutionBasedOnExternalEnvironmentChanges:
      '根据外部环境变化更新接口、约束、假设和适应性需求。',
    changeImpactAnalysis:
      '沿需求依赖和追踪关系分析变更对设计、代码、测试及其他需求的影响。',
    multiSourceRequirementsSpecificationChangeFusion:
      '对来自不同角色和文档的变更进行对齐、消歧、冲突处理与融合。',
    baselineManagement:
      '维护需求基线、版本状态和批准记录，确保变更过程可控且可审计。',
    changeTraceability:
      '建立变更原因、变更内容和受影响制品之间的双向追踪关系。',
    activityDiagramBasedBehavioralModeling:
      '从需求场景提取活动、分支和并发关系，生成活动图行为模型。',
    sequenceDiagramBasedBehavioralModeling:
      '识别参与者及消息交互顺序，构建顺序图以表达协作行为。',
    stateDiagramBasedBehavioralModeling:
      '提取状态、事件、条件和转换关系，形成状态图行为模型。',
    documentSegmentation:
      '依据章节、语义主题和结构线索拆分长篇历史需求文档。',
    documentParsing:
      '解析文档中的文本、表格、编号和层级结构，形成可处理的内容表示。',
    terminologyUnification:
      '建立统一术语和缩写词典，发现并规范不一致的领域表达。',
    invalidContentFiltering:
      '识别页眉页脚、重复内容和非需求信息，减少后续处理噪声。',
    requirementsInformationExtractionAndFusion:
      '从多源文档抽取需求要素并进行语义对齐，融合为结构化需求信息。',
    requirementsModeling:
      '将文本需求转化为功能、行为和数据模型，支持分析与验证。',
    functionalModeling:
      '组织系统功能、参与者和信息流，形成对功能边界的结构化表达。',
    functionalModelingBasedOnUseCaseModels:
      '识别参与者、用例及其关系，构建覆盖主要业务目标的用例模型。',
    functionalModelingBasedOnDataFlowDiagrams:
      '提取处理过程、数据存储和外部实体，构建数据流图功能模型。',
    behavioralModeling:
      '刻画需求场景中的活动、交互、状态和控制流程。',
    flowchartGeneration:
      '从步骤与条件关系生成流程图，清晰表达业务处理路径。',
    dataModeling:
      '识别业务实体、属性和关系，形成支持需求分析的数据模型。',
    dataModelingBasedOnErDiagrams:
      '从需求文本抽取实体、属性和联系，构建 E-R 图数据模型。',
    requirementsRelationshipIdentification:
      '识别需求之间的依赖、细化、冲突、重复和关联关系。',
    highLevelToSoftwareRequirementsTraceabilityNetworkConstruction:
      '连接高层目标、系统需求和软件需求，建立可导航的追溯关系网络。',
    testConditionScenarioConstruction:
      '从需求约束和业务流程中构建可用于测试设计的条件与场景。',
    testConditionDerivation:
      '提取前置条件、触发条件、输入约束和预期结果，形成测试条件。',
    normalExceptionalScenarioGeneration:
      '围绕主流程、备选流程和异常处理生成正常与异常测试场景。',
    boundaryCombinatorialScenarioGeneration:
      '结合边界值和关键参数组合构造覆盖高风险交互的测试场景。',
    testCaseGenerationMethods:
      '将测试条件和场景转化为包含步骤、数据与预期结果的测试用例。',
    functionalTestCaseGeneration:
      '依据功能需求和业务流程生成验证预期行为的测试用例。',
    apiTestCaseGeneration:
      '根据接口契约、参数约束和错误响应生成 API 测试用例。',
    integrationTestCaseGeneration:
      '围绕组件协作、接口依赖和端到端流程生成集成测试用例。',
    nonFunctionalTestCaseGeneration:
      '针对性能、可靠性、安全性和可用性等质量需求生成测试用例。',
    testQualityCoverageAnalysis:
      '评估测试用例的完整性、可执行性、有效性及需求覆盖水平。',
    testCaseCompletenessChecking:
      '检查测试用例是否覆盖需求、场景、边界和关键异常路径。',
    testCaseExecutabilityChecking:
      '检查测试前置条件、数据、步骤和预期结果是否明确且可执行。',
    testCaseRedundancyObsolescenceDetection:
      '识别重复、失效或与当前需求版本不一致的测试用例。',
    requirementsScenarioCoverageAnalysis:
      '建立需求、业务场景和测试用例之间的覆盖关系并识别缺口。',
    testBlindSpotRiskIdentification:
      '结合覆盖结果和风险信息定位尚未验证的关键行为与薄弱区域。',
    changeDrivenTestEvolution:
      '依据需求变更调整测试资产，保持测试内容与最新规约同步。',
    testImpactScopeAnalysis:
      '分析需求变更对测试场景、用例、数据和环境的影响范围。',
    testCaseReuseModification:
      '识别可复用测试用例，并根据变更内容进行定向修改。',
    incrementalTestCaseGeneration:
      '针对新增或变更需求生成增量测试用例，避免无差别重建。',
    testAssetManagement:
      '组织测试用例、数据、追踪关系和版本信息，支持持续维护与交付。',
    requirementsTestCaseTraceabilityEstablishment:
      '建立需求与测试用例的双向追踪关系，支撑覆盖和影响分析。',
    testCaseVersionManagementDelivery:
      '管理测试用例版本、变更记录和交付基线，保证资产可追溯。',
  },
  actions: {
    github: '在线使用',
    demo: '在线 Demo',
    details: '查看详情',
  },
  tags: {
    llm: 'LLM',
    multiAgent: '多智能体',
    requirementsDevelopment: '需求开发',
    srs: 'SRS',
    requirementsCompletion: '需求补全',
    businessLogic: '业务逻辑',
    useCase: 'Use Case',
    erDiagram: 'E-R Diagram',
    crud: 'CRUD',
    plantUml: 'PlantUML',
    behaviorModeling: '行为建模',
    requirementsAnalysis: 'Requirements Analysis',
    requirementsUnderstanding: '需求理解',
    knowledgeGraph: '知识图谱',
    requirementsInterview: '需求访谈',
    ontologyDriven: '本体驱动',
    multiTurnDialogue: '多轮对话',
    exceptionalScenarios: '异常场景',
    useCaseAnalysis: '用例分析',
    exceptionRemediation: '异常修复',
    informationSecurity: '信息安全',
    threatModeling: '威胁建模',
    businessRules: '业务规则',
    requirementsGeneration: '需求生成',
    formalSpecification: '形式化规约',
    fdir: 'FDIR',
    faultAnalysis: '故障分析',
    conflictDetection: '冲突检测',
    constraintSolving: '约束求解',
    temporalAnalysis: '时序分析',
    scenarioModeling: '场景建模',
    coverageChecking: '覆盖检查',
    terminologyUnification: '术语统一',
    consistencyChecking: '一致性检查',
    abbreviationStandardization: '缩写规范',
    requirementsExtraction: '需求抽取',
    informationFusion: '信息融合',
    requirementsMetamodel: '需求元模型',
    humanSafety: '人身安全',
    hazardAnalysis: '危险分析',
    reliability: '可靠性',
    systemRequirements: '系统需求',
    requirementsRefinement: '需求细化',
    documentStructure: '文档结构',
    documentGeneration: '文档生成',
    documentFormatting: '文档格式',
    semanticAnalysis: '语义分析',
    coverageAnalysis: '覆盖分析',
    performanceRequirements: '性能需求',
    qualityInspection: '质量检查',
    complianceReview: '合规评审',
    differenceAnalysis: '差异分析',
    changeIdentification: '变更识别',
    changeSource: '变更源',
    environmentAnalysis: '环境分析',
    specificationEvolution: '规约演化',
    changeImpact: '变更影响',
    changeTraceability: '变更追踪',
    changeFusion: '变更融合',
    baselineManagement: '基线管理',
    versionManagement: '版本管理',
    traceabilityNetwork: '追踪网络',
    documentSegmentation: '文档拆分',
    documentParsing: '文档解析',
    contentFiltering: '内容过滤',
    useCaseModeling: '用例建模',
    requirementsModeling: '需求建模',
    dataFlowModeling: '数据流建模',
    flowchart: '流程图',
    dataModeling: '数据建模',
    relationshipExtraction: '关系识别',
    testCondition: '测试条件',
    scenarioGeneration: '场景生成',
    boundaryAnalysis: '边界分析',
    combinatorialTesting: '组合测试',
    testGeneration: '测试生成',
    apiTesting: 'API 测试',
    integrationTesting: '集成测试',
    nonFunctionalTesting: '非功能测试',
    completenessChecking: '完整性检查',
    executabilityChecking: '可执行性检查',
    redundancyDetection: '冗余检测',
    testTraceability: '测试追踪',
    riskIdentification: '风险识别',
    testImpact: '测试影响',
    testReuse: '测试复用',
    testEvolution: '测试演化',
    testAssetManagement: '测试资产管理',
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
        'ReqCompleter 基于用例模型、E-R 图和增删改查矩阵构建业务逻辑闭环，自动识别功能逻辑缺口，补充缺失用例和数据操作，并通过迭代检查与幻觉过滤提升需求完整性。',
    },
    reqUnderstander: {
      title: 'ReqUnderstander：嵌入式需求语义理解与知识网络构建工具',
      description:
        'ReqUnderstander 以“功能—设备—数据—逻辑”四元组为核心，对嵌入式需求文档进行语义解析、关键要素抽取、关系构建与一致性校验，将自然语言需求转化为可计算、可追溯的需求知识网络。',
    },
    requirementsInterviewAgent: {
      title: '需求访谈智能体',
      description:
        '基于经验本体开展多轮需求访谈，通过需求槽位排序、针对性追问、用户回答解析和分层剪枝，持续发现与澄清隐含需求，最终形成经过用户确认的需求集合。',
    },
    reqExceptionHunter: {
      title: 'ReqExceptionHunter：异常场景完备性检测与修复工具',
      description:
        'ReqExceptionHunter 从正常用例主流程出发，基于参与者分类和多维关注点识别异常场景，构建可追溯异常树，并生成超时、重试、限流和状态校验等异常处理需求。',
    },
    informationSecurityRequirementsCompletionAgent: {
      title: '信息安全需求补全智能体',
      description:
        '从用例和 E-R 图中识别系统资产及敏感数据，利用 STRIDE 枚举潜在威胁，将威胁映射为身份认证、访问控制、加密传输和审计日志等可执行安全需求。',
    },
    businessRuleRequirementsGenerationAgent: {
      title: '基于业务规则的软件需求生成智能体',
      description:
        '对业务规则进行分类过滤、语义简化、需求要素抽取和上下文约束补全，识别需求之间的隐式依赖关系，最终生成完整、具体且可执行的软件需求规约。',
    },
    fdirRequirementsGenerationAgent: {
      title: '基于前馈—反馈控制的 FDIR 需求自动生成智能体',
      description:
        '基于系统—环境偏差分析、统一功能故障元模型和恢复策略库，识别故障传播路径，自动生成故障检测、故障隔离和故障恢复需求，并建立完整追溯链路。',
    },
    constraintSolvingConflictDetectionAgent: {
      title: '基于约束求解的细粒度需求冲突检测智能体',
      description:
        '自动抽取模式、转换条件、变量依赖和时间约束，构建模式转换图与需求依赖图，将需求场景编码为约束方程，并通过求解器发现不可满足的冲突场景。',
    },
    sceneOpt: {
      title: 'SceneOpt：功能场景覆盖完整性检查与补全工具',
      description:
        'SceneOpt 将用例分解为业务场景并构建场景—步骤—数据流模型，识别步骤遗漏、数据流中断和功能需求未覆盖等问题，通过定向补全和复核迭代提升场景覆盖率。',
    },
    terminologyConsistencyCheckingAgent: {
      title: '术语一致性检查智能体',
      description:
        '自动提取需求文档中的专业术语和缩写，构建项目术语词典，检测同义异词、同词异义及缩写使用不规范问题，并给出统一修正建议。',
    },
    requirementsInformationExtractionFusionAgent: {
      title: '基于多维需求元模型的需求信息提取与融合智能体',
      description:
        '以多维需求元模型为统一语义骨架，从非结构化研制文档中提取任务、系统和软件设计信息，通过完整性、正确性与跨维度一致性校验，形成结构化需求模型。',
    },
    humanSafetyRequirementsCompletionAgent: {
      title: '人身安全需求补全智能体',
      description: '分析系统行为可能导致的人身伤害风险，结合危险场景与安全约束识别缺口，并生成安全需求补全建议。',
    },
    reliabilityRequirementsCompletionAgent: {
      title: '可靠性需求补全智能体',
      description: '分析故障、异常、退化和恢复场景，识别可靠性需求缺口并生成可追溯的补全建议。',
    },
    systemRequirementsRefinementAgent: {
      title: '系统需求驱动的软件需求细化智能体',
      description: '解析系统级目标、接口与约束，将其细化为可分配、可验证并与上层需求保持追踪的软件需求。',
    },
    requirementsDocumentStructurePlanningAgent: {
      title: '需求文档结构规划智能体',
      description: '依据项目类型、交付模板和规约要求规划需求文档的章节层级、内容范围与组织顺序。',
    },
    requirementsDocumentContentGenerationAgent: {
      title: '需求文档内容生成智能体',
      description: '根据结构化需求信息生成章节内容，并保持上下文衔接、术语使用和约束表达的一致性。',
    },
    requirementsDocumentStructureCompletionAgent: {
      title: '需求文档结构补全智能体',
      description: '检查文档结构与模板要求之间的差距，补齐缺失章节、需求条目和必要关联信息。',
    },
    requirementsDocumentFormattingAgent: {
      title: '需求文档规范化编排智能体',
      description: '统一需求编号、表格、图示和版式表达，使文档符合交付规范并保持清晰可读。',
    },
    semanticConflictDetectionAgent: {
      title: '基于语义分析的需求冲突检测智能体',
      description: '分析需求中的术语、主体、动作和约束关系，识别含义矛盾、表述歧义与语义冲突。',
    },
    functionalSafetyCoverageAgent: {
      title: '面向功能安全覆盖的需求检查智能体',
      description: '对照危险场景、安全目标和风险控制措施，检查需求文档的功能安全覆盖并定位遗漏。',
    },
    informationSecurityCoverageAgent: {
      title: '信息安全需求覆盖分析智能体',
      description: '围绕资产、威胁、权限与防护措施建立覆盖关系，识别信息安全需求中的缺失环节。',
    },
    reliabilityCoverageAgent: {
      title: '可靠性需求覆盖分析智能体',
      description: '检查故障容错、可用性、恢复和降级场景的需求覆盖，定位尚未说明的可靠性约束。',
    },
    performanceCoverageAgent: {
      title: '性能需求覆盖检查智能体',
      description: '检查响应时间、吞吐量、资源使用与容量边界等性能维度是否得到完整需求覆盖。',
    },
    requirementsReviewAssistant: {
      title: '面向需求文档的评审辅助智能体',
      description: '辅助评审人员定位模糊、不一致、不可验证和缺少依据的需求，并整理可复核的评审意见。',
    },
    requirementsComplianceReviewAgent: {
      title: '需求规范符合性评审智能体',
      description: '对照标准、规范和组织规则检查需求文档，识别不符合项及其缺失的支撑证据。',
    },
    requirementsDifferenceAnalysisAgent: {
      title: '需求版本差异分析智能体',
      description: '对齐不同版本或来源的需求内容，识别新增、删除和修改项，并形成结构化差异结果。',
    },
    potentialChangeSourceIdentificationAgent: {
      title: '基于需求文档的潜在变更源识别智能体',
      description: '分析需求中的依赖、假设和不稳定信息，识别可能引发后续调整的潜在变更来源。',
    },
    userRequirementsChangeIdentificationAgent: {
      title: '用户需求变化识别智能体',
      description: '分析用户目标、偏好和使用场景的变化，定位受影响的现有需求及待确认内容。',
    },
    businessRuleChangeIdentificationAgent: {
      title: '业务规则变更识别智能体',
      description: '比较政策、流程和业务约束的变化，识别需要同步调整的软件需求。',
    },
    externalEnvironmentChangeIdentificationAgent: {
      title: '外部环境变化识别智能体',
      description: '监测法规、技术、设备与运行环境变化，分析其对需求边界和约束的影响。',
    },
    businessRuleSpecificationEvolutionAgent: {
      title: '业务规则驱动的需求规约演化智能体',
      description: '将业务规则变化映射到相关规约条目，更新条件、动作与约束并保持关联一致。',
    },
    userRequirementsSpecificationEvolutionAgent: {
      title: '用户需求变更驱动的规约演化智能体',
      description: '依据用户目标和场景变化调整功能、交互与质量需求，维护规约版本之间的一致性。',
    },
    environmentSpecificationEvolutionAgent: {
      title: '环境变化驱动的需求规约演化智能体',
      description: '根据外部环境变化更新接口、约束、假设和适应性需求，并记录演化依据。',
    },
    requirementsChangeImpactAnalysisAgent: {
      title: '基于追踪关系的需求变更影响分析智能体',
      description: '沿需求依赖和追踪网络分析变更对其他需求及设计、代码和测试制品的影响范围。',
    },
    multiSourceChangeFusionAgent: {
      title: '多源需求变更融合智能体',
      description: '对来自不同角色与文档的变更进行语义对齐、冲突识别和一致性融合。',
    },
    requirementsBaselineManagementAgent: {
      title: '需求基线管理智能体',
      description: '维护需求基线、版本状态、批准记录和变更关联，支撑可控且可审计的演化过程。',
    },
    requirementsChangeTraceabilityAgent: {
      title: '需求变更追踪智能体',
      description: '建立变更原因、变更内容与受影响制品之间的双向追踪关系，并检查链路完整性。',
    },
    requirementsDocumentSegmentationAgent: {
      title: '历史需求文档语义拆分智能体',
      description: '结合章节结构与语义主题拆分长篇历史文档，保留段落层级和上下文关联。',
    },
    historicalRequirementsDocumentParsingAgent: {
      title: '历史需求文档结构解析智能体',
      description: '解析文本、表格、编号和章节层级，将异构历史文档转化为可处理的结构化表示。',
    },
    requirementsContentFilteringAgent: {
      title: '需求文档有效内容筛选智能体',
      description: '识别页眉页脚、重复段落和非需求信息，保留与需求分析相关的有效内容。',
    },
    useCaseModelingAgent: {
      title: '基于用例的功能建模智能体',
      description: '从需求文档中识别参与者、用例及其关系，构建覆盖主要业务目标的用例模型。',
    },
    dataFlowModelingAgent: {
      title: '基于数据流的功能建模智能体',
      description: '提取处理过程、数据存储、外部实体和数据流，生成数据流图功能模型。',
    },
    requirementsFlowchartGenerationAgent: {
      title: '需求流程图生成智能体',
      description: '解析业务步骤、判断条件和循环关系，生成可校验的需求流程图。',
    },
    erDataModelingAgent: {
      title: '基于 E-R 图的需求数据建模智能体',
      description: '从需求文本中抽取实体、属性与联系，构建支撑业务分析的 E-R 数据模型。',
    },
    requirementsRelationshipIdentificationAgent: {
      title: '需求关系识别智能体',
      description: '分析需求语义与上下文，识别依赖、细化、冲突、重复和关联等关系。',
    },
    requirementsTraceabilityNetworkAgent: {
      title: '高层需求—软件需求追踪网络构建智能体',
      description: '连接高层目标、系统需求和软件需求，构建可查询、可解释的双向追踪网络。',
    },
    testConditionDerivationAgent: {
      title: '需求约束驱动的测试条件推导智能体',
      description: '从需求中提取前置条件、触发条件、输入约束和预期结果，形成明确的测试条件。',
    },
    normalExceptionalScenarioGenerationAgent: {
      title: '正常—异常测试场景生成智能体',
      description: '围绕主流程、备选流程和异常处理需求生成相互关联的正常与异常测试场景。',
    },
    boundaryCombinatorialScenarioAgent: {
      title: '边界与组合测试场景设计智能体',
      description: '分析参数边界和关键交互组合，构造覆盖高风险输入空间的测试场景。',
    },
    functionalTestGenerationAgent: {
      title: '功能需求驱动的测试用例生成智能体',
      description: '依据功能需求和业务流程生成包含步骤、数据和预期结果的功能测试用例。',
    },
    apiTestGenerationAgent: {
      title: '接口契约驱动的 API 测试生成智能体',
      description: '解析接口契约、参数约束和错误响应，生成正常、边界与异常 API 测试用例。',
    },
    integrationTestGenerationAgent: {
      title: '组件协作驱动的集成测试生成智能体',
      description: '围绕组件交互、接口依赖和端到端流程生成集成测试步骤与验证点。',
    },
    nonFunctionalTestGenerationAgent: {
      title: '质量需求驱动的非功能测试生成智能体',
      description: '将性能、可靠性、安全性和可用性等质量需求转化为可执行的非功能测试。',
    },
    testCompletenessCheckingAgent: {
      title: '测试用例完整性检查智能体',
      description: '检查测试用例对需求、业务场景、边界条件和关键异常路径的覆盖完整性。',
    },
    testExecutabilityCheckingAgent: {
      title: '测试用例可执行性检查智能体',
      description: '分析测试前置条件、数据、步骤和预期结果，识别阻碍测试执行的缺失或歧义。',
    },
    testRedundancyObsolescenceAgent: {
      title: '测试用例冗余与过时检测智能体',
      description: '识别重复、失效或与当前需求版本不一致的测试用例，并给出整理建议。',
    },
    requirementsScenarioCoverageAgent: {
      title: '需求—场景覆盖分析智能体',
      description: '建立需求、业务场景与测试用例的覆盖关系，定位未验证或覆盖不足的需求。',
    },
    testBlindSpotRiskAgent: {
      title: '测试盲区与风险识别智能体',
      description: '结合覆盖结果、需求重要性和失效风险，识别尚未充分验证的关键区域。',
    },
    testImpactAnalysisAgent: {
      title: '需求变更驱动的测试影响分析智能体',
      description: '分析需求变更对测试场景、用例、数据和环境的影响，确定需要调整的测试范围。',
    },
    testCaseReuseAdaptationAgent: {
      title: '测试用例复用与适配智能体',
      description: '识别可复用测试资产，并根据需求差异定向修改步骤、数据和预期结果。',
    },
    incrementalTestGenerationAgent: {
      title: '变更增量测试生成智能体',
      description: '针对新增或变更需求生成增量测试用例，避免对既有测试集进行无差别重建。',
    },
    requirementsTestTraceabilityAgent: {
      title: '需求—测试用例追踪构建智能体',
      description: '建立需求与测试用例的双向追踪关系，并检查覆盖链路的完整性与一致性。',
    },
    testVersionDeliveryAgent: {
      title: '测试用例版本与交付管理智能体',
      description: '维护测试用例版本、变更记录和交付基线，保证测试资产可追溯并与需求同步。',
    },
  },
}
