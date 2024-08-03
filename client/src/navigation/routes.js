const COMPANY = {
  INDEX: "/companies",
  NEW: "/companies/new",
  SHOW: "/companies/:id"
}

const EMPLOYEE = {
  NEW: "/employees/new/:company_id",
  PAIRS: "/employees/pairs/:id",
  SUBORDINATES: "/employees/subordinates/:id",
  SECOND_LEVEL: "/employees/subordinates-second-level/:id"
}

export {
  COMPANY,
  EMPLOYEE
}