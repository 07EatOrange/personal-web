// EXPORTS: IProfile, MOCK_PROFILE
export interface IProfile {
  id: string
  nickname: string
  avatarUrl: string
  age: number
  gender: string
  birthDate: string
  birthPlace: string
  currentCity: string
  computerSkill: string
  interests: string[]
  skills: ISkill[]
  games: IGame[]
  socialAccounts: ISocialAccount[]
}

export interface ISkill {
  id: string
  name: string
  description: string
  icon: string
}

export interface IGame {
  id: string
  name: string
  rank: string
  icon: string
}

export interface ISocialAccount {
  platform: string
  account: string
  url: string
  icon: string
}

export const MOCK_PROFILE: IProfile = {
  id: '1',
  nickname: '吃个橘子吧',
  avatarUrl: '/avatar.jpg',
  age: 19,
  gender: '男',
  birthDate: '2007-04-24',
  birthPlace: '福建莆田',
  currentCity: '武汉',
  computerSkill: '基础知识',
  interests: ['AI', 'Live2D', '游戏', '二次元', '国际政治', '自媒体'],
  skills: [
    { id: 's1', name: 'AI视频生成', description: 'AI视频制作，包括生成、风格迁移', icon: '🎬' },
    { id: 's2', name: 'AI出图', description: 'Stable Diffusion / 即梦，二次元风格', icon: '🖼️' },
    { id: 's3', name: 'AI音乐', description: 'Suno AI音乐创作', icon: '🎵' },
    { id: 's4', name: 'AI语音', description: 'ElevenLabs语音合成与克隆', icon: '🎤' },
    { id: 's5', name: 'Live2D', description: '骨骼绑定、面部动作、图层拆分', icon: '🧩' },
    { id: 's6', name: 'Python', description: '入门级编程，14-15岁开始接触', icon: '🐍' },
    { id: 's7', name: '视频剪辑', description: '基础视频后期处理', icon: '✂️' },
    { id: 's8', name: '自媒体运营', description: '抖音/B站/小红书三平台运营', icon: '📱' },
  ],
  games: [
    { id: 'g1', name: '王者荣耀', rank: '巅峰2300 国服李信', icon: '👑' },
    { id: 'g2', name: '金铲铲', rank: '千分王者', icon: '♟️' },
    { id: 'g3', name: '饥荒', rank: 'Steam', icon: '🔥' },
    { id: 'g4', name: '他人世界末', rank: 'Steam', icon: '📖' },
  ],
  socialAccounts: [
    { platform: '抖音', account: '叫我橘子就好a', url: 'https://www.douyin.com', icon: '🎵' },
    { platform: 'B站', account: '叫我橘子就好a', url: 'https://www.bilibili.com', icon: '📺' },
    { platform: '小红书', account: '叫我橘子就好a', url: 'https://www.xiaohongshu.com', icon: '📕' },
  ],
}