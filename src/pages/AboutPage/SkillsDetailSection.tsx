import { motion } from 'framer-motion';
import { MOCK_PROFILE } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';

const skillDetails: Record<string, string> = {
  'AI视频': '接触并实践AI视频制作技术，探索AI在视频创作领域的应用，包括AI生成视频片段、视频风格迁移等前沿技术。',
  'Live2D骨骼绑定': '掌握Live2D基础骨骼绑定技术，能够为角色模型添加骨骼结构，实现自然的身体运动效果。熟悉骨骼层级关系和参数调整。',
  'Seethrough拆分': '熟练使用seethrough工具进行图层拆分，将角色立绘分解为可独立控制的身体部件，为Live2D动画制作提供素材基础。',
  'AI生成图片': '利用AI绘图工具（Stable Diffusion、Midjourney等）生成二次元风格的角色立绘和素材图，配合Live2D制作流程使用。',
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
