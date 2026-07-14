# AGENTS.md

## 项目简介

本项目是 RE4CPS 课题组展示网站，正式版本为 v1.0.0。技术栈为 Vue 3、Vite、TypeScript、Vue Router、vue-i18n 和 Arco Design Vue；使用 GitHub Actions 部署到 GitHub Pages。项目为纯前端，不包含后端、数据库、登录或在线 API。

## 常用命令

~~~bash
npm install
npm run dev
npm run build
npm run preview
~~~

完成任何代码或内容修改后必须运行 npm run build。

## 主要目录

- src/data/：论文、智能体、工具、成员、RE 资源和数据集。
- src/pages/：页面渲染，不应存放大量业务数据。
- src/locales/zh-CN/、src/locales/en-US/：按模块拆分的双语文案。
- src/assets/members/：成员照片和默认头像。
- src/assets/organizations/：企业 Logo。
- src/styles/：基础、布局、页面、公共卡片和响应式样式。
- src/router/：Hash Router 配置。
- .github/workflows/deploy.yml：GitHub Pages 部署。

## 数据驱动原则

- 论文优先修改 src/data/publications.ts。
- 智能体优先修改 src/data/agents.ts。
- 工具优先修改 src/data/tools.ts。
- 成员优先修改 src/data/members.ts。
- 数据集优先修改 src/data/datasets.ts。
- RE 资源优先修改 src/data/reResources.ts。
- 标题、简介、姓名等双语内容放入对应 locale 模块。
- 不在 Vue 页面中硬编码大量数据或大段双语文本。
- 使用稳定 id 和 localeKey，不使用数组索引关联数据。

## 国际化规则

- 中文和英文必须同步维护。
- 两种语言的文件、key 和嵌套结构保持一致。
- 不要产生 members.members.xxx 等重复层级。
- 动态 localeKey 必须在两个语言模块中都存在。
- LLM、OpenClaw、RE Skills、PlantUML 等专有名词可保留英文。
- 不擅自改写用户提供的原始中文或英文文案。

## 资源规则

- 成员照片统一为 200 × 200 px、1:1，优先使用约 90% 质量的 JPG。
- 成员照片放在 src/assets/members/ 对应目录；当前教师目录名为 Faculty。
- 没有真实照片时使用 avatar-placeholder.svg。
- 企业 Logo 优先使用官方 SVG，放在 src/assets/organizations/。
- 不拉伸、裁剪或改变品牌颜色。
- 使用静态 import 或现有资源映射，不把 @/assets/... 当作普通字符串。
- 不把成员照片或企业 Logo 迁回 public/。
- 文件名大小写必须与 import 一致；GitHub Actions 的 Linux 环境区分大小写。

## 成员年份和排序

- 在读博士生、硕士生使用 admissionYear。
- 已毕业成员直接填写真实 graduationYear。
- 禁止使用“入学年份 + 3”或任何固定学制动态推算毕业年份。
- 硕士生按 admissionYear、order 排序。
- Alumni 按 graduationYear、order 排序。
- 教师和博士生当前按数据数组顺序展示。
- 不擅自修改成员姓名、简介、邮箱、主页、照片、毕业去向或职业经历。

## CSS 规则

- src/styles/global.css 是唯一入口。
- 保持现有 base、layout、pages、components、responsive 拆分结构。
- 不让各页面单独重复引入全局 CSS。
- 不随意改变 global.css 的 import 顺序。
- 小卡片网格使用 equal-height-card-grid 和 equal-height-card。
- 桌面端同一行卡片等高，移动端保持自然高度。
- responsive.css 必须最后加载。
- 修改样式时保留 RE Resources/Datasets、Tools/Agents 的公共卡片关系。

## 修改限制

- 不擅自改写姓名、个人简介、论文标题、作者、venue、链接和用户提供的固定文本。
- 不编造 DOI、PDF、代码仓库、在线工具、数据集或个人主页链接。
- 不删除与任务无关的文件、图片、Logo 或用户现有修改。
- 不引入后端、数据库、登录、额外前端框架或未经要求的 API。
- 不读取、创建或修改 .env，除非用户明确要求。
- 不创建 Git Tag、GitHub Release，也不执行 npm publish，除非用户明确授权。

## 验证与汇报

任务完成后：

1. 运行 npm run build。
2. 检查 TypeScript、Vue、i18n key、静态资源路径和文件名大小写。
3. 最终汇报修改或新增的文件。
4. 汇报构建是否成功。
5. 列出无法确认的文案、链接、图片或 Logo，不要自行猜测。
