import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'fr' | 'en' | 'bn';

type Seg = { t: string; h?: boolean };

export const translations = {
  fr: {
    tagline: 'Alimentation générale',
    nav: { rayons: 'Nos rayons', monde: 'Produits du monde', horaires: 'Horaires', acces: 'Accès', find: 'Nous trouver' },
    hero: {
      badge: 'Épicerie de quartier · La Courneuve',
      title: [{ t: 'Vos courses ' }, { t: 'fraîches', h: true }, { t: ", tous les jours jusqu'à 21h30" }] as Seg[],
      subtitle: "Fruits & légumes frais, produits du monde et épicerie du quotidien, à deux pas de chez vous. Ouvert 7j/7 pour dépanner toute la famille.",
      cta1: 'Découvrir nos rayons',
      cta2: 'Horaires & accès',
      openToday: "Ouvert aujourd'hui · 10h30 – 21h30",
      worldTitle: 'Produits du monde',
      worldSub: 'Afrique · Asie · Orient',
    },
    rayons: {
      kicker: 'Nos rayons',
      title: "Tout ce qu'il faut, sous un même toit",
      subtitle: "Du frais au dépannage de dernière minute, retrouvez l'essentiel de vos courses et une belle sélection de produits du monde.",
      items: [
        { title: 'Fruits & Légumes', desc: 'Arrivages frais tous les jours, produits de saison.' },
        { title: 'Produits du monde', desc: "Spécialités d'Afrique, d'Asie et d'Orient." },
        { title: 'Épicerie salée & sucrée', desc: 'Riz, pâtes, conserves, farines, biscuits, épices.' },
        { title: 'Boissons', desc: 'Sodas frais, eaux, jus et boissons du monde.' },
        { title: 'Frais & laitages', desc: 'Produits laitiers, œufs, beurre et surgelés.' },
        { title: 'Hygiène & maison', desc: "Produits d'entretien, hygiène et dépannage." },
      ],
    },
    atouts: {
      kicker: 'Pourquoi Euro Bengale',
      title: 'Votre épicerie de confiance à La Courneuve',
      paragraph: "Depuis le cœur du quartier, Euro Bengale rassemble le meilleur de l'alimentation générale et des produits du monde. Une adresse simple et pratique pour faire ses courses au quotidien, du frais à l'épicerie.",
      stats: [
        { v: '7j/7', l: 'Ouvert tous les jours' },
        { v: '21h30', l: 'Fermeture le soir' },
        { v: '🌍', l: 'Produits du monde' },
      ],
      items: [
        { title: 'Fraîcheur au quotidien', desc: 'Fruits et légumes réapprovisionnés chaque jour pour une qualité toujours au rendez-vous.' },
        { title: 'Prix accessibles', desc: 'Des prix justes sur les produits du quotidien, pour toutes les familles du quartier.' },
        { title: "Ouvert 7j/7 jusqu'à tard", desc: "On vous dépanne matin comme soir, tous les jours de la semaine jusqu'à 21h30." },
        { title: 'Accueil de quartier', desc: "Un commerce de proximité chaleureux, où l'on connaît ses clients par leur prénom." },
      ],
    },
    contact: {
      kicker: 'Nous rendre visite',
      title: 'Horaires & accès',
      subtitle: 'On vous attend au cœur de La Courneuve, 7 jours sur 7.',
      addressLabel: 'Adresse',
      itineraire: 'Itinéraire',
      facebook: 'Facebook',
      hoursTitle: "Horaires d'ouverture",
      open7: 'Ouvert 7j/7',
      openMaps: 'Ouvrir dans Maps',
      days: [
        { jour: 'Lundi', h: '15h30 – 21h30' },
        { jour: 'Mardi', h: '10h30 – 21h30' },
        { jour: 'Mercredi', h: '10h30 – 21h30' },
        { jour: 'Jeudi', h: '10h30 – 21h30' },
        { jour: 'Vendredi', h: '10h30 – 21h30' },
        { jour: 'Samedi', h: '10h30 – 21h30' },
        { jour: 'Dimanche', h: '10h30 – 21h30' },
      ],
    },
    whatsapp: { cta: 'Commander sur WhatsApp', msg: 'Bonjour Euro Bengale, je souhaite passer une commande.' },
    arrivages: {
      kicker: 'Cette semaine',
      title: 'Arrivages & promos',
      subtitle: 'De nouveaux produits frais arrivent régulièrement. Voici les nouveautés du moment.',
      badge: 'Nouveau',
      items: [
        { name: 'Mangues fraîches', tag: 'Arrivage' },
        { name: 'Légumes du jour', tag: 'Frais' },
        { name: 'Herbes & épices', tag: 'Nouveau' },
        { name: 'Riz & légumineuses', tag: 'Promo' },
      ],
    },
    footer: { brand: 'Euro Bengale — Alimentation générale', line: '25 rue Anatole France, 93120 La Courneuve · Ouvert 7j/7', rights: 'Tous droits réservés.' },
  },

  en: {
    tagline: 'General grocery',
    nav: { rayons: 'Our aisles', monde: 'World products', horaires: 'Opening hours', acces: 'Directions', find: 'Find us' },
    hero: {
      badge: 'Neighborhood grocery · La Courneuve',
      title: [{ t: 'Your ' }, { t: 'fresh', h: true }, { t: ' groceries, every day until 9:30 pm' }] as Seg[],
      subtitle: 'Fresh fruit & vegetables, world products and everyday groceries, just around the corner. Open 7 days a week for the whole family.',
      cta1: 'Explore our aisles',
      cta2: 'Hours & directions',
      openToday: 'Open today · 10:30 am – 9:30 pm',
      worldTitle: 'World products',
      worldSub: 'Africa · Asia · Middle East',
    },
    rayons: {
      kicker: 'Our aisles',
      title: 'Everything you need, under one roof',
      subtitle: 'From fresh produce to last-minute essentials, find all your groceries and a fine selection of world products.',
      items: [
        { title: 'Fruit & Vegetables', desc: 'Fresh deliveries every day, seasonal produce.' },
        { title: 'World products', desc: 'Specialties from Africa, Asia and the Middle East.' },
        { title: 'Grocery, sweet & savoury', desc: 'Rice, pasta, canned food, flour, biscuits, spices.' },
        { title: 'Drinks', desc: 'Chilled sodas, water, juices and world drinks.' },
        { title: 'Fresh & dairy', desc: 'Dairy products, eggs, butter and frozen food.' },
        { title: 'Household & hygiene', desc: 'Cleaning products, hygiene and everyday essentials.' },
      ],
    },
    atouts: {
      kicker: 'Why Euro Bengale',
      title: 'Your trusted grocery in La Courneuve',
      paragraph: 'In the heart of the neighborhood, Euro Bengale brings together the best of general groceries and world products. A simple, convenient address for your everyday shopping, from fresh to pantry.',
      stats: [
        { v: '7/7', l: 'Open every day' },
        { v: '9:30 pm', l: 'Evening closing' },
        { v: '🌍', l: 'World products' },
      ],
      items: [
        { title: 'Fresh every day', desc: 'Fruit and vegetables restocked daily so quality is always there.' },
        { title: 'Affordable prices', desc: 'Fair prices on everyday products, for every family in the neighborhood.' },
        { title: 'Open late, 7 days a week', desc: "We've got you covered morning and evening, every day until 9:30 pm." },
        { title: 'A neighborhood welcome', desc: 'A warm local shop where customers are known by name.' },
      ],
    },
    contact: {
      kicker: 'Come visit us',
      title: 'Hours & directions',
      subtitle: "We'll be waiting for you in the heart of La Courneuve, 7 days a week.",
      addressLabel: 'Address',
      itineraire: 'Directions',
      facebook: 'Facebook',
      hoursTitle: 'Opening hours',
      open7: 'Open 7/7',
      openMaps: 'Open in Maps',
      days: [
        { jour: 'Monday', h: '3:30 pm – 9:30 pm' },
        { jour: 'Tuesday', h: '10:30 am – 9:30 pm' },
        { jour: 'Wednesday', h: '10:30 am – 9:30 pm' },
        { jour: 'Thursday', h: '10:30 am – 9:30 pm' },
        { jour: 'Friday', h: '10:30 am – 9:30 pm' },
        { jour: 'Saturday', h: '10:30 am – 9:30 pm' },
        { jour: 'Sunday', h: '10:30 am – 9:30 pm' },
      ],
    },
    whatsapp: { cta: 'Order on WhatsApp', msg: 'Hello Euro Bengale, I would like to place an order.' },
    arrivages: {
      kicker: 'This week',
      title: 'New arrivals & deals',
      subtitle: 'Fresh products arrive regularly. Here is what just landed in store.',
      badge: 'New',
      items: [
        { name: 'Fresh mangoes', tag: 'New arrival' },
        { name: 'Vegetables of the day', tag: 'Fresh' },
        { name: 'Herbs & spices', tag: 'New' },
        { name: 'Rice & pulses', tag: 'Sale' },
      ],
    },
    footer: { brand: 'Euro Bengale — General grocery', line: '25 rue Anatole France, 93120 La Courneuve · Open 7/7', rights: 'All rights reserved.' },
  },

  bn: {
    tagline: 'মুদি দোকান',
    nav: { rayons: 'আমাদের বিভাগ', monde: 'বিশ্বের পণ্য', horaires: 'খোলার সময়', acces: 'অবস্থান', find: 'আমাদের খুঁজুন' },
    hero: {
      badge: 'পাড়ার মুদি দোকান · La Courneuve',
      title: [{ t: 'আপনার ' }, { t: 'তাজা', h: true }, { t: ' বাজার, প্রতিদিন রাত ৯:৩০ পর্যন্ত' }] as Seg[],
      subtitle: 'তাজা ফল ও সবজি, বিশ্বের নানা পণ্য এবং প্রতিদিনের মুদিসামগ্রী — আপনার বাড়ির কাছেই। পুরো পরিবারের প্রয়োজনে ৭ দিন খোলা।',
      cta1: 'আমাদের বিভাগ দেখুন',
      cta2: 'সময় ও অবস্থান',
      openToday: 'আজ খোলা · সকাল ১০:৩০ – রাত ৯:৩০',
      worldTitle: 'বিশ্বের পণ্য',
      worldSub: 'আফ্রিকা · এশিয়া · প্রাচ্য',
    },
    rayons: {
      kicker: 'আমাদের বিভাগ',
      title: 'এক ছাদের নিচে সবকিছু',
      subtitle: 'তাজা পণ্য থেকে শেষ মুহূর্তের প্রয়োজন — আপনার বাজারের সব প্রয়োজনীয় জিনিস আর বিশ্বের নানা পণ্যের দারুণ সংগ্রহ।',
      items: [
        { title: 'ফল ও সবজি', desc: 'প্রতিদিন তাজা সরবরাহ, মৌসুমি পণ্য।' },
        { title: 'বিশ্বের পণ্য', desc: 'আফ্রিকা, এশিয়া ও প্রাচ্যের বিশেষ পণ্য।' },
        { title: 'মুদি — নোনতা ও মিষ্টি', desc: 'চাল, পাস্তা, টিনজাত খাবার, আটা, বিস্কুট, মসলা।' },
        { title: 'পানীয়', desc: 'ঠান্ডা সোডা, পানি, জুস ও বিশ্বের নানা পানীয়।' },
        { title: 'দুগ্ধ ও ঠান্ডা পণ্য', desc: 'দুধজাত পণ্য, ডিম, মাখন ও হিমায়িত খাবার।' },
        { title: 'পরিচ্ছন্নতা ও গৃহস্থালি', desc: 'পরিষ্কারক, স্বাস্থ্যবিধি ও জরুরি সামগ্রী।' },
      ],
    },
    atouts: {
      kicker: 'কেন Euro Bengale',
      title: 'La Courneuve-এ আপনার বিশ্বস্ত মুদি দোকান',
      paragraph: 'পাড়ার কেন্দ্রে Euro Bengale একত্র করেছে সেরা মুদিসামগ্রী ও বিশ্বের নানা পণ্য। প্রতিদিনের বাজারের জন্য সহজ ও সুবিধাজনক এক ঠিকানা — তাজা থেকে শুকনো, সব কিছু।',
      stats: [
        { v: '৭/৭', l: 'প্রতিদিন খোলা' },
        { v: 'রাত ৯:৩০', l: 'রাতে বন্ধ' },
        { v: '🌍', l: 'বিশ্বের পণ্য' },
      ],
      items: [
        { title: 'প্রতিদিন তাজা', desc: 'প্রতিদিন নতুন করে আনা ফল ও সবজি, গুণমান সবসময় নিশ্চিত।' },
        { title: 'সাশ্রয়ী দাম', desc: 'প্রতিদিনের পণ্যে ন্যায্য দাম, পাড়ার সব পরিবারের জন্য।' },
        { title: '৭ দিন দেরি পর্যন্ত খোলা', desc: 'সকাল থেকে রাত, সপ্তাহের প্রতিদিন রাত ৯:৩০ পর্যন্ত আপনার পাশে।' },
        { title: 'পাড়ার আন্তরিক সেবা', desc: 'একটি আন্তরিক স্থানীয় দোকান, যেখানে গ্রাহকদের নাম ধরে চেনা হয়।' },
      ],
    },
    contact: {
      kicker: 'আমাদের কাছে আসুন',
      title: 'সময় ও অবস্থান',
      subtitle: 'La Courneuve-এর কেন্দ্রে, সপ্তাহের ৭ দিনই আমরা আপনার অপেক্ষায়।',
      addressLabel: 'ঠিকানা',
      itineraire: 'দিকনির্দেশ',
      facebook: 'Facebook',
      hoursTitle: 'খোলার সময়',
      open7: '৭ দিন খোলা',
      openMaps: 'Maps-এ খুলুন',
      days: [
        { jour: 'সোমবার', h: 'বিকেল ৩:৩০ – রাত ৯:৩০' },
        { jour: 'মঙ্গলবার', h: 'সকাল ১০:৩০ – রাত ৯:৩০' },
        { jour: 'বুধবার', h: 'সকাল ১০:৩০ – রাত ৯:৩০' },
        { jour: 'বৃহস্পতিবার', h: 'সকাল ১০:৩০ – রাত ৯:৩০' },
        { jour: 'শুক্রবার', h: 'সকাল ১০:৩০ – রাত ৯:৩০' },
        { jour: 'শনিবার', h: 'সকাল ১০:৩০ – রাত ৯:৩০' },
        { jour: 'রবিবার', h: 'সকাল ১০:৩০ – রাত ৯:৩০' },
      ],
    },
    whatsapp: { cta: 'WhatsApp-এ অর্ডার করুন', msg: 'হ্যালো Euro Bengale, আমি একটি অর্ডার দিতে চাই।' },
    arrivages: {
      kicker: 'এই সপ্তাহে',
      title: 'নতুন আগমন ও অফার',
      subtitle: 'নিয়মিত নতুন তাজা পণ্য আসে। এই মুহূর্তের নতুন পণ্যগুলো দেখে নিন।',
      badge: 'নতুন',
      items: [
        { name: 'তাজা আম', tag: 'নতুন আগমন' },
        { name: 'দিনের সবজি', tag: 'তাজা' },
        { name: 'ভেষজ ও মসলা', tag: 'নতুন' },
        { name: 'চাল ও ডাল', tag: 'ছাড়' },
      ],
    },
    footer: { brand: 'Euro Bengale — মুদি দোকান', line: '25 rue Anatole France, 93120 La Courneuve · ৭ দিন খোলা', rights: 'সর্বস্বত্ব সংরক্ষিত।' },
  },
} as const;

type I18nValue = { lang: Lang; setLang: (l: Lang) => void; t: (typeof translations)['fr'] };

const I18nContext = createContext<I18nValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem('eb-lang');
      if (s === 'fr' || s === 'en' || s === 'bn') return s;
    } catch { /* ignore */ }
    return 'fr';
  });

  useEffect(() => {
    try { localStorage.setItem('eb-lang', lang); } catch { /* ignore */ }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang] as (typeof translations)['fr'];
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}

const LABELS: Record<Lang, string> = { fr: 'FR', en: 'EN', bn: 'বাং' };

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div className={`inline-flex items-center rounded-xl bg-muted p-1 ${className}`}>
      {(['fr', 'en', 'bn'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
            lang === l ? 'bg-white text-accent shadow-sm' : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-pressed={lang === l}
        >
          {LABELS[l]}
        </button>
      ))}
    </div>
  );
}
