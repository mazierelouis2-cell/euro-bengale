import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { useI18n } from '../i18n';

const produce = ['🍎', '🥬', '🍅', '🥖', '🧅', '🍌', '🥕', '🫑', '🍊', '🥔', '🌶️', '🧀'];

const Hero = () => {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-accent/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-24 w-[26rem] h-[26rem] bg-warm/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-6 text-xs font-bold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {t.hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {t.hero.title.map((seg, i) => (
              <span key={i} className={seg.h ? 'text-gradient-fresh' : undefined}>{seg.t}</span>
            ))}
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">{t.hero.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href="#rayons" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-bold hover:bg-green-700 transition-all">
              {t.hero.cta1}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 card rounded-xl font-bold hover:border-accent/40 transition-all">
              <MapPin size={18} className="text-accent" />
              {t.hero.cta2}
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={16} className="text-accent" />
            {t.hero.openToday}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="card rounded-3xl p-8 bg-gradient-to-br from-accent/5 to-warm/5">
            <div className="grid grid-cols-4 gap-4">
              {produce.map((emoji, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="aspect-square bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 card rounded-2xl px-5 py-3 flex items-center gap-3">
            <span className="text-2xl">🌍</span>
            <div className="leading-tight">
              <div className="font-bold text-sm">{t.hero.worldTitle}</div>
              <div className="text-xs text-muted-foreground">{t.hero.worldSub}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
