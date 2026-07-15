export default {
  title: '工具',
  subtitle: 'RE4CPS 历史需求工程工具',
  description:
    '本页面整理 RE4CPS.org 已有的需求建模、问题分解、一致性验证、安全隐私分析和 IoT 场景分析工具。部分工具开发时间较早，当前可能只保留前端页面或暂时无法正常运行。',
  actions: {
    useOnline: '在线使用',
  },
  linkLabels: {
    openArgue: '打开 OpenArgue',
    prismDemo: 'PRISM 演示',
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
    problemFrames: '问题框架',
    textModeling: '文本建模',
    diagramGeneration: '图形生成',
    ontology: '本体',
    diagramModeling: '图形建模',
    environmentKnowledge: '环境知识',
    collaborativeModeling: '协同建模',
    synchronization: '同步',
    conflictResolution: '冲突消解',
    iStar: 'iStar',
    goalModeling: '目标建模',
    requirementsAnalysis: '需求分析',
    problemProjection: '问题投影',
    problemDecomposition: '问题分解',
    scenario: '场景',
    problemProgression: '问题推进',
    specificationGeneration: '规约生成',
    domainAssumption: '领域假设',
    timingRequirements: '时序需求',
    patternLanguage: '模式语言',
    smt: 'SMT',
    consistencyVerification: '一致性验证',
    ccsl: 'CCSL',
    sequenceDiagram: '顺序图',
    myCcsl: 'MyCCSL',
    clockGraph: '时钟图',
    environmentModel: '环境模型',
    cps: 'CPS',
    rtsp: 'RTSP',
    ecGraph: 'EC 图',
    z3: 'Z3',
    realTimeRequirements: '实时需求',
    problemDiagram: '问题图',
    scenarioGraph: '场景图',
    cvc4: 'CVC4',
    securityRequirements: '安全需求',
    privacyRequirements: '隐私需求',
    riskAnalysis: '风险分析',
    openArgue: 'OpenArgue',
    prism: 'PRISM',
    iot: 'IoT',
    deviceScheduling: '设备调度',
    requirementsGeneration: '需求生成',
    scenarioSimulation: '场景仿真',
    tapRules: 'TAP 规则',
    smartHome: '智能家居',
    staticAnalysis: '静态分析',
    dynamicSimulation: '动态仿真',
    conflictDetection: '冲突检测',
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
}
