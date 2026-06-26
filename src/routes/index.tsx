import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Camera, Film, Share2, Sparkles, Globe, Video,
  Instagram, MessageCircle, Mail, ArrowRight, Target, Compass, Trophy, TrendingUp,
} from "lucide-react";
import { VideoCard } from "@/components/VideoCard";
import { Reveal } from "@/components/Reveal";
import ibagyLogo from "@/assets/ibagy-logo.asset.json";


import manos from "@/assets/manos.asset.json";
import maes from "@/assets/maes.asset.json";
import flacidez from "@/assets/flacidez.asset.json";
import inss from "@/assets/inss.asset.json";
import internet from "@/assets/internet.asset.json";
import churrascaria from "@/assets/churrascaria.asset.json";
import fuscarosa from "@/assets/fuscarosa.asset.json";
import team from "@/assets/team.asset.json";
import juliana from "@/assets/juliana.asset.json";
import heroCover from "@/assets/hero-cover.asset.json";
import heroMobile from "@/assets/hero-mobile.asset.json";
import manosPoster from "@/assets/manos-poster.asset.json";
import maesPoster from "@/assets/maes-poster.asset.json";
import flacidezPoster from "@/assets/flacidez-poster.asset.json";
import inssPoster from "@/assets/inss-poster.asset.json";
import internetPoster from "@/assets/internet-poster.asset.json";
import churrascariaPoster from "@/assets/churrascaria-poster.asset.json";
import fuscarosaPoster from "@/assets/fuscarosa-poster.asset.json";
import julianaPoster from "@/assets/juliana-poster.asset.json";
import vyLogo from "@/assets/vy-logo.asset.json";
import villaRomane from "@/assets/villa-romane.asset.json";
import villaPoster from "@/assets/villa-poster.asset.json";
import manosSabado from "@/assets/manos-sabado.asset.json";
import manosSabadoPoster from "@/assets/manos-sabado-poster.asset.json";
import julianaDeclarar from "@/assets/juliana-declarar.asset.json";
import julianaDeclararPoster from "@/assets/juliana-declarar-poster.asset.json";
import draanaPreench from "@/assets/draana-preench.asset.json";
import draanaPreenchPoster from "@/assets/draana-preench-poster.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VY Mídia — Agência de Marketing Digital | Tráfego Pago, Conteúdo e Social Media" },
      { name: "description", content: "Agência completa de marketing digital: Estratégia Digital, Produção de Conteúdo, Gestão de Redes Sociais e Gestão de Tráfego Pago (Meta Ads e Google Ads). Performance digital para marcas premium." },
      { name: "keywords", content: "Gestão de Tráfego Pago, Meta Ads, Google Ads, Performance Digital, Agência de Marketing Digital, Social Media, Produção de Conteúdo, Estratégia Digital, Gestão de Redes Sociais, VY Mídia" },
      { property: "og:title", content: "VY Mídia — Agência de Marketing Digital" },
      { property: "og:description", content: "Estratégia Digital • Produção de Conteúdo • Gestão de Tráfego Pago (Meta Ads e Google Ads) • Social Media." },
      { property: "og:image", content: team.url },
    ],
  }),
  component: Index,
});


const CATEGORIES = ["Todos", "Restaurantes", "Empresas", "Imobiliário", "Marcas Pessoais", "Eventos"] as const;
type Cat = typeof CATEGORIES[number];

const WHATSAPP_BUDGET_LINK = "https://wa.me/5548998206769?text=Olá!%20Conheci%20a%20VY%20Mídia%20através%20do%20site%20e%20gostaria%20de%20receber%20um%20orçamento%20para%20o%20meu%20negócio.";


const PORTFOLIO = [
  { src: manos.url, poster: manosPoster.url, title: "Mano's Gastrobar", client: "Gastronomia • Experiência", category: "Restaurantes" as Cat, instagram: "https://www.instagram.com/manosgastrobar/reels/" },
  { src: churrascaria.url, poster: churrascariaPoster.url, title: "Churrascaria 100Tenário", client: "Tradição • Gastronomia", category: "Restaurantes" as Cat, instagram: "https://www.instagram.com/churrascaria100tenario/" },
  { src: fuscarosa.url, poster: fuscarosaPoster.url, title: "Fusca Rosa", client: "Bar • Lifestyle", category: "Eventos" as Cat, instagram: "https://www.instagram.com/fuskarosabeer/" },
  { src: flacidez.url, poster: flacidezPoster.url, title: "Dra Ana", client: "Clínica de Estética", category: "Marcas Pessoais" as Cat, instagram: "https://www.instagram.com/draanapaulaneves_/" },
  { src: inss.url, poster: inssPoster.url, title: "Tiecher Pegoraro", client: "Advocacia • INSS", category: "Marcas Pessoais" as Cat, instagram: "https://www.instagram.com/tiecherpegoraro/" },
  { src: internet.url, poster: internetPoster.url, title: "Julio Lab Hacker", client: "Crimes Digitais", category: "Marcas Pessoais" as Cat, instagram: "https://www.instagram.com/juliolabhacker/" },
  { src: juliana.url, poster: julianaPoster.url, title: "Juliana Aranda", client: "Previdência • Planejamento", category: "Marcas Pessoais" as Cat, instagram: "https://www.instagram.com/juliana.arandacondeixa/" },
  { src: maes.url, poster: maesPoster.url, title: "Jardim dos Fuscas", client: "Restaurante", category: "Restaurantes" as Cat, instagram: "https://www.instagram.com/jardimdosfuscas/" },
  { src: villaRomane.url, poster: villaPoster.url, title: "Villa Romane", client: "Imobiliário • Alto Padrão", category: "Imobiliário" as Cat, instagram: "https://www.instagram.com/ibagy/" },
  { src: manosSabado.url, poster: manosSabadoPoster.url, title: "Mano's Gastrobar", client: "Restaurante", category: "Restaurantes" as Cat, instagram: "https://www.instagram.com/manosgastrobar/reels/" },
  { src: julianaDeclarar.url, poster: julianaDeclararPoster.url, title: "Juliana Aranda", client: "Contabilidade", category: "Marcas Pessoais" as Cat, instagram: "https://www.instagram.com/inovva.cont/reels/" },
  { src: draanaPreench.url, poster: draanaPreenchPoster.url, title: "Dra Ana", client: "Clínica de Estética", category: "Marcas Pessoais" as Cat, instagram: "https://www.instagram.com/draanapaulaneves_/reels/" },
];

const CLIENTES = [
  { name: "Mano's Gastrobar", url: "https://www.instagram.com/manosgastrobar/" },
  { name: "Churrascaria 100Tenário", url: "https://www.instagram.com/churrascaria100tenario/" },
  { name: "Fusca Rosa", url: "https://www.instagram.com/fuskarosabeer/" },
  { name: "Jardim dos Fuscas", url: "https://www.instagram.com/jardimdosfuscas/" },
  { name: "Dra Ana", url: "https://www.instagram.com/draanapaulaneves_/" },
  { name: "tiecherpegoraro", url: "https://www.instagram.com/tiecherpegoraro/" },
  { name: "juliolabhacker", url: "https://www.instagram.com/juliolabhacker/" },
  { name: "Ibagy", url: "https://www.instagram.com/ibagy/" },
  { name: "Estética & Bem-Estar", url: "#" },
  { name: "Direito Previdenciário", url: "#" },
  { name: "Crimes Digitais", url: "#" },
  { name: "Eventos Premium", url: "#" },
  { name: "Branding Studio", url: "#" },
  { name: "Lifestyle Co.", url: "#" },
  { name: "Gastronomia Sul", url: "#" },
  { name: "Imobiliária Prime", url: "#" },
  { name: "Beauty Lab", url: "#" },
];

const SERVICES = [
  { icon: Camera, title: "Produção de Conteúdo", desc: "Conteúdo estratégico que conecta marca e audiência com propósito." },
  { icon: Video, title: "Captação Profissional", desc: "Equipamento de alto padrão e direção visual para cada cena." },
  { icon: Film, title: "Edição de Vídeos", desc: "Edição cinematográfica com ritmo, narrativa e identidade visual." },
  { icon: Share2, title: "Gestão de Redes Sociais", desc: "Gestão de presença digital com calendário editorial sob medida." },
  {
    icon: TrendingUp,
    title: "Gestão de Tráfego Pago",
    desc: "Meta Ads e Google Ads com estratégia de campanhas, geração de leads, conversão, remarketing e otimização contínua. Dashboard em tempo real e relatórios de desempenho conduzidos pelos especialistas Guilherme Oliveira e Eliseu Junior.",
  },
  { icon: Sparkles, title: "Branding", desc: "Construção de marca: posicionamento, identidade e voz consistente." },
  { icon: Globe, title: "Criação de Sites", desc: "Websites premium que traduzem autoridade e geram resultado." },
];

const CLIENTES_LOGOS: { name: string; logo?: string }[] = [
  { name: "Faiberplas" },
  { name: "ASTEC" },
  { name: "Ibagy", logo: ibagyLogo.url },
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
      {/* NAV — single fixed bar */}
      <header className="fixed top-0 inset-x-0 z-[120] border-b border-gold/20 bg-background/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.45)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-3.5">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img src={vyLogo.url} alt="VY Mídia" className="h-8 md:h-10 w-auto select-none" draggable={false} />
            <span className="hidden sm:inline text-[10px] tracking-luxury text-muted-foreground uppercase">Mídia</span>
          </a>
          <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <a
              href="#portfolio"
              className="text-[10px] sm:text-[11px] tracking-luxury uppercase text-gold hover:text-foreground transition-colors px-2 sm:px-3 py-2"
            >
              Portfólio
            </a>
            <a
              href={WHATSAPP_BUDGET_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gold/60 px-3 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-[11px] tracking-luxury uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all"
            >
              Orçamento
            </a>
          </nav>
        </div>
      </header>

      {/* HERO — Cover image */}
      <section
        id="top"
        className="relative w-full overflow-hidden bg-black flex items-center justify-center min-h-[100svh] md:h-screen md:min-h-[560px]"
      >
        {/* Mobile: vertical artwork, fully visible (no crop) */}
        <img
          src={heroMobile.url}
          alt="VY Mídia — Portfólio"
          className="md:hidden block max-h-[calc(100svh-72px)] max-w-full w-auto h-auto object-contain select-none mt-[72px]"
          draggable={false}
        />
        {/* Desktop / tablet: horizontal cover, full image visible */}
        <img
          src={heroCover.url}
          alt=""
          aria-hidden="true"
          className="hidden md:block max-h-full max-w-full w-auto h-auto object-contain select-none pt-[72px]"
          draggable={false}
        />

        {/* scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] uppercase text-white/60">
          ↓ Scroll
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
                A VY Mídia é uma agência completa de marketing digital. Unimos Estratégia Digital, Produção de Conteúdo,
                Gestão de Redes Sociais e Gestão de Tráfego Pago (Meta Ads e Google Ads) para fortalecer a presença
                digital de marcas, empresas e profissionais que buscam autoridade e resultado.
              </p>
              <p>
                Criatividade, storytelling, performance e dados caminham juntos — criamos conteúdos que destacam o que
                torna cada negócio único e campanhas que entregam crescimento mensurável.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: "4+", l: "Anos de experiência" },
                { n: "400+", l: "Projetos entregues em 2025" },
                { n: "200+", l: "Horas em Campo em 2025" },
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
              <img src={team.url} alt="Equipe VY Mídia" className="w-full object-cover aspect-[4/5]" />
              <div className="absolute -bottom-6 -right-6 glass px-6 py-4">
                <p className="text-[10px] tracking-luxury uppercase text-gold">Desde 2023</p>
                <p className="font-display text-xl mt-1">O conteúdo cria a marca</p>
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
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-3 md:px-6 md:py-3 text-[10px] md:text-[11px] tracking-luxury uppercase border transition-all min-w-[90px] ${
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
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

      {/* EMPRESAS QUE CONFIAM */}
      <section id="clientes" className="relative py-32 md:py-40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-[10px] tracking-luxury uppercase text-gold mb-6">— Clientes</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
              Empresas que confiam na <span className="italic text-gradient-gold">VY Mídia</span>.
            </h2>
            <p className="mt-6 text-muted-foreground font-light">
              Marcas que escolheram a VY Mídia para fortalecer sua presença digital.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border max-w-4xl mx-auto">
              {CLIENTES_LOGOS.map((c) => (
                <div
                  key={c.name}
                  className="group bg-background flex items-center justify-center min-h-[160px] md:min-h-[180px] p-10 transition-colors hover:bg-card"
                >
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-16 md:max-h-20 w-auto object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                      draggable={false}
                    />
                  ) : (
                    <span className="font-display text-2xl md:text-3xl text-muted-foreground/70 group-hover:text-gold transition-colors duration-500 tracking-wide">
                      {c.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
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
              href={WHATSAPP_BUDGET_LINK}
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
              <img src={vyLogo.url} alt="VY Mídia" className="h-10 w-auto select-none" draggable={false} />
              <span className="text-[10px] tracking-luxury uppercase text-muted-foreground">Mídia • Estratégia Digital</span>
            </div>
            <div className="flex items-center gap-5">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/5548998206769", label: "WhatsApp" },
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
