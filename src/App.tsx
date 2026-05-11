/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Building2, 
  Globe, 
  Cpu, 
  Stethoscope, 
  Cloud, 
  TrendingUp, 
  ShoppingBag, 
  Code2, 
  Network, 
  Layers,
  ArrowUpRight,
  Github,
  Mail,
  Linkedin
} from "lucide-react";

const COMPANIES = [
  {
    name: "Harplabs Ltd",
    desc: "Web3 ve AI inovasyon merkezi. Londra ile Ankara arasında teknoloji köprüsü.",
    tags: ["LONDRA", "WEB3", "AI"],
    icon: Cpu,
    location: "London / Ankara"
  },
  {
    name: "Harp Global Technology LLC",
    desc: "Uçak tasarımı ve AI otomasyon projeleri için finansal altyapı.",
    tags: ["ÖDEME", "AI", "FINTECH"],
    icon: Building2,
    location: "Global"
  },
  {
    name: "Birdoktorasoralim",
    desc: "Sertifikalı tıp uzmanlarına anında erişim sağlayan HealthTech platformu.",
    tags: ["SAĞLIK", "B2C", "SAAS"],
    icon: Stethoscope,
    location: "Turkey"
  },
  {
    name: "HostLabs",
    desc: "Küresel teslimat için ölçeklenebilir bulut ve uç CDN çözümleri.",
    tags: ["BULUT", "CDN", "ALTYAPI"],
    icon: Cloud,
    location: "Global"
  },
  {
    name: "Finansmedya.net",
    desc: "Ekonomi, finans ve yeni teknolojilere odaklanan dijital medya.",
    tags: ["FİNANS", "HABER", "MEDYA"],
    icon: TrendingUp,
    location: "Turkey"
  },
  {
    name: "Vitanica.tr",
    desc: "Modern sağlık ve bilimsel temelli zindelik odaklı premium takviye edici gıda markası.",
    tags: ["SAĞLIK", "PREMIUM", "WELLNESS"],
    icon: ShoppingBag,
    location: "Turkey"
  },
  {
    name: "Vitaminmarketi.net",
    desc: "Türkiye'nin sağlık takviyeleri ve zindelik ürünleri konusundaki öncü e-ticaret platformu.",
    tags: ["E-TİCARET", "WELLNESS"],
    icon: ShoppingBag,
    location: "Turkey"
  }
];

const SKILLS = [
  {
    category: "Full Stack",
    items: ["React", "Next JS", "Vue.js", "Node.js", "Express", "PHP", "Laravel", "Codeigniter"],
    icon: Code2
  },
  {
    category: "Diller",
    items: ["Python", "PHP", "JavaScript", "TypeScript", "C++ (aşina)"],
    icon: Layers
  },
  {
    category: "Ağ & Altyapı",
    items: ["TCP/IP", "Güvenlik Duvarı", "DNS/DHCP", "VPN", "Cisco/MikroTik", "Linux Ağ Yönetimi"],
    icon: Network
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img 
            src="/2.png" 
            alt="Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex gap-8 text-xs font-mono tracking-wider opacity-60">
            <a href="#ventures" className="hover:opacity-100 transition-opacity">GİRİŞİMLER</a>
            <a href="#expertise" className="hover:opacity-100 transition-opacity">UZMANLIK</a>
            <a href="#vision" className="hover:opacity-100 transition-opacity">VİZYON</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
          {/* Background Image Wrapper */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/1.jpeg" 
              alt="Muhammed Enes Yellice Background" 
              className="w-full h-full object-cover opacity-95 grayscale-0"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent hidden md:block" />
          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 w-full pt-20">
            <div className="flex-1 w-full text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="label-mono text-emerald-500 font-bold mb-6 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  YAZILIM GELİŞTİRİCİ & GİRİŞİMCİ
                </div>
                <h1 className="title-massive mb-8">
                  <span className="text-[0.9em]">Muhammed Enes</span> <br />
                  <span className="text-white/40 text-[0.85em]">Yellice</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed font-light mb-10 mx-auto md:mx-0">
                  Yazılım yatırımları ve yüksek etkili teknoloji girişimleri aracılığıyla stratejik büyümeye öncelik veriyorum. 
                  Londra ve Ankara merkezli 9+ yıllık mühendislik deneyimi.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button className="px-8 py-4 bg-emerald-500 text-black font-bold text-sm tracking-widest transition-transform hover:scale-105 active:scale-95">
                    İLETİŞİME GEÇ
                  </button>
                  <div className="flex gap-4">
                    <button className="p-4 border border-white/20 bg-black/20 hover:border-white/40 backdrop-blur-sm transition-colors">
                      <Linkedin size={20} />
                    </button>
                    <button className="p-4 border border-white/20 bg-black/20 hover:border-white/40 backdrop-blur-sm transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="hidden md:block flex-1 w-full" />
          </div>
        </section>

        {/* Philosophy Intro */}
        <section id="vision" className="py-20 px-6 border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl font-light leading-snug">
              Her satır kod hesaplanmış bir yatırımdır. Her proje <span className="italic">yüksek riskli bir girişimdir</span>.
            </h2>
            <div className="space-y-6 text-white/50 leading-relaxed">
              <p>
                Yaklaşımım yalın, ürün odaklı ve sürdürülebilir büyüme için tasarlanmıştır. 
                Gösteriş amaçlı metrikler yerine değer ve ölçeğe odaklanıyorum.
              </p>
              <div className="flex gap-12 font-mono text-sm pt-4">
                <div>
                  <div className="text-emerald-500 font-bold mb-1">09+</div>
                  <div className="opacity-50">Yıllık Deneyim</div>
                </div>
                <div>
                  <div className="text-emerald-500 font-bold mb-1">07+</div>
                  <div className="opacity-50">Kurulan Girişim</div>
                </div>
                <div>
                  <div className="text-emerald-500 font-bold mb-1">KÜRESEL</div>
                  <div className="opacity-50">Vizyon</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ventures Grid */}
        <section id="ventures" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <div className="label-mono text-emerald-500 mb-4">PORTFOLYO</div>
                <h2 className="text-5xl font-bold tracking-tight">Aktif Girişimler</h2>
              </div>
              <div className="hidden md:block h-px flex-1 mx-12 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANIES.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="venture-card glass p-8 flex flex-col items-start group"
                >
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 group-hover:text-emerald-500 transition-all">
                    <company.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="text-2xl font-bold">{company.name}</h3>
                       <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-40 transition-opacity" />
                    </div>
                    <div className="flex gap-2 mb-4">
                      {company.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono tracking-widest bg-white/5 px-2 py-1 opacity-50 group-hover:opacity-100 transition-opacity">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {company.desc}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono tracking-widest opacity-30 group-hover:opacity-60">
                    LOC: {company.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise / Skills */}
        <section id="expertise" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <div className="label-mono text-emerald-500 mb-4">TEKNOLOJİ YIĞINI</div>
              <h2 className="text-4xl font-bold mb-8">Teknik Uzmanlık</h2>
              <p className="text-white/50 leading-relaxed">
                Sistem mimarisi ve ağ optimizasyonundan yüksek performanslı kullanıcı arayüzlerine kadar tam spektrumlu mühendislik.
              </p>
            </div>
            
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 split-list">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-emerald-500">
                      <skillGroup.icon size={16} />
                    </div>
                    <h4 className="text-lg font-bold">{skillGroup.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="flex items-center gap-4 text-sm text-white/60 font-mono group">
                        <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-emerald-500 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Ticker or Footnote */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div>
              <h3 className="label-mono mb-6">Profesyonel Deneyim</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-emerald-500 pl-6 py-1">
                  <div className="text-xl font-bold">HARP GLOBAL TECHNOLOGY LLC</div>
                  <div className="text-sm opacity-50 mb-4">Kurucu & Full Stack Geliştirici • 2020 — Günümüz</div>
                  <p className="text-white/50 text-sm max-w-xl">
                    Web barındırma, bulut çözümleri ve yazılım geliştirme konularında uzmanlaşmış; 
                    özel API mimarileri ve kritik güvenlik önlemleriyle ölçeklenebilir uygulamalar tasarlıyorum.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-end text-right">
              <div className="label-mono mb-4">BANA ULAŞIN</div>
              <a href="mailto:css@enesyellice.tr" className="text-2xl md:text-3xl font-light hover:text-emerald-500 transition-colors underline underline-offset-8">
                css@enesyellice.tr
              </a>
              <div className="mt-8 flex justify-end gap-6">
                <a href="#" className="label-mono hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="label-mono hover:text-white transition-colors">Twitter</a>
                <a href="#" className="label-mono hover:text-white transition-colors">Github</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-[10px] font-mono tracking-widest opacity-20">
          © 2024 MUHAMMED ENES YELLICE • KOD İLE ÖLÇEKLENDİRİN
        </p>
      </footer>
    </div>
  );
}
