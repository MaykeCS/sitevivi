<script setup lang="ts">
// ─── SEO ─────────────────────────────────────────────────────────
useSeoMeta({
  title: 'Dra. Viviana — Fisioterapeuta',
  description: 'Fisioterapia domiciliar com carinho especial para idosos e Massagem Terapêutica',
  ogTitle: 'Dra. Viviana — Fisioterapeuta',
  ogDescription: 'Fisioterapia domiciliar com carinho especial para idosos e Massagem Terapêutica. Saúde, Vila Mariana, Indianópolis, Av Paulista e região.',
  ogType: 'website',
})

// ─── Estado do navbar ──────────────────────────────────────────────
const scrolled     = ref(false)
const menuOpen     = ref(false)
const photoLoaded  = ref(false)
const photoError   = ref(false)
// Usar binding dinâmico impede o Vite de tentar resolver as imagens
// como assets estáticos durante o build (arquivos adicionados pelo usuário)
const photoSrc      = '/foto-viviana.png'
const idosoSrc1     = '/imagem-idoso-1.png'
const idosoSrc2     = '/imagem-idoso-2.png'

const { public: { whatsappNumber } } = useRuntimeConfig()
const whatsappLink = `https://wa.me/${whatsappNumber}`
const whatsappMsg  = encodeURIComponent(
  'Olá, Dra. Viviana! Gostaria de agendar uma consulta de fisioterapia domiciliar.'
)

function waLink(msg = true) {
  return msg ? `${whatsappLink}?text=${whatsappMsg}` : whatsappLink
}

// ─── Scroll listener ──────────────────────────────────────────────
onMounted(() => {
  // Imagem pode já estar carregada do cache antes do Vue attachar o @load
  const imgEl = document.querySelector<HTMLImageElement>('.photo-frame img')
  if (imgEl?.complete) {
    if (imgEl.naturalWidth > 0) photoLoaded.value = true
    else photoError.value = true
  }

  const onScroll = () => { scrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', onScroll, { passive: true })

  // Intersection Observer para animações
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.12 }
  )

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
    observer.observe(el)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    observer.disconnect()
  })
})
</script>

<template>
  <div class="min-h-screen overflow-x-hidden" style="background-color:#FAF8F4; color:#2D2825;">

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  NAVBAR                                                     -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <nav class="navbar" :class="{ scrolled }">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a href="#inicio" class="flex items-center gap-2.5 text-decoration-none group">
          <span class="text-sage-400 text-xl">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2C14 2 8 8 8 14.5C8 18.09 10.69 21 14 21C17.31 21 20 18.09 20 14.5C20 8 14 2 14 2Z" fill="#6B9972" opacity="0.8"/>
              <path d="M14 6C14 6 9.5 10.5 9.5 15C9.5 17.48 11.52 19.5 14 19.5" stroke="#4A7050" stroke-width="1.2" fill="none"/>
              <path d="M14 21V26" stroke="#6B9972" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <span class="font-display font-semibold text-charcoal" style="font-size:1.05rem; letter-spacing:0.01em;">
            Dra. Viviana Tavares
          </span>
        </a>

        <!-- Links desktop -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="(item, i) in [
            { label:'Sobre', href:'#sobre' },
            { label:'Serviços', href:'#servicos' },
            { label:'Atendimento', href:'#domiciliar' },
            { label:'Contato', href:'#contato' },
          ]" :key="i"
            :href="item.href"
            class="text-sm font-semibold transition-colors"
            style="color:#6B5E57; text-decoration:none;"
            @mouseover="($event.target as HTMLElement).style.color = '#6B9972'"
            @mouseleave="($event.target as HTMLElement).style.color = '#6B5E57'"
          >
            {{ item.label }}
          </a>
          <a :href="waLink()" target="_blank" rel="noopener"
             class="btn-whatsapp-outline" style="font-size:0.875rem; padding:0.55rem 1.3rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Agendar Consulta
          </a>
        </div>

        <!-- Hamburger mobile -->
        <button class="md:hidden p-2" @click="menuOpen = !menuOpen" aria-label="Menu">
          <div class="w-6 flex flex-col gap-1.5 transition-all">
            <span class="block h-0.5 bg-charcoal rounded transition-all" :class="menuOpen ? 'rotate-45 translate-y-2' : ''" />
            <span class="block h-0.5 bg-charcoal rounded transition-all" :class="menuOpen ? 'opacity-0' : ''" />
            <span class="block h-0.5 bg-charcoal rounded transition-all" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''" />
          </div>
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition name="slide">
        <div v-if="menuOpen" class="md:hidden mt-4 rounded-2xl p-4 flex flex-col gap-3"
             style="background:rgba(250,248,244,0.97); backdrop-filter:blur(12px); border:1px solid rgba(107,153,114,0.15);">
          <a v-for="(item, i) in [
            { label:'Sobre mim', href:'#sobre' },
            { label:'Serviços', href:'#servicos' },
            { label:'Atendimento Domiciliar', href:'#domiciliar' },
            { label:'Contato', href:'#contato' },
          ]" :key="i"
            :href="item.href"
            class="block px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors"
            style="color:#4A7050; text-decoration:none; background:rgba(107,153,114,0.07);"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
          <a :href="waLink()" target="_blank" rel="noopener"
             class="btn-whatsapp text-center justify-center" style="margin-top:0.5rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Agendar pelo WhatsApp
          </a>
        </div>
      </Transition>
    </nav>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  HERO                                                       -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="inicio" class="relative min-h-screen flex items-center pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden grain-overlay">

      <!-- Background gradiente suave -->
      <div class="absolute inset-0 pointer-events-none" style="
        background:
          radial-gradient(ellipse 70% 60% at 80% 30%, rgba(158,196,164,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 10% 80%, rgba(240,230,224,0.5) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 50% 50%, rgba(196,148,62,0.05) 0%, transparent 70%);
      " />

      <!-- Folhas decorativas (flutuantes) — ocultas no mobile -->
      <svg class="leaf-decor animate-float hidden md:block" style="top:8%; left:3%; width:80px;"
           viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 5C40 5 15 35 15 70C15 96 26 115 40 135C54 115 65 96 65 70C65 35 40 5 40 5Z" fill="#6B9972"/>
        <line x1="40" y1="8" x2="40" y2="132" stroke="#4A7050" stroke-width="1.5"/>
        <line x1="40" y1="45" x2="25" y2="60" stroke="#4A7050" stroke-width="1"/>
        <line x1="40" y1="65" x2="55" y2="78" stroke="#4A7050" stroke-width="1"/>
        <line x1="40" y1="85" x2="24" y2="96" stroke="#4A7050" stroke-width="1"/>
      </svg>

      <svg class="leaf-decor animate-float-slow hidden md:block" style="top:15%; right:5%; width:60px; transform:rotate(30deg);"
           viewBox="0 0 60 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 4C30 4 8 28 8 55C8 74 17 90 30 106C43 90 52 74 52 55C52 28 30 4 30 4Z" fill="#9EC4A4"/>
        <line x1="30" y1="6" x2="30" y2="104" stroke="#6B9972" stroke-width="1.2"/>
        <line x1="30" y1="35" x2="18" y2="47" stroke="#6B9972" stroke-width="0.8"/>
        <line x1="30" y1="55" x2="42" y2="65" stroke="#6B9972" stroke-width="0.8"/>
      </svg>

      <svg class="leaf-decor animate-float-slower hidden md:block" style="bottom:20%; left:8%; width:50px; transform:rotate(-20deg);"
           viewBox="0 0 50 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 4C25 4 5 24 5 46C5 62 13 75 25 86C37 75 45 62 45 46C45 24 25 4 25 4Z" fill="#C9A84C"/>
        <line x1="25" y1="5" x2="25" y2="84" stroke="#A67B2A" stroke-width="1"/>
      </svg>

      <svg class="leaf-decor animate-float hidden md:block" style="bottom:10%; right:10%; width:70px; transform:rotate(15deg);"
           viewBox="0 0 70 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 4C35 4 10 32 10 64C10 88 20 106 35 124C50 106 60 88 60 64C60 32 35 4 35 4Z" fill="#6B9972"/>
        <line x1="35" y1="6" x2="35" y2="122" stroke="#4A7050" stroke-width="1.3"/>
        <line x1="35" y1="42" x2="22" y2="55" stroke="#4A7050" stroke-width="0.9"/>
        <line x1="35" y1="65" x2="48" y2="76" stroke="#4A7050" stroke-width="0.9"/>
        <line x1="35" y1="85" x2="20" y2="95" stroke="#4A7050" stroke-width="0.9"/>
      </svg>

      <!-- Conteúdo do hero -->
      <div class="max-w-6xl mx-auto px-6 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <!-- Texto (esquerda) -->
          <div class="order-2 lg:order-1">
            <div class="hero-badge reveal">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#4A7050" stroke-width="1.5"/>
                <circle cx="6" cy="6" r="2" fill="#4A7050"/>
              </svg>
              Fisioterapia Domiciliar · Zona Sul de São Paulo
            </div>

            <h1 class="font-display reveal delay-100 mt-5"
                style="font-size:clamp(2.5rem,5vw,4rem); font-weight:600; line-height:1.12; letter-spacing:-0.01em;">
              Dra. Viviana<br>
              <span style="color:#6B9972;">Tavares Campos</span>
            </h1>

            <p class="reveal delay-200 mt-5 leading-relaxed" style="font-size:1.15rem; color:#6B5E57; max-width:440px;">
              Cuidado especializado e carinhoso para seus familiares idosos,
              <strong style="color:#4A7050; font-weight:700;">no conforto e segurança do lar.</strong>
            </p>

            <!-- Estrelinhas / credenciais sutis -->
            <div class="reveal delay-300 flex flex-wrap gap-3 mt-7">
              <span v-for="tag in ['Formada em Fisioterapia','Atendimento Humanizado','Foco em Idosos','Domiciliar']"
                    :key="tag"
                    class="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
                    style="background:white; border:1px solid rgba(107,153,114,0.2); color:#4A7050;">
                <span style="color:#C4943E;">✦</span>
                {{ tag }}
              </span>
            </div>

            <!-- CTA buttons -->
            <div class="reveal delay-400 flex flex-col sm:flex-row gap-4 mt-8">
              <a :href="waLink()" target="_blank" rel="noopener" class="btn-whatsapp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Agendar pelo WhatsApp
              </a>
              <a href="#sobre" class="inline-flex items-center gap-2 font-semibold transition-colors"
                 style="color:#6B9972; text-decoration:none; padding:0.75rem 0; font-size:0.95rem;">
                Conheça mais
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Foto (direita) -->
          <div class="order-1 lg:order-2 flex justify-center">
            <div class="photo-wrapper">
              <!-- Anel animado externo -->
              <div class="photo-ring" />

              <!-- Frame orgânico com a foto -->
              <div class="photo-frame">
                <!-- FOTO DA DRA. VIVIANA -->
                <!-- Coloque o arquivo foto-viviana.png na pasta /public/ -->
                <img
                  :src="photoSrc"
                  alt="Dra. Viviana Tavares Campos — Fisioterapeuta"
                  @load="photoLoaded = true"
                  @error="photoError = true"
                  :class="photoLoaded ? 'opacity-100' : 'opacity-0'"
                  style="transition:opacity 0.5s; position:absolute; inset:0;"
                >

                <!-- Placeholder elegante quando a foto ainda não foi adicionada -->
                <div v-if="photoError || !photoLoaded" class="photo-monogram">
                  <!-- Silhueta ilustrada -->
                  <svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Círculo cabeça -->
                    <circle cx="90" cy="70" r="46" fill="rgba(255,255,255,0.25)"/>
                    <circle cx="90" cy="70" r="46" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
                    <!-- Corpo -->
                    <path d="M30 200C30 160 55 130 90 130C125 130 150 160 150 200V240H30V200Z" fill="rgba(255,255,255,0.2)"/>
                    <path d="M30 200C30 160 55 130 90 130C125 130 150 160 150 200" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
                    <!-- Jaleco / jaleco detalhe -->
                    <path d="M62 150L70 200H110L118 150" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" fill="none"/>
                    <!-- Cruz médica no jaleco -->
                    <rect x="84" y="170" width="12" height="4" rx="2" fill="rgba(255,255,255,0.7)"/>
                    <rect x="88" y="166" width="4" height="12" rx="2" fill="rgba(255,255,255,0.7)"/>
                  </svg>
                  <p class="font-display text-white text-center mt-2" style="font-size:1.1rem; opacity:0.8; padding:0 1rem;">
                    Dra. Viviana<br>Tavares Campos
                  </p>
                  <p class="text-white text-center text-xs mt-1" style="opacity:0.55; font-size:0.7rem; padding:0 1rem;">
                    Adicione sua foto em /public/foto-viviana.png
                  </p>
                </div>

                <!-- Decoração interna (folhinha) -->
                <svg style="position:absolute; bottom:1rem; right:1rem; width:48px; opacity:0.3;" viewBox="0 0 48 80" fill="none">
                  <path d="M24 4C24 4 4 22 4 42C4 58 12 70 24 76C36 70 44 58 44 42C44 22 24 4 24 4Z" fill="white"/>
                  <line x1="24" y1="5" x2="24" y2="74" stroke="white" stroke-width="1"/>
                </svg>
              </div>

              <!-- Badge flutuante: Fisioterapeuta -->
              <div class="photo-badge-bottom absolute -bottom-3 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-lg"
                   style="background:white; border:1px solid rgba(107,153,114,0.2); z-index:10;">
                <span style="font-size:1.3rem;">💚</span>
                <div>
                  <p class="font-bold text-xs" style="color:#4A7050; margin:0; line-height:1.2;">Fisioterapeuta</p>
                  <!-- <p class="text-xs" style="color:#9E8E87; margin:0; line-height:1.2;">CREFITO Registrada</p> -->
                </div>
              </div>

              <!-- Badge flutuante: Domiciliar -->
              <div class="photo-badge-top absolute top-4 -right-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-lg"
                   style="background:#6B9972; z-index:10;">
                <span style="font-size:1.1rem;">🏠</span>
                <p class="font-bold text-xs text-white" style="margin:0; line-height:1.3;">Atendimento<br>Domiciliar</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  SOBRE MIM                                                  -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="sobre" class="py-14 md:py-24" style="background:#EEF5EF;">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          <!-- Ilustração idoso + fisio -->
          <div class="lg:w-2/5 flex justify-center reveal-left">
            <div class="relative">
              <div style="
                width: 280px; height: 280px;
                background: linear-gradient(135deg, #9EC4A4 0%, #6B9972 100%);
                border-radius: 60% 40% 50% 50% / 50% 55% 45% 55%;
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 20px 60px rgba(107,153,114,0.25);
              ">
                <!-- <img :src="idosoSrc1" alt="Idosa recebendo fisioterapia"
                     style="width:100%; height:100%; object-fit:cover;"> -->

                <!-- Vetoriais: coração + estetoscópio -->
                <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <!-- Coração grande -->
                  <path d="M95 160
                    C95 160 28 118 28 68
                    C28 44 46 26 68 26
                    C80 26 91 33 95 38
                    C99 33 110 26 122 26
                    C144 26 162 44 162 68
                    C162 118 95 160 95 160Z"
                    fill="white" opacity="0.92"/>

                  <!-- Brilho interno do coração -->
                  <path d="M68 44 C58 50 52 62 54 74"
                    stroke="rgba(255,255,255,0.6)" stroke-width="5"
                    stroke-linecap="round" fill="none"/>

                  <!-- Estetoscópio: arco superior -->
                  <path d="M72 88
                    C72 72 84 62 95 62
                    C106 62 118 72 118 88"
                    stroke="#4A7050" stroke-width="5"
                    stroke-linecap="round" fill="none"/>

                  <!-- Estetoscópio: hastes (auriculares) -->
                  <line x1="72" y1="88" x2="65" y2="106"
                    stroke="#4A7050" stroke-width="5" stroke-linecap="round"/>
                  <line x1="118" y1="88" x2="125" y2="106"
                    stroke="#4A7050" stroke-width="5" stroke-linecap="round"/>

                  <!-- Oliva esquerda -->
                  <circle cx="65" cy="109" r="5" fill="#4A7050"/>
                  <!-- Oliva direita -->
                  <circle cx="125" cy="109" r="5" fill="#4A7050"/>

                  <!-- Tubo descendo -->
                  <path d="M95 62 L95 130"
                    stroke="#4A7050" stroke-width="5"
                    stroke-linecap="round"/>

                  <!-- Campânula (círculo do estetoscópio) -->
                  <circle cx="95" cy="138" r="14"
                    fill="#4A7050"/>
                  <circle cx="95" cy="138" r="8"
                    fill="white" opacity="0.3"/>
                </svg>
              </div>

              <!-- Balão de fala / citação -->
              <div class="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl shadow-lg max-w-xs"
                   style="background:white; border-left:3px solid #C4943E;">
                <p class="font-display text-sm leading-snug" style="color:#2D2825; font-style:italic;">
                  "Cuidar de quem viveu é um presente."
                </p>
              </div>
            </div>
          </div>

          <!-- Texto -->
          <div class="lg:w-3/5">
            <p class="font-semibold text-sm uppercase tracking-widest reveal" style="color:#C4943E;">
              ✦ Sobre mim
            </p>
            <h2 class="font-display reveal delay-100 mt-3" style="font-size:clamp(1.9rem,3.5vw,2.8rem); font-weight:600; line-height:1.18;">
              Uma fisioterapeuta que<br>
              <em style="color:#6B9972;">cuida com o coração</em>
            </h2>

            <div class="reveal delay-200 flex gap-4 mt-6">
              <div class="about-accent" />
              <p class="leading-relaxed text-lg" style="color:#6B5E57;">
                Desde a graduação, o que me move é a <strong style="color:#2D2825;">certeza de que cada pessoa merece atenção
                individualizada, gentileza e respeito</strong> — especialmente em momentos de vulnerabilidade.
              </p>
            </div>

            <p class="reveal delay-300 leading-relaxed mt-5" style="color:#6B5E57;">
              Escolhi o atendimento domiciliar porque acredito que
              o ambiente familiar faz parte do processo de cura. Aqui, você não precisa enfrentar
              o deslocamento — <strong style="color:#4A7050;">eu chego até você com dedicação e carinho.</strong>
            </p>

            <p class="reveal delay-400 leading-relaxed mt-4" style="color:#6B5E57;">
              Minha paixão são os idosos: pessoas que têm histórias lindas para contar e
              que merecem cada momento de cuidado com <em>paciência, leveza e muita atenção</em>.
            </p>

            <!-- Valores -->
            <div class="reveal delay-500 grid grid-cols-3 gap-4 mt-8">
              <div v-for="valor in [
                { emoji:'💛', label:'Empatia' },
                { emoji:'🌿', label:'Respeito' },
                { emoji:'🤝', label:'Dedicação' },
              ]" :key="valor.label"
                class="flex flex-col items-center gap-2 p-4 rounded-2xl text-center"
                style="background:white; border:1px solid rgba(107,153,114,0.15); box-shadow:0 2px 12px rgba(107,153,114,0.08);">
                <span style="font-size:1.8rem;">{{ valor.emoji }}</span>
                <p class="font-bold text-sm" style="color:#4A7050; margin:0;">{{ valor.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  SERVIÇOS                                                   -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="servicos" class="py-14 md:py-24" style="background:#FAF8F4;">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <p class="font-semibold text-sm uppercase tracking-widest reveal" style="color:#C4943E;">
            ✦ Serviços
          </p>
          <h2 class="font-display reveal delay-100 mt-3" style="font-size:clamp(1.9rem,3.5vw,2.8rem); font-weight:600; line-height:1.18;">
            Como posso te ajudar
          </h2>
          <p class="reveal delay-200 mt-4 leading-relaxed" style="color:#6B5E57; font-size:1.05rem;">
            Cada atendimento é único, pensado no ritmo e nas necessidades de quem precisa de cuidado.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(servico, i) in [
            {
              emoji: '🦵',
              titulo: 'Reabilitação Motora',
              texto: 'Exercícios para recuperar movimentos, fortalecer músculos e melhorar a independência no dia a dia.',
              cor: '#EEF5EF',
            },
            {
              emoji: '🛡️',
              titulo: 'Prevenção de Quedas',
              texto: 'Treino de equilíbrio, coordenação e força para reduzir o risco de quedas e proteger a autonomia.',
              cor: '#FDF8EE',
            },
            {
              emoji: '🫁',
              titulo: 'Fisioterapia Respiratória',
              texto: 'Técnicas para melhorar a função pulmonar, a respiração e o bem-estar geral em casa.',
              cor: '#F0EDF8',
            },
            /* { emoji: '🤲', titulo: 'Massagem Terapêutica', texto: 'Massagens relaxantes e terapêuticas para alívio de tensões, dores musculares e melhora do bem-estar.', cor: '#FDF0E8' }, */
            {
              emoji: '👨‍👩‍👧',
              titulo: 'Orientação Familiar',
              texto: 'Ensino a família como ajudar nos cuidados diários, tornando todos parte da recuperação.',
              cor: '#FFF0F0',
            },
          ]" :key="servico.titulo"
            class="service-card reveal"
            :class="`delay-${(i + 1) * 100}`"
           
          >
            <div class="service-icon" :style="`background:${servico.cor};`">
              <span>{{ servico.emoji }}</span>
            </div>
            <h3 class="font-display font-semibold mb-3" style="font-size:1.25rem; line-height:1.25; color:#2D2825;">
              {{ servico.titulo }}
            </h3>
            <p class="text-sm leading-relaxed" style="color:#6B5E57;">
              {{ servico.texto }}
            </p>
          </div>
        </div>

        <!-- CTA embaixo dos serviços -->
        <div class="text-center mt-12 reveal">
          <p class="mb-5 text-base" style="color:#6B5E57;">
            Tem dúvidas sobre qual serviço é o ideal para sua família?
          </p>
          <a :href="waLink()" target="_blank" rel="noopener" class="btn-whatsapp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Tire suas dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  POR QUE DOMICILIAR                                         -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="domiciliar" class="py-14 md:py-24 relative overflow-hidden" style="background:#2D4A32;">
      <!-- Padrão de folhas no fundo -->
      <div class="absolute inset-0 pointer-events-none" style="opacity:0.06;">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaves" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 10C60 10 30 40 30 65C30 82 44 95 60 110C76 95 90 82 90 65C90 40 60 10 60 10Z" fill="white"/>
              <line x1="60" y1="12" x2="60" y2="108" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaves)"/>
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-6 relative">
        <div class="flex flex-col lg:flex-row gap-16 items-center">

          <!-- Texto -->
          <div class="lg:w-1/2">
            <!-- Ilustração idoso em casa -->
            <!-- <div class="hidden lg:flex justify-start mb-8">
              <img :src="idosoSrc2" alt="Atendimento domiciliar a idoso"
                   style="width:180px; height:130px; object-fit:cover; border-radius:1rem; opacity:0.85;">
            </div> -->

            <p class="font-semibold text-sm uppercase tracking-widest reveal" style="color:#C4943E;">
              ✦ Por que domiciliar?
            </p>
            <h2 class="font-display reveal delay-100 mt-3 text-white" style="font-size:clamp(1.9rem,3.5vw,2.8rem); font-weight:600; line-height:1.18;">
              O cuidado que vai<br>
              <em style="color:#9EC4A4;">até você</em>
            </h2>
            <p class="reveal delay-200 mt-5 leading-relaxed" style="color:rgba(255,255,255,0.75); font-size:1.05rem;">
              Para muitos idosos, o deslocamento até uma clínica é um obstáculo que infelizmente
              pode adiar o tratamento. Na fisioterapia domiciliar, esse problema deixa de existir.
            </p>
          </div>

          <!-- Benefícios -->
          <div class="lg:w-1/2 flex flex-col gap-5">
            <div v-for="(b, i) in [
              { icon:'🏠', titulo:'Conforto e segurança do lar', texto:'O paciente se sente mais tranquilo e confiante no próprio ambiente, o que contribui para o bem-estar.' },
              { icon:'🚫', titulo:'Sem deslocamentos cansativos', texto:'Especialmente para idosos, evitar o transporte reduz riscos e economiza energia para o que realmente importa.' },
              { icon:'👁️', titulo:'Tratamento 100% personalizado', texto:'Avalio a rotina, o espaço e as necessidades reais de cada pessoa para criar um plano único.' },
              { icon:'👨‍👩‍👧', titulo:'Família integrada ao cuidado', texto:'Os familiares aprendem a ajudar corretamente, tornando o cuidado uma experiência de toda a família.' },
            ]" :key="b.titulo"
              class="benefit-item reveal"
              :class="`delay-${(i + 1) * 100}`"
             
            >
              <div class="benefit-icon" style="background:rgba(255,255,255,0.1); box-shadow:none;">
                <span>{{ b.icon }}</span>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1" style="font-size:1rem;">{{ b.titulo }}</h4>
                <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.65);">{{ b.texto }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  MANIFESTO / VOZ DA DRA.                                   -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section class="py-14 md:py-24" style="background:#FAF8F4;">
      <div class="max-w-3xl mx-auto px-4 md:px-6">
        <div class="manifesto-card reveal" style="
          background: white;
          border-radius: 1.5rem;
          padding: 2rem 1.75rem;
          box-shadow: 0 8px 48px rgba(107,153,114,0.12);
          border: 1px solid rgba(107,153,114,0.15);
          position: relative;
        ">
          <!-- Aspas decorativas -->
          <span class="manifesto-quote" style="
            font-family: 'Cormorant Garamond', serif;
            font-size: 8rem;
            line-height: 1;
            color: #9EC4A4;
            position: absolute;
            top: 0.5rem;
            left: 2rem;
            opacity: 0.35;
            pointer-events: none;
          ">"</span>

          <div style="position: relative;">
            <p class="leading-relaxed reveal delay-100" style="color:#6B5E57; font-size:1.05rem;">
              Sou fisioterapeuta e, desde que me formei, descobri que meu coração pertence ao cuidado com os idosos. 💛
            </p>
            <p class="leading-relaxed reveal delay-200 mt-4" style="color:#6B5E57; font-size:1.05rem;">
              Trabalhar com eles é muito mais do que reabilitar um joelho ou fortalecer uma musculatura — é devolver autonomia, autoestima e vontade de viver. Cada pequeno avanço, como voltar a subir um degrau sozinho ou conseguir pentear o próprio cabelo sem dor, é uma conquista gigante.
            </p>
            <p class="leading-relaxed reveal delay-300 mt-4" style="color:#6B5E57; font-size:1.05rem;">
              Eu aprendo todos os dias com as histórias, a sabedoria e a resiliência de cada paciente. A fisioterapia geriátrica me ensinou que envelhecer pode (e deve) ser um processo ativo, digno e cheio de movimento.
            </p>
            <p class="leading-relaxed reveal delay-400 mt-4" style="color:#6B5E57; font-size:1.05rem;">
              É uma honra poder contribuir para que meus pacientes tenham mais qualidade de vida, mais independência e mais confiança em si mesmos. <strong style="color:#4A7050;">Isso, para mim, é propósito.</strong>
            </p>

            <!-- Assinatura -->
            <div class="reveal delay-500 flex items-center gap-3 mt-8 pt-6" style="border-top: 1px solid rgba(107,153,114,0.2);">
              <div style="
                width: 44px; height: 44px;
                border-radius: 9999px;
                background: linear-gradient(135deg, #9EC4A4, #6B9972);
                display: flex; align-items: center; justify-content: center;
                font-family: 'Cormorant Garamond', serif;
                font-size: 1.1rem;
                color: white;
                font-weight: 600;
                flex-shrink: 0;
              ">V</div>
              <div>
                <p style="margin:0; font-weight:700; color:#2D2825; font-size:0.95rem;">Dra. Viviana Tavares Campos</p>
                <p style="margin:0; color:#9E8E87; font-size:0.8rem;">Fisioterapeuta · CREFITO 450602-F</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  DEPOIMENTOS (comentado temporariamente)                   -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--
    <section id="depoimentos" class="py-24" style="background:#FAF8F4;">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center max-w-xl mx-auto mb-14">
          <p class="font-semibold text-sm uppercase tracking-widest reveal" style="color:#C4943E;">
            ✦ Depoimentos
          </p>
          <h2 class="font-display reveal delay-100 mt-3" style="font-size:clamp(1.9rem,3.5vw,2.6rem); font-weight:600; line-height:1.2;">
            O que as famílias dizem
          </h2>
          <p class="reveal delay-200 mt-4" style="color:#6B5E57; font-size:0.9rem;">
            Depoimentos em breve. Seja um dos primeiros a compartilhar sua experiência! 😊
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ...cards de depoimentos...
        </div>
      </div>
    </section>
    -->

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  CTA FINAL                                                  -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <section id="contato" class="relative py-16 md:py-28 overflow-hidden grain-overlay" style="background:#6B9972;">

      <!-- Folhas decorativas -->
      <svg class="leaf-decor animate-float" style="top:10%; left:5%; width:90px; opacity:0.15;"
           viewBox="0 0 80 140" fill="none">
        <path d="M40 5C40 5 15 35 15 70C15 96 26 115 40 135C54 115 65 96 65 70C65 35 40 5 40 5Z" fill="white"/>
        <line x1="40" y1="8" x2="40" y2="132" stroke="white" stroke-width="1.5"/>
      </svg>
      <svg class="leaf-decor animate-float-slow" style="bottom:10%; right:8%; width:70px; opacity:0.12; transform:rotate(25deg);"
           viewBox="0 0 70 120" fill="none">
        <path d="M35 4C35 4 10 30 10 58C10 80 20 98 35 115C50 98 60 80 60 58C60 30 35 4 35 4Z" fill="white"/>
        <line x1="35" y1="5" x2="35" y2="113" stroke="white" stroke-width="1.2"/>
      </svg>

      <div class="max-w-4xl mx-auto px-6 text-center relative">
        <div class="reveal">
          <span style="font-size:3rem; display:block; margin-bottom:1rem;">💚</span>
        </div>
        <h2 class="font-display reveal delay-100 text-white" style="font-size:clamp(2rem,4vw,3.2rem); font-weight:600; line-height:1.15;">
          Pronto para começar<br>o cuidado com carinho?
        </h2>
        <p class="reveal delay-200 mt-5 leading-relaxed" style="color:rgba(255,255,255,0.85); font-size:1.1rem; max-width:520px; margin-left:auto; margin-right:auto;">
          Entre em contato pelo WhatsApp e vamos conversar sobre como posso ajudar seu familiar
          com o cuidado que ele merece, dentro do conforto do lar.
        </p>

        <div class="reveal delay-300 flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a :href="waLink()" target="_blank" rel="noopener"
             class="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all"
             style="background:white; color:#4A7050; text-decoration:none; box-shadow:0 8px 30px rgba(0,0,0,0.2);"
             @mouseover="($event.currentTarget as HTMLElement).style.transform = 'translateY(-3px) scale(1.02)'"
             @mouseleave="($event.currentTarget as HTMLElement).style.transform = 'none'"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            (11) 92469-6645
          </a>
        </div>

        <!-- Informações adicionais -->
        <div class="reveal delay-400 flex flex-wrap justify-center gap-6 mt-10 text-sm" style="color:rgba(255,255,255,0.75);">
          <span class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
            Saúde, São Judas, Vila Mariana, Indianópolis e região
          </span>
          <span class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Agendamento flexível
          </span>
          <span class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Atendimento humanizado
          </span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  FOOTER                                                     -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <footer class="py-10" style="background:#1C2B1F; color:rgba(255,255,255,0.6);">
      <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
            <path d="M14 2C14 2 8 8 8 14.5C8 18.09 10.69 21 14 21C17.31 21 20 18.09 20 14.5C20 8 14 2 14 2Z" fill="#6B9972" opacity="0.8"/>
            <path d="M14 21V26" stroke="#6B9972" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <div>
            <p class="font-display font-semibold text-white" style="font-size:0.95rem; margin:0;">Dra. Viviana Tavares Campos</p>
            <p style="font-size:0.8rem; margin:0; color:rgba(255,255,255,0.45);">Fisioterapeuta · CREFITO 450602-F</p>
          </div>
        </div>

        <div class="flex gap-6 text-sm">
          <a :href="waLink()" target="_blank" rel="noopener"
             class="transition-colors" style="color:rgba(255,255,255,0.6); text-decoration:none;"
             @mouseover="($event.target as HTMLElement).style.color = '#9EC4A4'"
             @mouseleave="($event.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)'">
            WhatsApp
          </a>
          <a href="#sobre" class="transition-colors" style="color:rgba(255,255,255,0.6); text-decoration:none;"
             @mouseover="($event.target as HTMLElement).style.color = '#9EC4A4'"
             @mouseleave="($event.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)'">
            Sobre
          </a>
          <a href="#servicos" class="transition-colors" style="color:rgba(255,255,255,0.6); text-decoration:none;"
             @mouseover="($event.target as HTMLElement).style.color = '#9EC4A4'"
             @mouseleave="($event.target as HTMLElement).style.color = 'rgba(255,255,255,0.6)'">
            Serviços
          </a>
        </div>

        <p style="font-size:0.8rem; color:rgba(255,255,255,0.35);">
          © {{ new Date().getFullYear() }} Dra. Viviana Tavares Campos
        </p>
      </div>
    </footer>

    <!-- ═══════════════════════════════════════════════════════════ -->
    <!--  BOTÃO WHATSAPP FLUTUANTE                                   -->
    <!-- ═══════════════════════════════════════════════════════════ -->
    <a :href="waLink()" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Falar no WhatsApp">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>

  </div>
</template>

<style scoped>
/* Transição do menu mobile */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
