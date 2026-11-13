import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import behruzPortrait from './assets/behruz-portrait.jpg';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Menu,
  Plus,
  X,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: '01',
    name: 'Form & Field',
    category: 'Digital flagship · E-commerce',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1800&q=85',
    alt: 'Sculptural ceramic objects in warm afternoon light',
    tone: 'sand',
    description:
      'A quieter kind of commerce for a considered homeware label. A tactile, editorial storefront that gives every object the room it deserves.',
    services: 'Strategy / Art direction / Development',
  },
  {
    number: '02',
    name: 'Sora House',
    category: 'Hospitality · Brand experience',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    alt: 'A serene modernist interior with warm natural materials',
    tone: 'olive',
    description:
      'A digital welcome for a small design-led hotel. The experience pairs restrained typography with a strong sense of place.',
    services: 'Digital direction / Design / Development',
  },
  {
    number: '03',
    name: 'Common Ground',
    category: 'Identity · Editorial platform',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85',
    alt: 'An open creative studio filled with natural light',
    tone: 'blue',
    description:
      'A flexible editorial platform for people building a more thoughtful future of work. Designed to grow with its community.',
    services: 'Concept / UI design / Front-end',
  },
  {
    number: '04',
    name: 'Objects of Note',
    category: 'Creative direction · Commerce',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1800&q=85',
    alt: 'Abstract glass and chrome objects arranged in a gallery',
    tone: 'violet',
    description:
      'An online exhibition and shop for independent objects. A playful identity meets a simple, highly usable buying experience.',
    services: 'Creative direction / E-commerce / Development',
  },
];

const services = [
  {
    number: '01',
    name: 'Business websites',
    detail: 'A clear, distinctive home for your business.',
    type: 'web',
  },
  {
    number: '02',
    name: 'E-commerce',
    detail: 'Thoughtful storefronts built to make a connection.',
    type: 'shop',
  },
  {
    number: '03',
    name: 'Landing pages',
    detail: 'One good idea, expressed with total clarity.',
    type: 'landing',
  },
  {
    number: '04',
    name: 'Restaurant websites',
    detail: 'A little taste of being there, before you arrive.',
    type: 'restaurant',
  },
  {
    number: '05',
    name: 'Website redesign',
    detail: 'A sharper digital expression of who you are now.',
    type: 'redesign',
  },
  {
    number: '06',
    name: 'AI-powered digital',
    detail: 'Useful new capabilities, made human.',
    type: 'ai',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    text: 'First, the right questions. We get to the heart of your audience, ambition, and what makes you different.',
  },
  {
    number: '02',
    title: 'Planning',
    text: 'A clear direction before a single pixel. Structure, scope, and a shared picture of what success looks like.',
  },
  {
    number: '03',
    title: 'Design',
    text: 'Turning the strategy into something you can see, feel, and respond to. Every detail has a reason to be there.',
  },
  {
    number: '04',
    title: 'Development',
    text: 'Careful, responsive code. Fast-loading pages and considered interactions that feel effortless to use.',
  },
  {
    number: '05',
    title: 'Launch',
    text: 'Out into the world, with everything tested and ready. Then a proper handover so you can make it yours.',
  },
];

const navItems = [
  ['about', '#about'],
  ['values', '#values'],
  ['services', '#services'],
  ['work', '#work'],
  ['contact', '#contact'],
];

const telegramUrl = 'https://t.me/Yoldoshev_Bekhruz';

const translations = {
  uz: {
    availability: 'Tanlangan loyihalar uchun ochiqman',
    navLabel: 'Asosiy navigatsiya',
    languageLabel: 'Tilni tanlang',
    homeLabel: 'Behruz Yoldoshev, bosh sahifaga qaytish',
    nav: { about: 'Men haqimda', values: 'Qadriyatlar', services: 'Xizmatlar', work: 'Loyihalar', contact: 'Aloqa' },
    menu: 'Menyu',
    close: 'Yopish',
    closeProject: 'Loyiha tafsilotlarini yopish',
    modal: { work: 'Bajarilgan ishlar' },
    startConversation: 'Hamkorlikni boshlash',
    hero: {
      eyebrow: 'Mustaqil dasturchi / Portfolio 2026',
      aside: 'Dizayn bilan uyg‘un kod.\nKelajak uchun yaratilgan.',
      location: 'Mustaqil / Butun dunyo bo‘ylab',
      scroll: 'Ko‘rish uchun pastga',
      object: 'shakl / mazmun\nuyg‘unligi',
    },
    about: {
      eyebrow: 'Men haqimda',
      headline: ['Men internetni', 'yanada insoniy', 'qiladigan tajribalar yarataman.'],
      years: 'yildan ortiq tajriba',
      projects: 'loyiha',
      countries: 'O‘zbekiston',
      body: 'Men Behruzman — mayda detallarga e’tibor beradigan kreativ veb-dasturchi. G‘oyalarni tushunarli, foydali va esda qoladigan raqamli tajribalarga aylantiraman.',
      caption: 'Har bir detalga e’tibor / 001',
      imageAlt: 'Behruz Yoldoshev portreti',
      stamp: 'Yaxshi ish\nniyat bilan',
      bottomLeft: 'Katta fikr. Puxta ijro.',
      bottomRight: 'Yaxshi ish — yaxshi hamkorlikdan boshlanadi.',
    },
    values: {
      eyebrow: 'Ishlash tamoyillarim',
      title: ['Qadriyatlar', 'har bir qarorda.'],
      intro: 'Yaxshi raqamli mahsulot shunchaki chiroyli ko‘rinmaydi — u aniq maqsadga xizmat qiladi va odamlarga qulaylik yaratadi.',
      items: [
        ['01', 'Aniqlik', 'Har bir qaror maqsad, foydalanuvchi va natijaga xizmat qiladi. Ortiqcha murakkablikdan qochaman.'],
        ['02', 'Qiziquvchanlik', 'Yangi texnologiya va yondashuvlarni o‘rganaman, lekin faqat haqiqiy foyda berganida qo‘llayman.'],
        ['03', 'Puxtalik', 'Tezlikdan voz kechmay, kod, dizayn va tafsilotlarda sifatni saqlayman.'],
        ['04', 'Hamkorlik', 'Ochiq muloqot, o‘zaro hurmat va va’daga sodiqlik bilan ishlayman.'],
      ],
      note: 'Prinsiplar / 2026',
    },
    services: {
      eyebrow: 'Nimalarda yordam beraman',
      title: ['G‘oyangizni', 'birga amalga oshiramiz.'],
      intro: 'Dastlabki fikrdan ishga tushirishgacha — puxta raqamli hamkorlik.',
      items: [
        ['Biznes saytlari', 'Brendingizni aniq ifodalaydigan zamonaviy sayt.'],
        ['Onlayn do‘konlar', 'Xaridni qulay va yoqimli qiladigan savdo tajribasi.'],
        ['Landing sahifalar', 'Bitta muhim g‘oya uchun lo‘nda va samarali sahifa.'],
        ['Restoran saytlari', 'Mehmon kelishidan oldin muhitni his qildiradigan sayt.'],
        ['Saytni yangilash', 'Raqamli ko‘rinishingizni bugungi darajangizga moslaymiz.'],
        ['AI yechimlar', 'Haqiqiy vazifalarni yengillashtiradigan aqlli funksiyalar.'],
      ],
      preview: 'Yaxshi boshlanish',
      question: 'Boshqa g‘oyangiz bormi?',
      link: 'Birgalikda yechimini topamiz',
    },
    work: {
      eyebrow: 'Tanlangan ishlar / 2024—26',
      title: ['Tanlangan', 'loyihalar.'],
      aside: 'Kichik detallar. Katta taassurot.',
      drag: 'Loyihalarni ko‘ring',
      end: ['Yaxshi g‘oyangiz', 'bormi?'],
      talk: 'Keling, gaplashamiz',
      footer: '01 — 04 / Tanlangan ishlar',
      scroll: 'Loyihalarni ko‘rish uchun aylantiring',
      view: 'Loyihani ko‘rish',
      projectPrompt: 'Shunga o‘xshash loyiha bormi?',
    },
    process: {
      eyebrow: 'Puxta ish uchun aniq jarayon',
      title: ['Aniq reja.', 'Ishonchli natija.'],
      intro: '“Qani endi?” degan fikrdan tayyor mahsulotgacha — birgalikda.',
      cue: 'Besh bosqich / Bitta maqsad',
      labels: ['BOSHLANISH', 'KEYIN', 'KEYIN', 'KEYIN', 'YAKUN'],
      steps: [
        ['Tanishuv', 'Avval to‘g‘ri savollar. Maqsad, auditoriya va loyihangizning o‘ziga xos jihatlarini aniqlaymiz.'],
        ['Rejalash', 'Dizayndan oldin aniq yo‘nalish: tuzilma, vazifalar va muvaffaqiyat mezonlarini kelishib olamiz.'],
        ['Dizayn', 'Strategiyani ko‘rish va his qilish mumkin bo‘lgan tajribaga aylantiramiz. Har bir detalning sababi bor.'],
        ['Dasturlash', 'Tez, moslashuvchan va puxta kod. Foydalanishda tabiiy tuyuladigan harakatlar.'],
        ['Ishga tushirish', 'Sinovdan o‘tgan loyiha va qulay topshiruv. Keyin uni mustaqil boshqarishingiz mumkin.'],
      ],
    },
    contact: {
      eyebrow: 'Keyingi yaxshi g‘oya',
      booking: 'Loyihalar uchun ochiqman / 2026',
      kicker: 'Birgalikda nimadir yarataylikmi?',
      title: ['Ma’noli', 'raqamli tajriba', 'yaratamiz.'],
      button: 'G‘oyangizni\naytib bering',
      caption: 'Rasmiy taqdimot shart emas. Salom deb yozing.',
      emailLabel: 'Telegram orqali bog‘lanish',
      socials: 'Ijtimoiy tarmoqlar',
      time: 'Mahalliy vaqt',
      footer: 'Aniq fikr. Puxta raqamli ijro.',
      back: 'Yuqoriga',
    },
    intro: { overline: 'Mustaqil ijod / 2026', coordinate: 'TOSHKENT / O‘ZBEKISTON', skip: 'Kirishni o‘tkazib yuborish', dialog: 'Portfolio taqdimoti' },
  },
  en: {
    availability: 'Available for select projects',
    navLabel: 'Main navigation',
    languageLabel: 'Select language',
    homeLabel: 'Behruz Yoldoshev, back to top',
    nav: { about: 'About', values: 'Values', services: 'Services', work: 'Selected work', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    closeProject: 'Close project details',
    modal: { work: 'The work' },
    startConversation: 'Start a conversation',
    hero: {
      eyebrow: 'Independent developer / Portfolio 2026',
      aside: 'Design-minded code.\nBuilt for what’s next.',
      location: 'Independent / Available worldwide',
      scroll: 'Scroll to explore',
      object: 'form / function\nin balance',
    },
    about: {
      eyebrow: 'A little about me',
      headline: ['I make the internet', 'a little more', 'human.'],
      years: 'years of experience',
      projects: 'projects launched',
      countries: 'Uzbekistan',
      body: 'I’m Behruz — a creative web developer who cares about the little things. I turn ideas into clear, useful, and quietly memorable digital experiences.',
      caption: 'A practice in paying attention / 001',
      imageAlt: 'Portrait of Behruz Yoldoshev',
      stamp: 'Good things\ntake intention',
      bottomLeft: 'Big-picture thinking. Careful execution.',
      bottomRight: 'Good work starts with good collaboration.',
    },
    values: {
      eyebrow: 'How I approach the work',
      title: ['Values in', 'every decision.'],
      intro: 'A good digital product does more than look beautiful — it serves a clear purpose and makes things easier for people.',
      items: [
        ['01', 'Clarity', 'Every decision serves the goal, the user, and the outcome. I leave unnecessary complexity behind.'],
        ['02', 'Curiosity', 'I explore new technology and ideas, then use them when they make a meaningful difference.'],
        ['03', 'Craft', 'I balance speed with care, bringing quality to the code, the design, and the details.'],
        ['04', 'Collaboration', 'I work with open communication, mutual respect, and a commitment to doing what I said I would.'],
      ],
      note: 'Principles / 2026',
    },
    services: {
      eyebrow: 'What I can do for you',
      title: ['Good ideas,', 'made real.'],
      intro: 'A considered digital partner, from the first thought to launch.',
      items: [
        ['Business websites', 'A modern site that expresses your brand clearly.'],
        ['E-commerce', 'A shopping experience that feels effortless.'],
        ['Landing pages', 'One important idea, expressed with clarity.'],
        ['Restaurant websites', 'A little taste of being there, before you arrive.'],
        ['Website redesign', 'Bring your digital presence up to where you are today.'],
        ['AI-powered solutions', 'Useful intelligence that makes real work easier.'],
      ],
      preview: 'A good place to start',
      question: 'Something else in mind?',
      link: 'Let’s figure it out together',
    },
    work: {
      eyebrow: 'Selected work / 2024—26',
      title: ['A few good', 'things.'],
      aside: 'Small details. Lasting impressions.',
      drag: 'Explore the projects',
      end: ['Have a good one', 'in the works?'],
      talk: 'Let’s talk',
      footer: '01 — 04 / A considered collection',
      scroll: 'Scroll to move through the work',
      view: 'View project',
      projectPrompt: 'Have something similar in mind?',
    },
    process: {
      eyebrow: 'Good work takes a good process',
      title: ['No mystery.', 'Just momentum.'],
      intro: 'A collaborative, considered process that gets us from “what if?” to “it’s live.”',
      cue: 'Five steps / One good outcome',
      labels: ['FIRST', 'THEN', 'THEN', 'THEN', 'THE FINISH'],
      steps: [
        ['Discovery', 'First, the right questions. We get to the heart of your audience, ambition, and what makes you different.'],
        ['Planning', 'A clear direction before a single pixel. Structure, scope, and a shared picture of what success looks like.'],
        ['Design', 'Turning the strategy into something you can see, feel, and respond to. Every detail has a reason to be there.'],
        ['Development', 'Careful, responsive code. Fast-loading pages and considered interactions that feel effortless to use.'],
        ['Launch', 'Out into the world, with everything tested and ready. Then a proper handover so you can make it yours.'],
      ],
    },
    contact: {
      eyebrow: 'The next good thing',
      booking: 'Available for projects / 2026',
      kicker: 'Have a good feeling about this?',
      title: ['Let’s make', 'something', 'matter.'],
      button: 'Tell me what\nyou’re thinking',
      caption: 'No deck required. Just say hello.',
      emailLabel: 'Message me on Telegram',
      socials: 'Out in the world',
      time: 'Local time',
      footer: 'Independent by nature. Intentional by design.',
      back: 'Back to top',
    },
    intro: { overline: 'Independent practice / 2026', coordinate: 'TASHKENT / UZBEKISTAN', skip: 'Skip introduction', dialog: 'Portfolio introduction' },
  },
};

const projectTranslations = {
  uz: [
    { category: 'Raqamli do‘kon · E-commerce', alt: 'Yumshoq quyosh nuridagi sopol buyumlar', description: 'Uy uchun nafis buyumlar brendiga sokin va o‘ziga xos onlayn do‘kon. Har bir mahsulotga munosib e’tibor beradigan tahririy uslubdagi tajriba.', services: 'Strategiya / Badiiy yo‘nalish / Dasturlash' },
    { category: 'Mehmondo‘stlik · Brend tajribasi', alt: 'Tabiiy materiallardan ishlangan zamonaviy va sokin interyer', description: 'Dizaynga e’tibor beradigan kichik mehmonxona uchun raqamli kutib olish tajribasi. Ixcham tipografika va joy ruhini aks ettiruvchi dizayn.', services: 'Raqamli yo‘nalish / Dizayn / Dasturlash' },
    { category: 'Identika · Tahririy platforma', alt: 'Tabiiy yorug‘likka to‘la ochiq ijodiy studiya', description: 'Kelajakdagi mehnat madaniyatini rivojlantirayotgan insonlar uchun moslashuvchan tahririy platforma. Hamjamiyat bilan birga o‘sishga mo‘ljallangan.', services: 'Konsepsiya / UI dizayn / Front-end' },
    { category: 'Ijodiy yo‘nalish · Savdo', alt: 'Galereyada joylashtirilgan shisha va xrom buyumlar', description: 'Mustaqil dizaynerlar yaratgan buyumlar uchun onlayn ko‘rgazma va do‘kon. Ijodiy identika qulay xarid tajribasi bilan uyg‘unlashadi.', services: 'Ijodiy yo‘nalish / E-commerce / Dasturlash' },
  ],
  en: projects.map(({ category, alt, description, services: projectServices }) => ({ category, alt, description, services: projectServices })),
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return reduced;
}

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (
      !cursor ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return undefined;

    const canvas = cursor;
    const context = canvas.getContext('2d');
    const trail = [];
    const pointer = {
      x: -100,
      y: -100,
      targetX: -100,
      targetY: -100,
      active: false,
      hover: false,
      angle: 0,
      speed: 0,
      gait: 0,
    };
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let raf = 0;
    let lastTrailPoint = 0;
    let previousFrame = 0;

    const resize = () => {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (event) => {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      pointer.active = true;
      pointer.hover = Boolean(event.target.closest('a, button, [data-cursor]'));
    };
    const leave = () => { pointer.active = false; };
    const pointerOut = (event) => {
      if (!event.relatedTarget) leave();
    };

    const drawSpider = (x, y, scale, angle, speed, gait) => {
      context.save();
      context.translate(x, y);
      context.scale(scale, scale);
      context.rotate(angle);
      context.lineWidth = 0.95;
      context.lineCap = 'round';
      context.strokeStyle = 'rgba(193, 209, 231, .88)';
      const step = Math.min(speed * 14, 2.3);
      for (let leg = 0; leg < 8; leg += 1) {
        const side = leg < 4 ? -1 : 1;
        const pair = leg % 4;
        const fore = pair < 2;
        const pairSide = pair % 2 === 0 ? -1 : 1;
        const phase = gait + (pair % 2 === 0 ? 0 : Math.PI) + (side < 0 ? Math.PI : 0);
        const stride = Math.sin(phase) * step;
        const lift = Math.max(0, Math.cos(phase)) * step * 0.44;
        const startX = fore ? 0.2 : -2.7;
        const startY = side * (pairSide === -1 ? 2 : 3.7);
        const kneeX = (fore ? 5.2 : -6.2) + stride * 0.35;
        const kneeY = side * (8.5 + (pair % 2) * 1.1) - lift * 0.45;
        const footX = (fore ? 10.6 : -12.4) + stride;
        const footY = side * (13.5 + (pair % 2) * 1.4) - lift;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(kneeX, kneeY);
        context.lineTo(footX, footY);
        context.stroke();
        context.fillStyle = '#b7c8e0';
        context.beginPath();
        context.arc(kneeX, kneeY, 0.7, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = 'rgba(193, 209, 231, .54)';
        context.lineWidth = 0.6;
        context.beginPath();
        context.moveTo(footX, footY);
        context.lineTo(footX + (fore ? 2.4 : -2.4), footY + side * 1.15);
        context.stroke();
      }

      context.fillStyle = '#29364a';
      context.strokeStyle = 'rgba(213, 225, 243, .82)';
      context.lineWidth = 0.8;
      context.beginPath();
      context.ellipse(-3.2, 0.15, 5.1, 4.4, -0.12, 0, Math.PI * 2);
      context.fill();
      context.stroke();

      const abdomenGradient = context.createRadialGradient(-7.3, -3.2, 0.4, -5.8, -1.2, 8.5);
      abdomenGradient.addColorStop(0, '#d7e2f1');
      abdomenGradient.addColorStop(0.18, '#7f94b1');
      abdomenGradient.addColorStop(0.68, '#35445b');
      abdomenGradient.addColorStop(1, '#1b2637');
      context.fillStyle = abdomenGradient;
      context.strokeStyle = 'rgba(211, 224, 242, .85)';
      context.lineWidth = 0.85;
      context.beginPath();
      context.ellipse(-7, -0.45, 7.25, 5.25, -0.12, 0, Math.PI * 2);
      context.fill();
      context.stroke();

      context.strokeStyle = 'rgba(221, 231, 245, .45)';
      context.lineWidth = 0.55;
      context.beginPath();
      context.ellipse(-7, -0.45, 4.6, 3.4, -0.12, Math.PI * 1.1, Math.PI * 1.85);
      context.stroke();

      context.fillStyle = '#a8bbd6';
      context.beginPath();
      context.ellipse(2.4, 0, 3.25, 3.1, 0, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = 'rgba(223, 233, 247, .9)';
      context.lineWidth = 0.7;
      context.beginPath();
      context.moveTo(4.4, 2);
      context.quadraticCurveTo(6.6, 3.6, 5.3, 5);
      context.moveTo(2.8, 2.3);
      context.quadraticCurveTo(1.7, 4.2, 2.2, 5.3);
      context.stroke();

      context.fillStyle = '#111722';
      context.beginPath();
      context.arc(4.15, -1.55, 0.72, 0, Math.PI * 2);
      context.arc(4.15, 1.1, 0.62, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };
    const render = (time) => {
      const delta = previousFrame ? Math.min(time - previousFrame, 32) : 16.67;
      previousFrame = time;
      const previousX = pointer.x;
      const previousY = pointer.y;
      const follow = 1 - Math.pow(0.76, delta / 16.67);
      pointer.x += (pointer.targetX - pointer.x) * follow;
      pointer.y += (pointer.targetY - pointer.y) * follow;
      const velocityX = (pointer.x - previousX) / Math.max(delta, 1);
      const velocityY = (pointer.y - previousY) / Math.max(delta, 1);
      const speed = Math.hypot(velocityX, velocityY);
      const distance = Math.hypot(pointer.x - previousX, pointer.y - previousY);
      pointer.speed += (speed - pointer.speed) * 0.32;
      if (pointer.speed > 0.025) {
        const targetAngle = Math.atan2(velocityY, velocityX);
        const angleDelta = Math.atan2(Math.sin(targetAngle - pointer.angle), Math.cos(targetAngle - pointer.angle));
        pointer.angle += angleDelta * Math.min(1, delta * 0.018);
      }
      pointer.gait += distance * 0.065;
      const last = trail[trail.length - 1];
      if (pointer.active && time - lastTrailPoint > 28 &&
        (!last || Math.hypot(pointer.x - last.x, pointer.y - last.y) > 3)) {
        trail.push({ x: pointer.x, y: pointer.y, life: 1 });
        lastTrailPoint = time;
      }

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let index = trail.length - 1; index >= 0; index -= 1) {
        trail[index].life -= delta * 0.00072;
        if (trail[index].life <= 0) trail.splice(index, 1);
      }
      if (trail.length > 1) {
        for (let index = 0; index < trail.length - 1; index += 1) {
          const point = trail[index];
          const next = trail[index + 1];
          context.strokeStyle = `rgba(166, 190, 222, ${point.life * 0.25})`;
          context.lineWidth = 0.45 + point.life * 0.22;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(next.x, next.y);
          context.stroke();
        }
      }
      const opacity = pointer.active ? 1 : Math.max(0, (trail[trail.length - 1]?.life ?? 0) * 0.8);
      if (opacity > 0) {
        context.globalAlpha = opacity;
        const scale = pointer.hover ? 1.3 : 1;
        if (pointer.hover) {
          context.strokeStyle = 'rgba(177, 201, 231, .32)';
          context.lineWidth = 0.7;
          context.beginPath();
          context.arc(pointer.x, pointer.y, 19, 0, Math.PI * 2);
          context.stroke();
        }
        drawSpider(pointer.x, pointer.y, scale, pointer.angle, pointer.speed, pointer.gait);
        context.globalAlpha = 1;
      }
      raf = requestAnimationFrame(render);
    };

    resize();
    document.documentElement.classList.add('spider-cursor-enabled');
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerout', pointerOut);
    window.addEventListener('blur', leave);
    raf = requestAnimationFrame(render);
    return () => {
      document.documentElement.classList.remove('spider-cursor-enabled');
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerout', pointerOut);
      window.removeEventListener('blur', leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas className="custom-cursor spider-cursor" ref={cursorRef} aria-hidden="true" />;
}

function MagneticButton({ children, className = '', ...props }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (
      !button ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return undefined;

    const move = (event) => {
      const bounds = button.getBoundingClientRect();
      const dx = event.clientX - bounds.left - bounds.width / 2;
      const dy = event.clientY - bounds.top - bounds.height / 2;
      gsap.to(button, {
        x: dx * 0.13,
        y: dy * 0.13,
        duration: 0.35,
        ease: 'power3.out',
      });
    };
    const reset = () =>
      gsap.to(button, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.4)' });

    button.addEventListener('pointermove', move);
    button.addEventListener('pointerleave', reset);
    return () => {
      button.removeEventListener('pointermove', move);
      button.removeEventListener('pointerleave', reset);
      gsap.killTweensOf(button);
    };
  }, []);

  return (
    <a ref={buttonRef} className={className} {...props}>
      {children}
    </a>
  );
}

function Header({ menuOpen, setMenuOpen, language, setLanguage, t }) {
  const navigate = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#top"
        onClick={(event) => navigate(event, '#top')}
        aria-label={t.homeLabel}
      >
        <span className="wordmark-mark">BY<span> /</span></span>
        <span className="wordmark-label">Creative<br />web developer</span>
      </a>
      <div className="header-note"><span className="availability-dot" /> {t.availability}</div>
      <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label={t.navLabel}>
        {navItems.map(([key, href], index) => (
          <a key={href} href={href} onClick={(event) => navigate(event, href)}>
            <span className="nav-index">0{index + 1}</span>{t.nav[key]}
          </a>
        ))}
        <a
          className="nav-mobile-social"
          href={telegramUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.startConversation} <ArrowUpRight size={16} />
        </a>
      </nav>
      <div className="language-toggle" role="group" aria-label={t.languageLabel}>
        {['uz', 'en'].map((option) => (
          <button
            type="button"
            key={option}
            aria-pressed={language === option}
            onClick={() => setLanguage(option)}
          >
            {option.toUpperCase()}
          </button>
        ))}
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? t.close : t.menu}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? t.close : t.menu}</span>
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </header>
  );
}

function Hero({ ready, reduced, t }) {
  const heroRef = useRef(null);
  const objectRef = useRef(null);

  useEffect(() => {
    if (!ready || reduced || !heroRef.current) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line-inner, .hero-nameplate',
        { yPercent: 112, rotate: 2, opacity: 0 },
        { yPercent: 0, rotate: 0, opacity: 1, duration: 1.05, stagger: 0.12, ease: 'power4.out', delay: 0.1 },
      );
      gsap.fromTo(
        '.hero-aside, .hero-bottom > *',
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.65, ease: 'power2.out' },
      );
      gsap.to('.hero-orb', {
        yPercent: -18,
        rotate: 14,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });
      gsap.to('.hero-object-core', {
        rotateY: 28,
        rotateX: -18,
        scale: 0.86,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
      });
    }, heroRef);

    const hero = heroRef.current;
    const object = objectRef.current;
    if (object && !window.matchMedia('(pointer: coarse)').matches) {
      const parallax = { x: 0, y: 0, rotateX: 0, rotateY: 0 };
      const renderParallax = () => {
        object.style.transform = `translate3d(${parallax.x}px, ${parallax.y}px, 0) rotateX(${parallax.rotateX}deg) rotateY(${parallax.rotateY}deg)`;
      };
      const moveX = gsap.quickTo(parallax, 'x', { duration: 0.8, ease: 'power3.out', onUpdate: renderParallax });
      const moveY = gsap.quickTo(parallax, 'y', { duration: 0.8, ease: 'power3.out', onUpdate: renderParallax });
      const rotateY = gsap.quickTo(parallax, 'rotateY', { duration: 0.8, ease: 'power3.out', onUpdate: renderParallax });
      const rotateX = gsap.quickTo(parallax, 'rotateX', { duration: 0.8, ease: 'power3.out', onUpdate: renderParallax });
      const onMove = (event) => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        moveX(x * 18);
        moveY(y * 14);
        rotateY(x * 10);
        rotateX(y * -8);
      };
      const onLeave = () => {
        moveX(0);
        moveY(0);
        rotateY(0);
        rotateX(0);
      };
      hero.addEventListener('pointermove', onMove, { passive: true });
      hero.addEventListener('pointerleave', onLeave);
      return () => {
        hero.removeEventListener('pointermove', onMove);
        hero.removeEventListener('pointerleave', onLeave);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, [ready, reduced]);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true">
        <div className="hero-object-parallax" ref={objectRef}>
          <div className="hero-object-core">
            <div className="object-latitude object-latitude-one" />
            <div className="object-latitude object-latitude-two" />
            <div className="object-longitude" />
            <div className="object-highlight" />
          </div>
          <div className="orb-ring orb-ring-one" />
          <div className="orb-ring orb-ring-two" />
          <span className="orb-caption">{t.hero.object.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span>
        </div>
      </div>
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-dash" /> {t.hero.eyebrow}</p>
        <h1 className="hero-title">
          <span className="hero-line"><span className="hero-line-inner">I BUILD</span></span>
          <span className="hero-line"><span className="hero-line-inner">DIGITAL</span></span>
          <span className="hero-line hero-title-third"><span className="hero-line-inner">EXPERIENCES<span className="hero-period">.</span></span></span>
        </h1>
        <div className="hero-nameplate">
          <span>BEHRUZ YOLDOSHEV</span>
          <span>CREATIVE WEB DEVELOPER</span>
        </div>
      </div>
      <div className="hero-aside">
        <span className="hero-aside-index">01 / 06</span>
        <p>{t.hero.aside.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</p>
      </div>
      <div className="hero-bottom">
        <div className="hero-location"><span className="eyebrow-dash" /> {t.hero.location}</div>
        <a className="scroll-cue" href="#about" onClick={(event) => {
          event.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span>{t.hero.scroll}</span><span className="scroll-cue-icon"><ArrowDown size={15} /></span>
        </a>
        <span className="hero-index">01 — 06</span>
      </div>
      <div className="hero-side-label" aria-hidden="true">Creative web developer<br />Behruz Yoldoshev</div>
    </section>
  );
}

function About({ t }) {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      gsap.from('.about-copy-line', {
        yPercent: 105,
        stagger: 0.09,
        duration: 0.95,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.about-headline', start: 'top 78%' },
      });
      gsap.from('.stat-value[data-count]', {
        textContent: 0,
        duration: 1.5,
        ease: 'power1.out',
        snap: { textContent: 1 },
        stagger: 0.18,
        scrollTrigger: { trigger: '.about-stats', start: 'top 85%' },
      });
      gsap.from('.about-art', {
        scale: 0.92,
        rotate: 4,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-art', start: 'top 82%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="about section-pad" id="about" ref={sectionRef}>
      <div className="section-topline">
        <span className="eyebrow"><span className="section-marker">01</span> {t.about.eyebrow}</span>
        <span className="eyebrow section-coordinate">41°18' N / 69°16' E</span>
      </div>
      <div className="about-layout">
        <div className="about-headline-wrap">
          <h2 className="about-headline">
            {t.about.headline.map((line, index) => (
              <span className="about-copy-line" key={line}>
                <span>{index === t.about.headline.length - 1 ? <em>{line}</em> : line}</span>
              </span>
            ))}
          </h2>
          <div className="about-meta">
            <div className="about-stats">
              <div><span className="stat-value" data-count="4">4</span><span className="stat-unit">+</span><span className="stat-label">{t.about.years}</span></div>
              <div><span className="stat-value" data-count="32">32</span><span className="stat-unit">+</span><span className="stat-label">{t.about.projects}</span></div>
              <div><span className="stat-value">UZ</span><span className="stat-unit" />
                <span className="stat-label">{t.about.countries}</span></div>
            </div>
            <p className="about-body">{t.about.body}</p>
          </div>
        </div>
        <div className="about-art">
          <img className="about-art-image" src={behruzPortrait} alt={t.about.imageAlt} />
          <div className="about-art-stamp"><span>{t.about.stamp.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span><Asterisk size={23} strokeWidth={1} /></div>
          <span className="about-art-caption eyebrow">{t.about.caption}</span>
          <span className="about-art-number">[ 01 ]</span>
        </div>
      </div>
      <div className="about-bottomline">
        <span>{t.about.bottomLeft}</span>
        <span className="about-bottom-star">✳</span>
        <span>{t.about.bottomRight}</span>
      </div>
    </section>
  );
}

function Values({ t }) {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      gsap.from('.value-item', {
        y: 30,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.values-grid', start: 'top 78%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="values section-pad" id="values" ref={sectionRef}>
      <div className="section-topline">
        <span className="eyebrow"><span className="section-marker">02</span> {t.values.eyebrow}</span>
        <span className="eyebrow">{t.values.note}</span>
      </div>
      <div className="values-heading">
        <h2>{t.values.title[0]}<br /><em>{t.values.title[1]}</em></h2>
        <p>{t.values.intro}</p>
      </div>
      <div className="values-grid">
        {t.values.items.map(([number, title, detail]) => (
          <article className="value-item" key={number}>
            <span className="value-number">{number}</span>
            <h3>{title}<span>.</span></h3>
            <p>{detail}</p>
            <span className="value-mark" aria-hidden="true">✳</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceArtwork({ type }) {
  return (
    <div className={`service-art service-art-${type}`} aria-hidden="true">
      {type === 'web' && <><div className="art-window"><i /><i /><i /><b /><b /><b /></div><div className="art-sun" /></>}
      {type === 'shop' && <><div className="art-bag"><span>FORM<br />& FIELD</span></div><div className="art-orbit" /></>}
      {type === 'landing' && <><span className="art-landing-type">THE<br />GOOD<br /><em>THING</em></span><i className="art-landing-line" /></>}
      {type === 'restaurant' && <><span className="art-menu-word">MENÙ</span><span className="art-menu-dot" /><i className="art-menu-rule" /></>}
      {type === 'redesign' && <><span className="art-redesign-old">before</span><ArrowRight className="art-redesign-arrow" /><span className="art-redesign-new">after</span></>}
      {type === 'ai' && <><div className="art-ai-orbit art-ai-one" /><div className="art-ai-orbit art-ai-two" /><Asterisk size={35} strokeWidth={1} /></>}
    </div>
  );
}

function Services({ t }) {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const localizedServices = services.map((service, index) => ({
    ...service,
    name: t.services.items[index][0],
    detail: t.services.items[index][1],
  }));

  useEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      gsap.from('.service-row', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.service-list', start: 'top 78%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="services section-pad" id="services" ref={sectionRef}>
      <div className="section-topline">
        <span className="eyebrow"><span className="section-marker">03</span> {t.services.eyebrow}</span>
        <span className="eyebrow">{t.services.preview}</span>
      </div>
      <div className="services-heading">
        <h2>{t.services.title[0]}<br /><em>{t.services.title[1]}</em></h2>
        <p>{t.services.intro}</p>
      </div>
      <div className="services-interactive">
        <div className="service-list">
          {localizedServices.map((service, index) => (
            <button
              className={`service-row ${active === index ? 'is-active' : ''}`}
              key={service.number}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              type="button"
              aria-pressed={active === index}
            >
              <span className="service-number">{service.number}</span>
              <span className="service-name">{service.name}</span>
              <span className="service-detail">{service.detail}</span>
              <span className="service-arrow"><ArrowUpRight size={19} /></span>
            </button>
          ))}
        </div>
        <div className="service-preview" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              className="service-preview-inner"
              key={localizedServices[active].type}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ServiceArtwork type={localizedServices[active].type} />
              <span className="preview-caption eyebrow">{localizedServices[active].number} / {t.services.preview}</span>
            </motion.div>
          </AnimatePresence>
          <span className="preview-index" aria-hidden="true">{localizedServices[active].number}</span>
        </div>
      </div>
      <div className="services-foot">
        <span>{t.services.question}</span>
        <a href="#contact" onClick={(event) => {
          event.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}>{t.services.link} <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose, t }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className="modal-close" onClick={onClose} type="button" aria-label={t.closeProject}>
          <X size={20} />
        </button>
        <div className={`modal-image project-image-${project.tone}`}>
          <img src={project.image} alt={project.alt} />
          <span className="modal-image-index">{t.work.eyebrow} / {project.number}</span>
        </div>
        <div className="modal-content">
          <div>
            <span className="eyebrow">{project.category} / {project.year}</span>
            <h2 id="modal-title">{project.name}<span>.</span></h2>
            <p>{project.description}</p>
          </div>
          <div className="modal-aside">
            <span className="eyebrow">{t.modal.work}</span>
            <p>{project.services}</p>
            <a href={telegramUrl} target="_blank" rel="noreferrer">
              {t.work.projectPrompt} <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function Projects({ onSelect, language, t }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add('(min-width: 701px)', () => {
        const cards = gsap.utils.toArray('.project-card');
        const horizontalTween = gsap.to(trackRef.current, {
          id: 'project-horizontal',
          x: () => -(trackRef.current.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${trackRef.current.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        cards.forEach((card) => {
          const image = card.querySelector('.project-image img');
          gsap.fromTo(
            image,
            { scale: 1.16 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            },
          );
        });
      });
      return () => media.revert();
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="work" id="work" ref={sectionRef}>
      <div className="work-header">
        <div>
          <span className="eyebrow"><span className="section-marker">04</span> {t.work.eyebrow}</span>
          <h2>{t.work.title[0]}<br /><em>{t.work.title[1]}</em></h2>
        </div>
        <div className="work-header-aside">
          <span>{t.work.aside}</span>
          <span className="work-scroll-note"><ArrowLeft size={14} /> {t.work.drag} <ArrowRight size={14} /></span>
        </div>
      </div>
      <div className="project-track-clip">
        <div className="project-track" ref={trackRef}>
          {projects.map((project, index) => {
            const localizedProject = { ...project, ...projectTranslations[language][index] };
            return (
            <button
              key={project.number}
              type="button"
              className={`project-card project-image-${project.tone}`}
              onClick={() => onSelect(localizedProject)}
              aria-label={`${t.work.view}: ${project.name}`}
            >
              <div className="project-image">
                <img src={project.image} alt={localizedProject.alt} loading="eager" decoding="async" />
                <span className="project-image-wash" />
                <span className="project-open"><ArrowUpRight size={21} /></span>
                <span className="project-image-label">BY / {project.number}</span>
              </div>
              <span className="project-info">
                <span><span className="project-name">{project.name}</span><span className="project-category">{localizedProject.category}</span></span>
                <span className="project-year">{project.year}<ArrowUpRight size={15} /></span>
              </span>
            </button>
          );
          })}
          <div className="project-endnote">
            <span className="endnote-symbol">✳</span>
            <p>{t.work.end[0]}<br />{t.work.end[1]}</p>
            <a href="#contact" onClick={(event) => {
              event.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>{t.work.talk} <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </div>
      <div className="work-footer">
        <span>{t.work.footer}</span>
        <span>{t.work.scroll} <ArrowDown size={14} /></span>
      </div>
    </section>
  );
}

function Process({ t }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add('(min-width: 701px)', () => {
        const endDistance = () => trackRef.current.scrollWidth - window.innerWidth + 96;
        gsap.to(trackRef.current, {
          x: () => -endDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${endDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        gsap.from('.process-progress-fill', {
          scaleX: 0,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${endDistance()}`,
            scrub: true,
          },
        });
      });
      return () => media.revert();
    }, sectionRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="process" id="process" ref={sectionRef}>
      <div className="process-intro">
        <span className="eyebrow"><span className="section-marker">05</span> {t.process.eyebrow}</span>
        <h2>{t.process.title[0]}<br /><em>{t.process.title[1]}</em></h2>
        <p>{t.process.intro}</p>
        <span className="process-cue">{t.process.cue} <ArrowRight size={14} /></span>
      </div>
      <div className="process-track" ref={trackRef}>
        {t.process.steps.map(([title, text], index) => (
          <article className="process-step" key={processSteps[index].number}>
            <div className="process-step-top"><span>{processSteps[index].number}</span><span>{t.process.labels[index]}</span></div>
            <div className="process-step-mark"><span>{index === 0 ? <Asterisk size={34} strokeWidth={1} /> : <Plus size={27} strokeWidth={1} />}</span></div>
            <h3>{title}<span>.</span></h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="process-progress">
        <div className="process-progress-rail"><span className="process-progress-fill" /></div>
        <span>01</span><span>05</span>
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <footer className="contact" id="contact">
      <div className="contact-top section-pad">
        <div className="section-topline">
          <span className="eyebrow"><span className="section-marker">06</span> {t.contact.eyebrow}</span>
          <span className="eyebrow">{t.contact.booking}</span>
        </div>
        <div className="contact-main">
          <div className="contact-heading">
            <span className="eyebrow contact-kicker">{t.contact.kicker}</span>
            <h2>{t.contact.title[0]}<br />{t.contact.title[1]} <em>{t.contact.title[2]}</em></h2>
          </div>
          <div className="contact-cta-wrap">
            <MagneticButton className="contact-cta" href={telegramUrl} target="_blank" rel="noreferrer">
              <span>{t.contact.button.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span>
              <span className="contact-cta-icon"><ArrowUpRight size={22} /></span>
            </MagneticButton>
            <span className="contact-cta-caption">{t.contact.caption}</span>
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-email-wrap">
            <span className="eyebrow">{t.contact.emailLabel}</span>
            <a className="contact-email" href={telegramUrl} target="_blank" rel="noreferrer">
              @Yoldoshev_Bekhruz <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="social-links">
            <span className="eyebrow">{t.contact.socials}</span>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
          </div>
          <div className="contact-time">
            <span className="eyebrow">{t.contact.time}</span>
            <LiveClock />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a className="footer-wordmark" href="#top" onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>BY<span> /</span></a>
        <span>{t.contact.footer}</span>
        <span>© Behruz Yoldoshev 2026</span>
        <a href="#top" className="back-to-top" onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>{t.contact.back} <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}

function LiveClock() {
  const [time, setTime] = useState(() =>
    new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Tashkent',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date()),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Tashkent',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date()),
      );
    }, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return <span className="clock-value">{time} <span>UZT</span></span>;
}

function shouldShowIntro() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return window.sessionStorage.getItem('behruz-intro-seen') !== 'true';
  } catch {
    return false;
  }
}

function IntroOverlay({ onSkip, t }) {
  const [leaving, setLeaving] = useState(false);
  const skipRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('intro-active');
    skipRef.current?.focus({ preventScroll: true });
    const revealTimer = window.setTimeout(() => setLeaving(true), 1850);
    const exitTimer = window.setTimeout(onSkip, 2380);
    return () => {
      document.body.classList.remove('intro-active');
      window.clearTimeout(revealTimer);
      window.clearTimeout(exitTimer);
    };
  }, [onSkip]);

  return (
    <div
      className={`intro-overlay ${leaving ? 'intro-leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={t.intro.dialog}
    >
      <svg className="intro-web" viewBox="0 0 360 360" aria-hidden="true">
        <circle cx="180" cy="180" r="52" />
        <circle cx="180" cy="180" r="94" />
        <circle cx="180" cy="180" r="136" />
        <circle cx="180" cy="180" r="169" />
        <path d="M180 11v338M11 180h338M60.5 60.5l239 239M299.5 60.5l-239 239M115 20l130 320M340 115L20 245M245 20 115 340M20 115l320 130" />
        <path className="intro-web-detail" d="M180 84l25 16 31-4 12 27 29 13-4 31 16 25-16 25 4 31-29 13-12 27-31-4-25 16-25-16-31 4-12-27-29-13 4-31-16-25 16-25-4-31 29-13 12-27 31 4z" />
      </svg>
      <div className="intro-spider" aria-hidden="true"><i /><b /></div>
      <div className="intro-copy">
        <span className="intro-overline">{t.intro.overline}</span>
        <p className="intro-name">BEHRUZ YOLDOSHEV</p>
        <p className="intro-title">CREATIVE WEB DEVELOPER</p>
      </div>
      <span className="intro-coordinate">{t.intro.coordinate}</span>
      <button className="intro-skip" type="button" ref={skipRef} onClick={onSkip}>{t.intro.skip} <ArrowUpRight size={14} /></button>
    </div>
  );
}

function App() {
  const reduced = useReducedMotion();
  const [introVisible, setIntroVisible] = useState(shouldShowIntro);
  const [ready, setReady] = useState(() => !shouldShowIntro());
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProjectNumber, setSelectedProjectNumber] = useState(null);
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = window.localStorage.getItem('behruz-language');
      return savedLanguage === 'en' ? 'en' : 'uz';
    } catch {
      return 'uz';
    }
  });
  const t = translations[language];
  const selectedProject = projects.find(({ number }) => number === selectedProjectNumber);

  const finishIntro = React.useCallback(() => {
    try {
      window.sessionStorage.setItem('behruz-intro-seen', 'true');
    } catch {
      // The intro remains skippable when session storage is unavailable.
    }
    setIntroVisible(false);
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem('behruz-language', language);
    } catch {
      // The language switch remains available for the current page view.
    }
  }, [language]);

  useEffect(() => {
    if (reduced && introVisible) finishIntro();
  }, [finishIntro, introVisible, reduced]);

  useEffect(() => {
    if (reduced) return undefined;
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        '--scroll-progress',
        `${max > 0 ? (window.scrollY / max) * 100 : 0}%`,
      );
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, [reduced]);

  useEffect(() => {
    if (!ready) return undefined;
    ScrollTrigger.refresh();
    return undefined;
  }, [language, ready]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      {introVisible && <IntroOverlay onSkip={finishIntro} t={t} />}
      <div className="portfolio-shell" aria-hidden={introVisible} inert={introVisible ? '' : undefined}>
        <div className="scroll-progress" aria-hidden="true" />
        <Cursor />
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          language={language}
          setLanguage={setLanguage}
          t={t}
        />
        <main>
          <Hero ready={ready} reduced={reduced} t={t} />
          <About t={t} />
          <Values t={t} />
          <Services t={t} />
          <Projects language={language} t={t} onSelect={(project) => setSelectedProjectNumber(project.number)} />
          <Process t={t} />
        </main>
        <Contact t={t} />
        <ProjectModal
          project={selectedProject ? { ...selectedProject, ...projectTranslations[language][Number(selectedProject.number) - 1] } : null}
          onClose={() => setSelectedProjectNumber(null)}
          t={t}
        />
      </div>
    </>
  );
}

export default App;
