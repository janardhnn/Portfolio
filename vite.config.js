
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const owner = process.env.REPO_OWNER
const repo = process.env.REPO_NAME
const base = (owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`) ? '/' : (repo ? `/${repo}/` : '/')

export default defineConfig({
  plugins: [react()],
  base,
})