class Mutations::CreateEmployee < Mutations::BaseMutation

  argument :name, String, required: true
  argument :email, String, required: true
  argument :company_id, Integer, required: true
  argument :role, String, required: false

  field :employee, Types::EmployeeType, null: true
  field :errors, [String], null: false

  def resolve(params)
    employee = Employee.new(params)
    
    if employee.save
      {
        employee: employee,
        errors: []
      }
    else
      {
        employee: nil,
        errors: [employee.errors.full_messages]
      }
    end
  end

end