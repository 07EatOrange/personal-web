import { motion } from 'framer-motion';
import { MOCK_PROFILE } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';

const skillDetails: Record<string, string> = {
  'AI视频生成': '做过AI视频比赛作品和三体AI短片。成品不理想，但摸清了AI视频的能力边界和制作流程。',
  'AI出图': '一般用即梦，能完成基础的文生图和图生图操作。ComfyUI看情况学。',
  'AI音乐': '用Suno生成过AI音乐，探索过不同风格和参数组合。',
  'AI语音': '用过ElevenLabs等语音合成工具，了解基础的语音合成和克隆流程。',
  'Live2D': '了解基础概念，会做最简单的面捕动画设置。暂不考虑深入。',
  'Python': '14-15岁学过基础语法，写过小脚本。长期没用，需要重新捡起来。',
  '视频剪辑': '水视频都水不明白目前。',
  '自媒体运营': '抖音/B站/小红书三平台运营经验，三四年攒了800粉。',
};

export default function SkillsDetailSection() {
  const skills = MOCK_PROFILE.skills;

  return (
    <section className="w-full py-12 md:py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🛠️</span>
            <h2 className="text-2xl font-bold text-foreground">技能详情</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <Card className="h-full border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                        {skill.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skillDetails[skill.name] || skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
