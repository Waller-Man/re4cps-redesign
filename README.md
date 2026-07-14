# RE4CPS Portal

> 当前正式版本：**v1.0.1**

RE4CPS Portal 是 RE4CPS（Requirements Engineering for Cyber-Physical Systems）课题组的展示网站，用于集中呈现研究方向、论文与著作、需求工程智能体、历史工具、成员信息、RE 资源和数据集。**本项目使用CodeX与GPT5.6 sol辅助开发。**

网站当前包含以下页面：

- 首页
- 研究方向
- 论文与著作
- 智能体
- 工具
- 成员
- RE 资源
- 数据集

项目支持中文、英文切换，使用 Hash Router，能够通过 GitHub Actions 自动构建并部署到 GitHub Pages。项目是纯前端网站，不包含后端、数据库、登录功能或在线 API 服务。

## 技术栈

项目实际使用的主要技术如下：

- Vue 3
- Vite 8
- TypeScript
- Vue Router（Hash History）
- vue-i18n
- Arco Design Vue
- GitHub Actions
- GitHub Pages

具体版本以 package.json 和 package-lock.json 为准。

## 本地启动

### 环境要求

- Node.js 20 或更新的受支持版本
- npm
- 建议使用与 GitHub Actions 一致的 Node.js 20 最新维护版本

首次获取项目后安装依赖：

~~~bash
npm install
~~~

启动开发服务器：

~~~bash
npm run dev
~~~

Vite 默认开发地址通常为：

~~~text
http://localhost:5173/
~~~

终端显示的实际地址优先于上述默认值。

### 正式构建

~~~bash
npm run build
~~~

该命令会依次执行 TypeScript/Vue 类型检查和 Vite 正式构建：

~~~text
vue-tsc -b
vite build
~~~

构建产物位于根目录的 dist/。提交代码或部署前必须确认该命令成功。

### 本地预览构建结果

~~~bash
npm run preview
~~~

Vite 默认预览地址通常为 http://localhost:4173/。该命令用于检查 dist/ 的正式构建结果，不是生产服务器。

## 项目目录

~~~text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── members/
│   │   │   ├── Faculty/
│   │   │   ├── phd-students/
│   │   │   ├── master-students/
│   │   │   ├── alumni/
│   │   │   └── avatar-placeholder.svg
│   │   └── organizations/
│   ├── data/
│   │   ├── agents.ts
│   │   ├── datasets.ts
│   │   ├── members.ts
│   │   ├── publications.ts
│   │   ├── reResources.ts
│   │   └── tools.ts
│   ├── layouts/
│   │   └── MainLayout.vue
│   ├── locales/
│   │   ├── zh-CN/
│   │   ├── en-US/
│   │   └── index.ts
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── Research.vue
│   │   ├── Publications.vue
│   │   ├── Agents.vue
│   │   ├── Tools.vue
│   │   ├── Members.vue
│   │   ├── ReResources.vue
│   │   └── Datasets.vue
│   ├── router/
│   │   └── index.ts
│   ├── styles/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── base.css
│   │   ├── global.css
│   │   ├── layout.css
│   │   └── responsive.css
│   ├── App.vue
│   └── main.ts
├── package.json
├── package-lock.json
└── vite.config.ts
~~~

目录职责：

- src/assets/：成员照片、默认头像和企业 Logo。
- src/data/：论文、智能体、工具、成员、RE 资源和数据集的结构化数据。
- src/locales/：按语言和页面模块拆分的中英文文案。
- src/pages/：路由页面组件，只负责根据数据和 i18n 文案渲染。
- src/styles/：基础样式、页面样式、公共卡片样式和响应式样式。
- src/router/：Hash Router 路由配置。
- .github/workflows/deploy.yml：GitHub Pages 自动部署工作流。

## 后续内容更新指南

项目采用数据驱动方式。新增内容时应优先修改 src/data/ 和对应语言模块，不要把大量业务数据直接写入 Vue 页面。

### 新增论文或著作

论文数据位于：

~~~text
src/data/publications.ts
~~~

Publication 的主要字段：

- id：稳定且唯一的标识，不要使用数组索引。
- group：页面分组，目前支持 2026、2025、2024 和 book。
- year：实际发表或出版年份。
- title：论文或著作原始标题。
- titleLocaleKey：可选，仅在标题需要按语言显示时使用。
- authors：作者原文。
- venue：会议、期刊或出版社信息。
- types：论文类型元数据，例如 conference、journal、workshop、book。
- rankTags：页面显示的分类 Tag，顺序即页面展示顺序。
- links：可选链接，支持 pdf、doi、bibtex、code、tool。
- relatedToolIds：可选的关联工具 ID，目前页面尚未展示该关联。

现有论文数据示例：

~~~ts
{
  id: 'wu-2026-silent-needs',
  group: '2026',
  year: 2026,
  title:
    'Unlocking the Silent Needs: Business-Logic-Driven Iterative Requirements Auto-completion',
  authors: 'Zhujun Wu, Xiaohong Chen*, Zhi Jin*, Ming Hu, Dongming Jin',
  venue: 'ICSE',
  types: ['conference', 'accepted'],
  rankTags: ['ccfa'],
}
~~~

多个分类 Tag 按期望顺序填写：

~~~ts
rankTags: ['ccfa', 'sciQ1']
~~~

只有在链接经过确认后才添加：

~~~ts
links: [
  { kind: 'doi', href: 'https://doi.org/实际 DOI' },
  { kind: 'pdf', href: '经过确认的 PDF 地址' },
]
~~~

不要编造 DOI、PDF、BibTeX、代码或工具链接。

如果增加新的年份分组，还需要同步修改：

1. PublicationGroup 类型。
2. publicationGroupOrder。
3. src/locales/zh-CN/publications.ts 中的 groups。
4. src/locales/en-US/publications.ts 中的 groups。

如果增加新的 rankTag 或 link kind，需要同步扩展 TypeScript 联合类型和中英文 publications.ts 文案。完成后运行 npm run build。

### 新增智能体

智能体数据位于：

~~~text
src/data/agents.ts
~~~

当前结构为：

~~~text
category
└── subcategories
    └── agents
~~~

每个智能体使用 AgentDefinition：

~~~ts
const exampleAgent: AgentDefinition = {
  id: 'example-agent',
  localeKey: 'exampleAgent',
  tagKeys: ['llm', 'requirementsAnalysis'],
  links: [
    {
      destination: 'external',
      kind: 'github',
      href: '经过确认的智能体入口',
    },
  ],
}
~~~

添加步骤：

1. 选择已有 AgentCategoryDefinition。
2. 将智能体放入正确子方向的 agents 数组。
3. 如果没有合适子方向，再增加稳定的 id 和 localeKey。
4. 在 src/locales/zh-CN/agents.ts 增加中文标题、简介、Tag 或分类文案。
5. 在 src/locales/en-US/agents.ts 增加结构完全一致的英文文案。
6. 保持 link 的 destination、kind 和 href 与 AgentLink 类型一致。

暂未上线或尚无真实智能体的子方向，应保持：

~~~ts
agents: []
~~~

页面会自动显示“规划中 / Planned”占位卡片。不要为未上线内容编造仓库或 Demo 链接。

### 新增工具

历史工具数据位于：

~~~text
src/data/tools.ts
~~~

工具按 ToolCategoryDefinition 分类。每项工具包含 id、标题 locale key、简介 locale key、技术标签和链接：

~~~ts
{
  id: 'example-tool',
  titleLocaleKey: 'exampleTool',
  descriptionLocaleKey: 'exampleTool',
  tags: ['problemFrames', 'requirementsAnalysis'],
  links: [
    {
      id: 'online',
      href: '经过确认的工具地址',
    },
  ],
}
~~~

添加或修改工具时：

1. 优先放入已有 toolCategories 分类。
2. 新分类需要增加 id、titleLocaleKey、descriptionLocaleKey。
3. 在中英文 src/locales/*/tools.ts 同步添加 categories、items、tags 和必要的 linkLabels。
4. 不在 Tools.vue 中硬编码标题、简介或链接。
5. 不修改卡片 DOM 和公共等高样式；Tools.vue 已使用 equal-height-card-grid、tool-card 和 equal-height-card。
6. 同一分类添加多个工具时，页面会自动生成响应式双列卡片并保持同一行等高。

历史工具可能暂时无法访问，更新链接前应先核实，不要擅自替换。

### 新增数据集

数据集数据位于：

~~~text
src/data/datasets.ts
~~~

当前数据结构示例：

~~~ts
{
  id: 'iot-req-completion-bench',
  group: 'datasets',
  localeKey: 'iotReqCompletionBench',
  statusKey: 'comingSoon',
}
~~~

对应标题和简介位于：

~~~text
src/locales/zh-CN/datasets.ts
src/locales/en-US/datasets.ts
~~~

暂无下载或详情链接时省略 href，页面会自动禁用按钮并显示“待补充 / Coming Soon”。

确认真实地址后可增加：

~~~ts
href: '经过确认的数据集地址'
~~~

新增多个数据集时，只需继续向 datasets 数组添加数据，并补充两个语言文件中的 items，不需要修改 Datasets.vue。若新增状态类型，需要同步扩展 DatasetStatus、状态文案以及页面颜色映射。

### 新增成员

成员数据位于：

~~~text
src/data/members.ts
~~~

成员分为：

- faculty：教师
- phd：博士生
- master：硕士生
- alumni：已毕业成员

成员姓名、身份、学校和简介不直接存放在 members.ts，而是通过 localeKey 从以下文件读取：

~~~text
src/locales/zh-CN/members.ts
src/locales/en-US/members.ts
~~~

#### 教师

教师不需要入学或毕业年份。需要提供照片、localeKey，以及可选邮箱和主页。当前教师卡片默认显示简介，因此新增教师时应在中英文 members.ts 中完整填写 name、role、school 和 bio。

#### 博士生

在读博士生使用 admissionYear：

~~~ts
{
  id: 'example-phd',
  group: 'phd',
  localeKey: 'examplePhd',
  photo: examplePhdPhoto,
  admissionYear: 2026,
  email: '经过确认的邮箱',
}
~~~

博士生当前按 members 数组中的先后顺序展示，admissionYear 用于显示入学年份 Tag。博士卡片默认显示简介，因此必须同步填写中英文 bio。

#### 硕士生

在读硕士生使用 admissionYear，并可用 order 控制同一年份内的顺序：

~~~ts
{
  id: 'example-master',
  group: 'master',
  localeKey: 'exampleMaster',
  photo: exampleMasterPhoto,
  admissionYear: 2026,
  order: 13,
  hasBio: true,
  email: '经过确认的邮箱',
  homepage: '经过确认的个人主页',
}
~~~

硕士生按 admissionYear 从早到晚排序，相同年份按 order 排序。存在简介时设置 hasBio: true 并补充中英文 bio；没有简介时不要设置 hasBio，页面不会保留简介区域。

#### 已毕业成员

已毕业成员必须直接填写真实 graduationYear：

~~~ts
{
  id: 'example-alumni',
  group: 'alumni',
  localeKey: 'exampleAlumni',
  photo: defaultAvatar,
  graduationYear: 2027,
  order: 8,
  organization: {
    nameLocaleKey: 'exampleOrganization',
    logo: exampleOrganizationLogo,
  },
}
~~~

禁止使用“admissionYear + 3”“admissionYear + 4”或其他方式推算毕业年份。不同培养类型和个人情况的学制可能不同。

Alumni 按 graduationYear 从早到晚排序，相同毕业年份按 order 排序。没有简介、邮箱或主页时，省略 hasBio、email、homepage，页面会隐藏对应区域和按钮。

#### 普通毕业去向

先静态导入 Logo，logo资源建议从 https://www.iconfont.cn/ 阿里巴巴矢量图标库中获取：

~~~ts
import exampleOrganizationLogo from '../assets/organizations/example-organization.svg'
~~~

在成员中填写：

~~~ts
organization: {
  nameLocaleKey: 'exampleOrganization',
  logo: exampleOrganizationLogo,
}
~~~

并在两个 members.ts 的 organizations 中增加相同 key 的中英文企业名称。

#### 多段职业经历

使用 careerPath：

~~~ts
careerPath: [
  {
    id: 'first-organization',
    labelLocaleKey: 'organizations.firstOrganization',
    logo: firstOrganizationLogo,
  },
  {
    id: 'startup-exploration',
    labelLocaleKey: 'careerSteps.startupExploration',
  },
  {
    id: 'current-organization',
    labelLocaleKey: 'organizations.currentOrganization',
    logo: currentOrganizationLogo,
    current: true,
  },
]
~~~

labelLocaleKey 相对于 members 模块填写，例如 organizations.meituan 或 careerSteps.startupExploration。企业名称和职业阶段文案必须在中英文 members.ts 中保持相同 key 结构。

### 成员可选字段显示规则

- email 为空或省略时，不显示邮箱。
- homepage 为空或省略时，不显示个人主页按钮。
- 硕士生和 Alumni 没有 hasBio 时不显示简介。
- 教师和博士生当前默认显示简介，新增时必须提供对应中英文 bio。
- photo 是必填字段；没有真实照片时使用 defaultAvatar。
- 不要写“暂无”“空”或“To be updated”作为成员信息占位。

## 成员照片规范

成员照片应统一处理后再提交：

- 尺寸：200 × 200 px。
- 比例：1:1。
- 优先格式：.jpg。
- 推荐 JPG 质量：约 90%。
- 人脸居中，保留完整头部和适量肩部。
- 不要直接提交尺寸过大的相机原图。
- 不要使用经过微信等平台严重压缩的低质量图片。
- 文件名建议使用成员英文姓名，例如 JinDongming.jpg。
- 文件名大小写必须与 import 完全一致。
- GitHub Actions 使用 Linux，文件路径和文件名大小写敏感。

当前实际目录：

~~~text
src/assets/members/
├── Faculty/
├── phd-students/
├── master-students/
├── alumni/
└── avatar-placeholder.svg
~~~

注意：当前教师目录实际名称为大写 Faculty，引用时必须保持一致。

加载规则：

- 有可靠照片时使用对应静态 import。
- 没有照片时使用 src/assets/members/avatar-placeholder.svg。
- 照片在 src/data/members.ts 顶部静态导入，或加入明确的资源映射。
- 不要把 @/assets/... 写成普通字符串传给 img。
- 不要把成员照片放入 public/。
- 不要恢复旧的 /members/xxx.jpg public 路径。

示例：

~~~ts
import examplePhoto from '../assets/members/master-students/ExampleMember.jpg'

{
  photo: examplePhoto,
}
~~~

## 企业 Logo 规范

企业 Logo 统一放在：

~~~text
src/assets/organizations/
~~~

规范：

- 优先使用企业官方提供的 SVG。
- 统一整理为 .svg，保留正确的 viewBox。
- 不拉伸、不裁剪、不修改品牌颜色。
- 文件名建议使用小写英文和短横线。
- 例如 meituan.svg、didi.svg、netease-games.svg、agricultural-bank-of-china.svg。
- 文件名大小写必须与静态 import 一致。
- 没有可靠 SVG 时，应先寻找官方品牌资源。
- 不要把低质量 PNG 自动描摹为形状错误的 SVG。

当前项目在 src/data/members.ts 顶部集中静态导入 Logo，并在 organization 或 careerPath 中引用。新增 Logo 后需要：

1. 将 SVG 放入 src/assets/organizations/。
2. 在 members.ts 中静态 import。
3. 在普通 organization 或 careerPath 节点中赋值给 logo。
4. 在中英文 members.ts 的 organizations 中补充相同名称 key。
5. 运行 npm run build 检查路径和大小写。

## 国际化维护

语言文件已经按页面和功能拆分：

~~~text
src/locales/zh-CN/
├── common.ts
├── navigation.ts
├── home.ts
├── research.ts
├── publications.ts
├── agents.ts
├── tools.ts
├── members.ts
├── reResources.ts
├── datasets.ts
└── index.ts

src/locales/en-US/
└── 与 zh-CN 相同结构
~~~

维护规则：

- 新增文案时必须同时修改中文和英文模块。
- 两种语言的 key 和嵌套结构必须一致。
- 各模块只导出自身内容，由语言目录的 index.ts 组合。
- 不要产生 members.members.xxx 等重复层级。
- 不要在 Vue 页面中硬编码大段双语内容。
- 动态 localeKey 必须在两个语言模块中同时存在。
- LLM、OpenClaw、RE Skills、PlantUML 等专有名词和缩写不需要生硬翻译。
- 修改后应切换两种语言检查，并运行 npm run build。

## 样式维护

src/styles/global.css 是唯一统一入口，main.ts 只引入该文件。

当前结构：

~~~text
src/styles/
├── global.css
├── base.css
├── layout.css
├── responsive.css
├── components/
│   ├── tool-card.css
│   ├── resource-card.css
│   └── equal-height-grid.css
└── pages/
    ├── home.css
    ├── research.css
    ├── tools.css
    ├── agents.css
    ├── publications.css
    ├── members.css
    └── resource-pages.css
~~~

职责：

- base.css：全局基础规则。
- layout.css：页面外壳、顶部导航和语言切换。
- pages/：对应页面布局与页面专属样式。
- components/tool-card.css：Tools 与 Agents 共用的工具式卡片。
- components/resource-card.css：RE Resources 与 Datasets 共用的资源卡片。
- components/equal-height-grid.css：小卡片网格同行等高。
- responsive.css：1040px 和 680px 响应式覆盖。

新增卡片应优先复用 equal-height-card-grid 和 equal-height-card。桌面端同一行卡片保持等高，移动端由 responsive.css 恢复自然高度。

不要随意改变 global.css 的 import 顺序。equal-height-grid.css 需要在页面和卡片样式后加载，responsive.css 必须始终最后加载。

## 构建与 GitHub Pages 部署

### 本地构建

提交前必须运行：

~~~bash
npm run build
~~~

确认 dist/ 成功生成，并可使用 npm run preview 检查正式构建。

### 自动部署

工作流位于：

~~~text
.github/workflows/deploy.yml
~~~

当前行为：

1. 推送到 main 分支，或手动触发 workflow_dispatch。
2. GitHub Actions 使用 ubuntu-latest。
3. 使用 Node.js 20。
4. 通过 npm ci 安装锁定依赖。
5. 运行 npm run build。
6. 上传 dist/。
7. 使用 GitHub Pages 官方 Action 完成部署。

仓库 Settings → Pages → Build and deployment → Source 应选择 GitHub Actions。

### Vite base

vite.config.ts 会读取 GitHub Actions 提供的 GITHUB_REPOSITORY 和 GITHUB_ACTIONS：

- 用户或组织根站点仓库（仓库名以 .github.io 结尾）使用 /。
- 普通项目仓库使用 /仓库名/。
- 本地开发使用 /。

路由使用 createWebHashHistory(import.meta.env.BASE_URL)，适合 GitHub Pages，不需要为子路由配置服务器重写。

注意事项：

- 自定义域名通常需要使用根路径 /，修改前应确认部署方式。
- 如果不用现有 GitHub Actions 而手动部署，应保证 Vite base 与最终 URL 路径一致。
- 默认部署分支为 main；修改默认分支时需要同步修改 deploy.yml。
- package-lock.json 应提交，工作流使用 npm ci。
- 不要提交未经验证的 dist/ 代替正式构建流程。
