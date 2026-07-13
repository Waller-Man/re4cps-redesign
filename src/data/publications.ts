export type PublicationGroup = '2026' | '2025' | '2024' | 'book'

export type PublicationType =
  | 'conference'
  | 'journal'
  | 'workshop'
  | 'chineseJournal'
  | 'book'
  | 'accepted'

export type PublicationLinkKind = 'pdf' | 'doi' | 'bibtex' | 'code' | 'tool'
export type PublicationRankTag = 'textbook'

export interface PublicationLink {
  kind: PublicationLinkKind
  href: string
}

export interface Publication {
  id: string
  group: PublicationGroup
  year: number
  title: string
  titleLocaleKey?: string
  authors: string
  venue: string
  types: readonly PublicationType[]
  rankTags?: readonly PublicationRankTag[]
  links?: readonly PublicationLink[]
  relatedToolIds?: readonly string[]
}

export const publicationGroupOrder: readonly PublicationGroup[] = [
  '2026',
  '2025',
  '2024',
  'book',
]

export const publications: readonly Publication[] = [
  {
    id: 'wu-2026-silent-needs',
    group: '2026',
    year: 2026,
    title:
      'Unlocking the Silent Needs: Business-Logic-Driven Iterative Requirements Auto-completion',
    authors: 'Zhujun Wu, Xiaohong Chen*, Zhi Jin*, Ming Hu, Dongming Jin',
    venue: 'ICSE',
    types: ['conference', 'accepted'],
  },
  {
    id: 'fang-2026-restl',
    group: '2026',
    year: 2026,
    title:
      'RESTL: Reinforcement Learning Guided by Multi-Aspect Rewards for Signal Temporal Logic Transformation',
    authors:
      'Yue Fang, Zhi Jin*, Jie An*, Hongshen Chen, Xiaohong Chen, Naijun Zhan',
    venue: 'AAAI 2026',
    types: ['conference'],
  },
  {
    id: 'huang-2026-onion-modeling',
    group: '2026',
    year: 2026,
    title:
      'Modeling Like Peeling an Onion: Layerwise Analysis-Driven Automatic Behavioral Model Generation',
    authors: 'Yike Huang, Ming Hu, Xiaohong Chen*, Zhi Jin*, Shuyuan Xiao',
    venue: 'ICSE',
    types: ['conference', 'accepted'],
  },
  {
    id: 'chen-2025-smart-home-needs',
    group: '2025',
    year: 2025,
    title: "Expressing the Needs in Smart Home: What Is the End Users' Favorite Way",
    authors:
      'Xiaohong Chen, Shi Chen, Zhi Jin, Han Bian, Zihan Chen, Haotian Li',
    venue: 'ACM Transactions on Computer-Human Interaction, 32(2): 16:1-16:38',
    types: ['journal'],
  },
  {
    id: 'chen-2025-prototype-generation',
    group: '2025',
    year: 2025,
    title:
      'What You See Is What You Get: Prototype Generation for IoT End-User Programming',
    authors: 'Xiaohong Chen, Shi Chen, Zhi Jin, Zihan Chen, Mingsong Chen',
    venue: 'IEEE Transactions on Software Engineering, 51(7): 1996-2014',
    types: ['journal'],
  },
  {
    id: 'huang-2025-airborne-modeling',
    group: '2025',
    year: 2025,
    title: '机载系统软件需求的建模与分时组合验证方法',
    authors: '黄益柯, 阮锟, 陈小红, 金芝',
    venue: '计算机研究与发展, 62(9): 2362-2381',
    types: ['chineseJournal'],
  },
  {
    id: 'li-2025-securities-rules',
    group: '2025',
    year: 2025,
    title: '结合大语言模型和领域知识库的证券规则规约方法',
    authors: '李靓果, 薛志一, 陈小红, 张民, 陈良育, 李萍萍, 姜婷婷',
    venue: '软件学报, 36(10): 4671-4694',
    types: ['chineseJournal'],
  },
  {
    id: 'chen-2025-embedded-requirements-survey',
    group: '2025',
    year: 2025,
    title: '嵌入式系统的需求描述综述',
    authors: '陈小红, 刘少彬, 金芝',
    venue: '软件学报, 36(1): 27-46',
    types: ['chineseJournal'],
  },
  {
    id: 'yang-2025-compositional-verification',
    group: '2025',
    year: 2025,
    title: '复杂嵌入式系统需求一致性的组合验证方法',
    authors: '杨晓, 王小齐, 陈小红, 金芝',
    venue: '软件学报, 36(4): 1413-1434',
    types: ['chineseJournal'],
  },
  {
    id: 'xu-2025-test-case-generation',
    group: '2025',
    year: 2025,
    title:
      'Requirements Dependency Driven Test Case Generation: An Automotive Industry Practice',
    authors:
      'Tong Xu, Zheng Zhou, Xiaohong Chen, Zhiyi Xue, Yi Zhao, Min Zhang, Zhi Jin',
    venue: 'RE 2025: 400-404',
    types: ['conference'],
  },
  {
    id: 'lin-2025-structured-requirements',
    group: '2025',
    year: 2025,
    title:
      'Automatic Generation of Structured Requirements for Aerospace Embedded Systems Using LLMs',
    authors: 'Jingkai Lin, Yixing Luo, Xiaohong Chen, Bin Gu, Zhi Jin',
    venue:
      '2025 IEEE 33rd International Requirements Engineering Conference Workshops, REW 2025: 181-188',
    types: ['workshop'],
  },
  {
    id: 'fang-2025-stl-transformation',
    group: '2025',
    year: 2025,
    title:
      'Enhancing Transformation from Natural Language to Signal Temporal Logic Using LLMs with Diverse External Knowledge',
    authors:
      'Yue Fang, Zhi Jin, Jie An, Hongshen Chen, Xiaohong Chen, Naijun Zhan',
    venue: 'ACL Findings 2025: 10446-10458',
    types: ['conference'],
  },
  {
    id: 'xue-2024-llm4fin',
    group: '2024',
    year: 2024,
    title:
      'LLM4Fin: Fully Automating LLM-Powered Test Case Generation for FinTech Software Acceptance Testing',
    authors:
      'Zhiyi Xue, Liangguo Li, Senyue Tian, Xiaohong Chen*, Pingping Li, Liangyu Chen, Tingting Jiang, Min Zhang',
    venue: 'ISSTA 2024: 1643-1655',
    types: ['conference'],
  },
  {
    id: 'chen-2024-railway-inconsistencies',
    group: '2024',
    year: 2024,
    title:
      'A Scalable Approach to Detecting Safety Requirements Inconsistencies for Railway Systems',
    authors:
      'Xiaohong Chen, Zhi Jin, Min Zhang, Frédéric Mallet, Xiaoshan Liu, Tingliang Zhou',
    venue:
      'IEEE Transactions on Intelligent Transportation Systems, 25(8): 8375-8386',
    types: ['journal'],
  },
  {
    id: 'chen-2024-tapchecker',
    group: '2024',
    year: 2024,
    title:
      'TapChecker: A Lightweight SMT-Based Conflict Analysis for Trigger-Action Programming',
    authors:
      'Liangyu Chen, Chen Wang, Cheng Chen, Caidie Huang, Xiaohong Chen, Min Zhang',
    venue: 'IEEE Internet of Things Journal, 11(12): 21411-21426',
    types: ['journal'],
  },
  {
    id: 'xue-2024-domain-knowledge',
    group: '2024',
    year: 2024,
    title:
      'Domain Knowledge is All You Need: A Field Deployment of LLM-Powered Test Case Generation in FinTech Domain',
    authors:
      'Zhiyi Xue, Liangguo Li, Senyue Tian, Xiaohong Chen*, Pingping Li, Liangyu Chen, Tingting Jiang, Min Zhang',
    venue: 'ICSE Companion 2024: 314-315',
    types: ['conference'],
  },
  {
    id: 'chen-2024-device-models',
    group: '2024',
    year: 2024,
    title:
      'Building Device Models Using LLMs for Requirements Simulation in Smart Homes',
    authors: 'Shi Chen, Xiaohong Chen*, Zhi Jin, Tingliang Zhou',
    venue: 'REW 2024: 176-183',
    types: ['workshop'],
  },
  {
    id: 'huang-2024-realtime-inconsistency',
    group: '2024',
    year: 2024,
    title:
      'Enabling Efficient Real-Time Requirements Inconsistency Detection for Safety-Critical Systems',
    authors: 'Yike Huang, Xiaohong Chen, Zhi Jin, Tingliang Zhou',
    venue: 'REW 2024: 222-229',
    types: ['workshop'],
  },
  {
    id: 'wang-2024-requirements-documents',
    group: '2024',
    year: 2024,
    title:
      'Generating Requirements Documents for Embedded Systems: A Device Knowledge-Guided Approach',
    authors: 'Chunhui Wang, Jiaqi Zhao, Xiaohong Chen, Zhi Jin',
    venue: 'REW 2024: 200-205',
    types: ['workshop'],
  },
  {
    id: 'wang-2024-projection-analysis',
    group: '2024',
    year: 2024,
    title: '基于投影的嵌入式系统需求分析方法',
    authors: '王小齐, 陈小红, 金芝, 顾斌, 綦艳霞',
    venue: '软件学报, 35(12): 5397-5418',
    types: ['chineseJournal'],
  },
  {
    id: 'jin-2024-chatmodeler',
    group: '2024',
    year: 2024,
    title: 'ChatModeler：基于大语言模型的人机协作迭代式需求获取和建模方法',
    authors: '靳东明, 金芝, 陈小红, 王春晖',
    venue: '计算机研究与发展, 61(2): 338-350',
    types: ['chineseJournal'],
  },
  {
    id: 'jin-2023-software-requirements-textbook',
    group: 'book',
    year: 2023,
    title: '软件需求工程与实践',
    titleLocaleKey: 'softwareRequirementsEngineeringPractice',
    authors: '金芝, 刘璘, 陈小红, 李童',
    venue: '清华大学出版社',
    types: ['book'],
    rankTags: ['textbook'],
  },
  {
    id: 'jin-2018-environment-modeling-book',
    group: 'book',
    year: 2018,
    title:
      'Environment Modeling-Based Requirements Engineering for Software Intensive Systems',
    authors: 'Zhi Jin',
    venue: '1st Edition, Morgan Kaufmann',
    types: ['book'],
  },
]
