import React from "react";
import Image from "next/image";
import {
  Footer,
  FooterBottom,
  FooterBottomWrapperContext,
  LawyerPic,
} from "@/styles/FooterStyle";

const FooterComponent = () => {
  return (
    <>
      <Footer>
        <section>
          {/* <h3>Quem somos</h3>
          <h2>Sobre o especialista</h2> */}
          <LawyerPic
            src="/advogadoImg2.jpg"
            alt="Ícone do WhatsApp"
            width={300}
            height={300}
            objectFit="cover"
            layout="responsive"
          />
        </section>
        <div>
          <h2>Abraão dos Santos Filho</h2>
          <h3>OAB/SP 250.283</h3>
          <p>
            O advogado Pedro Henrique é um profissional com mais de 10 anos de
            experiência na área jurídica, tendo atuado em diversos escritórios
            renomados na cidade de São Paulo.
          </p>

          <p>
            Formado em Direito pela Universidade de São Paulo - USP em 2009.
            Atualmente, Pedro Henrique é sócio no escritório de advocacia Silva
            e Silva, localizado no bairro de Pinheiros, em São Paulo.
          </p>

          <p>
            Com um perfil proativo e orientado a resultados, ele é um
            profissional altamente capacitado para atender às necessidades de
            seus clientes de forma ágil e eficiente.
          </p>
        </div>
      </Footer>
      <FooterBottom>
        <FooterBottomWrapperContext>
          <h4>
            Rua Capote Valente, 140 - Pinheiros, São Paulo - SP, 05409-000,
            Brasil
          </h4>
          <div>
            <div>
              <Image
                src="phone-solid.svg"
                alt="Ícone do telefone"
                width={20}
                height={20}
              />
              <span>(11) 99873526</span>
            </div>
            <div>
              <Image
                src="envelope-solid.svg"
                alt="Ícone do email"
                width={20}
                height={20}
              />
              <span>abraao@silvaesilva.com.br</span>
            </div>
          </div>
          <h5>&copy; Todos os direitos reservados</h5>
        </FooterBottomWrapperContext>
      </FooterBottom>
    </>
  );
};
export default FooterComponent;
