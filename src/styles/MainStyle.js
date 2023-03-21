// import styled from "styled-components";
const { default: styled } = require("styled-components");

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #f2f2f2;
`;

export const TopSection = styled.section`
  > h4 {
    text-align: center;
    color: #4395b3;
    border-bottom: 2px solid #4395b3;
    padding-bottom: 1rem;
    border-bottom-width: 1px;
  }

  > h3 {
    line-height: 150%;
    font-weight: 400;

    span {
      font-weight: bold;
    }
  }
  button {
    width: 90%;
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
      background-color: #fff;
      color: #25d366;
    }
  }
`;

export const BottomSection = styled.section`
  display: flex;
  flex-direction: column;

  > h1 {
    text-align: center;
    color: #4395b3;
    margin-top: 0rem;
  }
`;

export const QuestionsBox = styled.div`
  background-color: #2c677c;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 2.5rem;

  div {
    border-bottom: 1px solid #fff;
    padding: 1rem;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);


    > span {
      margin-right: 0.5rem;
      font-weight: bold;
    }
  }
`;

export const LegalDecisionsBox = styled.div`
  p {
    text-align: justify;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 4px;

    span {
      font-weight: bolder;
    }
  }
  button {
    width: 90%;
    margin-top: 1rem;
    margin-left: 0;
    margin-bottom: 2rem;
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
      background-color: #fff;
      color: #25d366;
    }
  }
`;

export const ServiceBox = styled.div`
  h3 {
    color: #4395b3;
  }

  h2 {
    color: #4395b3;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2c677c;
    color: #fff;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    padding: 0.5rem;
    font-weight: bold;
    min-height: 85px;
    text-align: center;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }
`;
