class Mutations::CreateEmployee < Mutations::BaseMutation

  argument :name, String, required: true
  argument :email, String, required: true
  argument :company_id, ID, required: true
  argument :role, String, required: false

  field :employee, Types::EmployeeType, null: true
  field :message, String, null: true
  field :errors, [String], null: true

  def resolve(params)
    employee = Employee.new(params)
    
    if employee.save
      {
        employee: employee,
        message: I18n.t("graph_ql.mutations.create_employee.success")
      }
    else
      {
        employee: nil,
        errors: [employee.errors.full_messages],
      }
    end
  end

end