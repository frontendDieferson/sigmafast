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
          Termos
        </h1>
        <section>
          <div class="max-w-3xl m-auto text-zinc-200 py-6">
            <h1>Termos de Serviço do SigmaFast</h1>
            <p class="py-3"><strong>Última Atualização:</strong> 11/10/2023</p>

            <h2>1. Aceitação dos Termos</h2>
            <p class="py-3">Ao usar o software e serviços do SigmaFast, você concorda com os seguintes termos e condições. Se você não concordar com esses termos, não use o SigmaFast.</p>

            <h2>2. Uso do Software</h2>
            <p class="py-3">2.1 <strong>Licença de Uso</strong>: Concedemos a você uma licença limitada, não exclusiva e intransferível para usar o SigmaFast de acordo com estes termos.</p>
            <p class="py-3">2.2 <strong>Restrições</strong>: Você não pode: (a) usar o SigmaFast de maneira ilegal; (b) sublicenciar, alugar ou emprestar o SigmaFast; (c) descompilar ou realizar engenharia reversa do software.</p>

            <h2>3. Informações de Conta</h2>
            <p class="py-3">3.1 <strong>Registro</strong>: Você é responsável por manter suas informações de conta precisas e atualizadas durante o uso do SigmaFast.</p>
            <p class="py-3">3.2 <strong>Segurança da Conta</strong>: Você é responsável por manter a segurança da sua conta e senha, e por qualquer atividade que ocorra em sua conta.</p>

            <h2>4. Privacidade</h2>
            <p class="py-3">4.1 <strong>Coleta de Dados</strong>: A coleta e o uso de informações pessoais estão sujeitos à nossa Política de Privacidade.</p>
            <p class="py-3">4.2 <strong>Comunicações</strong>: Ao usar o SigmaFast, você concorda em receber comunicações de nós relacionadas aos serviços.</p>

            <h2>5. Limitações de Responsabilidade</h2>
            <p class="py-3">O SigmaFast é fornecido "no estado em que se encontra" e não fazemos garantias quanto à sua precisão, confiabilidade ou adequação a qualquer finalidade específica.</p>

            <h2>6. Alterações nos Termos</h2>
            <p class="py-3">Reservamos o direito de modificar ou revisar estes Termos de Serviço a qualquer momento, com aviso prévio.</p>

            <h2>7. Contato</h2>
            <p class="py-3">Para dúvidas ou preocupações relacionadas a estes Termos de Serviço, entre em contato conosco em:</p>
            <p class="py-3">E-mail: appsigmadev@gmail.com</p>
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
  title: 'Termos'
})
</script>