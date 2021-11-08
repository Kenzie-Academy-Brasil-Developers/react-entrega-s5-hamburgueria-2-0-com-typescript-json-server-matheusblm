import styled from "styled-components";

export const BigContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 80%;
  height: 461px;
  max-width: 1000px;
  display: flex;
  gap: 50px;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftContainer = styled.form`
  width: 100%;
  max-width: 500px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 20px;
  h3 {
    align-self: flex-start;
  }
  span {
    width: 300px;
    text-align: center;
    color: var(--gray-50);
    font-size: 14px;
  }
  .MuiTextField-root {
    width: 100%;
  }
`;

export const RigthContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  .smallBox {
    margin-left: 5px;
    width: 100%;
    max-width: 377px;
    height: 95px;
    display: flex;
    align-items: center;
    line-height: 30px;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    .greenBox {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #27ae6020;
      border-radius: 5px;
      margin: 15px;
    }
  }
`;
