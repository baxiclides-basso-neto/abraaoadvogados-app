import styled from "styled-components";
import Image from "next/image";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  h2 {
    color: #4395b3;
    text-align: center;
    margin-top: 0;
  }

  h3 {
    color: #4395b3;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  div {
    margin-top: 1rem;
    background-color: #2c677c;
    color: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);

    h2 {
      margin-top: 1.5rem;
      margin-bottom: 0;
      color: #fff;
    }

    h3 {
      margin-top: 0.5rem;
      color: #fff;
    }

    p {
      padding: 0 1.5rem;
      line-height: 150%;
      margin-bottom: 1.5rem;
    }
  }
`;

export const LawyerPic = styled(Image)`
  margin: 0 auto;
`;

export const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;

  > h3 {
    margin-bottom: 2rem;
  }

  > div {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;

  }
`;

export const FooterBottom = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:  #fff;
  font-size: .5rem;
  border-top: 1px solid #000;
  margin: .5rem;
  
  h2{
    color: black !important;
    margin-top: 1rem;
  }
  h4{
    color: black !important;
  }


`;
