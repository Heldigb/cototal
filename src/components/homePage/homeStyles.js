import styled ,{css} from "styled-components"


export const HomeBannerSection = styled.div`
h5{

  color: ${props => props.theme.secondary};

}
h2{
  color: ${props => props.theme.accent};
}

`
export const HomeBannerWrap = styled.div`

  background-size: cover;
  background-position: center right;
  //background-attachment: fixed;
  .bannerContentWrap{
  height: 100%;
    }
  
`

export const VideoContentSection = styled.div`
    padding-top: 75px;
    padding-bottom: 75px;
    .wmp-container{
      width: 100%!important;
  height: auto;
    }
  video {
  
  width: 100%!important;
  height: auto;
  }
       @media (max-width: 768px){
          padding-top: 50px;
          padding-bottom: 50px;
      }
  .content--cta{
      h4{
        font-weight: 600;
          color: ${props => props.theme.accent};
       }
        p{
            margin-top: 15px;
            max-width: 80%;
              color: ${props => props.theme.secondary};
        }
        
       padding-left: 50px;
        @media (max-width: 768px){
        h4{
           margin-top: 25px;
       }
             
          p{
              margin-top: 25px;
              max-width: 100%;
        }
         padding-left: 25px;  
      }  
       @media (max-width: 600px){
    
            padding-left: 0;  
      
      }
      button {
      span{
      font-size: 0.8rem;
      }
      margin-top: 25px;
      float: right;
      }
  }
    
  .bannerContentWrap{
  height: 100%;
    }
  
`
export const VideoWrap = styled.div`
   padding: 5% 0;
   &>div {
   width: 100%!important;
   height: auto!important;
   }
  `



//SERVICES


export const Flex = styled.div`
display: inline-flex;
flex-direction: row;
`
export const Square = styled.div`
cursor: pointer;
    background-color: rgb(139, 195, 74);
    color: rgb(255, 255, 255);
    transform: scale(1);
    box-shadow: rgb(85, 85, 85) 0px 0px 2px 1px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 20px;
    height: 20px;
    transition: all 250ms ease-in 0s;
    margin: 10px;

`
export const Container = styled.div`
${props => props.heightFull && css`
//min-height: 75vh;
height: auto;

`}

 .content--cta{
      h4{
        font-weight: 600;
          color: ${props => props.theme.accent};
       }
        p{
            margin-top: 15px;
           
              color: ${props => props.theme.secondary};
        }
        
      
        @media (max-width: 768px){
        h4{
           margin-top: 25px;
       }
             
          p{
              margin-top: 25px;
            
        }
         
      }  
       @media (max-width: 600px){
    
            padding-left: 0;  
      
      }
      button {
      span{
      font-size: 0.8rem;
      }
      margin-top: 25px;
      
      }
  }

${props => props.bgColorGray && css`
background: ${props => props.theme.bgDarkerGray};

`}




${props => props.gap && css`

   padding:75px  5%;
   //padding-right: 0;
       @media (max-width: 768px){
          padding-top: 50px;
          padding-bottom: 50px;
      }
      
`}
//.carouselBlock{
//padding-top: 50px;
//padding-bottom: 50px;
//}
.rec:focus {
outline: none!important;
}
.rec-item-wrapper:first-child {

}
.rec-arrow{
position:absolute;
margin-top: 250px;
border: none;
//left: 50%;
display: flex;
flex-direction: column;
    align-items: center;
    background-color:#d3d3d3;
    box-shadow: none;
    border-radius: 100%;
    &:focus:enabled,
    &:hover:enabled{
    
    background-color: ${props => props.theme.accent};
    }
    &:disabled  {
    opacity: 0.3;
    cursor: default;
    }
}

.rec-arrow-right{
    margin-left: 75px;
}

`

// SECTION TITLE
export const EyeCatcher = styled.div`
margin-bottom: 15px;
height:20px;
width: 120px;
display: block;
&:before {
content:'';
height:4px;
width: 100px;
background-color: ${props => props.theme.secondary};
display: block;

}
&:after {
content:'';
height:4px;
width: 100px;
background:  #b6b6b6; 
display: block;
margin-top: 10px;
float: right;
}

`
export const Title = styled.h4`

  color: ${props => props.theme.secondary};
  margin-bottom: 30px;
    @media (max-width: 768px){
           margin-bottom: 15px;
      }
`

export const ServiceWrap = styled.div`
//.MuiGridListTile-root{
//height: 350px!important;
//
//@media (max-width: 768px){
//       width: 100%!important;
//      }
//img{
//width: 100%;
//height: 100%;
//}
//}
    
`