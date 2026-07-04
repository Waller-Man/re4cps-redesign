import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const isRootPagesRepository = repositoryName?.endsWith('.github.io')

const base =
  isGithubActions && repositoryName && !isRootPagesRepository
    ? `/${repositoryName}/`
    : '/'

export default defineConfig({
  base,
  plugins: [vue()],
})