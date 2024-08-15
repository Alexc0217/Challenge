class Mutations::DeleteEmployee < Mutations::BaseMutation

  argument :id, ID, required: true

  field :employee, Types::EmployeeType, null: true
  field :message, String, null: true
  field :errors, [String], null: true

  def resolve(id:)
    employee = Employee.find id

    if employee.destroy
      {
        employee: employee,
        message: I18n.t("graph_ql.mutations.delete_employee.success", name: employee.name),
      }
    else
      {
        employee: employee,
        errors: employee.errors.full_messages,
      }
    end

  end

end