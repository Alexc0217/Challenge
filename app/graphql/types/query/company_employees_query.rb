module Types
  module Query
    module CompanyEmployeesQuery
      extend ActiveSupport::Concern

      included do 
        field :company_employees, Types::CompanyEmployeesType, description: "Get a company and the employees", null: false do
          argument :company_id, GraphQL::Types::ID, required: true
        end
    
        def company_employees(company_id:)
          company = Company.find company_id
          {
            company_name: company.name,
            employees: company.employees.recent
          }
        end
      end
    end
  end
end