import React from "react";
import Image from "next/image";
import { Footer, LawyerPic } from "@/styles/FooterStyle";

const FooterComponent = () => {
  return (
    <Footer>
      <h3>Quem somos</h3>
      <h2>Sobre o especialista</h2>
      <LawyerPic
        src="/advogadoImg.jpg"
        alt="Ícone do WhatsApp"
        width={300}
        height={300}
      />
      <div>
        <h2>Abrão dos Santos Filho</h2>
        <h3>OAB/SP 250.283</h3>
        <p>
          O advogado Pedro Henrique é um profissional com mais de 10 anos de
          experiência na área jurídica, tendo atuado em diversos escritórios
          renomados na cidade de São Paulo.
        </p>

        <p>
          Formado em Direito pela Universidade de São Paulo - USP em 2009.
          Atualmente, Pedro Henrique é sócio no escritório de advocacia Silva e
          Silva, localizado no bairro de Pinheiros, em São Paulo.
        </p>

        <p>
          Com um perfil proativo e orientado a resultados, ele é um profissional
          altamente capacitado para atender às necessidades de seus clientes de
          forma ágil e eficiente.
        </p>
      </div>
      <div>
        <h2>CONTATO</h2>
        <h3>Silva e Silva Advogados</h3>
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
          <span>(11) 99873526</span>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
