export default {
  title: '招生与培养',
  introduction: '欢迎对智能化软件工程、需求工程、大模型与智能体感兴趣的同学加入。',
  labels: {
    researchDirections: '研究方向',
    groupAdvantages: '课题组优势',
    admissionRequirements: '招生要求',
    applicationScenarios: '应用场景',
    welcomeStudents: '欢迎对象',
    responsibilities: '博士后职责',
    requirements: '博士后要求',
    qualities: '素质要求',
    studentExpectations: '我们对学生的期待',
    whyUs: '为什么选择我们',
  },
  actions: {
    sendEmail: '发送申请邮件',
    contact: '联系导师',
  },
  groups: {
    zhiJinWhu: {
      title: '武汉大学金芝教授课题组',
      introduction:
        '课题组招收智能化软件工程方向博士、硕士研究生，并长期接收本科生参与科研训练。',
      leaderName: '金芝教授',
      leaderAffiliation: '武汉大学特色化示范性软件学院',
      leaderBio:
        '金芝教授现任武汉大学特色化示范性软件学院院长，是国家级高层次人才，国家杰出青年科学基金获得者、IEEE / CCF / AAIA Fellow、973 项目首席科学家及 CCF 监事长。她长期深耕需求工程与智能化软件工程，在 ASE、FSE、ICSE、ACL、NIPS、TOSEM 等发表论文 300 余篇，出版著作 5 部并获授权发明专利 30 余项，科研成果服务于航天重大工程和人机物融合系统，曾获 IEEE TCSVC 杰出领导力奖、CCF 夏培肃奖及首届中国 I 科研女性奖等。',
      directions: {
        ai4se: '代码大模型 / 软件开发智能体 / AI4SE',
        intelligentRe: '智能化需求工程',
        codeGeneration: '代码自动生成',
        llmSecurity: '大模型安全',
      },
      advantages: {
        studentGuidance: {
          title: '学生指导',
          items: [
            '导师经验丰富，善于帮助学生提炼研究问题。',
            '支持 idea、实验与论文写作的高频指导。',
            '根据学生基础和深造或就业目标制定培养方案。',
          ],
        },
        researchResources: {
          title: '资源优势',
          items: ['服务器算力充足。', '提供大模型 API Key 等研究支持。'],
        },
        developmentSupport: {
          title: '发展支持',
          items: [
            '表现优异者可获得推荐信。',
            '提供大厂实习及国内外高校推荐机会。',
            '优先获得本组保研或直博机会。',
          ],
        },
      },
      admissionRequirements: {
        selfMotivated: '自驱力强',
        diligent: '踏实勤奋',
        activeThinking: '主动思考',
        researchInterest: '对科研和软件工程智能化方向有兴趣',
      },
      application: {
        title: '申请方式',
        description: '有意者请将简历发送至邮箱：{email}',
        subjectLabel: '邮件标题格式',
        subject: '姓名 + 简历',
      },
    },
    xiaohongChenEcnu: {
      title: '华东师范大学陈小红老师课题组',
      introduction:
        '团队聚焦智能化需求工程这一核心前沿方向，探索大模型时代软件开发的新形态，研究成果服务于航空航天、轨道交通、安全攸关系统和智能物联网等关键与新兴场景。',
      leaderName: '陈小红教授',
      leaderAffiliation: '华东师范大学软件工程学院',
      leaderBio:
        '团队围绕需求工程、知识工程、形式化方法与人工智能的交叉开展研究，以真实复杂软件系统为牵引，推动从需求理解、系统设计到软件演化的自动化与智能化。',
      directions: {
        ai4re: {
          title: 'AI4RE',
          description: '利用大模型、知识图谱和方法论赋能需求工程，实现需求工程自动化与智能化。',
        },
        re4ai: {
          title: 'RE4AI',
          description: '利用需求工程知识为 AI 系统，尤其是多智能体系统，开展需求分析与架构设计。',
        },
        aiSoftwareGeneration: {
          title: '基于 AI 的软件自动生成技术',
          description: '研究从需求规约到可执行代码的端到端自动生成，即项目级代码生成。',
        },
        changeDrivenEvolution: {
          title: '需求变更驱动的软件演化智能体',
          description: '覆盖需求协商、澄清、补全和变更管理，以及变更驱动的设计、代码与测试演化。',
        },
        domainOntologyConstruction: {
          title: '领域知识本体自动构建',
          description: '构建贯通需求、设计、代码与测试全链路的动态本体。',
        },
      },
      applicationScenarios: {
        aerospace: '航空航天',
        railTransit: '轨道交通',
        safetyCritical: '安全攸关系统',
        aiot: '智能物联网',
      },
      welcomeStudents:
        '欢迎本科生（大一至大四）、硕士研究生（保研 / 考研）以及博士研究生（含直博）加入。只要具备扎实的软件基础或强烈的学习意愿，并有明确兴趣方向，都能在团队中找到适合自己的成长路径。',
      postdoc: {
        title: '博士后招聘',
        subtitle: '下一代智能无人系统与软件自动化博士后',
        focus: '重点方向：软件工厂 / 算法工厂 / 智能体工厂 / 无人机集群',
        responsibilities: {
          independentResearch: '独立研究：开展前沿课题研究，冲击 ICSE、FSE、ASE、ISSTA、ACL、EMNLP 等顶级会议期刊。',
          systemArchitecture: '系统架构：主导软件工厂、算法工厂和智能体工厂关键组件的架构设计与原型开发。',
          projectDelivery: '项目攻关：参与基金、部委和企业项目，推动成果在航空航天、安全攸关系统等真实场景落地。',
          teamCollaboration: '团队协作：协助指导研究生，参与实验室建设与学术交流。',
        },
        requirements: {
          doctoralDegree: '具有软件工程、自动化、控制科学、人工智能、计算机科学等相关方向博士学位。',
          programming: '具备较强的编程能力。',
          llmOrRobotics: '熟悉大模型微调（如 LoRA / RLHF），或熟悉无人机、机器人、具身智能者优先。',
          academicWriting: '具备良好的科研写作能力。',
          publications: '有 ICSE、TSE、RE、FSE、ASE、ICRA、ACL、EMNLP 等论文发表者优先。',
          frameworkExperience: '有多智能体框架或知识图谱工具开发经验者优先。',
          eligibility: '获得博士学位不超过 3 年，年龄一般不超过 35 周岁。',
        },
        qualities: {
          researchPassion: '对“大模型如何重塑软件工程”有强烈兴趣。',
          selfDriven: '自驱力强，能独立发现、定义和解决问题。',
          collaborative: '善于沟通，具备团队合作精神。',
        },
        note: '本招聘长期有效，期待与你一起探索大模型时代的软件开发新形态。',
      },
      training: {
        title: '学生培养',
        items: {
          frontierResearch: {
            title: '前沿研究方向',
            description: '在需求工程、知识工程、形式化方法、AI 与大模型技术交汇点开展研究。',
          },
          systematicTraining: {
            title: '系统化科研训练',
            description: '覆盖问题发现、理论建模、技术实现到论文写作的全链条培养。',
          },
          engineeringGrowth: {
            title: '能力快速培养',
            description: '依托真实项目夯实需求分析、方案设计、技术选型、系统实现与调试能力。',
          },
          publicationSupport: {
            title: '成果导向与高水平发表',
            description: '帮助学生掌握选题、实验设计、写作、投稿与返修全过程。',
          },
          realWorldProjects: {
            title: '深度项目支撑',
            description: '紧密联系航空、航天、轨道交通及 AIoT 等真实场景。',
          },
          collaborationNetwork: {
            title: '导师与合作者资源',
            description: '获得导师全程指导，并有机会与国内外合作者联合研究。',
          },
        },
      },
      expectations: {
        softwareInterest: '对软件系统与智能化方法有强烈兴趣。',
        learningAbility: '具备较强的自主学习、钻研与动手能力。',
        longTermGoals: '有明确目标，愿意长期深耕需求工程与人工智能交叉方向。',
        professionalQualities: '踏实、自驱、善于沟通，具备良好工程与逻辑素养。',
      },
      strengths: {
        frontierTopics: '研究方向前沿且交叉',
        richProjects: '项目资源丰富',
        completeTraining: '培养体系完整',
        openCulture: '团队氛围开放',
      },
      closing:
        '如果你对智能化需求工程和未来软件开发新形态感兴趣，欢迎加入我们，一起探索大模型时代的新可能。',
    },
  },
}
