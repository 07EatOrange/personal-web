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
    date: '2024-12-15',
    tags: ['Live2D', '教程', '二次元'],
    content: `## 初识Live2D

第一次接触Live2D是在B站看到一个超可爱的Vup模型，当时就被那种灵动的感觉吸引了！🍊

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
    date: '2024-11-28',
    tags: ['AI', '绘图', '工具评测'],
    content: `## 前言

作为一个二次元创作者，AI绘图工具简直是神器！今天来对比一下我常用的两款工具~ 🎨

## Stable Diffusion

优点是可玩性高，模型多，配合ControlNet能精确控制构图。缺点是需要一定的学习成本。

## Midjourney

出图质量稳定，风格化强，适合快速出概念图。但精细控制不如SD灵活。

## 我的选择

日常创作我会用SD，做Live2D贴图素材时特别方便。需要灵感的时候就用MJ跑一些概念图。

大家更喜欢用哪个呢？评论区聊聊~ 🌊`,
    coverUrl: ''
  },
  {
    id: '3',
    title: '国服李信是怎样炼成的',
    summary: '巅峰2300分国服李信的进阶之路，从对线到团战全解析！',
    date: '2024-11-10',
    tags: ['王者荣耀', '李信', '攻略'],
    content: `## 我与李信

李信这个英雄，光信和暗信两种形态，可玩性极高！从第一次玩就被深深吸引了。⚔️

## 对线技巧

光信形态下利用技能消耗，暗信形态下灵活拉扯。关键是要把握好形态切换的时机。

## 团战思路

光信团战站位靠后，用大招打出爆炸AOE。暗信适合切入收割，但要注意进场时机。

## 冲分心得

打到巅峰2300，最重要的是心态和意识。每一局都认真复盘，不断优化自己的决策。

国服之路不易，但热爱可抵岁月漫长！💎`,
    coverUrl: ''
  }
]