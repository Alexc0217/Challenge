import React from "react";
import { Main } from "../ui/styles";
import styled from "styled-components";

const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 44px;
  font-family: sans-serif;
  padding: 110px 0px;
`

export default function NotFound(){

  return(
    <Main>
      <Message>Página não encontrada :(</Message>
    </Main>
  )
}