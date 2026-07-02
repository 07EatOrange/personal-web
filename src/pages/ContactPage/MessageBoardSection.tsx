import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { scopedStorage, logger } from '@lark-apaas/client-toolkit-lite';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { MessageCircle, Send, User } from 'lucide-react';

const STORAGE_KEY = '__orange_blog_messages';

interface IMessage {
  id: string;
  nickname: string;
  content: string;
  createdAt: number;
}

const messageSchema = z.object({
  nickname: z.string().min(1, '请输入昵称').max(20, '昵称最多20个字'),
  content: z.string().min(1, '请输入留言内容').max(200, '留言最多200个字'),
});

type MessageFormData = z.infer<typeof messageSchema>;

function loadMessages(): IMessage[] {
  try {
    const raw = scopedStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    logger.error('Failed to load messages:', String(e));
  }
  return [];
}

function saveMessages(messages: IMessage[]) {
  try {
    scopedStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (e) {
    logger.error('Failed to save messages:', String(e));
  }
}

export default function MessageBoardSection() {
  const [messages, setMessages] = useState<IMessage[]>(loadMessages);
  const [parent] = useAutoAnimate({ duration: 250, easing: 'ease-in-out' });

  const form = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: { nickname: '', content: '' },
  });

  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const onSubmit = useCallback(
    (data: MessageFormData) => {
      const newMsg: IMessage = {
        id: Date.now().toString(),
        nickname: data.nickname,
        content: data.content,
        createdAt: Date.now(),
      };
      setMessages((prev) => [newMsg, ...prev]);
      form.reset();
      toast.success('留言成功！🌊 感谢你的留言~');
    },
    [form],
  );

  const formatTime = (ts: number) => {
    const d = new Date(ts);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  };

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
            <span className="text-2xl">💬</span>
            <h2 className="text-2xl font-bold text-foreground">留言板</h2>
          </div>

          {/* Form */}
          <Card className="border-border/40 shadow-sm mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <MessageCircle className="size-4 text-primary" />
                说点什么吧~
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="nickname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              placeholder="你的昵称"
                              className="pl-9 rounded-xl"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="写下你想说的话..."
                            className="rounded-xl min-h-[80px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="rounded-full px-6 gap-2 bg-primary hover:bg-primary/90"
                    >
                      <Send className="size-4" />
                      发送留言
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Messages */}
          <div ref={parent}>
            <AnimatePresence mode="popLayout">
              {messages.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl mb-4">💬</div>
                  <p className="text-muted-foreground text-sm">
                    还没有留言，来抢沙发吧~ 🌊
                  </p>
                </motion.div>
              ) : (
                messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Card className="border-border/40 shadow-sm mb-3 hover:border-primary/20 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                            🌊
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm text-foreground">
                                {msg.nickname}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {formatTime(msg.createdAt)}
                              </span>
                            </div>
                            <p className="text-sm text-foreground/80 leading-relaxed break-words">
                              {msg.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
