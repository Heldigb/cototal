import React from "react"
import {EyeCatcher,Title} from "./homeStyles"

const SectionTitle = ({SectionName}) => {


  return (
    <>
      <EyeCatcher/>
      <Title>{SectionName}</Title>

    </>
  )

}
export default SectionTitle
