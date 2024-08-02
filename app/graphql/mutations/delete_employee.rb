class Mutations::DeleteEmployee < Mutations::BaseMutation

  argument :id, ID, required: true

  field :employee, Types::EmployeeType, null: true
  field :message, String, null: false
  field :errors, [String], null: false

  def resolve(id:)
    employee = Employee.find id
    manager = employee.manager
    subordinates = employee.subordinates

    if employee.destroy
      subordinates.update_all(manager_id: manager.id) if subordinates.any? && manager

      {
        employee: employee,
        message: "Employee #{employee.name} removed successfuly.",
        errors: []
      }
    else
      {
        employee: employee,
        errors: employee.errors.full_messages,
        message: ""
      }
    end

  end

end