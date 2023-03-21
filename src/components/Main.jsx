import React from "react";
import { Main, TopSection } from "@/styles/MainStyle";

export const MainComponent = () => {
  return (
    <Main>
      <TopSection>
        <h4>
          VOCÊ SABIA QUE SOBRE O SALÁRIO MATERNIDADE É DESCONTADO VALORES
          RELATIVOS A CONTRIBUIÇÃO PREVIDENCIÁRIA QUE SÃO INDEVIDOS?
        </h4>
        <h3>
          Supremo Tribunal Federal, em julgamento realizado em 2019, decidiu,
          por unanimidade, que a incidência de contribuição previdenciária sobre
          o salário-maternidade é inconstitucional.
        </h3>
        <h3>
          O entendimento do STF é que o salário-maternidade não pode ser
          enquadrado como salário de contribuição, já que se trata de benefício
          pago pelo empregador em razão do nascimento de filho, adoção ou guarda
          judicial para fins de adoção.
        </h3>
        <h3>
          Portanto, <span>TODAS AS MULHERES</span> que receberam salário
          maternidade, tanto em folha de pagamento como de forma autônoma pelo
          INSS, <span>nos últimos CINCO ANOS</span>, têm o direito de reaver
          esses valores!
        </h3>
      </TopSection>
    </Main>
  );
};

export default Main;
