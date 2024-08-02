module Types
  class CompanyEmployeesType < Types::BaseObject
    field :company_name, String, null: false
    field :employees, [Types::EmployeeType], null: false
  end
end