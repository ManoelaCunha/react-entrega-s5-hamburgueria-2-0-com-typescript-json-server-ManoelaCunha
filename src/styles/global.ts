import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Estilizando a barra de rolagem */
&::-webkit-scrollbar {
  width: 5px;
}

&::-webkit-scrollbar-track {
  background: #f5f5f5;
}

&::-webkit-scrollbar-thumb {
  background-color: #cccccc;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;
