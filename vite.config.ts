import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isRootPagesRepository = repositoryName?.endsWith('.github.io')

// 本地开发和用户/组织主页使用 `/`；GitHub Actions 构建项目主页时，
// 自动使用 `/<repository>/`。若绑定自定义域名，请将 base 固定为 `/`。
const base =
  process.env.GITHUB_ACTIONS && repositoryName && !isRootPagesRepository
    ? `/${repositoryName}/`
    : '/'

export default defineConfig({
  base,
  plugins: [vue()],
})
