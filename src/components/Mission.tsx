import { motion } from 'framer-motion';
import { Leaf, Tag, Clock, HandHeart } from 'lucide-react';
import { useI18n } from '../i18n';

const icons = [Leaf, Tag, Clock, HandHeart];

const Mission = () => {
  const { t } = useI18n();
  return (
    <section id="atouts" className="py-24 md:py-32 px-6 bg-white border-y border-black/5 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">{t.atouts.kicker}</div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">{t.atouts.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.atouts.paragraph}</p>

            <div className="grid grid-cols-3 gap-4">
              {t.atouts.stats.map((s, i) => (
                <div key={i} className="card rounded-2xl p-5 text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-accent">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {t.atouts.items.map((a, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="rounded-2xl p-6 bg-background border border-black/5"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
