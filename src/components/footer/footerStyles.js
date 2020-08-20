import styled from "styled-components"

export const FooterInfo = styled.div`
display: flex;
text-align: left;
align-items: flex-start;
margin: 50px 0;
flex-direction: row;
justify-content: space-between;
       @media (max-width: 660px){
          flex-direction: column;
          justify-content: space-between;
      }


    .MuiListItem-root {
          flex-direction: row;
    }
    a{
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;
    }
    span{
          margin-left: 10px;
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
 font-size: 2rem;
 text-align: right;
  color: ${props => props.theme.accent};
}

`
export const LogoFooter = styled.div`
width: 50%;
height: auto;
filter: grayscale(1);
opacity: 0.5;
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

