import React from "react";
import { Route, Routes } from "react-router-dom";

import MainWrapper from "../components/wrappers/MainWrapper";

import { COMPANY, EMPLOYEE } from "./routes";

import CompaniesIndex from "../pages/companies/Index";
import CompaniesNew from "../pages/companies/New";
import CompaniesShow from "../pages/companies/Show";

import EmployeesNew from "../pages/employees/New";
import Pair from "../pages/chart/Pairs";
import Subordinates from "../pages/chart/Subordinates";
import SecondLevel from "../pages/chart/SecondLevel";
import NotFound from "../components/navigation/NotFound";

export default () => (
  <Routes>
    <Route path="/" element={<MainWrapper><CompaniesIndex /></MainWrapper>} />

    <Route path={COMPANY.INDEX} element={<MainWrapper><CompaniesIndex /></MainWrapper>} />
    <Route path={COMPANY.NEW} element={<MainWrapper><CompaniesNew /></MainWrapper>} />
    <Route path={COMPANY.SHOW} element={<MainWrapper><CompaniesShow /></MainWrapper>} />

    <Route path={EMPLOYEE.NEW} element={<MainWrapper><EmployeesNew /></MainWrapper>} />
    <Route path={EMPLOYEE.PAIRS} element={<MainWrapper><Pair /></MainWrapper>} />
    <Route path={EMPLOYEE.SUBORDINATES} element={<MainWrapper><Subordinates /></MainWrapper>} />
    <Route path={EMPLOYEE.SECOND_LEVEL} element={<MainWrapper><SecondLevel /></MainWrapper>} />

    <Route path="/*" element={<MainWrapper><NotFound /></MainWrapper>} />
  </Routes>
)