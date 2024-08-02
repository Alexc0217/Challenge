import React from "react";
import { Route, Routes } from "react-router-dom";

import MainWrapper from "../components/wrappers/MainWrapper";

import CompaniesIndex from "../pages/companies/Index";
import CompaniesNew from "../pages/companies/New";
import CompaniesShow from "../pages/companies/Show";

import EmployeesNew from "../pages/employees/New";
import Pair from "../pages/chart/Pairs";
import Subordinates from "../pages/chart/Subordinates";
import SecondLevel from "../pages/chart/SecondLevel";

export default () => (
  <Routes>
    <Route path="/" element={<MainWrapper><CompaniesIndex /></MainWrapper>} />

    <Route path="/companies" element={<MainWrapper><CompaniesIndex /></MainWrapper>} />
    <Route path="/companies/new" element={<MainWrapper><CompaniesNew /></MainWrapper>} />
    <Route path="/companies/:id" element={<MainWrapper><CompaniesShow /></MainWrapper>} />

    <Route path="/employees/new/:company_id" element={<MainWrapper><EmployeesNew /></MainWrapper>} />
    <Route path="/employees/pairs/:id" element={<MainWrapper><Pair /></MainWrapper>} />
    <Route path="/employees/subordinates/:id" element={<MainWrapper><Subordinates /></MainWrapper>} />
    <Route path="/employees/subordinates-second-level/:id" element={<MainWrapper><SecondLevel /></MainWrapper>} />
  </Routes>
)