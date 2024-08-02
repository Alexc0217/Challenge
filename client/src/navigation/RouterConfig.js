import React from "react";
import { Route, Routes } from "react-router-dom";

import CompaniesIndex from "../pages/companies/Index";
import CompaniesNew from "../pages/companies/New";
import CompaniesShow from "../pages/companies/Show";

import EmployeesNew from "../pages/employees/New";
import Pair from "../pages/chart/Pairs";
import Subordinates from "../pages/chart/Subordinates";
import SecondLevel from "../pages/chart/SecondLevel";

export default () => (
  <Routes>
    <Route path="/" element={<CompaniesIndex />} />

    <Route path="/companies" element={<CompaniesIndex />} />
    <Route path="/companies/new" element={<CompaniesNew />} />
    <Route path="/companies/:id" element={<CompaniesShow />} />

    <Route path="/employees/new/:company_id" element={<EmployeesNew />} />
    <Route path="/employees/pairs/:id" element={<Pair />} />
    <Route path="/employees/subordinates/:id" element={<Subordinates />} />
    <Route path="/employees/subordinates-second-level/:id" element={<SecondLevel />} />
  </Routes>
)