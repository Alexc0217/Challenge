import React from "react";
import Header from "../ui/Header";

const MainWrapper = ({children}) => {
  console.log("aaa")
  return(
    <>
      <Header />
      {children}
    </>
  )
}

export default MainWrapper;