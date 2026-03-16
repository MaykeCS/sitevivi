<script setup lang="ts">
useSeoMeta({
  title: 'Fisioterapia Domiciliar em São Paulo | Dra. Viviana Tavares Campos',
  description: 'Fisioterapia domiciliar para idosos em Saúde, Vila Mariana, Indianópolis, Av Paulista, Santa Cruz, Vergueiro e região. Agende pelo WhatsApp.',
  ogTitle: 'Dra. Viviana — Fisioterapia Domiciliar · Zona Sul SP',
  ogDescription: 'Fisioterapia domiciliar para idosos. Saúde, Vila Mariana, Indianópolis, Av Paulista e região. Atendimento no conforto do seu lar.',
  ogType: 'website',
})

const { public: { whatsappNumber } } = useRuntimeConfig()
const whatsappLink = `https://wa.me/${whatsappNumber}`
const whatsappMsg  = encodeURIComponent(
  'Olá, Dra. Viviana! Vi seu anúncio e gostaria de saber mais sobre a fisioterapia domiciliar.'
)
const waLink = `${whatsappLink}?text=${whatsappMsg}`
</script>

<template>
  <div style="font-family:'Nunito',sans-serif; background:#FAF8F4; color:#2D2825; overflow-x:hidden;">

    <!-- ── HEADER MÍNIMO ── -->
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
        Agendar
      </a>
    </header>

    <!-- ── HERO ── -->
    <section style="
      min-height:100vh; display:flex; align-items:center;
      padding:6rem 1.5rem 3rem;
      background:linear-gradient(160deg, #EEF5EF 0%, #FAF8F4 60%);
      position:relative; overflow:hidden;
    ">
      <!-- Círculo decorativo fundo -->
      <div style="
        position:absolute; top:-80px; right:-80px;
        width:400px; height:400px; border-radius:9999px;
        background:radial-gradient(circle, rgba(107,153,114,0.15) 0%, transparent 70%);
        pointer-events:none;
      "/>
      <div style="
        position:absolute; bottom:-60px; left:-60px;
        width:300px; height:300px; border-radius:9999px;
        background:radial-gradient(circle, rgba(196,148,62,0.08) 0%, transparent 70%);
        pointer-events:none;
      "/>

      <div style="max-width:680px; margin:0 auto; text-align:center; position:relative;">

        <!-- Foto da Dra. Viviana -->
        <div style="margin:0 auto 1.5rem; width:160px; height:160px; border-radius:9999px; overflow:hidden; border:4px solid rgba(107,153,114,0.3); box-shadow:0 8px 30px rgba(107,153,114,0.2);">
          <img src="/foto-viviana.png" alt="Dra. Viviana Tavares Campos — Fisioterapeuta" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <p style="font-size:0.78rem; color:#9E8E87; margin:0 0 1.5rem; letter-spacing:0.03em;">
          CREFITO 450602-F
        </p>

        <!-- Badge -->
        <div style="
          display:inline-flex; align-items:center; gap:0.5rem;
          background:rgba(107,153,114,0.12); border:1px solid rgba(107,153,114,0.3);
          color:#4A7050; font-size:0.8rem; font-weight:700;
          padding:0.4rem 1rem; border-radius:9999px;
          text-transform:uppercase; letter-spacing:0.05em; margin-bottom:1.5rem;
        ">
          <span style="width:6px;height:6px;border-radius:9999px;background:#4A7050;display:inline-block;"></span>
          Saúde · Vila Mariana · Indianópolis · Av Paulista
        </div>

        <h1 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(2.4rem,6vw,3.8rem);
          font-weight:600; line-height:1.12;
          color:#2D2825; margin:0 0 1.25rem;
        ">
          Fisioterapia Domiciliar<br>
          <span style="color:#6B9972;">no seu bairro</span>
        </h1>

        <p style="font-size:1.1rem; color:#6B5E57; line-height:1.7; max-width:520px; margin:0 auto 2rem;">
          A Dra. Viviana vai até você. Tratamento especializado para idosos,
          <strong style="color:#4A7050;">sem sair de casa</strong> — com carinho, atenção e dedicação.
        </p>

        <!-- CTA principal -->
        <a :href="waLink" target="_blank" rel="noopener" style="
          display:inline-flex; align-items:center; gap:0.75rem;
          background:#25D366; color:white; font-weight:800; font-size:1.15rem;
          padding:1.1rem 2.4rem; border-radius:9999px; text-decoration:none;
          box-shadow:0 6px 28px rgba(37,211,102,0.45);
          transition:transform 0.2s;
        "
        onmouseover="this.style.transform='translateY(-2px) scale(1.02)'"
        onmouseleave="this.style.transform='none'"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Agendar pelo WhatsApp
        </a>

        <p style="margin-top:0.875rem; font-size:0.82rem; color:#9E8E87;">
          Resposta rápida · Sem compromisso
        </p>

        <!-- Trust signals -->
        <div style="
          display:flex; flex-wrap:wrap; justify-content:center; gap:1.5rem;
          margin-top:2.5rem; padding-top:2rem;
          border-top:1px solid rgba(107,153,114,0.15);
        ">
          <span v-for="item in [
            { icon:'🏠', text:'Atendimento domiciliar' },
            { icon:'👴', text:'Especialista em idosos' },
            { icon:'📍', text:'Zona Sul — SP' },
            { icon:'💬', text:'Agendamento rápido' },
          ]" :key="item.text" style="display:flex; align-items:center; gap:0.4rem; font-size:0.88rem; color:#6B5E57; font-weight:600;">
            {{ item.icon }} {{ item.text }}
          </span>
        </div>
      </div>
    </section>

    <!-- ── BENEFÍCIOS ── -->
    <section style="padding:4rem 1.5rem; background:white;">
      <div style="max-width:860px; margin:0 auto;">
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; text-align:center;
          color:#2D2825; margin:0 0 2.5rem;
        ">
          Por que escolher o atendimento domiciliar?
        </h2>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.5rem;">
          <div v-for="b in [
            { icon:'🛋️', titulo:'Conforto total', texto:'O paciente se recupera no ambiente que conhece, com mais segurança e tranquilidade.' },
            { icon:'🚗', titulo:'Sem deslocamento', texto:'Evite o desgaste do transporte — especialmente importante para idosos e pós-operatórios.' },
            { icon:'🎯', titulo:'100% personalizado', texto:'O plano é feito para a rotina real de cada paciente, em casa e com a família presente.' },
            { icon:'❤️', titulo:'Cuidado humanizado', texto:'Atenção individual, sem pressa — cada sessão com dedicação completa.' },
          ]" :key="b.titulo" style="
            background:#FAF8F4; border-radius:1.25rem; padding:1.75rem 1.5rem;
            border:1px solid rgba(107,153,114,0.12);
          ">
            <span style="font-size:2rem; display:block; margin-bottom:0.75rem;">{{ b.icon }}</span>
            <h3 style="font-weight:700; font-size:1rem; color:#2D2825; margin:0 0 0.5rem;">{{ b.titulo }}</h3>
            <p style="font-size:0.88rem; color:#6B5E57; line-height:1.6; margin:0;">{{ b.texto }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SERVIÇOS ── -->
    <section style="padding:4rem 1.5rem; background:#EEF5EF;">
      <div style="max-width:860px; margin:0 auto; text-align:center;">
        <p style="font-size:0.8rem; font-weight:700; color:#C4943E; text-transform:uppercase; letter-spacing:0.08em; margin:0 0 0.5rem;">
          ✦ Serviços
        </p>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; color:#2D2825; margin:0 0 2.5rem;
        ">Como posso te ajudar</h2>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1.25rem; text-align:left;">
          <div v-for="s in [
            { emoji:'🦵', titulo:'Reabilitação Motora', texto:'Recuperação de movimentos e força muscular para retomar a independência.' },
            { emoji:'🛡️', titulo:'Prevenção de Quedas', texto:'Treino de equilíbrio e coordenação para proteger a autonomia do idoso.' },
            { emoji:'🫁', titulo:'Fisioterapia Respiratória', texto:'Técnicas para melhorar a respiração e bem-estar pulmonar em casa.' },
            { emoji:'👨‍👩‍👧', titulo:'Orientação Familiar', texto:'Ensino aos familiares como cuidar e ajudar corretamente no dia a dia.' },
          ]" :key="s.titulo" style="
            background:white; border-radius:1.25rem; padding:1.5rem;
            border:1px solid rgba(107,153,114,0.12);
            box-shadow:0 2px 12px rgba(107,153,114,0.07);
          ">
            <span style="font-size:1.75rem; display:block; margin-bottom:0.75rem;">{{ s.emoji }}</span>
            <h3 style="font-weight:700; font-size:0.95rem; color:#2D2825; margin:0 0 0.4rem;">{{ s.titulo }}</h3>
            <p style="font-size:0.83rem; color:#6B5E57; line-height:1.6; margin:0;">{{ s.texto }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── ÁREA DE ATENDIMENTO ── -->
    <section style="padding:4rem 1.5rem; background:white; text-align:center;">
      <div style="max-width:560px; margin:0 auto;">
        <p style="font-size:0.8rem; font-weight:700; color:#C4943E; text-transform:uppercase; letter-spacing:0.08em; margin:0 0 0.5rem;">
          ✦ Onde atendo
        </p>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,3vw,2.2rem);
          font-weight:600; color:#2D2825; margin:0 0 1rem;
        ">Zona Sul de São Paulo</h2>
        <p style="color:#6B5E57; margin:0 0 2rem; line-height:1.7;">
          Atendo nos bairros e regiões próximas de:
        </p>
        <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:0.75rem; margin-bottom:2.5rem;">
          <span v-for="bairro in ['Saúde','São Judas','Praça da Árvore','Vila Mariana','Indianópolis','Av Paulista','Santa Cruz','Vergueiro','Jabaquara','Ipiranga','Cursino']"
                :key="bairro" style="
            background:#EEF5EF; color:#4A7050; font-weight:700; font-size:0.9rem;
            padding:0.5rem 1.1rem; border-radius:9999px;
            border:1px solid rgba(107,153,114,0.25);
          ">📍 {{ bairro }}</span>
        </div>
        <p style="font-size:0.85rem; color:#9E8E87;">
          Dúvidas se atendo na sua região? Me chame no WhatsApp!
        </p>
      </div>
    </section>

    <!-- ── CTA FINAL ── -->
    <section style="
      padding:4rem 1.5rem; text-align:center;
      background:linear-gradient(135deg, #4A7050 0%, #6B9972 100%);
      position:relative; overflow:hidden;
    ">
      <div style="
        position:absolute; inset:0; pointer-events:none;
        background:radial-gradient(ellipse 60% 60% at 80% 50%, rgba(255,255,255,0.06) 0%, transparent 70%);
      "/>
      <div style="max-width:520px; margin:0 auto; position:relative;">
        <span style="font-size:2.5rem; display:block; margin-bottom:1rem;">💚</span>
        <h2 style="
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.8rem,4vw,2.6rem);
          font-weight:600; color:white; margin:0 0 1rem; line-height:1.2;
        ">
          Vamos começar o cuidado?
        </h2>
        <p style="color:rgba(255,255,255,0.85); margin:0 0 2rem; line-height:1.7; font-size:1rem;">
          Entre em contato agora pelo WhatsApp e tire todas as suas dúvidas. O primeiro passo é só uma mensagem.
        </p>
        <a :href="waLink" target="_blank" rel="noopener" style="
          display:inline-flex; align-items:center; gap:0.75rem;
          background:white; color:#4A7050; font-weight:800; font-size:1.1rem;
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
        © {{ new Date().getFullYear() }} Dra. Viviana Tavares Campos · CREFITO 450602-F · Fisioterapia Domiciliar · São Paulo
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
