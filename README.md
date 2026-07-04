# RE4CPS Portal Prototype

RE4CPS（Requirements Engineering for Cyber-Physical Systems）课题组学术工具门户原型。

当前版本只包含 Vue 3 基础框架、首页占位、导航栏、Arco Design Vue、Hash 路由和中英文切换，不包含后端、登录、LLM API 或其他业务页面。

## 技术栈

- Vue 3 + TypeScript
- Vite
- Arco Design Vue
- Vue Router（Hash History）
- vue-i18n

## 本地运行

要求使用 Node.js 的当前 LTS 版本。

```bash
npm install
npm run dev
```

终端会显示本地访问地址，通常为 `http://localhost:5173/`。

## 构建与本地预览

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`。`npm run preview` 只用于本地检查构建结果，不应作为生产服务器。

## 部署到 GitHub Pages

项目已包含 `.github/workflows/deploy.yml`。默认情况下，每次推送到 `main` 分支都会自动构建并部署。

1. 将项目推送到 GitHub 仓库的 `main` 分支。
2. 打开仓库的 **Settings → Pages**。
3. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
4. 推送代码，或在 **Actions** 页面手动运行 `Deploy to GitHub Pages`。

`vite.config.ts` 会在 GitHub Actions 中读取 GitHub 自带的 `GITHUB_REPOSITORY` 变量，并自动决定 `base`：

- `https://<user>.github.io/` 类型的用户/组织主页使用 `/`。
- `https://<user>.github.io/<repo>/` 类型的项目主页使用 `/<repo>/`。
- 本地开发使用 `/`。

路由使用 `createWebHashHistory`，因此刷新子路由时不依赖服务器重写规则，适合 GitHub Pages。

### 注意事项

- 如果绑定自定义域名，需要把 `vite.config.ts` 中的 `base` 固定为 `/`。
- 如果不通过 GitHub Actions，而是在本地构建后手动上传 `dist/`，请把 `base` 手动设置为 `/<repo>/`（用户/组织主页或自定义域名仍为 `/`）。
- 若默认分支不是 `main`，需要同步修改 `.github/workflows/deploy.yml` 中监听的分支名。
- `package-lock.json` 应提交到仓库，Actions 使用 `npm ci` 保证可重复安装。

## 目录结构

```text
src/
├─ main.ts
├─ App.vue
├─ router/
│  └─ index.ts
├─ layouts/
│  └─ MainLayout.vue
├─ pages/
│  └─ Home.vue
├─ locales/
│  ├─ index.ts
│  ├─ zh-CN.ts
│  └─ en-US.ts
└─ styles/
   └─ global.css
```
