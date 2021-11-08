import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 346px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .divImg {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-0);
    img {
      max-height: 100px;
    }
  }
  .divContent {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    transition-duration: 0.8s;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
      color: var(--gray-300);
    }
    h4 {
      font-size: 14px;
      color: var(--primary);
    }
    div {
      width: 106px;
      height: 40px;
    }
  }
  :hover {
    border-color: var(--primary);
  }
`;
