module Types
  module Query
    module EmployeeQuery
      extend ActiveSupport::Concern

      included do 
        field :employee, Types::EmployeeType, description: "Get a employee by id", null: false do 
          argument :id, GraphQL::Types::ID, required: true
        end
    
        def employee(id:)
          Employee.find(id)
        end
      end
    end
  end
end
