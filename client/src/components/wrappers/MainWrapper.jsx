import React from "react";
import Header from "../ui/Header";

const MainWrapper = ({children}) => {

  return(
    <>
      <Header />
      {children}
    </>
  )
}

export default MainWrapper;