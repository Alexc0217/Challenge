# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    
    field :companies, [Types::CompanyType], null: false

    def companies
      Company.all
    end

    field :company, Types::CompanyType, null: false do 
      argument :id, ID, required: true
    end

    def company(id:)
      Company.find id
    end

    field :employee, Types::EmployeeType, null: false do 
      argument :id, ID, required: true
    end

    def employee(id:)
      Employee.find(id)
    end

    field :company_employees, Types::CompanyEmployeesType, null: false do
      argument :company_id, ID, required: true
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
