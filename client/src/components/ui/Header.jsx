import React from "react";
import styled from "styled-components";
import QrLogo from "../../assets/images/qr-logo.png";
import { Link } from "react-router-dom";
import { COMPANY } from "../../navigation/routes";

const Container = styled.div`
  width: 100%;
  min-height: 85px;
  background-color: #005b96;
  display: flex;
  justify-content: space-between;
  align-items: center;
` 

const Image = styled.img`
  height: 60px;
  padding: 20px;
`

export default function Header(){

  return(
    <Container>
      <Link to={COMPANY.INDEX}><Image src={QrLogo} /></Link>
    </Container>
  )
}