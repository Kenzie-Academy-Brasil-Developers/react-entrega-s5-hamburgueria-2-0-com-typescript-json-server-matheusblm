import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif; 
}
:root {
    --primary: #27AE60; 
    --secondary: #EB5757;
    --gray-600: #333333;
    --gray-300: #828282;
    --gray-100: #E0E0E0;
    --gray-0: #F5F5F5;
    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;
  }
`;
export default GlobalStyle;
