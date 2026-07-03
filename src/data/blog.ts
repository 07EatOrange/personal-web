// EXPORTS: IBlogPost, MOCK_BLOG_POSTS
export interface IBlogPost {
  id: string
  title: string
  summary: string
  date: string
  tags: string[]
  content: string
  coverUrl: string
}

export const MOCK_BLOG_POSTS: IBlogPost[] = [
  {
    id: '1',
    title: '我的Live2D入门心得',
    summary: '从零开始学Live2D，分享骨骼绑定和面部动作的小技巧~',
    date: '2026-6-22',
    tags: ['Live2D', '教程', '二次元'],
    content: `## 初识Live2D

第一次接触Live2D是在B站看到一个超可爱的Vup模型,闲的没事干就想搓一个.

## 骨骼绑定入门

骨骼绑定其实没有想象中那么难，关键是要理解模型的层级关系。建议先从简单的头部绑定开始练习。

## 面部动作制作

面部动作是Live2D的灵魂！眨眼、张嘴、眉毛微动，这些细节做好了，角色就活起来了。

## seethrough拆分技巧

用seethrough拆分图层是个神器，可以方便地处理头发遮挡、衣服层次等问题。配合AI生成的图片素材，效率翻倍！

希望这篇心得对大家有帮助，一起加油鸭~ 🍊`,
    coverUrl: ''
  },
  {
    id: '2',
    title: 'AI绘图工具对比',
    summary: 'Stable Diffusion vs Midjourney，哪个更适合二次元创作？',
    date: '2025-10-28',
    tags: ['AI', '绘图', '经验分享'],
    content: `## 前言

作为一个AIGC创作者，分享一下AI生图工具 🎨

## Comfyui

优点是可玩性高，开源免费，缺点是需要一定的学习成本。

## 我的选择

日常创作我会用Sd(即梦),主要是我懒。

大家更喜欢用哪个呢？评论区聊聊~ 🌊`,
    coverUrl: ''
  },
  {
    id: '3',
    title: '一些对大学生活的畅想',
    summary: '思考',
    date: '2026-7-3',
    tags: ['Future','Thinking'],
    content: '暂无',
    coverUrl: ''
  }
]