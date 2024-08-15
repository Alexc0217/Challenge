class Mutations::DeleteEmployee < Mutations::BaseMutation

  argument :id, ID, required: true

  field :employee, Types::EmployeeType, null: true
  field :message, String, null: true
  field :errors, [String], null: true

  def resolve(id:)
    use_case = Employees::DeleteEmployeeUseCase.new(id)

    result = use_case.call

    result
  end

end