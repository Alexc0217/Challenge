class Mutations::DeleteEmployee < Mutations::BaseMutation

  argument :id, Integer, required: true

  field :employee, Types::EmployeeType, null: true
  field :message, String, null: false
  field :errors, [String], null: false

  def resolve(id:)
    employee = Employee.find id

    if employee.destroy 
      {
        employee: employee,
        message: "Employee #{employee.name} removed successfuly.",
        errors: []
      }
    else
      {
        employee: employee,
        errors: employee.errors.full_messages
      }
    end

  end

end