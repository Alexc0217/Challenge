class Mutations::UpdateEmployeeManager < Mutations::BaseMutation

  argument :employee_id, ID, required: true
  argument :manager_id, ID, required: true

  field :employee, Types::EmployeeType, null: true 
  field :message, String, null: true
  field :errors, [String], null: false

  def resolve(employee_id:, manager_id:)

    if employee_id.nil? || manager_id.nil?
      return {
        errors: ["Empty value isn't accepted."]
      }
    end

    employee = Employee.find employee_id
    manager = Employee.find manager_id
    
    employee.manager_id = manager.id

    if employee.save
      {
        employee: employee,
        message: I18n.t("graph_ql.mutations.update_employee_manager.success", employee_name: employee.name, manager_name: manager.name),
        errors: []
      }
    else
      {
        employee: nil,
        errors: employee.errors.full_messages
      }
    end
  end

end