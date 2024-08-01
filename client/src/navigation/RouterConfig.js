import React from "react";
import { Route, Routes } from "react-router-dom";

import CompaniesIndex from "../pages/companies/Index";
import CompaniesNew from "../pages/companies/New";
import CompaniesShow from "../pages/companies/Show";

import EmployeesNew from "../pages/employees/New";

export default () => (
  <Routes>
    <Route path="/companies" element={<CompaniesIndex />} />
    <Route path="/companies/new" element={<CompaniesNew />} />
    <Route path="/companies/:id" element={<CompaniesShow />} />

    <Route path="/employees/new/:company_id" element={<EmployeesNew />} />
    <Route path="/employees/pairs/:id" />
    <Route path="/employees/subordinates/:id" />
    <Route path="/employees/subordinates-second-level/:id" />
  </Routes>
)