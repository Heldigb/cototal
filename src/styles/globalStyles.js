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
  font-family: 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  //font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
 
 .paddingWrapper{
 padding: 0 5%;
 }
 h4,h5{
 font-family: 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 //font-family: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
 }
 h1,h2,h3{
  font-family: 'Arial Black', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  //font-family: 'Archivo Black', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
 
 h1{
  font-size: 5rem;
 }
  h2{
    font-size: 4.1rem;
  }
  h3{
   font-size: 3.2rem;
  }
  h4{
   font-size: 2.3rem;
    margin-top: 2.2rem;
      margin-bottom: 0.7rem;
  }
  h5{
   font-size: 1.8rem;
   margin-top: 2rem;
  }
  span{
    font-size: 1.2rem;
  }
  
   @media (max-width: 1200px){
          h1{
            font-size: 4.5rem;
          }
          h2{
            font-size: 3.8rem;
          }
          h3{
           font-size: 2.9rem;
          }
          h4{
           font-size: 2rem;
          }
          h5{
           font-size: 1.5rem;
          }
      }
      
      
      @media (max-width: 960px){
          h1{
            font-size: 4rem;
          }
          h2{
            font-size: 3.3rem;
          }
          h3{
           font-size: 2.5rem;
          }
          h4{
           font-size: 1.7rem;
          }
          h5{
           font-size: 1.4rem;
          }
      }
      
      
          @media (max-width: 768px){
            .mobileHide{
                display: none;
            }
          
          h1{
            font-size: 3.7rem;
          }
          h2{
            font-size: 2.9rem;
          }
          h3{
           font-size: 2.2rem;
          }
          h4{
           font-size: 1.5rem;
          }
          h5{
           font-size: 1.3rem;
          }
      }
      
       @media (max-width: 768px){
          h1{
            font-size: 3.2rem;
          }
          h2{
            font-size: 2.5rem;
          }
          h3{
           font-size: 2rem;
          }
          h4{
           font-size: 1.5rem;
          }
          h5{
           font-size: 1.3rem;
          }
      }
      
   
      @media (max-width: 500px){
          h1{
            font-size: 2.5rem;
          }
          h2{
            font-size: 2.2rem;
          }
          h3{
           font-size: 1.7rem;
          }
          h4{
           font-size: 1.3rem;
          }
          h5{
           font-size: 1.1rem;
          }
      }
  
  p{
    font-size: 1rem;
    line-height: 1.7rem;
      margin-top: 0.6rem;
  }
  
 // Custom slider Home page
 
 //.BrainhubCarouselItem{
 //       width: 300px!important;
 //}
  
  
/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  width: 20px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.accent};
  border-radius: 10px;
}
  
  
 header{
    width: 100%;
 }
    @media (min-width: 769px){
      .desktopHide{
         display: none;
         }
      }
      
            //IMPORTANT
.scrolled{
  position: fixed;
  top: 0;
  left: 0;
  background-color: lightblue;
  width: 100%;
  z-index: 9999;
}
.flex-row {
    display: flex;
    flex-direction: row;
}
.link--color{
color:  #000;
&:hover, &:focus {
 color: #0000008a;
 .MuiSvgIcon-root{
 path{ color: #0000008a!important;} 
 }
}
}

`


export default GlobalStyle