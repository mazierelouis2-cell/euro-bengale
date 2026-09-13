import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n';
import { SHOP, MAPS_URL, whatsappLink } from '../config';
import { WaIcon } from './WhatsAppButton';

const ADDRESS = SHOP.address;
const MAPS = MAPS_URL;

const Contact = () => {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <div className="text-accent text-xs font-bold tracking-widest uppercase mb-4">{t.contact.kicker}</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <div className="card rounded-3xl p-8 flex flex-col">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{t.contact.addressLabel}</div>
                <div className="text-lg font-bold leading-snug">{ADDRESS}</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-black/5 mb-6 flex-1 min-h-[220px]">
              <iframe
                title="Plan Euro Bengale"
                className="w-full h-full min-h-[220px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={'https://www.google.com/maps?q=' + encodeURIComponent(ADDRESS) + '&output=embed'}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white rounded-xl font-bold hover:bg-green-700 transition-all">
                <Navigation size={18} />
                {t.contact.itineraire}
              </a>
              <a href={SHOP.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 card rounded-xl font-bold hover:border-accent/40 transition-all">
                <ExternalLink size={18} className="text-accent" />
                {t.contact.facebook}
              </a>
            </div>

            <a
              href={whatsappLink(t.whatsapp.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:brightness-95 transition-all"
            >
              <WaIcon size={18} />
              {t.whatsapp.cta}
            </a>
          </div>

          <div className="card rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div className="text-lg font-bold">{t.contact.hoursTitle}</div>
            </div>
            <ul className="divide-y divide-black/5">
              {t.contact.days.map((row, i) => (
                <li key={i} className="flex items-center justify-between py-3.5 gap-4">
                  <span className="font-medium">{row.jour}</span>
                  <span className="text-muted-foreground text-right">{row.h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {t.contact.open7}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
