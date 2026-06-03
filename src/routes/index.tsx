import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Camera, Film, Share2, Sparkles, Globe, Video,
  Instagram, MessageCircle, Mail, ArrowRight, Target, Compass, Trophy,
} from "lucide-react";
import { VideoCard } from "@/components/VideoCard";
import { Reveal } from "@/components/Reveal";

import manos from "@/assets/manos.asset.json";
import maes from "@/assets/maes.asset.json";
import flacidez from "@/assets/flacidez.asset.json";
import inss from "@/assets/inss.asset.json";
import internet from "@/assets/internet.asset.json";
import churrascaria from "@/assets/churrascaria.asset.json";
import hero from "@/assets/hero.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VY Mídia — Estratégia. Criação. Resultado." },
      { name: "description", content: "Agência premium de estratégia digital, produção de conteúdo e videomaker. Posicionamento de marcas com criatividade e resultado." },
      { property: "og:title", content: "VY Mídia — Estratégia. Criação. Resultado." },
      { property: "og:description", content: "Produção de conteúdo, branding e posicionamento digital para marcas que crescem com estratégia." },
      { property: "og:image", content: hero.url },
    ],
  }),
  component: Index,
});

const CATEGORIES = ["Todos", "Restaurantes", "Empresas", "Imobiliário", "Marcas Pessoais", "Eventos"] as const;
type Cat = typeof CATEGORIES[number];

const PORTFOLIO = [
  { src: manos.url, title: "Mano's Gastrobar", client: "Gastronomia • Experiência", category: "Restaurantes" as Cat },
  { src: churrascaria.url, title: "Churrascaria 100Tenário", client: "Tradição • Gastronomia", category: "Restaurantes" as Cat },
  { src: flacidez.url, title: "Estética & Bem-Estar", client: "Clínica de Estética", category: "Empresas" as Cat },
  { src: inss.url, title: "Direito Previdenciário", client: "Advocacia • INSS", category: "Marcas Pessoais" as Cat },
  { src: internet.url, title: "Crimes Digitais", client: "Advocacia Especializada", category: "Marcas Pessoais" as Cat },
  { src: maes.url, title: "Campanha Dia das Mães", client: "Datas Comemorativas", category: "Eventos" as Cat },
];

const SERVICES = [
  { icon: Camera, title: "Produção de Conteúdo", desc: "Conteúdo estratégico que conecta marca e audiência com propósito." },
  { icon: Video, title: "Captação Profissional", desc: "Equipamento de alto padrão e direção visual para cada cena." },
  { icon: Film, title: "Edição de Vídeos", desc: "Edição cinematográfica com ritmo, narrativa e identidade visual." },
  { icon: Share2, title: "Social Media", desc: "Gestão de presença digital com calendário editorial sob medida." },
  { icon: Sparkles, title: "Branding", desc: "Construção de marca: posicionamento, identidade e voz consistente." },
  { icon: Globe, title: "Criação de Sites", desc: "Websites premium que traduzem autoridade e geram resultado." },
];

const DIFERENCIAIS = [
  { icon: Target, title: "Conteúdo Estratégico", desc: "Cada peça nasce de um objetivo claro de comunicação e marca." },
  { icon: Camera, title: "Captação Profissional", desc: "Padrão técnico que valoriza o produto, o ambiente e o cliente." },
  { icon: Film, title: "Storytelling", desc: "Narrativas que despertam emoção e fixam a marca na memória." },
  { icon: Compass, title: "Posicionamento", desc: "Sua marca encontrando o espaço certo no mercado e na mente do público." },
  { icon: Trophy, title: "Foco em Resultados", desc: "Métricas, presença e autoridade — não apenas estética." },
];

const DEPOIMENTOS = [
  { quote: "A VY Mídia transformou completamente nossa presença digital. Conteúdo com identidade e estratégia.", author: "Mano's Gastrobar", role: "Cliente" },
  { quote: "Profissionalismo, criatividade e entrega impecável. Cada vídeo elevou o padrão da nossa marca.", author: "Churrascaria 100Tenário", role: "Cliente" },
  { quote: "Mais do que vídeos, eles entregaram posicionamento. Hoje somos lembrados pelo conteúdo.", author: "Advocacia Especializada", role: "Cliente" },
];

function Index() {
  const [filter, setFilter] = useState<Cat>("Todos");
  const filtered = useMemo(
    () => filter === "Todos" ? PORTFOLIO : PORTFOLIO.filter((v) => v.category === filter),
    [filter]
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="font-display text-2xl tracking-tight text-foreground">V<span className="text-gold">Y</span></span>
            <span className="hidden sm:inline text-[10px] tracking-luxury text-muted-foreground uppercase">Mídia</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-editorial uppercase text-muted-foreground">
            <a href="#sobre" className="hover:text-gold transition-colors">Quem Somos</a>
            <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-gold transition-colors">Portfólio</a>
            <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
          </nav>
          <a href="#contato" className="hidden md:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[10px] tracking-luxury uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all">
            Orçamento
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative grain hero-radial flex min-h-screen items-center justify-center pt-32 pb-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] aspect-square rounded-full bg-gold/5 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <p className="text-[10px] tracking-luxury uppercase text-gold/80 mb-8">
              Estratégia • Criação • Resultado
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.95] tracking-tight">
              <span className="block italic font-light text-gradient-gold">Estratégia.</span>
              <span className="block font-light text-foreground">Criação.</span>
              <span className="block italic font-light text-gradient-gold">Resultado.</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="mx-auto mt-10 max-w-2xl text-base md:text-lg font-light text-muted-foreground leading-relaxed">
              Produção de conteúdo, branding e posicionamento digital para marcas que desejam crescer com estratégia.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#portfolio" className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[10px] tracking-luxury uppercase text-primary-foreground hover:bg-gold-soft transition-all">
                Ver Portfólio
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </a>
              <a href="#contato" className="group inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 text-[10px] tracking-luxury uppercase text-foreground hover:border-gold hover:text-gold transition-all">
                Solicitar Orçamento
              </a>
            </div>
          </Reveal>
          <div className="mt-24 flex items-center justify-center gap-8 text-[10px] tracking-editorial uppercase text-muted-foreground/60">
            <span>Estratégia Digital</span>
            <span className="h-px w-8 bg-gold/40" />
            <span>Produção de Conteúdo</span>
            <span className="h-px w-8 bg-gold/40 hidden sm:block" />
            <span className="hidden sm:inline">Videomaker</span>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="sobre" className="relative py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal>
            <p className="text-[10px] tracking-luxury uppercase text-gold mb-6">— Quem Somos</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] mb-10">
              Transformamos ideias em <span className="italic text-gradient-gold">conteúdos</span> que geram <span className="italic">impacto.</span>
            </h2>
            <div className="space-y-6 text-base font-light text-muted-foreground leading-relaxed">
              <p>
                A VY Mídia nasceu para transformar ideias em conteúdos que geram impacto. Produzimos vídeos estratégicos
                para empresas, marcas e profissionais que desejam fortalecer sua presença digital através de imagens de alta qualidade.
              </p>
              <p>
                Unimos criatividade, storytelling e estratégia para criar conteúdos que destacam o que torna cada negócio único.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              {[
                { n: "+50", l: "Projetos" },
                { n: "+30", l: "Clientes" },
                { n: "100%", l: "Dedicação" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl text-gold">{s.n}</p>
                  <p className="mt-2 text-[10px] tracking-luxury uppercase text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 border border-gold/20 -z-10" />
              <img src={hero.url} alt="VY Mídia — Portfólio" className="w-full object-cover aspect-[4/5] grayscale-[20%]" />
              <div className="absolute -bottom-6 -right-6 glass px-6 py-4">
                <p className="text-[10px] tracking-luxury uppercase text-gold">Desde 2022</p>
                <p className="font-display text-xl mt-1">Estética Editorial</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICOS */}
      <section id="servicos" className="relative py-32 md:py-40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[10px] tracking-luxury uppercase text-gold mb-6">— Serviços</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
              Soluções completas para sua <span className="italic text-gradient-gold">marca</span>.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full bg-background p-10 transition-colors hover:bg-card">
                  <s.icon className="h-8 w-8 text-gold" strokeWidth={1} />
                  <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                  <p className="mt-4 text-sm font-light text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-8 h-px w-12 bg-gold/40 group-hover:w-24 transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="relative py-32 md:py-40 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[10px] tracking-luxury uppercase text-gold mb-6">— Portfólio</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05]">
              <span className="italic text-gradient-gold">Port</span>fólio
            </h2>
            <p className="mt-6 text-muted-foreground font-light">
              Selecionamos trabalhos que traduzem nossa essência: estratégia, estética e resultado.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2.5 text-[10px] tracking-luxury uppercase border transition-all ${
                    filter === c
                      ? "border-gold bg-gold text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <VideoCard {...v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative py-32 md:py-40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[10px] tracking-luxury uppercase text-gold mb-6">— Diferenciais</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
              Mais que vídeos. <span className="italic text-gradient-gold">Estratégia.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <div className="h-full bg-background p-8 text-center">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40">
                    <d.icon className="h-5 w-5 text-gold" strokeWidth={1.2} />
                  </div>
                  <h3 className="font-display text-xl">{d.title}</h3>
                  <p className="mt-3 text-xs font-light text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="relative py-32 md:py-40 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[10px] tracking-luxury uppercase text-gold mb-6">— Depoimentos</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
              O que dizem nossos <span className="italic text-gradient-gold">clientes</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {DEPOIMENTOS.map((d, i) => (
              <Reveal key={d.author} delay={i * 100}>
                <figure className="h-full glass p-10 flex flex-col">
                  <span className="font-display text-6xl text-gold leading-none">"</span>
                  <blockquote className="mt-4 font-display text-xl italic leading-snug text-foreground flex-1">
                    {d.quote}
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-foreground">{d.author}</p>
                    <p className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">{d.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="relative py-32 md:py-48 border-t border-border overflow-hidden">
        <div className="absolute inset-0 hero-radial" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] aspect-square rounded-full bg-gold/10 blur-[140px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-[10px] tracking-luxury uppercase text-gold mb-8">— Vamos Criar</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">
              Seu conteúdo é a forma como sua marca será <span className="italic text-gradient-gold">lembrada.</span>
            </h2>
            <div className="mt-12 space-y-2 font-display text-2xl md:text-3xl text-muted-foreground">
              <p>Mais presença.</p>
              <p className="italic">Mais autoridade.</p>
              <p className="text-gold">Mais resultado.</p>
            </div>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="group mt-14 inline-flex items-center gap-3 bg-gold px-10 py-5 text-[11px] tracking-luxury uppercase text-primary-foreground hover:bg-gold-soft transition-all"
            >
              Vamos Conversar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl">V<span className="text-gold">Y</span></span>
              <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">Mídia • Estratégia Digital</span>
            </div>
            <div className="flex items-center gap-5">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/5500000000000", label: "WhatsApp" },
                { icon: Mail, href: "mailto:contato@vymidia.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                   className="flex h-11 w-11 items-center justify-center border border-border text-muted-foreground hover:border-gold hover:text-gold transition-all">
                  <Icon className="h-4 w-4" strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] tracking-editorial uppercase text-muted-foreground/60">
            <p>© {new Date().getFullYear()} VY Mídia. Todos os direitos reservados.</p>
            <p>Estratégia • Criação • Resultado</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
