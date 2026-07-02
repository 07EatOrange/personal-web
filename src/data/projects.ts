// EXPORTS: IProject, MOCK_PROJECTS
export interface IProject {
  id: string
  title: string
  description: string
  tags: string[]
  status: 'completed' | 'in-progress' | 'planned'
  url?: string
}

export const MOCK_PROJECTS: IProject[] = [
  {
    id: 'p1',
    title: '三体AI短片',
    description: '花一个月时间独立制作的三体主题AI短片，使用AI视频生成+后期剪辑完成。虽然成品不理想，但通过这个项目真正理解了AI视频的能力边界。',
    tags: ['AI视频', '三体', '剪辑'],
    status: 'completed',
  },
  {
    id: 'p2',
    title: 'AI视频比赛作品',
    description: '半个月完成的AI视频比赛参赛作品，从选题到成片全程使用AI工具辅助创作，获得10个赞。',
    tags: ['AI视频', '比赛', '即梦'],
    status: 'completed',
  },
  {
    id: 'p3',
    title: 'Live2D角色模型',
    description: '使用seethrough进行图层拆分，配合AI生成的立绘素材，完成骨骼绑定和面部动作制作。',
    tags: ['Live2D', '骨骼绑定', 'AI出图'],
    status: 'completed',
  },
  {
    id: 'p4',
    title: '个人网站',
    description: '你现在看到的这个网站！使用 React + TypeScript + Tailwind CSS 搭建，部署在 Vercel 上。包含博客、留言板、桌宠等互动功能。',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    status: 'completed',
  },
  {
    id: 'p5',
    title: 'AI音乐创作实验',
    description: '使用Suno进行AI音乐生成，探索不同风格和参数的组合效果，尝试将AI音乐融入视频创作流程。',
    tags: ['Suno', 'AI音乐', '实验'],
    status: 'in-progress',
  },
  {
    id: 'p6',
    title: '出海项目',
    description: '计划中的方向——利用AI工具和编程技能，面向海外市场开发产品或内容服务。方向还在探索中。',
    tags: ['出海', 'AI', '创业'],
    status: 'planned',
  },
]
