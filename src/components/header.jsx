import React from "react";
import {
  BackgroundImage,
  Header,
  HeaderDescSection,
  HeaderWrapper,
  LogoSection,
} from "@/styles/HeaderStyle";
import Image from "next/image";

const HeaderComponent = () => {
  return (
    <HeaderWrapper>
      <BackgroundImage />
      <Header>
        <LogoSection>
          <h1>Logo</h1>
        </LogoSection>
        <HeaderDescSection>
          <h1>
            Se você é mamãe e recebeu salário maternidade nos últimos 5 anos,
            FIQUE ATENTA!
          </h1>
          <p>
            É possível que o benefício tenha sido pago em um valor menor pelo
            governo. Isso significa que você pode ter valores a serem
            devolvidos.
          </p>
          <h3>
            Não se preocupe, estamos aqui para ajudar! Basta clicar no botão
            verde e falar com nossa equipe!
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
        </HeaderDescSection>
      </Header>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
