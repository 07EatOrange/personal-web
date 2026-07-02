import { motion } from 'framer-motion';
import { GraduationCap, Code, Gamepad2, Video, Sparkles, MapPin } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

const timeline: TimelineItem[] = [
  {
    year: '2007',
    title: '出生',
    description: '出生于福建莆田，在湖北武汉长大。',
    icon: <MapPin className="size-4" />,
    tags: ['福建莆田', '湖北武汉'],
  },
  {
    year: '2020-2021',
    title: '初中 · 转折',
    description: '初中阶段经历抑郁，辍学后打了两年游戏。攒钱去重庆训练营，结果被骗——从此对游戏失去了纯粹的热爱，但也逼着自己开始思考未来的路。',
    icon: <Gamepad2 className="size-4" />,
    tags: ['低谷', '转折'],
  },
  {
    year: '2021',
    title: '15岁 · 开始做自媒体',
    description: '断断续续发了三四年，抖音/B站/小红书三个平台攒了800粉。不多，但一直没停。',
    icon: <Video className="size-4" />,
    tags: ['自媒体', '抖音', 'B站', '小红书'],
  },
  {
    year: '2023-2024',
    title: '自学AI · 探索期',
    description: '自学Stable Diffusion、AI视频生成、AI音乐（Suno）、AI语音（ElevenLabs）、Live2D图层拆分等技能。虽然都不精通，但建立起了对AI工具的全面认知。',
    icon: <Sparkles className="size-4" />,
    tags: ['SD', 'AI视频', 'Suno', 'ElevenLabs', 'Live2D'],
  },
  {
    year: '2025',
    title: '疯狂创作 · AI短片',
    description: '花半个月做AI视频比赛作品——10个赞。又花一个月做三体AI短片，成品不理想。过程很痛苦，但真正摸清了AI视频的能力边界。',
    icon: <Video className="size-4" />,
    tags: ['AI视频', '三体', '比赛'],
  },
  {
    year: '2026',
    title: '入学武职 · 新起点',
    description: '即将入学武汉职业技术学院软件技术专业。装好了CUDA，搭了个人网站，准备系统学习编程。想出海赚外国人的钱，方向还在找，但没停下来。',
    icon: <GraduationCap className="size-4" />,
    tags: ['武职', '软件技术', 'CUDA', 'Web开发'],
  },
];

export default function TimelineSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="text-2xl">📅</span>
            <h2 className="text-2xl font-bold text-foreground">成长轨迹</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/5 -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                  </div>

                  {/* Spacer for timeline alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className={`w-full md:w-1/2 pl-11 md:pl-0 ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-card border border-border/40 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                        <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          {item.icon}
                        </div>
                        {item.year}
                      </div>

                      <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {item.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-accent text-accent-foreground text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
