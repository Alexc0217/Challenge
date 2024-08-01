import styled from "styled-components";

export const Main = styled.div`
  width: fit-content;
  height: 100vh;
  background-color: whitesmoke;
`

export const TreeCard = styled.div`
  padding: 5px;
  display: inline-block;
  &:hover {
      cursor: pointer;
    }
`

export const CardTop = styled.div`
  background-color: white !important;
  display: flex;
  flex-direction: column;
  width: 260px;
  align-items: center;
  min-height: 175px;
  border-radius: 15px 15px 0 0;

  &:hover {
    background-color: #e7e4e4 !important;
  }

  transition: 0.6s;
`

export const Img = styled.img`
  width: 80px;
  border-radius: 90px;
  margin: 12px;
`

export const Name = styled.h2`
  font-weight: 200;
  font-family: arial;
  font-size: 1.5em;
  margin: 10px;
`

export const Role = styled.p`
  margin: 4px;
  font-family: arial;
`

export const ColoredDiv = styled.div`
  width: 100% !important;
  height: 40px !important;
  border-radius: 0 0 10px 10px;
  background-color: #050555 !important;
`

export const Image = styled.img`
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
  align-items: center;
  justify-content: center;

  h1{
    font-weight: 100;
    font-family: sans-serif;
  }
`

export const BoxForm = styled.div`
  width: 500px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 17px -6px rgba(207,203,207,1);
  -moz-box-shadow: 0px 0px 17px -6px rgba(207,203,207,1);
  box-shadow: 0px 0px 17px -6px rgba(207,203,207,1);

  @media(max-width: 430px){
    width: 80%;
  }
`

export const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px 30px;
  gap: 20px;
  height: 100%;
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
  @media(max-width: 430px){
    min-width: 100px;
  }
`
