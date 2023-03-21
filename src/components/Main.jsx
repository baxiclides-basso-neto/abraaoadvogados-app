import React, { useState } from "react";
import {
  ServiceBox,
  BottomSection,
  LegalDecisionsBox,
  Main,
  QuestionsBox,
  TopSection,
  BottomSecBtnBox,
} from "@/styles/MainStyle";
import Image from "next/image";

export const MainComponent = () => {
  const [showSection1, setShowSection1] = useState(false);
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  const toggleSection1 = () => setShowSection1(!showSection1);
  const toggleSection2 = () => setShowSection2(!showSection2);
  const toggleSection3 = () => setShowSection3(!showSection3);

  return (
    <Main>
      <div>
        <TopSection>
          <h4>
            VOCÊ SABIA QUE SOBRE O SALÁRIO MATERNIDADE É DESCONTADO VALORES
            RELATIVOS A CONTRIBUIÇÃO PREVIDENCIÁRIA QUE SÃO INDEVIDOS?
          </h4>
          <h3>
            Supremo Tribunal Federal, em julgamento realizado em 2019, decidiu,
            por unanimidade, que a incidência de contribuição previdenciária
            sobre o salário-maternidade é inconstitucional.
          </h3>
          <h3>
            O entendimento do STF é que o salário-maternidade não pode ser
            enquadrado como salário de contribuição, já que se trata de
            benefício pago pelo empregador em razão do nascimento de filho,
            adoção ou guarda judicial para fins de adoção.
          </h3>
          <h3>
            Portanto, <span>TODAS AS MULHERES</span> que receberam salário
            maternidade, tanto em folha de pagamento como de forma autônoma pelo
            INSS, <span>nos últimos CINCO ANOS</span>, têm o direito de reaver
            esses valores!
          </h3>
          <div>
            <button>
              <div>
                <Image
                  src="/icone whatsapp.png"
                  alt="Ícone do WhatsApp"
                  width={30}
                  height={30}
                />
                Fale conosco agora pelo WhatsApp
              </div>
            </button>
          </div>
        </TopSection>
        <BottomSection>
          <QuestionsBox>
            <h1>DÚVIDAS?</h1>
            <h1>PERGUNTAS FREQUENTES</h1>
            <div onClick={toggleSection1}>
              <span>{showSection1 ? "-" : "+"}</span>
              <span>Como faço para receber os valores?</span>
              {showSection1 && (
                <p>
                  Para receber os valores descontados do seu salário maternidade
                  é necessário ingressar com um processo judicial. Trata-se de
                  uma Ação de Cobrança contra o governo pedindo a restituição
                  dos valores descontados.
                </p>
              )}
            </div>
            <div onClick={toggleSection2}>
              <span>{showSection2 ? "-" : "+"}</span>
              <span>Qual o valor que tenho pra receber?</span>
              {showSection2 && (
                <p>
                  O valor varia conforme cada caso, mas corresponde à somatória
                  dos descontos de “INSS” feitos sobre cada parcela do salário
                  maternidade. Para as mulheres que receberam em folha, o valor
                  descontado é em média 8% sobre cada parcela. Já para quem
                  recebeu diretamente do INSS o desconto é maior, chegando a
                  20%!
                </p>
              )}
            </div>
            <div onClick={toggleSection3}>
              <span>{showSection3 ? "-" : "+"}</span>
              <span>
                Nunca recebi o salário maternidade, ainda tenho direito?
              </span>
              {showSection3 && (
                <p>
                  Em muitos casos a mulher, por estar desempregada, não faz o
                  requerimento do benefício. No entanto, ela ainda PODE TER
                  DIREITO ao pagamento! Entre em contato conosco para
                  analisarmos o seu caso.
                </p>
              )}
            </div>
          </QuestionsBox>
          <LegalDecisionsBox>
            <h1>EXEMPLOS DE DECISÕES JUDICIAIS</h1>
            <p>
              Julgo procedente a ação para reconhecer a inexigibilidade da
              contribuição previdenciária sobre o salário-maternidade, a partir
              do entendimento do Supremo Tribunal Federal, nos termos da Súmula
              669, condenar a União ao{" "}
              <span> pagamento de R$ 3.000,00 (três mil reais)</span> de
              indenização pelos danos morais sofridos pela parte autora, valor
              este que deve ser atualizado monetariamente desde a data da
              sentença e acrescido de juros moratórios de 1% ao mês, a partir da
              citação. Fonte: TJ-MG, Apelação Cível 1.0000.20.035679-7/002, rel.
              Des. José Flávio de Almeida, 17ª Câmara Cível, j. 11/03/2021.
            </p>
            <p>
              Ante o exposto, julgo procedente o pedido para reconhecer a
              inexigibilidade da contribuição previdenciária sobre o
              salário-maternidade e determinar à União a devolução dos valores
              indevidamente descontados da parte autora, atualizados
              monetariamente e acrescidos de juros legais, a contar de cada
              desconto. Condeno, ainda, a ré a pagar à parte autora a{" "}
              <span> quantia de R$ 5.000,00 (cinco mil reais),</span> a título
              de danos morais, também corrigida monetariamente a partir desta
              sentença, nos termos da Súmula 362 do STJ. Fonte: TJ-SP, Apelação
              Cível 1005753-63.2020.8.26.0024, rel. Des. Valeria dos Santos, 23ª
              Câmara de Direito Privado, j. 25/11/2021.
            </p>
            <p>
              Julgo procedente o pedido formulado na inicial, resolvendo o
              mérito da lide, com fulcro no art. 487, inciso I, do Código de
              Processo Civil, para declarar a inexigibilidade da contribuição
              previdenciária sobre o salário-maternidade, condenando a União a
              restituir a parte autora a{" "}
              <span>
                {" "}
                quantia de R$ 1.451,38 (um mil, quatrocentos e cinquenta e um
                reais e trinta e oito centavos),
              </span>
              corrigida monetariamente a partir do desembolso, acrescida de
              juros de mora, nos termos do Manual de Orientação de Procedimentos
              para os Cálculos na Justiça Federal, a partir da citação. Fonte:
              JF-PR, Ação Ordinária 5000112-73.2020.4.04.7019, rel. Juiz Federal
              Edson Rodrigo de Moraes, 3ª Vara Federal de Londrina, j.
              28/01/2021.
            </p>
          </LegalDecisionsBox>
          <BottomSecBtnBox>
            <button>
              <div>
                <Image
                  src="/icone whatsapp.png"
                  alt="Ícone do WhatsApp"
                  width={30}
                  height={30}
                />
                Fale conosco agora pelo WhatsApp
              </div>
            </button>
          </BottomSecBtnBox>
        </BottomSection>
        <ServiceBox>
          <h3>SOBRE O ATENDIMENTO</h3>
          <h2>COMO FUNCIONA O PROCESSO</h2>
          <div>
            <span>1</span>
            <p>Contato om o escritório e contratação</p>
          </div>
          <div>
            <span>2</span>
            <p>Envio da documentação por e-mail ou WhatsApp</p>
          </div>
          <div>
            <span>3</span>
            <p>Conferência da documentação</p>
          </div>
          <div>
            <span>4</span>
            <p>Elaboração e protocolo da ação</p>
          </div>
          <div>
            <span>5</span>
            <p>Acompanhamento direto com o advogado</p>
          </div>
        </ServiceBox>
      </div>
    </Main>
  );
};

export default Main;
