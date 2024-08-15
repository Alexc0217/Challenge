module Employees
  class CreateEmployeeUseCase
    def initialize(params)
      @params = params
    end
    
    def call
      employee = Employee.new(@params)

      if employee.save
        {
          employee: employee,
          message: I18n.t("graph_ql.mutations.create_employee.success")
        }
      else
        {
          employee: nil,
          errors: employee.errors.full_messages,
        }
      end
    end
  end
end