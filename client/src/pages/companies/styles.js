import styled from "styled-components";

export const View = styled.div`
  background-color: #03002e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px 30px;
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 300px;
  gap: 80px;
  flex-wrap: wrap;

  @media(max-width: 720px){
    padding: 20px;
    justify-content: center;
  }

  @media(max-width: 1278px){
    padding: 30px;
  }

`

export const CompanyBox = styled.div`
  min-height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
`

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 450px;
`

export const CompanyName = styled.h2`
  padding: 45px;
  font-weight: 100;
  font-size: 50px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 90px 0 0;
`

export const Employees = styled.div`
  display: flex;
  flex-direction: row;
  padding: 85px 0 0 0;
  align-items: center;
  justify-content: space-between;
`

export const EmployeesTitle = styled.h2`
  font-weight: 100;
  font-family: Arial;
`

export const EmployeesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 35px 0;
`

export const CardEmployee = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 195px;
  max-height: 232px;
  background-color: white;
  border-radius: 5px;
  justify-content: space-between;
`

export const CardRight = styled.div`
  display: flex;
  flex-direction: row;
`

export const EmployeePicture = styled.div`
  border-radius: 50%;
  min-width: 140px;
  max-width: 140px;
  margin: 40px;
  border: 3px solid #1E58B8;
`

export const EmployeeInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const Label = styled.p`
  font-size: 22px;
  font-family: Arial; 
  margin: 0;
`

export const EmployeeActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  text-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
  padding-right: 40px;
`

export const ActionButton = styled.button`
  min-width: 100px;
  background-color: #1976d2;
  border-radius: 4px;
  text-transform: uppercase;
  outline: 0;
  border: 0;
  color: white;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  height: 34px;
  transition: 0.2s;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover{
    background-color: #2164a6;
  }
`