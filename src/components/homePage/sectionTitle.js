import React from "react"
import {EyeCatcher,Title,SectionTitleWrap} from "./homeStyles"

const SectionTitle = ({SectionName}) => {


  return (
    <SectionTitleWrap>
      <EyeCatcher/>
      <Title>{SectionName}</Title>
    </SectionTitleWrap>
  )

}
export default SectionTitle
