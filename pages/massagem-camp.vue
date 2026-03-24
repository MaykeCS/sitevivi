<script setup lang="ts">
useSeoMeta({
  title: 'Avaliação + Massagem por R$120 — Viviana Tavares Fisioterapeuta',
  description: 'Oferta especial de 1ª sessão: Avaliação clínica + Massagem terapêutica por apenas R$120. Atendimento com fisioterapeuta em Vila Mariana, próximo ao Metrô Santa Cruz.',
  ogTitle: 'Avaliação + Massagem por R$120 — Viviana Tavares',
  ogDescription: 'Oferta especial de 1ª sessão com fisioterapeuta. Avaliação clínica + Massagem terapêutica por R$120. Vagas limitadas.',
  ogType: 'website',
  ogImage: '/logo-massagem.png',
})

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo-massagem.png' },
    { rel: 'apple-touch-icon', href: '/logo-massagem.png' },
  ],
})

const { link: waLink, phoneDisplay, trackClick } = useWhatsApp(
  'Olá, Dra. Viviana! Vi a oferta de Avaliação + Massagem por R$120 e gostaria de agendar minha 1ª sessão!'
)
const trackWhatsApp = (location: string) => trackClick('massagem-camp', location)

const carouselImages = [
  { src: '/espaco/vilamariana/espaco-01.jpg', alt: 'Espaço de atendimento — sala de massagem' },
  { src: '/espaco/vilamariana/espaco-02.jpg', alt: 'Ambiente terapêutico — consultório Viviana Tavares' },
  { src: '/espaco/vilamariana/espaco-03.jpg', alt: 'Sala de massagem terapêutica — Vila Mariana' },
  { src: '/espaco/vilamariana/espaco-04.jpg', alt: 'Espaço de bem-estar — massagem em São Paulo' },
  { src: '/espaco/vilamariana/espaco-05.jpg', alt: 'Ambiente de atendimento — Dra. Viviana Tavares' },
  { src: '/espaco/vilamariana/espaco-06.jpg', alt: 'Consultório próximo ao Metrô Santa Cruz' },
  { src: '/espaco/vilamariana/espaco-07.jpg', alt: 'Espaço terapêutico — Vila Mariana São Paulo' },
]

const currentSlide = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

function startCarousel() {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % carouselImages.length
  }, 2500)
}

function goToSlide(index: number) {
  currentSlide.value = index
  if (intervalId) clearInterval(intervalId)
  startCarousel()
}

onMounted(() => startCarousel())
onUnmounted(() => { if (intervalId) clearInterval(intervalId) })
</script>

<template>
  <div style="font-family:'Nunito',sans-serif; background:#FAF8F4; color:#2D2825; overflow-x:hidden;">

    <!-- ── BANNER OFERTA ── -->
    <div style="
      background:linear-gradient(90deg, #A67B2A 0%, #C4943E 100%);
      padding:0.6rem 1.5rem; text-align:center; position:relative; z-index:99;
    ">
      <p style="margin:0; color:white; font-size:0.88rem; font-weight:700; letter-spacing:0.01em;">
        🎉 Oferta especial · <strong>Avaliação + Massagem por R$120</strong> · Vagas limitadas
      </p>
    </div>

    <!-- ── HEADER ── -->
    <header style="
      position:sticky; top:0; left:0; right:0; z-index:100;
      background:rgba(250,248,244,0.97); backdrop-filter:blur(12px);
      box-shadow:0 1px 20px rgba(107,153,114,0.12);
      padding:0.875rem 1.5rem;
      display:flex; align-items:center; justify-content:space-between;
    ">
      <a href="/" style="display:flex; align-items:center; gap:0.5rem; text-decoration:none;">
        <img src="/logo-massagem.png" alt="Viviana Tavares Massagem" style="height:40px; width:auto; border-radius:9999px;" />
        <span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:1rem; color:#2D2825;">
          Viviana Tavares
        </span>
      </a>

      <a :href="waLink" target="_blank" rel="noopener" @click="trackWhatsApp('header')" style="
        display:inline-flex; align-items:center; gap:0.5rem;
        background:#25D366; color:white; font-weight:700; font-size:0.875rem;
        padding:0.55rem 1.2rem; border-radius:9999px; text-decoration:none;
        box-shadow:0 2px 12px rgba(37,211,102,0.35);
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Quero aproveitar a oferta
      </a>
    </header>

    <!-- ── HERO ── -->
    <section style="
      min-height:100vh; display:flex; align-items:center;
      padding:4rem 1.5rem 3rem;
      background:linear-gradient(160deg, #FDF8EE 0%, #FAF8F4 60%);
      position:relative; overflow:hidden;
    ">
      <div style="
        position:absolute; top:-60px; right:-60px;
        width:380px; height:380px; border-radius:9999px;
        background:radial-gradient(circle, rgba(196,148,62,0.12) 0%, transparent 70%);
        pointer-events:none;
      "/>

      <div style="max-width:680px; margin:0 auto; text-align:center; position:relative;">

        <!-- Carrossel -->
        <div style="
          width:min(640px, 90vw); aspect-ratio:3/2; height:auto; border-radius:1.25rem; margin:0 auto 1.5rem;
          overflow:hidden; position:relative;
          box-shadow:0 8px 32px rgba(196,148,62,0.3);
          border:3px solid rgba(196,148,62,0.25);
        ">
          <div v-for="(img, i) in carouselImages" :key="i" :style="{
            position:'absolute', inset:'0',
            opacity: currentSlide === i ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
          }">
            <img
              :src="img.src"
              :alt="img.alt"
              loading="lazy"
              style="width:100%; height:100%; object-fit:cover;"
            />
          </div>
          <div style="
            position:absolute; bottom:0.5rem; left:50%; transform:translateX(-50%);
            display:flex; gap:0.4rem;
          ">
            <button
              v-for="(_, i) in carouselImages" :key="i"
              @click="goToSlide(i)"
              :style="{
                width: currentSlide === i ? '20px' : '8px',
                height:'8px', borderRadius:'9999px', border:'none', cursor:'pointer',
                background: currentSlide === i ? '#C4943E' : 'rgba(255,255,255,0.7)',
                transition: 'all 0.3s ease',
                boxShadow:'0 1px 4px rgba(0,0,0,0.3)',
              }"
              :aria-label="'Imagem ' + (i + 1)"
            />
          </div>
        </div>

        <!-- Badge oferta -->
        <div style="
          display:inline-flex; align-items:center; gap:0.5rem;
          background:linear-gradient(90deg, #A67B2A, #C4943E);
          color:white; font-size:0.88rem; font-weight:800;
          padding:0.5rem 1.2rem; border-radius:9999px;
          text-transform:uppercase; letter-spacing:0.04em; margin-bottom:1rem;
          box-shadow:0 4px 16px rgba(196,148,62,0.45);
        ">
          🎯 1ª sessão · Avaliação + Massagem · R$120
        </div>

        <div style="
          display:inline-flex; align-items:center; gap:0.5rem;
          background:rgba(107,153,114,0.12); border:1px solid rgba(107,153,114,0.35);
          color:#4A7050; font-size:0.8rem; font-weight:700;
          padding:0.4rem 1rem; border-radius:9999px;
          text-transform:uppercase; letter-spacing:0.05em; margin-bottom:1.5rem;
          margin-left:0.5rem;
        ">
          🩺 Fisioterapeuta · CREFITO 450602-F
        </div>

        <h1 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.4rem,6vw,3.8rem);
          font-weight:600; line-height:1.12;
          color:#2D2825; margin:0 0 1.25rem;
        ">
          Massagem com olhar<br>
          <span style="color:#C4943E;">clínico e terapêutico</span>
        </h1>

        <p style="font-size:1.1rem; color:#6B5E57; line-height:1.7; max-width:520px; margin:0 auto 1.5rem;">
          Alívio de tensões, dores musculares e estresse aplicado por uma
          <strong style="color:#4A7050;">Fisioterapeuta formada</strong> — com conhecimento clínico
          para cuidar do seu corpo com precisão, segurança e intenção terapêutica real.
        </p>

        <div style="
          display:flex; flex-wrap:wrap; justify-content:center; gap:0.6rem;
          max-width:520px; margin:0 auto 2rem;
        ">
          <span v-for="d in [
            '🦴 Anatomia aplicada',
            '🔬 Avaliação clínica',
            '⚕️ Segura para lesões',
            '🎯 Sessão personalizada',
          ]" :key="d" style="
            display:inline-flex; align-items:center;
            background:rgba(107,153,114,0.1); border:1px solid rgba(107,153,114,0.3);
            color:#4A7050; font-size:0.78rem; font-weight:700;
            padding:0.35rem 0.85rem; border-radius:9999px;
          ">{{ d }}</span>
        </div>

        <a :href="waLink" target="_blank" rel="noopener" @click="trackWhatsApp('hero')" style="
          display:inline-flex; align-items:center; gap:0.75rem;
          background:#25D366; color:white; font-weight:800; font-size:1.15rem;
          padding:1.1rem 2.4rem; border-radius:9999px; text-decoration:none;
          box-shadow:0 6px 28px rgba(37,211,102,0.45);
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Quero agendar por R$120
        </a>
        <p style="margin-top:0.875rem; font-size:0.82rem; color:#9E8E87;">
          Atendimento com hora marcada · Resposta rápida · Vagas limitadas
        </p>
      </div>
    </section>

    <!-- ── OFERTA DE BOAS-VINDAS ── -->
    <section style="padding:4rem 1.5rem; background:linear-gradient(135deg, #1C2B1F 0%, #243320 100%);">
      <div style="max-width:760px; margin:0 auto; text-align:center;">
        <p style="font-size:0.8rem; font-weight:700; color:#C4943E; text-transform:uppercase; letter-spacing:0.08em; margin:0 0 0.5rem;">
          ✦ Oferta especial de boas-vindas
        </p>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2rem,4vw,3rem);
          font-weight:600; color:white; margin:0 0 0.75rem; line-height:1.15;
        ">
          Avaliação + Massagem<br>
          <span style="color:#C4943E;">por R$120</span>
        </h2>
        <p style="color:rgba(250,248,244,0.7); font-size:0.95rem; max-width:500px; margin:0 auto 2.5rem; line-height:1.6;">
          Sua primeira sessão inclui avaliação clínica completa — entendo sua queixa, histórico e
          objetivo — mais uma hora de massagem terapêutica personalizada para o seu caso.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1.25rem; margin-bottom:2.5rem;">
          <div v-for="item in [
            { icon:'🔬', titulo:'Avaliação corporal', texto:'Entendemos suas queixas, tensões e objetivos antes de começar a sessão.' },
            { icon:'💆', titulo:'Massagem personalizada', texto:'Técnica e pressão escolhidas especificamente para o que seu corpo precisa naquele momento.' },
            { icon:'✨', titulo:'Alívio imediato', texto:'Você sai mais leve, sem dor e com o corpo renovado já na primeira sessão.' },
          ]" :key="item.titulo" style="
            background:rgba(255,255,255,0.06); border-radius:1.25rem;
            padding:1.75rem 1.5rem; border:1px solid rgba(196,148,62,0.25);
            text-align:left;
          ">
            <span style="font-size:2rem; display:block; margin-bottom:0.75rem;">{{ item.icon }}</span>
            <h3 style="font-weight:700; font-size:1rem; color:#C4943E; margin:0 0 0.5rem;">{{ item.titulo }}</h3>
            <p style="font-size:0.875rem; color:rgba(250,248,244,0.7); line-height:1.6; margin:0;">{{ item.texto }}</p>
          </div>
        </div>

        <!-- Preço destaque -->
        <div style="
          display:inline-block;
          background:rgba(196,148,62,0.12); border:2px solid rgba(196,148,62,0.4);
          border-radius:1.5rem; padding:1.5rem 2.5rem; margin-bottom:2rem;
        ">
          <p style="margin:0; color:rgba(250,248,244,0.55); font-size:0.85rem; text-decoration:line-through;">
            Avaliação + Massagem separadas: ~R$200
          </p>
          <p style="margin:0.25rem 0 0; color:#C4943E; font-size:2.5rem; font-weight:800; font-family:'Cormorant Garamond',serif; line-height:1;">
            R$120
          </p>
          <p style="margin:0.25rem 0 0; color:rgba(250,248,244,0.6); font-size:0.8rem;">
            Oferta para novos clientes · Vagas limitadas
          </p>
        </div>

        <div style="display:block;">
          <a :href="waLink" target="_blank" rel="noopener" @click="trackWhatsApp('oferta')" style="
            display:inline-flex; align-items:center; gap:0.75rem;
            background:#25D366; color:white; font-weight:800; font-size:1.1rem;
            padding:1rem 2.2rem; border-radius:9999px; text-decoration:none;
            box-shadow:0 6px 28px rgba(37,211,102,0.4);
          ">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Garantir minha vaga — R$120
          </a>
        </div>
      </div>
    </section>

    <!-- ── TIPOS DE MASSAGEM ── -->
    <section style="padding:4rem 1.5rem; background:white;">
      <div style="max-width:860px; margin:0 auto;">
        <p style="font-size:0.8rem; font-weight:700; color:#C4943E; text-transform:uppercase; letter-spacing:0.08em; text-align:center; margin:0 0 0.5rem;">
          ✦ Técnicas
        </p>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; text-align:center;
          color:#2D2825; margin:0 0 0.5rem;
        ">O que ofereço</h2>
        <p style="text-align:center; font-size:0.95rem; color:#6B5E57; margin:0 0 2.5rem;">
          Cada técnica é escolhida com base na sua queixa — não por acaso.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.5rem;">
          <div v-for="m in [
            { emoji:'🌿', titulo:'Massagem Relaxante', texto:'Técnicas suaves para liberação de tensão muscular e sensação de leveza e bem-estar.' },
            { emoji:'💆', titulo:'Massagem Terapêutica', texto:'Trabalho direcionado em pontos de tensão e dor para alívio e bem-estar.' },
            { emoji:'🔥', titulo:'Liberação Miofascial', texto:'Técnica focada na fáscia muscular para mobilidade, alívio de dores crônicas e postura.' },
            { emoji:'🌊', titulo:'Drenagem Linfática', texto:'Estimula a circulação linfática, reduz inchaços e melhora a disposição do corpo.' },
          ]" :key="m.titulo" style="
            background:#FDF8EE; border-radius:1.25rem; padding:1.75rem 1.5rem;
            border:1px solid rgba(196,148,62,0.15);
          ">
            <span style="font-size:2rem; display:block; margin-bottom:0.75rem;">{{ m.emoji }}</span>
            <h3 style="font-weight:700; font-size:1rem; color:#2D2825; margin:0 0 0.5rem;">{{ m.titulo }}</h3>
            <p style="font-size:0.88rem; color:#6B5E57; line-height:1.6; margin:0;">{{ m.texto }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── DIFERENCIAL FISIOTERÁPICO ── -->
    <section style="padding:4rem 1.5rem; background:#1C2B1F;">
      <div style="max-width:840px; margin:0 auto;">
        <p style="font-size:0.8rem; font-weight:700; color:#9EC4A4; text-transform:uppercase; letter-spacing:0.08em; text-align:center; margin:0 0 0.5rem;">
          ✦ Por que fisioterapeuta?
        </p>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; text-align:center;
          color:#FAF8F4; margin:0 0 0.75rem;
        ">Mais que toque — é ciência aplicada</h2>
        <p style="text-align:center; color:rgba(250,248,244,0.65); font-size:0.95rem; max-width:560px; margin:0 auto 2.5rem; line-height:1.6;">
          Qualquer pessoa pode aprender a massagear. Mas só uma fisioterapeuta sabe
          <em>por que</em> cada músculo dói, <em>como</em> ele funciona e <em>o que</em> ele precisa.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:1.25rem;">
          <div v-for="d in [
            { icon:'🦴', titulo:'Anatomia e biomecânica', texto:'Conhecimento profundo da musculatura, articulações e fascias permite identificar a origem real da tensão ou dor.' },
            { icon:'🔬', titulo:'Avaliação clínica antes de tocar', texto:'Antes de cada sessão há uma escuta ativa. Histórico, postura e queixas são considerados para escolher a técnica certa.' },
            { icon:'⚕️', titulo:'Segurança em casos complexos', texto:'Hérnias, lesões musculares, pós-cirúrgico, gestantes — situações que exigem cuidado especializado.' },
            { icon:'🎯', titulo:'Objetivo terapêutico real', texto:'A sessão não é padronizada. Cada escolha de pressão, área e técnica tem uma justificativa clínica.' },
          ]" :key="d.titulo" style="
            background:rgba(255,255,255,0.05); border-radius:1.25rem;
            padding:1.75rem 1.5rem;
            border:1px solid rgba(158,196,164,0.2);
          ">
            <span style="font-size:2rem; display:block; margin-bottom:0.75rem;">{{ d.icon }}</span>
            <h3 style="font-weight:700; font-size:1rem; color:#9EC4A4; margin:0 0 0.5rem;">{{ d.titulo }}</h3>
            <p style="font-size:0.88rem; color:rgba(250,248,244,0.7); line-height:1.6; margin:0;">{{ d.texto }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── LOCAL DE ATENDIMENTO ── -->
    <section style="padding:4rem 1.5rem; background:white;">
      <div style="max-width:820px; margin:0 auto;">
        <p style="font-size:0.8rem; font-weight:700; color:#C4943E; text-transform:uppercase; letter-spacing:0.08em; text-align:center; margin:0 0 0.5rem;">
          ✦ Localização
        </p>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; text-align:center;
          color:#2D2825; margin:0 0 0.5rem;
        ">Local de atendimento</h2>
        <p style="text-align:center; font-size:0.95rem; color:#6B5E57; margin:0 0 2.5rem;">
          Clínica bem localizada, de fácil acesso pelo metrô.
        </p>

        <div style="display:flex; flex-wrap:wrap; gap:2rem; align-items:stretch;">
          <div style="flex:1; min-width:260px; display:flex; flex-direction:column; gap:1rem;">
            <div style="
              background:#FDF8EE; border-radius:1.25rem; padding:1.5rem;
              border:1px solid rgba(196,148,62,0.2);
            ">
              <div style="display:flex; align-items:flex-start; gap:0.75rem; margin-bottom:1.25rem;">
                <span style="font-size:1.5rem; flex-shrink:0;">📍</span>
                <div>
                  <p style="margin:0; font-weight:700; color:#2D2825; font-size:1.05rem;">Rua Domingos de Morais, 2781</p>
                  <p style="margin:0; color:#6B5E57; font-size:0.9rem;">Conjunto 706 · Vila Mariana · São Paulo</p>
                </div>
              </div>
              <div style="
                display:inline-flex; align-items:center; gap:0.5rem;
                background:rgba(107,153,114,0.12); border:1px solid rgba(107,153,114,0.3);
                color:#4A7050; font-size:0.85rem; font-weight:700;
                padding:0.5rem 1.1rem; border-radius:9999px;
              ">
                🚇 Próximo ao Metrô Santa Cruz
              </div>
            </div>

            <div style="
              background:#EEF5EF; border-radius:1.25rem; padding:1.25rem 1.5rem;
              border:1px solid rgba(107,153,114,0.2);
            ">
              <p style="margin:0 0 0.5rem; font-weight:700; color:#2D2825; font-size:0.9rem;">🗺️ Como chegar</p>
              <ul style="margin:0; padding-left:1.25rem; color:#6B5E57; font-size:0.875rem; line-height:1.9;">
                <li>Metrô Santa Cruz (Linha 1 – Azul) — <strong>~5 min a pé</strong></li>
                <li>Ônibus com parada na Domingos de Morais</li>
                <li>Estacionamento nas proximidades</li>
              </ul>
            </div>
          </div>

          <div style="
            flex:2; min-width:280px; min-height:300px;
            border-radius:1.25rem; overflow:hidden;
            box-shadow:0 4px 20px rgba(107,153,114,0.15);
            border:1px solid rgba(107,153,114,0.15);
          ">
            <iframe
              src="https://maps.google.com/maps?q=Rua+Domingos+de+Morais+2781+Vila+Mariana+São+Paulo+SP&output=embed&hl=pt-BR"
              style="width:100%; height:100%; min-height:300px; border:0; display:block;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localização — Rua Domingos de Morais 2781, Vila Mariana, São Paulo"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA FINAL ── -->
    <section style="
      padding:4rem 1.5rem; text-align:center;
      background:linear-gradient(135deg, #A67B2A 0%, #C4943E 100%);
      position:relative; overflow:hidden;
    ">
      <div style="max-width:500px; margin:0 auto; position:relative;">
        <span style="font-size:2.5rem; display:block; margin-bottom:0.5rem;">🎯</span>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.8rem,4vw,2.6rem);
          font-weight:600; color:white; margin:0 0 0.5rem; line-height:1.2;
        ">
          Aproveite enquanto há vagas
        </h2>
        <p style="
          color:white; font-size:1.5rem; font-weight:800;
          font-family:'Cormorant Garamond',serif; margin:0 0 0.75rem;
        ">
          Avaliação + Massagem · R$120
        </p>
        <p style="color:rgba(255,255,255,0.88); margin:0 0 2rem; line-height:1.7;">
          Oferta para novos clientes. Horários disponíveis durante a semana e fins de semana.
          Vila Mariana — próximo ao Metrô Santa Cruz.
        </p>
        <a :href="waLink" target="_blank" rel="noopener" @click="trackWhatsApp('cta')" style="
          display:inline-flex; align-items:center; gap:0.75rem;
          background:white; color:#A67B2A; font-weight:800; font-size:1.1rem;
          padding:1rem 2.2rem; border-radius:9999px; text-decoration:none;
          box-shadow:0 6px 28px rgba(0,0,0,0.15);
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          {{ phoneDisplay }}
        </a>
      </div>
    </section>

    <!-- ── FOOTER MÍNIMO ── -->
    <footer style="padding:1.5rem; text-align:center; background:#1C2B1F;">
      <p style="font-size:0.8rem; color:rgba(255,255,255,0.35); margin:0;">
        © {{ new Date().getFullYear() }} Dra. Viviana Tavares Campos · CREFITO 450602-F · Massagem Terapêutica · São Paulo
      </p>
    </footer>

    <!-- ── BOTÃO FLUTUANTE WHATSAPP ── -->
    <a :href="waLink" target="_blank" rel="noopener" @click="trackWhatsApp('flutuante')" style="
      position:fixed; bottom:1.5rem; right:1.5rem; z-index:200;
      width:58px; height:58px; border-radius:9999px; background:#25D366;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 20px rgba(37,211,102,0.5); text-decoration:none;
    " aria-label="Falar no WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>

  </div>
</template>
