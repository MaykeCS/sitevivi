<script setup lang="ts">
useSeoMeta({
  title: 'Dra. Viviana — Massagem Terapêutica',
  description: 'Massagem terapêutica especializada com Dra. Viviana Tavares Campos. Alívio de tensões, dores musculares e bem-estar. Agende sua sessão pelo WhatsApp.',
})

const whatsappLink = 'https://wa.me/5511960661934'
const whatsappMsg  = encodeURIComponent(
  'Olá, Dra. Viviana! Gostaria de saber mais sobre a massagem terapêutica e agendar uma sessão.'
)
const waLink = `${whatsappLink}?text=${whatsappMsg}`
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
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
          <path d="M14 2C14 2 8 8 8 14.5C8 18.09 10.69 21 14 21C17.31 21 20 18.09 20 14.5C20 8 14 2 14 2Z" fill="#6B9972" opacity="0.8"/>
          <path d="M14 21V26" stroke="#6B9972" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:1rem; color:#2D2825;">
          Dra. Viviana Tavares
        </span>
      </a>

      <a :href="waLink" target="_blank" rel="noopener" style="
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

        <!-- Ícone decorativo -->
        <div style="
          width:72px; height:72px; border-radius:9999px; margin:0 auto 1.5rem;
          background:linear-gradient(135deg, #EDD89F, #C4943E);
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 8px 24px rgba(196,148,62,0.3);
        ">
          <span style="font-size:2rem;">🤲</span>
        </div>

        <div style="
          display:inline-flex; align-items:center; gap:0.5rem;
          background:rgba(196,148,62,0.1); border:1px solid rgba(196,148,62,0.3);
          color:#A67B2A; font-size:0.8rem; font-weight:700;
          padding:0.4rem 1rem; border-radius:9999px;
          text-transform:uppercase; letter-spacing:0.05em; margin-bottom:1.5rem;
        ">
          ✦ Sessão presencial · São Paulo
        </div>

        <h1 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.4rem,6vw,3.8rem);
          font-weight:600; line-height:1.12;
          color:#2D2825; margin:0 0 1.25rem;
        ">
          Massagem Terapêutica<br>
          <span style="color:#C4943E;">que transforma</span>
        </h1>

        <p style="font-size:1.1rem; color:#6B5E57; line-height:1.7; max-width:520px; margin:0 auto 2rem;">
          Alívio real de tensões, dores musculares e estresse com técnicas terapêuticas especializadas.
          <strong style="color:#4A7050;">Cuide do seu corpo com quem entende.</strong>
        </p>

        <a :href="waLink" target="_blank" rel="noopener" style="
          display:inline-flex; align-items:center; gap:0.75rem;
          background:#25D366; color:white; font-weight:800; font-size:1.15rem;
          padding:1.1rem 2.4rem; border-radius:9999px; text-decoration:none;
          box-shadow:0 6px 28px rgba(37,211,102,0.45);
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Agendar minha sessão
        </a>
        <p style="margin-top:0.875rem; font-size:0.82rem; color:#9E8E87;">
          Atendimento com hora marcada · Resposta rápida
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
          color:#2D2825; margin:0 0 2.5rem;
        ">O que ofereço</h2>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.5rem;">
          <div v-for="m in [
            { emoji:'🌿', titulo:'Massagem Relaxante', texto:'Técnicas suaves para liberação de tensão muscular e sensação de leveza e bem-estar.' },
            { emoji:'💆', titulo:'Massagem Terapêutica', texto:'Trabalho direcionado em pontos de tensão e dor para resultados duradouros.' },
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

    <!-- ── SOBRE A PROFISSIONAL ── -->
    <section style="padding:4rem 1.5rem; background:#EEF5EF;">
      <div style="max-width:620px; margin:0 auto;">
        <div style="
          background:white; border-radius:1.5rem; padding:2rem 1.75rem;
          box-shadow:0 4px 24px rgba(107,153,114,0.1);
          border:1px solid rgba(107,153,114,0.15);
          position:relative;
        ">
          <span style="
            font-family:'Cormorant Garamond',serif; font-size:5rem;
            color:#9EC4A4; position:absolute; top:0.25rem; left:1.25rem;
            opacity:0.35; line-height:1; pointer-events:none;
          ">"</span>
          <div style="position:relative;">
            <p style="color:#6B5E57; line-height:1.75; font-size:1rem; margin:0 0 1.25rem;">
              Minha formação em Fisioterapia me dá uma visão clínica da massagem que vai além do relaxamento.
              Cada sessão é pensada para o <strong style="color:#4A7050;">seu corpo, suas necessidades e seus objetivos</strong>.
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
                <p style="margin:0; color:#9E8E87; font-size:0.8rem;">Fisioterapeuta</p>
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
      <div style="max-width:500px; margin:0 auto; position:relative;">
        <span style="font-size:2.5rem; display:block; margin-bottom:1rem;">🤲</span>
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
        <a :href="waLink" target="_blank" rel="noopener" style="
          display:inline-flex; align-items:center; gap:0.75rem;
          background:white; color:#A67B2A; font-weight:800; font-size:1.1rem;
          padding:1rem 2.2rem; border-radius:9999px; text-decoration:none;
          box-shadow:0 6px 28px rgba(0,0,0,0.15);
        ">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          (11) 96066-1934
        </a>
      </div>
    </section>

    <!-- ── FOOTER MÍNIMO ── -->
    <footer style="padding:1.5rem; text-align:center; background:#1C2B1F;">
      <p style="font-size:0.8rem; color:rgba(255,255,255,0.35); margin:0;">
        © {{ new Date().getFullYear() }} Dra. Viviana Tavares Campos · Massagem Terapêutica · São Paulo
      </p>
    </footer>

    <!-- ── BOTÃO FLUTUANTE WHATSAPP ── -->
    <a :href="waLink" target="_blank" rel="noopener" style="
      position:fixed; bottom:1.5rem; right:1.5rem; z-index:200;
      width:58px; height:58px; border-radius:9999px; background:#25D366;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 20px rgba(37,211,102,0.5); text-decoration:none;
    " aria-label="Falar no WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>

  </div>
</template>
