const { default: styled } = require("styled-components");

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const TopSection = styled.section`
  > h4 {
    text-align: center;
    color: #4395b3;
    border-bottom: 2px solid #4395b3;
    padding-bottom: 1rem;
    border-bottom-width: 1px;
  }

  >h3{
    line-height: 150%;
    font-weight: 400;

    span{
        font-weight: bold;
    }
  }
`;
