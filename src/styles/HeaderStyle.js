import styled from "styled-components";
import HeaderBgImg from "../../public/headerImg.jpg";

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }

  background: url(${HeaderBgImg.src});
  background-size: cover;
  background-position: center center;
`;

export const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 1rem 0.5rem;
  box-sizing: border-box;
  z-index: 1;
`;

export const LogoSection = styled.section`
  position: relative;
  z-index: 2;
  color: black;
  margin-bottom: 2rem;
  text-align: center;

  > h1 {
    color: gray;
  }
`;

export const HeaderDescSection = styled.section`
  position: relative;
  z-index: 2;
  color: black;

  > h1 {
    color: #fff;
    text-align: left;
    line-height: 95%;
  }

  > h3 {
    color: #fff;
    text-align: left;
    line-height: 95%;
  }

  p {
    color: #fff;
    text-align: left;
    line-height: 95%;
  }

  @media (min-width: 769px) {
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  button {
    width: 90%;
    max-width: 320px;
    width: 320px;
    height: 3rem;
    margin-top: 1rem;
    margin-left: 0;
    margin-bottom: 3rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    background-color: #25d366;
    color: #fff;
    font-weight: bold;
    font-size: 0.9rem;
    transition: all 0.3s ease;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    &:hover {
      transform: scale(1.05);
      transform-origin: center;
      background-color: #fff;
      color: #25d366;
      border: 1px solid #25d366;
      cursor: pointer;
    }
  }
`;
