// components/Faq.tsx
import React from "react";

const faqs = [
  {
    question: "Como faço uma denúncia ambiental?",
    answer:
      "Você pode acessar a aba 'Nova Denúncia', preencher o formulário com os dados necessários, anexar evidências e enviar.",
  },
  {
    question: "Preciso de conta para jogar?",
    answer:
      "Não. Os jogos estão disponíveis para todos, mas para avaliar ou salvar progresso, é necessário se cadastrar.",
  },
  {
    question: "Minhas denúncias ficam públicas?",
    answer:
      "Não. Apenas os funcionários responsáveis têm acesso às denúncias. Você também pode optar por enviar de forma anônima.",
  },
  {
    question: "Como acompanho o status da denúncia?",
    answer:
      "Acesse seu perfil e veja a aba 'Minhas Denúncias'. Cada uma mostrará o status atual e eventuais respostas dos atendentes.",
  },
];

const Faq = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes (FAQ)</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-all"
          >
            <summary className="font-semibold cursor-pointer text-lg text-gray-800 dark:text-gray-100 group-open:mb-2">
              {faq.question}
            </summary>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-[#BDBDBD] dark:text-[#B2DFDB]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;