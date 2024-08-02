class Mutations::CreateEmployee < Mutations::BaseMutation

  argument :name, String, required: true
  argument :email, String, required: true
  argument :company_id, ID, required: true
  argument :role, String, required: false

  field :employee, Types::EmployeeType, null: true
  field :message, String, null: false
  field :errors, [String], null: false

  def resolve(params)
    employee = Employee.new(params)
    
    if employee.save
      {
        employee: employee,
        errors: [],
        message: "Colaborador criado com sucesso."
      }
    else
      {
        employee: nil,
        errors: [employee.errors.full_messages],
        message: "",
      }
    end
  end

end