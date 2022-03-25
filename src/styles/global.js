import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-darkPurple:        #24203b;
    --color-stateBlue:         #725ac1;
    --color-middleBluePurple:  #9F96E9;
    --color-lavenderGray:      #c4c4ce;
    --color-linen:             #f7ece1;

    --h1-font-size: 18px;
    --h2-font-size: 16px;
    --h3-font-size: 14px;
    --h4-font-size: 12px;

    --p-font-size: 12px;
    --span-font-size: 10px;
    --button-font-size: 14px;

    padding: 5px;
}

body {
    background-color: var(--color-darkPurple);
    font-family: 'Nunito', sans-serif;  
    
}

h1, h2, h3, h4, h5, h6 {
font-family: 'Dancing Script', cursive;
}

a{
    text-decoration: none;
}
li{
    list-style-type: none;
    color: var(--color-linen);
}

button{
    cursor: pointer;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--color-middleBluePurple) inset;
    box-shadow: 0 0 0 30px var(--color-middleBluePurple) inset;
}

::-webkit-scrollbar{
  background-color: var(--color-stateBlue);
  width: 8px;
  height: 8px;
  border-radius: 50px;
  border: 1px solid var(--color-stateBlue);  
}

::-webkit-scrollbar-thumb{
  background-color: var(--color-darkPurple);
  border-radius: 50px;
}
`;

export const darkPurple = "#24203b";
export const stateBlue = "#725ac1";
export const middleBluePurple = "#9F96E9";
export const lavenderGray = "#c4c4ce";
export const linen = "#f7ece1";
