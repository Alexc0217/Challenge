class Mutations::UpdateEmployeeManager < Mutations::BaseMutation

  argument :employee_id, ID, required: true
  argument :manager_id, ID, required: true

  field :employee, Types::EmployeeType, null: true 
  field :message, String, null: true
  field :errors, [String], null: true

  def resolve(employee_id:, manager_id:)
    use_case = Employees::UpdateEmployeeManagerUseCase.new(employee_id, manager_id)

    result = use_case.call

    result
  end

end