module Types
  class CompanyType < Types::BaseObject
    field :id, ID, null: false
    field :name, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :employees, [Types::EmployeeType], null: true
    field :employeesNumber, Int, null: false

    def employeesNumber
      object.employees.count
    end
  end
end
