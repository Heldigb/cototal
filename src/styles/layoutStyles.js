import styled from "styled-components"

export const Container = styled.div`
  padding:75px  5%;
       @media (max-width: 768px){
          padding-top: 50px;
          padding-bottom: 50px;
      }


`

export const CustomDivider = styled.div`
width: 100px;
height:5px;
border-radius: 5px;
display: block;
position:relative;
//background: ${props => props.theme.secondary};
background:  #909090;
overflow-x: hidden;
margin: 20px 0;


&:before {
content: '';
border-radius: 5px;
width: 40px;
display: block;
height: 5px;

background: ${props => props.theme.accent};
}
`

