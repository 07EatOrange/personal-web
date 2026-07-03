import { motion } from 'framer-motion';
import { MOCK_PROFILE } from '@/data/profile';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star } from 'lucide-react';

const gameDescriptions: Record<string, string> = {
  '王者荣耀': '巅峰赛2300分，国服最强李信。玩暗信的，打法激进不同寻常。',
  '金铲铲': '千分王者段位，对莫名其妙的阵容有独到理解。',
  '饥荒': 'Steam平台生存游戏，第一个玩的steam游戏。',
  '他人世界末': 'Steam平台视觉小说，第一款付费gal。',
};

export default function GamesDetailSection() {
  const games = MOCK_PROFILE.games;

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🎮</span>
            <h2 className="text-2xl font-bold text-foreground">游戏成就</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((game, i) => (
              <motion.div
                key={game.id}
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
                        {game.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{game.name}</h3>
                          {i < 2 && (
                            <Trophy className="size-4 text-primary fill-primary" />
                          )}
                        </div>
                        <Badge variant="outline" className="rounded-full text-xs font-normal border-primary/20 text-primary mb-2">
                          {game.rank}
                        </Badge>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {gameDescriptions[game.name] || ''}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Interest tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-6 flex items-center gap-2 justify-center"
          >
            <Star className="size-4 text-primary fill-primary" />
            <span className="text-sm text-muted-foreground">
              享受人生吧！
            </span>
            <span className="text-lg">💎</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
