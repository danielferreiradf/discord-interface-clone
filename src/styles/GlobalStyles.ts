import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;

    }

    html, body, #root {
       height: 100vh; 
    }

    body {
        font-family: Roboto, sans-serif;
    }

    button, input {
        border: 0;
        outline: 0;
    }
`;
