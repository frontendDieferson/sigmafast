<template>
  <header class="bg-subSecondaryColorF">
    <div class="container m-auto px-4">
      <nav class="py-10">
        <BackButton>
          Voltar
        </BackButton>
      </nav>
      <main>
        <h1
          class="text-center text-slate-50 font-bold text-4xl pt-5 mb-12"
        >
          Política de Privacidade
        </h1>
        <section>
          <div class="max-w-3xl m-auto text-zinc-200 py-6">
            <p class="mb-3"><strong>Última Atualização:</strong> 27/09/2023</p>
            <h2>1. Informações Coletadas</h2>
            <p class="py-3">1.1 <strong>Informações de Registro</strong></p>
            <p>Para usar os serviços do SigmaFast, solicitamos que você crie uma conta. Durante o processo de registro, coletamos seu nome, endereço de e-mail e informações de contato.</p>

            <h2>2. Como Usamos Suas Informações</h2>
            <p class="py-3">Usamos as informações coletadas para personalizar sua experiência no SigmaFast, fornecer suporte ao cliente, melhorar nossos serviços e enviar atualizações relevantes.</p>

            <h2>3. Compartilhamento de Informações</h2>
            <p class="py-3">Não compartilhamos suas informações pessoais com terceiros sem seu consentimento expresso, a menos que seja necessário para cumprir obrigações legais.</p>

            <h2>4. Proteção de Dados</h2>
            <p class="py-3">O SigmaFast implementa medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação.</p>

            <h2>5. Seus Direitos e Escolhas</h2>
            <p class="py-3">Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Entre em contato conosco para exercer esses direitos.</p>

            <h2>6. Contato</h2>
            <p class="py-3">Para dúvidas ou preocupações relacionadas à privacidade, entre em contato conosco em:</p>
            <p>E-mail: contato.fastdevelopment@gmail.com</p>

            <p class="py-3">Esta Política de Privacidade descreve nossas práticas em relação às informações pessoais que coletamos e como as usamos. Ao continuar a usar o SigmaFast, você concorda com os termos desta política.</p>
          </div>
        </section>
      </main>
    </div>
  </header>
  <Footer />
</template>

<script setup>
import BackButton from "~/components/Buttons/BackButton.vue";
import Footer from "~/components/Home/Footer.vue";

useHead({
  title: 'Política de Privacidade'
})
</script>