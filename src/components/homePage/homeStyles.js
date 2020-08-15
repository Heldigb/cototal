import styled from "styled-components"

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
  background-attachment: fixed;
  .bannerContentWrap{
  height: 100%;
    }
  
`

export const VideoContentSection = styled.div`
    padding-top: 75px;
    padding-bottom: 75px;
  
       @media (max-width: 768px){
          padding-top: 50px;
          padding-bottom: 50px;
      }
  .content--cta{
      h4{
        font-weight: 400;
       }
        p{
            margin-top: 15px;
            max-width: 80%;
        }
        
       padding-left: 50px;
        @media (max-width: 768px){
        h4{
           margin-top: 25px;
       }
              padding-left: 0;
          p{
              margin-top: 25px;
              max-width: 100%;
        }
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
  `
