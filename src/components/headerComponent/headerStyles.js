import styled from "styled-components"

export const TopHeaderBlock = styled.div`
    box-shadow: 0px 2px 4px 10px rgba(0,0,0,0.2), 0px 4px 5px 10px rgba(0,0,0,0.14), 0px 1px 160px 10px rgba(0,0,0,0.12);
height: 260px;
display: flex;
align-items:center;
justify-content: space-between;
padding: 0 5%;

@media (max-width: 1200px){
         height: 220px;
      }
@media (max-width: 1024px){
         height: 200px;
      }
 @media (max-width: 960px){
         height: 180px;
      }
 @media (max-width: 768px){
         height: 150px;
      }
 @media (max-width: 500px){
         height: 80px;
      }
`

export const HeaderInfo = styled.div`
display: flex;
flex-direction: column;
text-align: right;
span{
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.secondary};
  .header--icon{
     height: 1.2rem;
     width: 1.2rem;
     padding: 3px;
     border-radius: 100%;
     color: white;
     background: ${props => props.theme.secondary};
      }
      
       @media (max-width: 500px){
          font-size: 1.2rem;
          .header--icon{
                 height: 1rem;
                 width: 1rem;
                 padding: 2px;
         }
      }
}
h3{
  color: ${props => props.theme.accent};
}
`

export const Logo = styled.div`
width: 20%;
height: auto;
display: flex;
margin: 18px 15px  15px 0;
object-fit: contain;
    img{
        width: 100%;
        height: 100%;
    }
      @media (max-width: 500px){
          width: 100px;
      }
`


export const NavigationBar = styled.div`
 height: 60px;
      .layoutGutter {
      padding: 0 5%;
      }
      .MuiAppBar-colorDefault {
    color: ${props => props.theme.secondary};
    background-color: #f2f2f2;
    }
`

export const MobileMenu = styled.div`

     .mobileMenuItem{
           span{
              color: #d7d7d7!important;
               }
        }
`
export const NavBarList = styled.div`

 a {
 
 &.active {
 .MuiButton-label{
    border-bottom: 2px solid ${props => props.theme.accent};
      
   color: ${props => props.theme.accent}!important;  
         }
     }

 .MuiButton-label{
color: ${props => props.theme.secondary};
 }
 
  }
 .MuiButton-startIcon{
 
 
 }
 
 
    @media (max-width: 600px){
    flex-direction: row;
    overflow-x: scroll;
    display: flex; 
     }
     
       @media (max-width: 500px){

        .MuiButton-label{
            font-size:0.8rem;
         }
      }
     @media (max-width: 350px){

        .MuiButton-label{
            font-size:8px;
         }
      }
`



