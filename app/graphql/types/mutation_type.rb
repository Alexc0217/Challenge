# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject

    field :create_company, mutation: Mutations::CreateCompany
    field :create_employee, mutation: Mutations::CreateEmployee
    field :delete_employee, mutation: Mutations::DeleteEmployee
    field :update_employee_manager, mutation: Mutations::UpdateEmployeeManager
    
  end
end
