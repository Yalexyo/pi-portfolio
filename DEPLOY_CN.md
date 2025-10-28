# 国内访问部署指南

本项目已配置为支持多种国内可直接访问的部署平台。

## ✅ 已配置的平台

### 1. GitHub Pages（免费，国内可访问）

**特点：**
- ✅ 国内可直接访问（速度：快）
- ✅ 完全免费
- ✅ 支持自定义域名
- ✅ 自动部署

**使用方法：**

1. 在 GitHub 仓库设置中启用 Pages：
   - 访问：https://github.com/Yalexyo/magic-portfolio/settings/pages
   - Source: 选择 "GitHub Actions"

2. 推送代码到 GitHub：
```bash
git add .
git commit -m "启用静态导出"
git push origin main
```

3. GitHub Actions 会自动构建和部署
4. 访问地址：`https://yalexyo.github.io/magic-portfolio/`

### 2. Cloudflare Pages（推荐，国内可访问）

**特点：**
- ✅ 国内可直接访问（速度：非常快）
- ✅ 全球 CDN 加速
- ✅ 完全免费
- ✅ 支持自定义域名
- ✅ 自动部署

**使用方法：**

1. 访问 Cloudflare 仪表盘：https://dash.cloudflare.com
2. 点击 "Workers & Pages" → "Create application" → "Pages"
3. 连接你的 GitHub 仓库
4. 配置构建设置：
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node version: `20`
5. 点击 "Save and Deploy"
6. 自动部署完成！

### 3. Vercel（推荐用于国际访问）

**特点：**
- ✅ 全球 CDN 加速
- ✅ 完全免费
- ✅ 自动部署
- ✅ 支持自定义域名
- ✅ Next.js 官方推荐平台
- ⚠️ 国内需 VPN 访问

**使用方法：**

#### 方式一：通过 Vercel Dashboard（推荐）

1. **连接 GitHub 仓库：**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "Add New..." → "Project"
   - 选择 "Import Git Repository"
   - 授权 GitHub 并选择你的仓库

2. **配置项目设置：**
   - Framework Preset: `Next.js` (自动检测)
   - Root Directory: `./` (默认)
   - Build Command: `npm run build` (自动设置)
   - Output Directory: `.next` (自动设置)
   - Install Command: `npm install` (自动设置)

3. **环境变量（如需要）：**
   - 如果项目需要环境变量，在项目设置中添加

4. **部署：**
   - 点击 "Deploy"
   - 等待构建完成
   - 自动获得部署 URL: `https://your-project.vercel.app`

#### 方式二：通过 Vercel CLI

1. **安装 Vercel CLI：**
```bash
npm i -g vercel
```

2. **登录 Vercel：**
```bash
vercel login
```

3. **在项目目录中部署：**
```bash
vercel
```
或直接生产部署：
```bash
vercel --prod
```

#### 自动部署

推送代码到 GitHub 会自动触发部署：
```bash
git push origin main
```

#### 自定义域名

1. 在 Vercel Dashboard 中打开项目
2. 进入 "Settings" → "Domains"
3. 添加你的自定义域名
4. 按照提示配置 DNS 记录

#### 更新部署文档

如果你修改了部署说明，推送到 GitHub 会自动重新部署并更新文档。

## 🔄 本地测试静态导出

在部署之前，可以在本地测试：

```bash
npm run build
```

构建完成后，会生成 `out` 文件夹，可以用本地服务器测试：

```bash
npx serve out
```

## 📝 注意事项

- 静态导出后，不支持服务端功能（如 API routes）
- 图片需要设置为 `unoptimized: true`
- 需要添加 `trailingSlash: true` 用于 GitHub Pages

## 🎯 推荐方案

**国内访问最佳选择：Cloudflare Pages**
- 国内访问速度快
- 全球 CDN 覆盖
- 完全免费
- 自动部署

**国际访问最佳选择：Vercel**
- Next.js 官方推荐平台
- 性能优化最佳
- 开箱即用的 Next.js 支持
- 完全免费
- 自动部署

**备选：GitHub Pages**
- 免费稳定
- 配置简单
- 集成 GitHub

