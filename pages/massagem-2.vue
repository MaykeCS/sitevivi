<script setup lang="ts">
useSeoMeta({
  title: 'Massagem Terapêutica em São Paulo | Fisioterapeuta · Viviana Tavares',
  description: 'Massagem terapêutica por fisioterapeuta em São Paulo. Alívio de dores musculares, tensões e estresse com segurança clínica. Agende pelo WhatsApp.',
  ogTitle: 'Massagem Terapêutica em São Paulo | Fisioterapeuta · Viviana Tavares',
  ogDescription: 'Massagem terapêutica por fisioterapeuta em São Paulo. Alívio de dores musculares, tensões e estresse com segurança clínica. Agende pelo WhatsApp.',
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
  'Olá, Dra. Viviana! Gostaria de saber mais sobre a massagem terapêutica e agendar uma sessão.'
)
const trackWhatsApp = (location: string) => trackClick('massagem-2', location)

const carouselImages = [
  { src: 'https://images.pexels.com/photos/6560266/pexels-photo-6560266.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Compressas herbais — massagem relaxante' },
  { src: 'https://images.pexels.com/photos/6187430/pexels-photo-6187430.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Massagem com compressa quente — spa terapêutico' },
  { src: 'https://images.pexels.com/photos/10894305/pexels-photo-10894305.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Óleo nas mãos — massagem com óleos essenciais' },
  { src: 'https://images.pexels.com/photos/6560280/pexels-photo-6560280.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tratamento corporal — relaxamento e bem-estar' },
  { src: 'https://images.pexels.com/photos/19641835/pexels-photo-19641835.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Sessão de massagem terapêutica profissional' },
  { src: 'https://images.pexels.com/photos/275848/pexels-photo-275848.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Mãos aplicando massagem terapêutica' },
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

    <!-- ── HEADER ── -->
    <header style="
      position:fixed; top:0; left:0; right:0; z-index:100;
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
        Agendar sessão
      </a>
    </header>

    <!-- ── HERO ── -->
    <section style="
      min-height:100vh; display:flex; align-items:center;
      padding:6rem 1.5rem 3rem;
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

        <!-- Carrossel de imagens de massagem -->
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
          <!-- Indicadores -->
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

        <!-- Badge credencial -->
        <div style="
          display:inline-flex; align-items:center; gap:0.5rem;
          background:rgba(107,153,114,0.12); border:1px solid rgba(107,153,114,0.35);
          color:#4A7050; font-size:0.8rem; font-weight:700;
          padding:0.4rem 1rem; border-radius:9999px;
          text-transform:uppercase; letter-spacing:0.05em; margin-bottom:1.5rem;
        ">
          🩺 Fisioterapeuta Registrada · CREFITO 450602-F
        </div>

        <h1 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.2rem,5.5vw,3.6rem);
          font-weight:600; line-height:1.12;
          color:#2D2825; margin:0 0 1.25rem;
        ">
          Massagem Terapêutica em São Paulo —<br>
          <span style="color:#C4943E;">Por Fisioterapeuta Formada</span>
        </h1>

        <p style="font-size:1.05rem; color:#6B5E57; line-height:1.7; max-width:520px; margin:0 auto 1.5rem;">
          Alívio de dores musculares e tensões com segurança clínica.
          Atendimento personalizado por fisioterapeuta com registro CREFITO.
        </p>

        <!-- Pills benefício-orientadas -->
        <div style="
          display:flex; flex-wrap:wrap; justify-content:center; gap:0.6rem;
          max-width:540px; margin:0 auto 1.25rem;
        ">
          <span v-for="d in [
            '✅ Sem risco de lesão',
            '🎯 Indicada para dores crônicas',
            '⚕️ Avaliação clínica incluída',
            '📍 Atendimento domiciliar SP',
          ]" :key="d" style="
            display:inline-flex; align-items:center;
            background:rgba(107,153,114,0.1); border:1px solid rgba(107,153,114,0.3);
            color:#4A7050; font-size:0.78rem; font-weight:700;
            padding:0.35rem 0.85rem; border-radius:9999px;
          ">{{ d }}</span>
        </div>

        <!-- Linha de contexto prático -->
        <p style="font-size:0.85rem; color:#9E8E87; margin:0 0 1.75rem;">
          Sessões de 60 e 90 min · Atendimento domiciliar · Consulte disponibilidade
        </p>

        <a :href="waLink" target="_blank" rel="noopener" @click="trackWhatsApp('hero')" style="
          display:inline-flex; align-items:center; gap:0.75rem;
          background:#25D366; color:white; font-weight:800; font-size:1.15rem;
          padding:1.1rem 2.4rem; border-radius:9999px; text-decoration:none;
          box-shadow:0 6px 28px rgba(37,211,102,0.45);
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Agendar minha sessão
        </a>
        <!-- Subtexto de urgência -->
        <p style="margin-top:0.875rem; font-size:0.82rem; color:#9E8E87;">
          🟢 Resposta em até 1 hora · Vagas limitadas esta semana
        </p>
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

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.5rem; margin-bottom:2.5rem;">
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

        <!-- Mini-CTA após os cards -->
        <div style="
          background:#FDF8EE; border-radius:1.25rem; padding:1.5rem 1.75rem;
          border:1px solid rgba(196,148,62,0.2);
          display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:1rem;
          text-align:center;
        ">
          <p style="margin:0; font-size:1rem; color:#6B5E57; font-weight:600;">
            Não sabe qual é ideal para você?
          </p>
          <a :href="waLink" target="_blank" rel="noopener" @click="trackWhatsApp('tipos_mini_cta')" style="
            display:inline-flex; align-items:center; gap:0.5rem;
            background:transparent; color:#4A7050; font-weight:700; font-size:0.9rem;
            padding:0.6rem 1.4rem; border-radius:9999px; text-decoration:none;
            border:2px solid #6B9972;
          ">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#4A7050"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Mande uma mensagem e eu indico
          </a>
        </div>
      </div>
    </section>

    <!-- ── DEPOIMENTOS ── -->
    <section style="padding:4rem 1.5rem; background:#EEF5EF;">
      <div style="max-width:900px; margin:0 auto;">
        <p style="font-size:0.8rem; font-weight:700; color:#4A7050; text-transform:uppercase; letter-spacing:0.08em; text-align:center; margin:0 0 0.5rem;">
          ✦ Resultados reais
        </p>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; text-align:center;
          color:#2D2825; margin:0 0 2.5rem;
        ">O que dizem as pacientes</h2>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1.5rem;">

          <!-- Depoimento 1 -->
          <div style="
            background:white; border-radius:1.5rem; padding:1.75rem;
            box-shadow:0 4px 24px rgba(107,153,114,0.1);
            border:1px solid rgba(107,153,114,0.15);
            position:relative; display:flex; flex-direction:column; gap:1rem;
          ">
            <span style="
              font-family:'Cormorant Garamond',serif; font-size:4.5rem;
              color:#9EC4A4; position:absolute; top:0.1rem; left:1rem;
              opacity:0.3; line-height:1; pointer-events:none;
            ">"</span>
            <p style="color:#6B5E57; line-height:1.7; font-size:0.92rem; margin:0; position:relative; padding-top:1rem;">
              "Tinha dores lombares há anos. Depois de 3 sessões com a Viviana, consegui dormir sem acordar no meio da noite. Ela explicou tudo que estava fazendo e me senti completamente segura."
            </p>
            <div style="display:flex; align-items:center; gap:0.75rem; padding-top:0.75rem; border-top:1px solid rgba(107,153,114,0.15);">
              <div style="
                width:36px; height:36px; border-radius:9999px; flex-shrink:0;
                background:linear-gradient(135deg, #9EC4A4, #6B9972);
                display:flex; align-items:center; justify-content:center;
                font-family:'Cormorant Garamond',serif; font-size:1rem;
                color:white; font-weight:600;
              ">A</div>
              <div style="flex:1;">
                <p style="margin:0; font-weight:700; color:#2D2825; font-size:0.88rem;">Ana C.</p>
                <p style="margin:0; color:#9E8E87; font-size:0.78rem;">Pinheiros, SP</p>
              </div>
              <span style="
                display:inline-block;
                background:rgba(196,148,62,0.12); border:1px solid rgba(196,148,62,0.35);
                color:#A67B2A; font-size:0.7rem; font-weight:700;
                padding:0.25rem 0.65rem; border-radius:9999px; white-space:nowrap;
              ">Alívio em 3 sessões</span>
            </div>
          </div>

          <!-- Depoimento 2 -->
          <div style="
            background:white; border-radius:1.5rem; padding:1.75rem;
            box-shadow:0 4px 24px rgba(107,153,114,0.1);
            border:1px solid rgba(107,153,114,0.15);
            position:relative; display:flex; flex-direction:column; gap:1rem;
          ">
            <span style="
              font-family:'Cormorant Garamond',serif; font-size:4.5rem;
              color:#9EC4A4; position:absolute; top:0.1rem; left:1rem;
              opacity:0.3; line-height:1; pointer-events:none;
            ">"</span>
            <p style="color:#6B5E57; line-height:1.7; font-size:0.92rem; margin:0; position:relative; padding-top:1rem;">
              "Sempre tive medo de massagem por causa da minha hérnia. A Viviana fez uma avaliação antes e adaptou tudo para o meu caso. Nunca me senti tão bem."
            </p>
            <div style="display:flex; align-items:center; gap:0.75rem; padding-top:0.75rem; border-top:1px solid rgba(107,153,114,0.15);">
              <div style="
                width:36px; height:36px; border-radius:9999px; flex-shrink:0;
                background:linear-gradient(135deg, #9EC4A4, #6B9972);
                display:flex; align-items:center; justify-content:center;
                font-family:'Cormorant Garamond',serif; font-size:1rem;
                color:white; font-weight:600;
              ">M</div>
              <div style="flex:1;">
                <p style="margin:0; font-weight:700; color:#2D2825; font-size:0.88rem;">Márcia L.</p>
                <p style="margin:0; color:#9E8E87; font-size:0.78rem;">Vila Mariana, SP</p>
              </div>
              <span style="
                display:inline-block;
                background:rgba(196,148,62,0.12); border:1px solid rgba(196,148,62,0.35);
                color:#A67B2A; font-size:0.7rem; font-weight:700;
                padding:0.25rem 0.65rem; border-radius:9999px; white-space:nowrap;
              ">Segura para hérnia</span>
            </div>
          </div>

          <!-- Depoimento 3 -->
          <div style="
            background:white; border-radius:1.5rem; padding:1.75rem;
            box-shadow:0 4px 24px rgba(107,153,114,0.1);
            border:1px solid rgba(107,153,114,0.15);
            position:relative; display:flex; flex-direction:column; gap:1rem;
          ">
            <span style="
              font-family:'Cormorant Garamond',serif; font-size:4.5rem;
              color:#9EC4A4; position:absolute; top:0.1rem; left:1rem;
              opacity:0.3; line-height:1; pointer-events:none;
            ">"</span>
            <p style="color:#6B5E57; line-height:1.7; font-size:0.92rem; margin:0; position:relative; padding-top:1rem;">
              "Não imaginei que uma massagem poderia ser tão diferente. Ela não é só relaxante — é cirúrgica. Cada ponto que doía foi trabalhado com cuidado e técnica."
            </p>
            <div style="display:flex; align-items:center; gap:0.75rem; padding-top:0.75rem; border-top:1px solid rgba(107,153,114,0.15);">
              <div style="
                width:36px; height:36px; border-radius:9999px; flex-shrink:0;
                background:linear-gradient(135deg, #9EC4A4, #6B9972);
                display:flex; align-items:center; justify-content:center;
                font-family:'Cormorant Garamond',serif; font-size:1rem;
                color:white; font-weight:600;
              ">F</div>
              <div style="flex:1;">
                <p style="margin:0; font-weight:700; color:#2D2825; font-size:0.88rem;">Fernanda R.</p>
                <p style="margin:0; color:#9E8E87; font-size:0.78rem;">Saúde, SP</p>
              </div>
              <span style="
                display:inline-block;
                background:rgba(196,148,62,0.12); border:1px solid rgba(196,148,62,0.35);
                color:#A67B2A; font-size:0.7rem; font-weight:700;
                padding:0.25rem 0.65rem; border-radius:9999px; white-space:nowrap;
              ">Diferença real</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── BENEFÍCIOS ── -->
    <section style="padding:4rem 1.5rem; background:#FAF8F4;">
      <div style="max-width:700px; margin:0 auto; text-align:center;">
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; color:#2D2825; margin:0 0 2.5rem;
        ">Benefícios de uma sessão</h2>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1rem;">
          <div v-for="b in [
            { icon:'😌', label:'Alívio de tensão' },
            { icon:'😴', label:'Melhora do sono' },
            { icon:'💪', label:'Relaxamento muscular' },
            { icon:'🧠', label:'Redução do estresse' },
            { icon:'🩸', label:'Melhora da circulação' },
            { icon:'🌟', label:'Bem-estar geral' },
          ]" :key="b.label" style="
            background:white; border-radius:1rem; padding:1.25rem 1rem;
            border:1px solid rgba(107,153,114,0.12);
            display:flex; flex-direction:column; align-items:center; gap:0.5rem;
          ">
            <span style="font-size:1.75rem;">{{ b.icon }}</span>
            <span style="font-size:0.85rem; font-weight:700; color:#4A7050;">{{ b.label }}</span>
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
            {
              icon:'🦴',
              titulo:'Anatomia e biomecânica',
              texto:'Conhecimento profundo da musculatura, articulações e fáscias permite identificar a origem real da tensão ou dor — não só o sintoma.'
            },
            {
              icon:'🔬',
              titulo:'Avaliação clínica antes de tocar',
              texto:'Antes de cada sessão há uma escuta ativa. Histórico, postura e queixas são considerados para escolher a técnica certa para o seu caso.'
            },
            {
              icon:'⚕️',
              titulo:'Segurança em casos complexos',
              texto:'Hérnias, lesões musculares, pós-cirúrgico, gestantes — situações que exigem cuidado especializado para não piorar o que já existe.'
            },
            {
              icon:'🎯',
              titulo:'Objetivo terapêutico real',
              texto:'A sessão não é padronizada. Cada escolha de pressão, área e técnica tem uma justificativa clínica — focada em resultados concretos.'
            },
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

    <!-- ── SOBRE A PROFISSIONAL ── -->
    <section style="padding:4rem 1.5rem; background:#FAF8F4;">
      <div style="max-width:860px; margin:0 auto;">
        <p style="font-size:0.8rem; font-weight:700; color:#C4943E; text-transform:uppercase; letter-spacing:0.08em; text-align:center; margin:0 0 0.5rem;">
          ✦ Quem cuida de você
        </p>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; text-align:center;
          color:#2D2825; margin:0 0 2.5rem;
        ">Sobre a Dra. Viviana Tavares</h2>

        <div style="
          display:flex; flex-wrap:wrap; align-items:center; gap:2.5rem;
          background:white; border-radius:1.5rem; padding:2rem 2rem;
          box-shadow:0 4px 24px rgba(107,153,114,0.1);
          border:1px solid rgba(107,153,114,0.15);
        ">
          <!-- Foto -->
          <div style="flex-shrink:0; display:flex; justify-content:center; width:100%; max-width:220px; margin:0 auto;">
            <img
              :src="'/foto-viviana.png'"
              alt="Dra. Viviana Tavares Campos — Fisioterapeuta"
              style="
                width:200px; height:200px; object-fit:cover;
                border-radius:9999px;
                box-shadow:0 6px 28px rgba(107,153,114,0.25);
                border:4px solid rgba(196,148,62,0.25);
              "
            />
          </div>

          <!-- Texto -->
          <div style="flex:1; min-width:260px;">
            <!-- Linha de credenciais -->
            <p style="
              font-size:0.78rem; font-weight:700; color:#4A7050;
              text-transform:uppercase; letter-spacing:0.05em; margin:0 0 1rem;
            ">
              Formada em Fisioterapia · CREFITO 450602-F · São Paulo · Atendimento domiciliar
            </p>

            <p style="color:#6B5E57; line-height:1.75; font-size:0.98rem; margin:0 0 1rem;">
              Minha formação em Fisioterapia me dá uma visão clínica da massagem que vai muito além do relaxamento.
              Sei exatamente <strong style="color:#4A7050;">quais estruturas estão envolvidas</strong> no que você sente,
              qual técnica vai agir de forma mais eficaz e o que evitar para não gerar lesão.
            </p>
            <p style="color:#6B5E57; line-height:1.75; font-size:0.98rem; margin:0 0 1rem;">
              Cada sessão é pensada para o <strong style="color:#4A7050;">seu corpo, suas necessidades e seus objetivos</strong> — com o rigor de quem estudou anos para entender o movimento humano.
            </p>
            <p style="color:#6B5E57; line-height:1.75; font-size:0.98rem; margin:0 0 1.25rem;">
              Como fisioterapeuta e mulher, entendo a importância de se sentir segura e acolhida durante uma sessão.
            </p>

            <div style="display:flex; align-items:center; gap:0.875rem; padding-top:1.25rem; border-top:1px solid rgba(107,153,114,0.15);">
              <div style="
                width:42px; height:42px; border-radius:9999px; flex-shrink:0;
                background:linear-gradient(135deg, #9EC4A4, #6B9972);
                display:flex; align-items:center; justify-content:center;
                font-family:'Cormorant Garamond',serif; font-size:1.1rem;
                color:white; font-weight:600;
              ">V</div>
              <div>
                <p style="margin:0; font-weight:700; color:#2D2825; font-size:0.95rem;">Dra. Viviana Tavares Campos</p>
                <p style="margin:0; color:#9E8E87; font-size:0.8rem;">Fisioterapeuta · CREFITO 450602-F · São Paulo</p>
              </div>
            </div>
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
      <div style="max-width:560px; margin:0 auto; position:relative;">
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.8rem,4vw,2.6rem);
          font-weight:600; color:white; margin:0 0 1rem; line-height:1.2;
        ">
          Pronta para se cuidar?
        </h2>
        <p style="color:rgba(255,255,255,0.88); margin:0 0 2rem; line-height:1.7;">
          Agende sua sessão agora pelo WhatsApp. Horários disponíveis durante a semana e fins de semana.
        </p>

        <!-- Informações práticas -->
        <div style="
          display:flex; flex-wrap:wrap; justify-content:center; gap:0.75rem;
          margin-bottom:2rem;
        ">
          <span style="
            display:inline-flex; align-items:center; gap:0.4rem;
            background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3);
            color:white; font-size:0.82rem; font-weight:600;
            padding:0.4rem 1rem; border-radius:9999px;
          ">📍 Atendimento domiciliar em São Paulo</span>
          <span style="
            display:inline-flex; align-items:center; gap:0.4rem;
            background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3);
            color:white; font-size:0.82rem; font-weight:600;
            padding:0.4rem 1rem; border-radius:9999px;
          ">⏱ Sessões de 60 ou 90 minutos</span>
          <span style="
            display:inline-flex; align-items:center; gap:0.4rem;
            background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3);
            color:white; font-size:0.82rem; font-weight:600;
            padding:0.4rem 1rem; border-radius:9999px;
          ">💬 Resposta rápida pelo WhatsApp</span>
        </div>

        <a :href="waLink" target="_blank" rel="noopener" @click="trackWhatsApp('cta')" style="
          display:inline-flex; align-items:center; gap:0.75rem;
          background:white; color:#A67B2A; font-weight:800; font-size:1.1rem;
          padding:1rem 2.2rem; border-radius:9999px; text-decoration:none;
          box-shadow:0 6px 28px rgba(0,0,0,0.15);
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Agendar agora — vagas limitadas
        </a>
        <p style="margin-top:0.875rem; font-size:0.82rem; color:rgba(255,255,255,0.7);">
          {{ phoneDisplay }}
        </p>
      </div>
    </section>

    <!-- ── FOOTER ── -->
    <footer style="padding:1.5rem; text-align:center; background:#1C2B1F;">
      <p style="font-size:0.8rem; color:rgba(255,255,255,0.35); margin:0;">
        © 2026 Dra. Viviana Tavares Campos · Fisioterapeuta · CREFITO 450602-F · Massagem Terapêutica · São Paulo
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
