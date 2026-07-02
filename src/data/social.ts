// EXPORTS: ISocialPlatform, MOCK_SOCIAL_PLATFORMS
export interface ISocialPlatform {
  id: string
  name: string
  icon: string
  account: string
  url: string
}

export const MOCK_SOCIAL_PLATFORMS: ISocialPlatform[] = [
  {
    id: '1',
    name: 'B站',
    icon: '📺',
    account: '叫我橘子就好a',
    url: 'https://space.bilibili.com/'
  },
  {
    id: '2',
    name: '抖音',
    icon: '🎵',
    account: '叫我橘子就好a',
    url: 'https://www.douyin.com/user/'
  },
  {
    id: '3',
    name: '小红书',
    icon: '📕',
    account: '叫我橘子就好a',
    url: 'https://www.xiaohongshu.com/user/profile/'
  }
]