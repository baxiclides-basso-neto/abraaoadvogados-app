import styled from "styled-components";
import Image from "next/image";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;

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

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;

    padding: 0;

    section {
      width: 40%;
    }

    div {
      margin-top: 0;
      width: 60%;
      border-radius: none;
      box-shadow: none;
      max-height: 491px;
      border-radius: 0;
    }

    p {
      margin-top: 3rem;
    }
  }
`;

export const LawyerPic = styled(Image)`
  margin: 0 auto;
`;

export const FooterBottom = styled.section`
  border-top: 1px solid #000;
  margin-top: 1rem;
`;

export const FooterBottomWrapperContext = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  h4 {
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  > div {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;

      > span {
        font-size: 1rem;
      }
    }
  }
  h5 {
    margin-top: 0.5rem;
    text-align: center;
  }

  @media(min-width: 769px){
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;
