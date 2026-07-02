# 🍊 吃个橘子吧 · 个人主页

基于 React + TypeScript + Tailwind CSS 的个人品牌展示网站，海蓝色二次元风格。

## 技术栈

| 类别 | 技术 |
|---|---|
| 框架 | React 19 + TypeScript |
| 构建 | Vite 8 |
| 样式 | Tailwind CSS 4 + CSS 变量主题 |
| 路由 | React Router 7 |
| 动画 | framer-motion |
| UI 组件 | Radix UI + 自定义组件库 |
| 表单 | react-hook-form + zod |
| Markdown | react-markdown + remark-gfm |
| 持久化 | localStorage (scoped) |
| 部署 | Vercel |

## 项目结构

```
src/
├── app.tsx                    # 路由配置
├── index.tsx                  # 入口
├── index.css                  # 全局样式 + 字体导入
├── tailwind-theme.css         # 设计令牌（CSS变量 + 主题配置）
├── typography.css             # 排版预设
│
├── components/                # 全局组件
│   ├── Layout.tsx             # 根布局（Header + Outlet + Footer）
│   ├── Header.tsx             # 顶部导航（桌面 + 移动端抽屉菜单）
│   ├── Footer.tsx             # 页脚
│   └── ui/                    # UI 组件库（Radix 封装）
│       ├── button.tsx, card.tsx, badge.tsx, input.tsx, ...
│       └── sheet.tsx          # 移动端抽屉菜单
│
├── pages/
│   ├── HomePage/              # 首页
│   │   ├── HomePage.tsx       # 页面容器
│   │   ├── HeroSection.tsx    # 头像+网名+CTA
│   │   ├── ProfileSection.tsx # 个人简介卡片
│   │   ├── SkillsSection.tsx  # 技能展示
│   │   ├── GamesSection.tsx   # 游戏经历
│   │   ├── BlogPreviewSection.tsx  # 最新文章预览
│   │   └── ContactCTASection.tsx   # 联系方式引导
│   │
│   ├── BlogListPage/          # 博客列表
│   │   └── BlogListPage.tsx
│   │
│   ├── BlogDetailPage/        # 博客详情（Markdown渲染）
│   │   └── BlogDetailPage.tsx
│   │
│   ├── AboutPage/             # 关于我
│   │   ├── AboutPage.tsx
│   │   ├── ProfileDetailSection.tsx    # 详细档案
│   │   ├── TimelineSection.tsx         # 成长时间轴
│   │   ├── SkillsDetailSection.tsx     # 技能详情
│   │   ├── ProjectShowcaseSection.tsx  # 项目作品集
│   │   └── GamesDetailSection.tsx      # 游戏成就详情
│   │
│   ├── ContactPage/           # 联系方式
│   │   ├── ContactPage.tsx
│   │   ├── SocialLinksSection.tsx  # 社交平台卡片
│   │   └── MessageBoardSection.tsx # 留言板（localStorage）
│   │
│   └── NotFoundPage/          # 404 页面
│
├── data/                      # Mock 数据层
│   ├── profile.ts             # 个人档案数据
│   ├── blog.ts                # 博客文章数据
│   ├── projects.ts            # 项目作品数据
│   └── social.ts              # 社交平台数据
│
├── hooks/                     # 自定义 Hooks
│   └── use-mobile.ts
│
└── lib/                       # 工具函数
    └── utils.ts
```

## 设计系统

### 配色

海蓝色主题（`src/tailwind-theme.css`）：

| 角色 | 色值 | 用途 |
|---|---|---|
| primary | `hsl(210 72% 52%)` | 主按钮、CTA、品牌锚点 |
| background | `hsl(210 40% 98%)` | 页面背景 |
| card | `hsl(210 35% 95%)` | 卡片容器 |
| foreground | `hsl(218 30% 20%)` | 标题/正文 |
| accent | `hsl(200 50% 90%)` | hover/选中态 |

### 字体

- 标题：ZCOOL KuaiLe（卡通圆体）
- 正文：Noto Sans SC（中文无衬线）

### 动画策略

- 页面过渡：framer-motion AnimatePresence
- 滚动入场：whileInView + spring easing
- 卡片悬浮：whileHover y-axis lift + shadow

## 本地开发

```bash
npm install
npm run dev
```

## 构建 & 部署

```bash
npm run build     # 输出到 dist/
```

### 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入仓库
3. 框架自动识别为 Vite，无需额外配置
4. `vercel.json` 已配置 SPA 路由重写

或使用 CLI：

```bash
npx vercel --prod
```

## 数据持久化

| Key | 数据 | 说明 |
|---|---|---|
| `__orange_blog_messages` | `IMessage[]` | 留言板数据 |
