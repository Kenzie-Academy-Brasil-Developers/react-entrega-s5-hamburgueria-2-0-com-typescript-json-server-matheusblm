import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 100%;
  height: 100%;
  max-width: 452px;
  max-height: 60px;
  border-radius: 8px;
  background: ${(props) => (props.color ? "var(--primary)" : "var(--gray-0)")};
  color: ${(props) => (props.color ? "white" : "var(--gray-50)")};
  font-weight: 600;
  font-size: 16px;
  transition-duration: 0.6s;
  border: none;
  :hover {
    background: ${(props) => (props.color ? "#93D7AF" : "var(--gray-300)")};
    color: ${(props) => (props.color ? "white" : "var(--gray-100)")};
    cursor: pointer;
  }
`;
