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
  display: flex;
  flex-direction: column;
  height: 100%;

  text-align: center;
  padding: .5rem;
  box-sizing: border-box;
  z-index: 1;
`;

export const LogoSection = styled.section`
  position: relative;
  z-index: 2;
  color: black;

  >h1{
    color: gray;
  }
`;

export const HeaderDescSection = styled.section`
  position: relative;
  z-index: 2;
  color: black;

  >h1{
    color: #fff;
    text-align: left;
    line-height: 90%;
  }

  >h3{
    color: #fff;
    text-align: left;
    line-height: 90%;
  }

  p{
    color: #fff;
    text-align: left;
    line-height: 90%;
  }

  button{
    width: 90%;
    padding: .5rem;
    border-radius: 4px;
    border: none;
    background-color: lightgreen;
    color: #fff;
    font-weight: bold;
    font-size:.9rem;
    
    div{
      display: flex;
      align-items: center;
      gap:.5rem;
    }
  }
`;
