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
  computerSkill: '会开机,Vibecoding菜鸟',
  interests: ['AI', 'Live2D', '游戏', '二次元', '国际政治', '自媒体'],
  skills: [
    { id: 's1', name: 'AI视频生成', description: 'AI视频做的一般般', icon: '🎬' },
    { id: 's2', name: 'AI出图', description: '即梦,comfyui还没学', icon: '🖼️' },
    { id: 's3', name: 'AI音乐', description: 'Suno AI音乐创作', icon: '🎵' },
    { id: 's4', name: 'AI语音', description: '用过会用', icon: '🎤' },
    { id: 's5', name: 'Live2D', description: '只会最基本的面捕动画', icon: '🧩' },
    { id: 's6', name: 'Python', description: '摸鱼学的，忘光了', icon: '🐍' },
    { id: 's7', name: '视频剪辑', description: '水视频技术', icon: '✂️' },
    { id: 's8', name: '自媒体运营', description: '抖音/B站/小红书三平台运营', icon: '📱' },
  ],
  games: [
    { id: 'g1', name: '王者荣耀', rank: '巅峰2300 国服李信', icon: '👑' },
    { id: 'g2', name: '金铲铲', rank: '千分王者', icon: '♟️' },
    { id: 'g3', name: '饥荒', rank: 'Steam', icon: '🔥' },
    { id: 'g4', name: '他人世界末', rank: 'Steam', icon: '📖' },
  ],
  socialAccounts: [
    { platform: '抖音', account: '叫我橘子就好a', url: 'https://v.douyin.com/c4etPXuy5zs/ 3@9.com', icon: '🎵' },
    { platform: 'B站', account: '叫我橘子就好a', url: 'https://b23.tv/G4xaHiy', icon: '📺' },
    { platform: '小红书', account: '叫我橘子就好a', url: 'https://xhslink.com/m/6n6NrkhriZ', icon: '📕' },
  ],
}