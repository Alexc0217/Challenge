module Employees
  class DeleteEmployeeUseCase
    def initialize(id)
      @id = id
    end
    
    def call
      employee = Employee.find @id

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
end