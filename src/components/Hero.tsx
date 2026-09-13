import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { useI18n } from '../i18n';
import storefront from '../assets/storefront.jpg';

const Hero = () => {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Photo de la devanture en arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <img
          src={storefront}
          alt="Devanture du magasin Euro Bengale, alimentation générale à La Courneuve"
          className="w-full h-full object-cover"
        />
        {/* Voiles pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 mb-6 text-xs font-bold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-70"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            {t.hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            {t.hero.title.map((seg, i) => (
              <span key={i} className={seg.h ? 'text-gradient-fresh' : undefined}>{seg.t}</span>
            ))}
          </h1>

          <p className="text-lg text-white/85 max-w-xl mb-8 leading-relaxed">{t.hero.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a href="#rayons" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-accent/20">
              {t.hero.cta1}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-white/10 backdrop-blur border border-white/25 hover:bg-white/20 transition-all">
              <MapPin size={18} />
              {t.hero.cta2}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 text-sm text-white/85">
              <Clock size={16} className="text-accent" />
              {t.hero.openToday}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-xs font-bold shadow">
              <span className="text-lg leading-none">🌍</span>
              <span className="text-foreground">{t.hero.worldTitle}</span>
              <span className="text-muted-foreground">· {t.hero.worldSub}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
