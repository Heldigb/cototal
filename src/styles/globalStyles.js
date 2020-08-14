import React from "react"
import { normalize } from "styled-normalize"

// Style Components
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
${normalize}
* {
      text-decoration: none;
      margin: 0;
  }
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}

body {
  font-size: 16px;
  font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
 
 
 h1,h2,h3,h4,h5{
  font-family: 'Archivo Black', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

 }
`


export default GlobalStyle