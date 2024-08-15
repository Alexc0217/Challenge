class Mutations::CreateEmployee < Mutations::BaseMutation

  argument :name, String, required: true
  argument :email, String, required: true
  argument :company_id, ID, required: true
  argument :role, String, required: false

  field :employee, Types::EmployeeType, null: true
  field :message, String, null: true
  field :errors, [String], null: true

  def resolve(params)
    use_case = Employees::CreateEmployeeUseCase.new(params)

    result = use_case.call

    result
  end

end