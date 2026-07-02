# 项目结构

```
吃个橘子吧/                         # 项目根目录
├── index.html                      # HTML 入口 + SEO 元标签
├── package.json                    # 依赖与脚本
├── tsconfig.json                   # TypeScript 基础配置
├── tsconfig.app.json               # 应用 TS 配置
├── tsconfig.node.json              # Node 端 TS 配置
├── vite.config.ts                  # Vite 构建配置（路径别名 @/）
├── vercel.json                     # Vercel SPA 路由 + 缓存
├── components.json                 # UI 组件库配置
├── eslint.config.mjs               # ESLint 规则
├── .npmrc                          # npm 配置
├── .gitignore                      # Git 忽略规则
├── README.md                       # 项目说明 + 技术栈 + 部署
├── AGENTS.md                       # AI 开发需求文档
│
├── public/                         # 静态资源（直接复制到构建输出）
│   ├── avatar.jpg                  # 头像
│   ├── favicon.svg                 # 网站图标
│   └── icons.svg                   # 图标精灵
│
├── scripts/                        # 构建辅助脚本
│   ├── dev.mjs                     # 开发服务器启动
│   ├── build.sh                    # 构建脚本
│   └── setup-git-hooks.mjs         # Git hooks 初始化
│
├── shared/                         # 共享模块（预留）
│   ├── capabilities/               # 能力声明
│   └── static/                     # 共享静态资源
│
└── src/                            # 源代码
    ├── index.tsx                   # React 挂载入口
    ├── index.css                   # 全局样式 + 字体 + 基础字号(17px)
    ├── app.tsx                     # 路由配置（React Router）
    ├── tailwind-theme.css          # 设计令牌（CSS 变量 / 海蓝主题）
    ├── typography.css              # 排版预设（prose 样式）
    │
    ├── lib/                        # 工具函数
    │   └── utils.ts                # cn() 类名合并
    │
    ├── hooks/                      # 自定义 Hooks
    │   └── use-mobile.ts           # 移动端检测
    │
    ├── data/                       # 数据层（Mock 常量和类型定义）
    │   ├── profile.ts              # 个人档案（昵称/技能/游戏/社交）
    │   ├── blog.ts                 # 博客文章（3篇示例）
    │   ├── projects.ts             # 项目作品（6个项目卡片）
    │   └── social.ts               # 社交平台链接
    │
    ├── components/                 # 全局组件
    │   ├── Layout.tsx              # 根布局：Header + <Outlet/> + Footer
    │   ├── Header.tsx              # 顶部导航（桌面端水平 + 移动端 Sheet 抽屉）
    │   ├── Footer.tsx              # 页脚（版权 + 社交账号）
    │   │
    │   └── ui/                     # UI 组件库（Radix UI 二次封装）
    │       ├── button.tsx          # 按钮（多种 variant + size）
    │       ├── card.tsx            # 卡片容器
    │       ├── badge.tsx           # 标签徽章
    │       ├── input.tsx           # 输入框
    │       ├── textarea.tsx        # 多行文本
    │       ├── form.tsx            # 表单容器（react-hook-form 集成）
    │       ├── sheet.tsx           # 侧边抽屉（移动端菜单）
    │       ├── dialog.tsx          # 对话框
    │       ├── dropdown-menu.tsx   # 下拉菜单
    │       ├── navigation-menu.tsx # 导航菜单
    │       ├── avatar.tsx          # 头像
    │       ├── image.tsx           # 图片（带加载状态）
    │       ├── skeleton.tsx        # 骨架屏
    │       ├── spinner.tsx         # 加载旋转
    │       ├── empty.tsx           # 空状态
    │       ├── sonner.tsx          # Toast 通知
    │       ├── separator.tsx       # 分割线
    │       ├── scroll-area.tsx     # 滚动区域
    │       ├── tooltip.tsx         # 提示框
    │       ├── popover.tsx         # 弹出层
    │       ├── hover-card.tsx      # 悬停卡片
    │       ├── accordion.tsx       # 手风琴
    │       ├── collapsible.tsx     # 折叠面板
    │       ├── tabs.tsx            # 标签页
    │       ├── switch.tsx          # 开关
    │       ├── checkbox.tsx        # 复选框
    │       ├── radio-group.tsx     # 单选组
    │       ├── select.tsx          # 选择器
    │       ├── slider.tsx          # 滑块
    │       ├── progress.tsx        # 进度条
    │       ├── calendar.tsx        # 日历
    │       ├── chart.tsx           # 图表容器
    │       ├── carousel.tsx        # 轮播
    │       ├── table.tsx           # 表格
    │       ├── pagination.tsx      # 分页
    │       ├── breadcrumb.tsx      # 面包屑
    │       ├── command.tsx         # 命令面板
    │       ├── context-menu.tsx    # 右键菜单
    │       ├── menubar.tsx         # 菜单栏
    │       ├── drawer.tsx          # 底部抽屉
    │       ├── alert.tsx           # 提示
    │       ├── alert-dialog.tsx    # 确认对话框
    │       ├── input-otp.tsx       # OTP 输入
    │       ├── input-group.tsx     # 输入组
    │       ├── button-group.tsx    # 按钮组
    │       ├── field.tsx           # 表单字段
    │       ├── label.tsx           # 标签
    │       ├── kbd.tsx             # 键盘快捷键
    │       ├── item.tsx            # 列表项
    │       ├── aspect-ratio.tsx    # 宽高比容器
    │       ├── resizable.tsx       # 可调整大小面板
    │       └── native-select.tsx   # 原生选择器
    │
    └── pages/                      # 页面组件（一级页面 = 路由入口）
        │
        ├── HomePage/               # 首页 /
        │   ├── HomePage.tsx        # 页面入口（组装 Section）
        │   ├── HeroSection.tsx     # 头像 + 网名 + CTA 按钮
        │   ├── ProfileSection.tsx  # 个人简介卡片
        │   ├── SkillsSection.tsx   # 技能展示（8项网格）
        │   ├── GamesSection.tsx    # 游戏经历（4项网格）
        │   ├── BlogPreviewSection.tsx  # 最新文章预览（2篇）
        │   └── ContactCTASection.tsx   # 联系方式引导 + Slogan
        │
        ├── BlogListPage/           # 博客列表 /blog
        │   └── BlogListPage.tsx    # 文章卡片网格 + 空封面占位
        │
        ├── BlogDetailPage/         # 博客详情 /blog/:id
        │   └── BlogDetailPage.tsx  # Markdown 渲染 + 返回导航 + 404 兜底
        │
        ├── AboutPage/              # 关于我 /about
        │   ├── AboutPage.tsx       # 页面入口（组装 Section）
        │   ├── ProfileDetailSection.tsx     # 详细个人档案
        │   ├── TimelineSection.tsx          # 成长时间轴（6个里程碑）
        │   ├── SkillsDetailSection.tsx      # 技能详情展开
        │   ├── ProjectShowcaseSection.tsx   # 项目作品集（6项卡片）
        │   └── GamesDetailSection.tsx       # 游戏成就详情
        │
        ├── ContactPage/            # 联系方式 /contact
        │   ├── ContactPage.tsx     # 页面入口（组装 Section）
        │   ├── SocialLinksSection.tsx   # 社交平台卡片（B站/抖音/小红书）
        │   └── MessageBoardSection.tsx  # 留言板（表单 + 列表 + localStorage）
        │
        └── NotFoundPage/           # 404 页面
            └── NotFoundPage.tsx    # 海浪动画 + 返回首页
```

## 路由映射

| 路由 | 页面 | 组件 |
|---|---|---|
| `/` | 首页 | `HomePage` |
| `/blog` | 博客列表 | `BlogListPage` |
| `/blog/:id` | 博客详情 | `BlogDetailPage` |
| `/about` | 关于我 | `AboutPage` |
| `/contact` | 联系方式 | `ContactPage` |
| `*` | 404 | `NotFoundPage` |

## 数据持久化

| localStorage Key | 类型 | 使用处 |
|---|---|---|
| `__orange_blog_messages` | `IMessage[]` | `MessageBoardSection` |


## 关键依赖

| 包 | 用途 |
|---|---|
| `react-router-dom` | 路由 |
| `framer-motion` | 动画（页面过渡/滚动入场/悬浮） |
| `react-markdown` + `remark-gfm` | 博客 Markdown 渲染 |
| `react-hook-form` + `zod` | 留言板表单验证 |
| `sonner` | Toast 通知 |
| `lucide-react` | 图标库 |
| `tailwindcss` + `@tailwindcss/typography` | 样式框架 |
| `@radix-ui/*` | 无障碍 UI 原语 |
| `@lark-apaas/client-toolkit-lite` | scopedStorage / logger |
