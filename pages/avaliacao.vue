<script setup lang="ts">
useSeoMeta({
  title: 'Avaliação Fisioterapêutica — Dra. Viviana Tavares',
  description: 'Preencha sua avaliação fisioterapêutica antes da consulta com a Dra. Viviana Tavares.',
  robots: 'noindex',
})

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw7tsFU6ldngFhhPcRJU_M4QSTFHwCh_sp3RiuSOHdGmSFGs-TmjY7jeyNx3aWg9THPPg/exec'

const submitted = ref(false)
const error = ref(false)
const loading = ref(false)

async function handleSubmit(e: Event) {
  const form = e.target as HTMLFormElement
  loading.value = true
  error.value = false

  const formData = new FormData(form)
  const payload: Record<string, string> = {}

  // Campos simples
  for (const [key, value] of formData.entries()) {
    if (key.endsWith('[]')) {
      const cleanKey = key.slice(0, -2)
      payload[cleanKey] = payload[cleanKey]
        ? payload[cleanKey] + ', ' + value
        : String(value)
    } else {
      payload[key] = String(value)
    }
  }
  payload['data_envio'] = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    submitted.value = true
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div style="font-family:'Nunito',sans-serif; background:#FAF8F4; color:#2D2825; min-height:100vh;">

    <!-- HEADER -->
    <header style="
      background:rgba(250,248,244,0.97); backdrop-filter:blur(12px);
      box-shadow:0 1px 20px rgba(107,153,114,0.12);
      padding:0.875rem 1.5rem;
      display:flex; align-items:center; justify-content:center;
    ">
      <div style="display:flex; align-items:center; gap:0.75rem;">
        <img src="/logo-massagem.png" alt="Viviana Tavares" style="height:44px; width:auto; border-radius:9999px;" />
        <div>
          <div style="font-family:'Cormorant Garamond',serif; font-weight:700; font-size:1.15rem; color:#2D2825; letter-spacing:0.02em;">
            Dra. Viviana Tavares Campos
          </div>
          <div style="font-size:0.75rem; color:#6B9972; letter-spacing:0.06em; text-transform:uppercase; font-weight:700;">
            Fisioterapeuta · CREFITO-3
          </div>
        </div>
      </div>
    </header>

    <!-- HERO -->
    <div style="background:linear-gradient(135deg,#6B9972 0%,#4a7a55 100%); padding:2.5rem 1.5rem; text-align:center;">
      <h1 style="font-family:'Cormorant Garamond',serif; color:white; font-size:clamp(1.6rem,4vw,2.4rem); margin:0 0 0.5rem; font-weight:600;">
        Avaliação Fisioterapêutica
      </h1>
      <p style="color:rgba(255,255,255,0.85); margin:0; font-size:0.95rem; max-width:500px; margin:0 auto;">
        Preencha o formulário abaixo com atenção. Suas respostas nos ajudam a personalizar o seu atendimento.
      </p>
    </div>

    <!-- SUCESSO -->
    <div v-if="submitted" style="max-width:600px; margin:3rem auto; padding:0 1.5rem; text-align:center;">
      <div style="background:white; border-radius:16px; padding:3rem 2rem; box-shadow:0 4px 24px rgba(107,153,114,0.15); border-top:4px solid #6B9972;">
        <div style="font-size:3rem; margin-bottom:1rem;">✅</div>
        <h2 style="font-family:'Cormorant Garamond',serif; font-size:1.8rem; color:#2D2825; margin:0 0 0.75rem;">
          Avaliação enviada!
        </h2>
        <p style="color:#555; line-height:1.7; margin:0;">
          Obrigada por preencher. A Dra. Viviana receberá suas informações e estará preparada para o seu atendimento.
        </p>
      </div>
    </div>

    <!-- FORMULÁRIO -->
    <div v-else style="max-width:780px; margin:2.5rem auto 4rem; padding:0 1.25rem;">

      <form @submit.prevent="handleSubmit" novalidate>

        <!-- ERRO -->
        <div v-if="error" style="background:#fff0f0; border:1px solid #f5a5a5; border-radius:10px; padding:1rem 1.25rem; margin-bottom:1.5rem; color:#c0392b; font-size:0.9rem;">
          Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.
        </div>

        <!-- SEÇÃO 1: DADOS GERAIS -->
        <section :style="sectionStyle">
          <h2 :style="sectionTitleStyle">1. Dados Gerais</h2>

          <div :style="gridStyle">
            <div :style="fieldStyle">
              <label :style="labelStyle">Nome Completo *</label>
              <input type="text" name="nome" required :style="inputStyle" placeholder="Seu nome completo">
            </div>
            <div :style="fieldStyle">
              <label :style="labelStyle">Data de Nascimento</label>
              <input type="date" name="data_nascimento" :style="inputStyle">
            </div>
            <div :style="fieldStyle">
              <label :style="labelStyle">Ocupação</label>
              <input type="text" name="ocupacao" :style="inputStyle" placeholder="Ex: Professora, Analista...">
            </div>
            <div :style="fieldStyle">
              <label :style="labelStyle">Telefone</label>
              <input type="tel" name="telefone" :style="inputStyle" placeholder="(11) 99999-9999">
            </div>
            <div :style="fieldStyle">
              <label :style="labelStyle">E-mail</label>
              <input type="email" name="email" :style="inputStyle" placeholder="seu@email.com">
            </div>
          </div>
        </section>

        <!-- SEÇÃO 2: ANAMNESE -->
        <section :style="sectionStyle">
          <h2 :style="sectionTitleStyle">2. Anamnese</h2>

          <div :style="fieldStyle">
            <label :style="labelStyle">Principal região de desconforto / tensão</label>
            <textarea name="regiao_desconforto" rows="2" :style="textareaStyle" placeholder="Ex: cervical, lombar, ombro direito..."></textarea>
          </div>

          <div :style="fieldStyle">
            <label :style="labelStyle">Sensação predominante</label>
            <div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:0.5rem;">
              <label v-for="s in ['Tensão','Rigidez','Peso','Dor','Queimação']" :key="s" :style="checkLabelStyle">
                <input type="checkbox" :name="`sensacao[]`" :value="s" style="accent-color:#6B9972;"> {{ s }}
              </label>
            </div>
          </div>

          <div :style="gridStyle">
            <div :style="fieldStyle">
              <label :style="labelStyle">Início da queixa</label>
              <select name="inicio_queixa" :style="inputStyle">
                <option value="Súbito">Súbito (imediato)</option>
                <option value="Gradual">Gradual</option>
              </select>
            </div>
            <div :style="fieldStyle">
              <label :style="labelStyle">Intensidade da Dor — EVA (0 a 10)</label>
              <input type="number" name="intensidade_eva" min="0" max="10" :style="inputStyle" placeholder="0 = sem dor · 10 = dor máxima">
            </div>
          </div>
        </section>

        <!-- SEÇÃO 3: HÁBITOS DE VIDA -->
        <section :style="sectionStyle">
          <h2 :style="sectionTitleStyle">3. Hábitos de Vida</h2>

          <div :style="gridStyle">
            <div :style="fieldStyle">
              <label :style="labelStyle">Fumante</label>
              <select name="fumante" :style="inputStyle">
                <option value="Não">Não</option>
                <option value="Sim">Sim</option>
              </select>
            </div>
            <div :style="fieldStyle">
              <label :style="labelStyle">Qualidade do sono</label>
              <select name="sono" :style="inputStyle">
                <option value="Boa">Boa</option>
                <option value="Regular">Regular</option>
                <option value="Ruim">Ruim</option>
              </select>
            </div>
          </div>

          <div :style="fieldStyle">
            <label :style="labelStyle">Atividade Física</label>
            <input type="text" name="atividade_fisica" :style="inputStyle" placeholder="Sedentário ou qual atividade e frequência?">
          </div>
        </section>

        <!-- SEÇÃO 4: FATORES DESENCADEANTES -->
        <section :style="sectionStyle">
          <h2 :style="sectionTitleStyle">4. Fatores Desencadeantes</h2>

          <div :style="fieldStyle">
            <label :style="labelStyle">O que costuma piorar ou desencadear o desconforto?</label>
            <div style="display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:0.5rem;">
              <label v-for="f in ['Estresse emocional','Posturas mantidas','Sobrecarga física','Movimentos repetitivos']" :key="f" :style="checkLabelStyle">
                <input type="checkbox" :name="`fatores[]`" :value="f" style="accent-color:#6B9972;"> {{ f }}
              </label>
            </div>
          </div>

          <div :style="fieldStyle">
            <label :style="labelStyle">Observações adicionais</label>
            <textarea name="observacoes" rows="4" :style="textareaStyle" placeholder="Qualquer informação extra que queira compartilhar com a Dra. Viviana..."></textarea>
          </div>
        </section>

        <!-- BOTÃO ENVIAR -->
        <button
          type="submit"
          :disabled="loading"
          style="
            display:block; width:100%;
            background:linear-gradient(135deg,#6B9972 0%,#4a7a55 100%);
            color:white; font-family:'Nunito',sans-serif; font-weight:800;
            font-size:1.05rem; letter-spacing:0.04em; text-transform:uppercase;
            border:none; border-radius:12px; padding:1.1rem 2rem; cursor:pointer;
            box-shadow:0 6px 20px rgba(107,153,114,0.35);
            transition:opacity 0.2s;
          "
          :style="loading ? 'opacity:0.7; cursor:not-allowed;' : ''"
        >
          {{ loading ? 'Enviando...' : 'Enviar Avaliação' }}
        </button>

      </form>
    </div>

    <!-- FOOTER -->
    <footer style="text-align:center; padding:2rem 1.5rem; border-top:1px solid rgba(107,153,114,0.2); color:#888; font-size:0.8rem;">
      Dra. Viviana Tavares Campos · Fisioterapeuta · Vila Mariana — SP
    </footer>
  </div>
</template>

<script lang="ts">
const sectionStyle = {
  background: 'white',
  borderRadius: '16px',
  padding: '1.75rem',
  marginBottom: '1.5rem',
  boxShadow: '0 2px 16px rgba(107,153,114,0.1)',
}

const sectionTitleStyle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#2D2825',
  margin: '0 0 1.25rem',
  paddingBottom: '0.6rem',
  borderBottom: '2px solid #6B9972',
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
  gap: '1rem',
  marginBottom: '1rem',
}

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.35rem',
  marginBottom: '0.25rem',
}

const labelStyle = {
  fontSize: '0.82rem',
  fontWeight: '700',
  color: '#555',
  letterSpacing: '0.03em',
  textTransform: 'uppercase' as const,
}

const inputStyle = {
  padding: '0.65rem 0.9rem',
  border: '1.5px solid #e0dbd5',
  borderRadius: '8px',
  fontSize: '0.95rem',
  color: '#2D2825',
  background: '#FDFCFA',
  outline: 'none',
  fontFamily: "'Nunito', sans-serif",
  width: '100%',
  boxSizing: 'border-box' as const,
}

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical' as const,
  lineHeight: '1.6',
}

const checkLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  fontSize: '0.9rem',
  background: '#F5F2EE',
  padding: '0.45rem 0.85rem',
  borderRadius: '20px',
  cursor: 'pointer',
  fontWeight: '600',
}
</script>